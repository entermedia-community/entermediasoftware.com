import com.openedit.util.*;
import java.util.*;

public void pull()
{
	Exec exec = moduleManager.getBean("exec");
	List command = new ArrayList();
	command.add("pull");
	ExecResult done = exec.runExec("git",command, true);
	log.info("completed ${done.isRunOk()}");
	context.putPageValue("results","We got ${done.isRunOk()} ${done.getStandardOut()} ${done.getStandardError()}");
}

pull();

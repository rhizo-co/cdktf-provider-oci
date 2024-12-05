# `apmSyntheticsMonitor` Submodule <a name="`apmSyntheticsMonitor` Submodule" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApmSyntheticsMonitor <a name="ApmSyntheticsMonitor" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor oci_apm_synthetics_monitor}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitor(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  apm_domain_id: str,
  display_name: str,
  monitor_type: str,
  repeat_interval_in_seconds: typing.Union[int, float],
  vantage_points: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorVantagePoints]],
  availability_configuration: ApmSyntheticsMonitorAvailabilityConfiguration = None,
  batch_interval_in_seconds: typing.Union[int, float] = None,
  configuration: ApmSyntheticsMonitorConfiguration = None,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_ipv6: typing.Union[bool, IResolvable] = None,
  is_run_now: typing.Union[bool, IResolvable] = None,
  is_run_once: typing.Union[bool, IResolvable] = None,
  maintenance_window_schedule: ApmSyntheticsMonitorMaintenanceWindowSchedule = None,
  scheduling_policy: str = None,
  script_id: str = None,
  script_name: str = None,
  script_parameters: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorScriptParameters]] = None,
  status: str = None,
  target: str = None,
  timeout_in_seconds: typing.Union[int, float] = None,
  timeouts: ApmSyntheticsMonitorTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.apmDomainId">apm_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#apm_domain_id ApmSyntheticsMonitor#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#display_name ApmSyntheticsMonitor#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.monitorType">monitor_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#monitor_type ApmSyntheticsMonitor#monitor_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.repeatIntervalInSeconds">repeat_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#repeat_interval_in_seconds ApmSyntheticsMonitor#repeat_interval_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.vantagePoints">vantage_points</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints">ApmSyntheticsMonitorVantagePoints</a>]]</code> | vantage_points block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.availabilityConfiguration">availability_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration">ApmSyntheticsMonitorAvailabilityConfiguration</a></code> | availability_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.batchIntervalInSeconds">batch_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#batch_interval_in_seconds ApmSyntheticsMonitor#batch_interval_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration">ApmSyntheticsMonitorConfiguration</a></code> | configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#defined_tags ApmSyntheticsMonitor#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#freeform_tags ApmSyntheticsMonitor#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#id ApmSyntheticsMonitor#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.isIpv6">is_ipv6</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_ipv6 ApmSyntheticsMonitor#is_ipv6}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.isRunNow">is_run_now</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_run_now ApmSyntheticsMonitor#is_run_now}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.isRunOnce">is_run_once</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_run_once ApmSyntheticsMonitor#is_run_once}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.maintenanceWindowSchedule">maintenance_window_schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule">ApmSyntheticsMonitorMaintenanceWindowSchedule</a></code> | maintenance_window_schedule block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.schedulingPolicy">scheduling_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#scheduling_policy ApmSyntheticsMonitor#scheduling_policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.scriptId">script_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#script_id ApmSyntheticsMonitor#script_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.scriptName">script_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#script_name ApmSyntheticsMonitor#script_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.scriptParameters">script_parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters">ApmSyntheticsMonitorScriptParameters</a>]]</code> | script_parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#status ApmSyntheticsMonitor#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#target ApmSyntheticsMonitor#target}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#timeout_in_seconds ApmSyntheticsMonitor#timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts">ApmSyntheticsMonitorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.apmDomainId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#apm_domain_id ApmSyntheticsMonitor#apm_domain_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#display_name ApmSyntheticsMonitor#display_name}.

---

##### `monitor_type`<sup>Required</sup> <a name="monitor_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.monitorType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#monitor_type ApmSyntheticsMonitor#monitor_type}.

---

##### `repeat_interval_in_seconds`<sup>Required</sup> <a name="repeat_interval_in_seconds" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.repeatIntervalInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#repeat_interval_in_seconds ApmSyntheticsMonitor#repeat_interval_in_seconds}.

---

##### `vantage_points`<sup>Required</sup> <a name="vantage_points" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.vantagePoints"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints">ApmSyntheticsMonitorVantagePoints</a>]]

vantage_points block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#vantage_points ApmSyntheticsMonitor#vantage_points}

---

##### `availability_configuration`<sup>Optional</sup> <a name="availability_configuration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.availabilityConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration">ApmSyntheticsMonitorAvailabilityConfiguration</a>

availability_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#availability_configuration ApmSyntheticsMonitor#availability_configuration}

---

##### `batch_interval_in_seconds`<sup>Optional</sup> <a name="batch_interval_in_seconds" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.batchIntervalInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#batch_interval_in_seconds ApmSyntheticsMonitor#batch_interval_in_seconds}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.configuration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration">ApmSyntheticsMonitorConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#configuration ApmSyntheticsMonitor#configuration}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#defined_tags ApmSyntheticsMonitor#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#freeform_tags ApmSyntheticsMonitor#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#id ApmSyntheticsMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_ipv6`<sup>Optional</sup> <a name="is_ipv6" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.isIpv6"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_ipv6 ApmSyntheticsMonitor#is_ipv6}.

---

##### `is_run_now`<sup>Optional</sup> <a name="is_run_now" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.isRunNow"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_run_now ApmSyntheticsMonitor#is_run_now}.

---

##### `is_run_once`<sup>Optional</sup> <a name="is_run_once" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.isRunOnce"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_run_once ApmSyntheticsMonitor#is_run_once}.

---

##### `maintenance_window_schedule`<sup>Optional</sup> <a name="maintenance_window_schedule" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.maintenanceWindowSchedule"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule">ApmSyntheticsMonitorMaintenanceWindowSchedule</a>

maintenance_window_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#maintenance_window_schedule ApmSyntheticsMonitor#maintenance_window_schedule}

---

##### `scheduling_policy`<sup>Optional</sup> <a name="scheduling_policy" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.schedulingPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#scheduling_policy ApmSyntheticsMonitor#scheduling_policy}.

---

##### `script_id`<sup>Optional</sup> <a name="script_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.scriptId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#script_id ApmSyntheticsMonitor#script_id}.

---

##### `script_name`<sup>Optional</sup> <a name="script_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.scriptName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#script_name ApmSyntheticsMonitor#script_name}.

---

##### `script_parameters`<sup>Optional</sup> <a name="script_parameters" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.scriptParameters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters">ApmSyntheticsMonitorScriptParameters</a>]]

script_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#script_parameters ApmSyntheticsMonitor#script_parameters}

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#status ApmSyntheticsMonitor#status}.

---

##### `target`<sup>Optional</sup> <a name="target" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.target"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#target ApmSyntheticsMonitor#target}.

---

##### `timeout_in_seconds`<sup>Optional</sup> <a name="timeout_in_seconds" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.timeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#timeout_in_seconds ApmSyntheticsMonitor#timeout_in_seconds}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts">ApmSyntheticsMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#timeouts ApmSyntheticsMonitor#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putAvailabilityConfiguration">put_availability_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putMaintenanceWindowSchedule">put_maintenance_window_schedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putScriptParameters">put_script_parameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putVantagePoints">put_vantage_points</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetAvailabilityConfiguration">reset_availability_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetBatchIntervalInSeconds">reset_batch_interval_in_seconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetIsIpv6">reset_is_ipv6</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetIsRunNow">reset_is_run_now</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetIsRunOnce">reset_is_run_once</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetMaintenanceWindowSchedule">reset_maintenance_window_schedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetSchedulingPolicy">reset_scheduling_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetScriptId">reset_script_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetScriptName">reset_script_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetScriptParameters">reset_script_parameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetTarget">reset_target</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetTimeoutInSeconds">reset_timeout_in_seconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_availability_configuration` <a name="put_availability_configuration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putAvailabilityConfiguration"></a>

```python
def put_availability_configuration(
  max_allowed_failures_per_interval: typing.Union[int, float] = None,
  min_allowed_runs_per_interval: typing.Union[int, float] = None
) -> None
```

###### `max_allowed_failures_per_interval`<sup>Optional</sup> <a name="max_allowed_failures_per_interval" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putAvailabilityConfiguration.parameter.maxAllowedFailuresPerInterval"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#max_allowed_failures_per_interval ApmSyntheticsMonitor#max_allowed_failures_per_interval}.

---

###### `min_allowed_runs_per_interval`<sup>Optional</sup> <a name="min_allowed_runs_per_interval" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putAvailabilityConfiguration.parameter.minAllowedRunsPerInterval"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#min_allowed_runs_per_interval ApmSyntheticsMonitor#min_allowed_runs_per_interval}.

---

##### `put_configuration` <a name="put_configuration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration"></a>

```python
def put_configuration(
  client_certificate_details: ApmSyntheticsMonitorConfigurationClientCertificateDetails = None,
  config_type: str = None,
  connection_string: str = None,
  database_authentication_details: ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails = None,
  database_connection_type: str = None,
  database_role: str = None,
  database_type: str = None,
  database_wallet_details: ApmSyntheticsMonitorConfigurationDatabaseWalletDetails = None,
  dns_configuration: ApmSyntheticsMonitorConfigurationDnsConfiguration = None,
  download_size_limit_in_bytes: typing.Union[int, float] = None,
  ftp_basic_authentication_details: ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails = None,
  ftp_protocol: str = None,
  ftp_request_type: str = None,
  is_active_mode: typing.Union[bool, IResolvable] = None,
  is_certificate_validation_enabled: typing.Union[bool, IResolvable] = None,
  is_default_snapshot_enabled: typing.Union[bool, IResolvable] = None,
  is_failure_retried: typing.Union[bool, IResolvable] = None,
  is_query_recursive: typing.Union[bool, IResolvable] = None,
  is_redirection_enabled: typing.Union[bool, IResolvable] = None,
  name_server: str = None,
  network_configuration: ApmSyntheticsMonitorConfigurationNetworkConfiguration = None,
  protocol: str = None,
  query: str = None,
  record_type: str = None,
  req_authentication_details: ApmSyntheticsMonitorConfigurationReqAuthenticationDetails = None,
  req_authentication_scheme: str = None,
  request_headers: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorConfigurationRequestHeaders]] = None,
  request_method: str = None,
  request_post_body: str = None,
  request_query_params: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorConfigurationRequestQueryParams]] = None,
  upload_file_size_in_bytes: typing.Union[int, float] = None,
  verify_response_codes: typing.List[str] = None,
  verify_response_content: str = None,
  verify_texts: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorConfigurationVerifyTexts]] = None
) -> None
```

###### `client_certificate_details`<sup>Optional</sup> <a name="client_certificate_details" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.clientCertificateDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails">ApmSyntheticsMonitorConfigurationClientCertificateDetails</a>

client_certificate_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#client_certificate_details ApmSyntheticsMonitor#client_certificate_details}

---

###### `config_type`<sup>Optional</sup> <a name="config_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.configType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#config_type ApmSyntheticsMonitor#config_type}.

---

###### `connection_string`<sup>Optional</sup> <a name="connection_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.connectionString"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#connection_string ApmSyntheticsMonitor#connection_string}.

---

###### `database_authentication_details`<sup>Optional</sup> <a name="database_authentication_details" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.databaseAuthenticationDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails</a>

database_authentication_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_authentication_details ApmSyntheticsMonitor#database_authentication_details}

---

###### `database_connection_type`<sup>Optional</sup> <a name="database_connection_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.databaseConnectionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_connection_type ApmSyntheticsMonitor#database_connection_type}.

---

###### `database_role`<sup>Optional</sup> <a name="database_role" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.databaseRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_role ApmSyntheticsMonitor#database_role}.

---

###### `database_type`<sup>Optional</sup> <a name="database_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.databaseType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_type ApmSyntheticsMonitor#database_type}.

---

###### `database_wallet_details`<sup>Optional</sup> <a name="database_wallet_details" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.databaseWalletDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails">ApmSyntheticsMonitorConfigurationDatabaseWalletDetails</a>

database_wallet_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_wallet_details ApmSyntheticsMonitor#database_wallet_details}

---

###### `dns_configuration`<sup>Optional</sup> <a name="dns_configuration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.dnsConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration">ApmSyntheticsMonitorConfigurationDnsConfiguration</a>

dns_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#dns_configuration ApmSyntheticsMonitor#dns_configuration}

---

###### `download_size_limit_in_bytes`<sup>Optional</sup> <a name="download_size_limit_in_bytes" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.downloadSizeLimitInBytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#download_size_limit_in_bytes ApmSyntheticsMonitor#download_size_limit_in_bytes}.

---

###### `ftp_basic_authentication_details`<sup>Optional</sup> <a name="ftp_basic_authentication_details" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.ftpBasicAuthenticationDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails</a>

ftp_basic_authentication_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#ftp_basic_authentication_details ApmSyntheticsMonitor#ftp_basic_authentication_details}

---

###### `ftp_protocol`<sup>Optional</sup> <a name="ftp_protocol" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.ftpProtocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#ftp_protocol ApmSyntheticsMonitor#ftp_protocol}.

---

###### `ftp_request_type`<sup>Optional</sup> <a name="ftp_request_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.ftpRequestType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#ftp_request_type ApmSyntheticsMonitor#ftp_request_type}.

---

###### `is_active_mode`<sup>Optional</sup> <a name="is_active_mode" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.isActiveMode"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_active_mode ApmSyntheticsMonitor#is_active_mode}.

---

###### `is_certificate_validation_enabled`<sup>Optional</sup> <a name="is_certificate_validation_enabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.isCertificateValidationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_certificate_validation_enabled ApmSyntheticsMonitor#is_certificate_validation_enabled}.

---

###### `is_default_snapshot_enabled`<sup>Optional</sup> <a name="is_default_snapshot_enabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.isDefaultSnapshotEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_default_snapshot_enabled ApmSyntheticsMonitor#is_default_snapshot_enabled}.

---

###### `is_failure_retried`<sup>Optional</sup> <a name="is_failure_retried" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.isFailureRetried"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_failure_retried ApmSyntheticsMonitor#is_failure_retried}.

---

###### `is_query_recursive`<sup>Optional</sup> <a name="is_query_recursive" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.isQueryRecursive"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_query_recursive ApmSyntheticsMonitor#is_query_recursive}.

---

###### `is_redirection_enabled`<sup>Optional</sup> <a name="is_redirection_enabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.isRedirectionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_redirection_enabled ApmSyntheticsMonitor#is_redirection_enabled}.

---

###### `name_server`<sup>Optional</sup> <a name="name_server" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.nameServer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#name_server ApmSyntheticsMonitor#name_server}.

---

###### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.networkConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration">ApmSyntheticsMonitorConfigurationNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#network_configuration ApmSyntheticsMonitor#network_configuration}

---

###### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#protocol ApmSyntheticsMonitor#protocol}.

---

###### `query`<sup>Optional</sup> <a name="query" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.query"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#query ApmSyntheticsMonitor#query}.

---

###### `record_type`<sup>Optional</sup> <a name="record_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.recordType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#record_type ApmSyntheticsMonitor#record_type}.

---

###### `req_authentication_details`<sup>Optional</sup> <a name="req_authentication_details" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.reqAuthenticationDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails">ApmSyntheticsMonitorConfigurationReqAuthenticationDetails</a>

req_authentication_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#req_authentication_details ApmSyntheticsMonitor#req_authentication_details}

---

###### `req_authentication_scheme`<sup>Optional</sup> <a name="req_authentication_scheme" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.reqAuthenticationScheme"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#req_authentication_scheme ApmSyntheticsMonitor#req_authentication_scheme}.

---

###### `request_headers`<sup>Optional</sup> <a name="request_headers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.requestHeaders"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders">ApmSyntheticsMonitorConfigurationRequestHeaders</a>]]

request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#request_headers ApmSyntheticsMonitor#request_headers}

---

###### `request_method`<sup>Optional</sup> <a name="request_method" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.requestMethod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#request_method ApmSyntheticsMonitor#request_method}.

---

###### `request_post_body`<sup>Optional</sup> <a name="request_post_body" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.requestPostBody"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#request_post_body ApmSyntheticsMonitor#request_post_body}.

---

###### `request_query_params`<sup>Optional</sup> <a name="request_query_params" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.requestQueryParams"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams">ApmSyntheticsMonitorConfigurationRequestQueryParams</a>]]

request_query_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#request_query_params ApmSyntheticsMonitor#request_query_params}

---

###### `upload_file_size_in_bytes`<sup>Optional</sup> <a name="upload_file_size_in_bytes" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.uploadFileSizeInBytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#upload_file_size_in_bytes ApmSyntheticsMonitor#upload_file_size_in_bytes}.

---

###### `verify_response_codes`<sup>Optional</sup> <a name="verify_response_codes" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.verifyResponseCodes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#verify_response_codes ApmSyntheticsMonitor#verify_response_codes}.

---

###### `verify_response_content`<sup>Optional</sup> <a name="verify_response_content" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.verifyResponseContent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#verify_response_content ApmSyntheticsMonitor#verify_response_content}.

---

###### `verify_texts`<sup>Optional</sup> <a name="verify_texts" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.verifyTexts"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts">ApmSyntheticsMonitorConfigurationVerifyTexts</a>]]

verify_texts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#verify_texts ApmSyntheticsMonitor#verify_texts}

---

##### `put_maintenance_window_schedule` <a name="put_maintenance_window_schedule" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putMaintenanceWindowSchedule"></a>

```python
def put_maintenance_window_schedule(
  time_ended: str = None,
  time_started: str = None
) -> None
```

###### `time_ended`<sup>Optional</sup> <a name="time_ended" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putMaintenanceWindowSchedule.parameter.timeEnded"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#time_ended ApmSyntheticsMonitor#time_ended}.

---

###### `time_started`<sup>Optional</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putMaintenanceWindowSchedule.parameter.timeStarted"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#time_started ApmSyntheticsMonitor#time_started}.

---

##### `put_script_parameters` <a name="put_script_parameters" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putScriptParameters"></a>

```python
def put_script_parameters(
  value: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorScriptParameters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putScriptParameters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters">ApmSyntheticsMonitorScriptParameters</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#create ApmSyntheticsMonitor#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#delete ApmSyntheticsMonitor#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#update ApmSyntheticsMonitor#update}.

---

##### `put_vantage_points` <a name="put_vantage_points" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putVantagePoints"></a>

```python
def put_vantage_points(
  value: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorVantagePoints]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putVantagePoints.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints">ApmSyntheticsMonitorVantagePoints</a>]]

---

##### `reset_availability_configuration` <a name="reset_availability_configuration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetAvailabilityConfiguration"></a>

```python
def reset_availability_configuration() -> None
```

##### `reset_batch_interval_in_seconds` <a name="reset_batch_interval_in_seconds" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetBatchIntervalInSeconds"></a>

```python
def reset_batch_interval_in_seconds() -> None
```

##### `reset_configuration` <a name="reset_configuration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_ipv6` <a name="reset_is_ipv6" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetIsIpv6"></a>

```python
def reset_is_ipv6() -> None
```

##### `reset_is_run_now` <a name="reset_is_run_now" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetIsRunNow"></a>

```python
def reset_is_run_now() -> None
```

##### `reset_is_run_once` <a name="reset_is_run_once" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetIsRunOnce"></a>

```python
def reset_is_run_once() -> None
```

##### `reset_maintenance_window_schedule` <a name="reset_maintenance_window_schedule" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetMaintenanceWindowSchedule"></a>

```python
def reset_maintenance_window_schedule() -> None
```

##### `reset_scheduling_policy` <a name="reset_scheduling_policy" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetSchedulingPolicy"></a>

```python
def reset_scheduling_policy() -> None
```

##### `reset_script_id` <a name="reset_script_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetScriptId"></a>

```python
def reset_script_id() -> None
```

##### `reset_script_name` <a name="reset_script_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetScriptName"></a>

```python
def reset_script_name() -> None
```

##### `reset_script_parameters` <a name="reset_script_parameters" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetScriptParameters"></a>

```python
def reset_script_parameters() -> None
```

##### `reset_status` <a name="reset_status" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_target` <a name="reset_target" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetTarget"></a>

```python
def reset_target() -> None
```

##### `reset_timeout_in_seconds` <a name="reset_timeout_in_seconds" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetTimeoutInSeconds"></a>

```python
def reset_timeout_in_seconds() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApmSyntheticsMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitor.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitor.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitor.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitor.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApmSyntheticsMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApmSyntheticsMonitor to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApmSyntheticsMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApmSyntheticsMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.availabilityConfiguration">availability_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference">ApmSyntheticsMonitorAvailabilityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.configuration">configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference">ApmSyntheticsMonitorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.lastUpdatedBy">last_updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.maintenanceWindowSchedule">maintenance_window_schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference">ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptParameters">script_parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList">ApmSyntheticsMonitorScriptParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference">ApmSyntheticsMonitorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.vantagePointCount">vantage_point_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.vantagePoints">vantage_points</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList">ApmSyntheticsMonitorVantagePointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.apmDomainIdInput">apm_domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.availabilityConfigurationInput">availability_configuration_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration">ApmSyntheticsMonitorAvailabilityConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.batchIntervalInSecondsInput">batch_interval_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.configurationInput">configuration_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration">ApmSyntheticsMonitorConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isIpv6Input">is_ipv6_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isRunNowInput">is_run_now_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isRunOnceInput">is_run_once_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.maintenanceWindowScheduleInput">maintenance_window_schedule_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule">ApmSyntheticsMonitorMaintenanceWindowSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.monitorTypeInput">monitor_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.repeatIntervalInSecondsInput">repeat_interval_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.schedulingPolicyInput">scheduling_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptIdInput">script_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptNameInput">script_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptParametersInput">script_parameters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters">ApmSyntheticsMonitorScriptParameters</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeoutInSecondsInput">timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts">ApmSyntheticsMonitorTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.vantagePointsInput">vantage_points_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints">ApmSyntheticsMonitorVantagePoints</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.batchIntervalInSeconds">batch_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isIpv6">is_ipv6</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isRunNow">is_run_now</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isRunOnce">is_run_once</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.monitorType">monitor_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.repeatIntervalInSeconds">repeat_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.schedulingPolicy">scheduling_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptId">script_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptName">script_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_configuration`<sup>Required</sup> <a name="availability_configuration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.availabilityConfiguration"></a>

```python
availability_configuration: ApmSyntheticsMonitorAvailabilityConfigurationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference">ApmSyntheticsMonitorAvailabilityConfigurationOutputReference</a>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.configuration"></a>

```python
configuration: ApmSyntheticsMonitorConfigurationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference">ApmSyntheticsMonitorConfigurationOutputReference</a>

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `last_updated_by`<sup>Required</sup> <a name="last_updated_by" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.lastUpdatedBy"></a>

```python
last_updated_by: str
```

- *Type:* str

---

##### `maintenance_window_schedule`<sup>Required</sup> <a name="maintenance_window_schedule" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.maintenanceWindowSchedule"></a>

```python
maintenance_window_schedule: ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference">ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference</a>

---

##### `script_parameters`<sup>Required</sup> <a name="script_parameters" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptParameters"></a>

```python
script_parameters: ApmSyntheticsMonitorScriptParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList">ApmSyntheticsMonitorScriptParametersList</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeouts"></a>

```python
timeouts: ApmSyntheticsMonitorTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference">ApmSyntheticsMonitorTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `vantage_point_count`<sup>Required</sup> <a name="vantage_point_count" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.vantagePointCount"></a>

```python
vantage_point_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vantage_points`<sup>Required</sup> <a name="vantage_points" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.vantagePoints"></a>

```python
vantage_points: ApmSyntheticsMonitorVantagePointsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList">ApmSyntheticsMonitorVantagePointsList</a>

---

##### `apm_domain_id_input`<sup>Optional</sup> <a name="apm_domain_id_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.apmDomainIdInput"></a>

```python
apm_domain_id_input: str
```

- *Type:* str

---

##### `availability_configuration_input`<sup>Optional</sup> <a name="availability_configuration_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.availabilityConfigurationInput"></a>

```python
availability_configuration_input: ApmSyntheticsMonitorAvailabilityConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration">ApmSyntheticsMonitorAvailabilityConfiguration</a>

---

##### `batch_interval_in_seconds_input`<sup>Optional</sup> <a name="batch_interval_in_seconds_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.batchIntervalInSecondsInput"></a>

```python
batch_interval_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.configurationInput"></a>

```python
configuration_input: ApmSyntheticsMonitorConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration">ApmSyntheticsMonitorConfiguration</a>

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_ipv6_input`<sup>Optional</sup> <a name="is_ipv6_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isIpv6Input"></a>

```python
is_ipv6_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_run_now_input`<sup>Optional</sup> <a name="is_run_now_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isRunNowInput"></a>

```python
is_run_now_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_run_once_input`<sup>Optional</sup> <a name="is_run_once_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isRunOnceInput"></a>

```python
is_run_once_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `maintenance_window_schedule_input`<sup>Optional</sup> <a name="maintenance_window_schedule_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.maintenanceWindowScheduleInput"></a>

```python
maintenance_window_schedule_input: ApmSyntheticsMonitorMaintenanceWindowSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule">ApmSyntheticsMonitorMaintenanceWindowSchedule</a>

---

##### `monitor_type_input`<sup>Optional</sup> <a name="monitor_type_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.monitorTypeInput"></a>

```python
monitor_type_input: str
```

- *Type:* str

---

##### `repeat_interval_in_seconds_input`<sup>Optional</sup> <a name="repeat_interval_in_seconds_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.repeatIntervalInSecondsInput"></a>

```python
repeat_interval_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scheduling_policy_input`<sup>Optional</sup> <a name="scheduling_policy_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.schedulingPolicyInput"></a>

```python
scheduling_policy_input: str
```

- *Type:* str

---

##### `script_id_input`<sup>Optional</sup> <a name="script_id_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptIdInput"></a>

```python
script_id_input: str
```

- *Type:* str

---

##### `script_name_input`<sup>Optional</sup> <a name="script_name_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptNameInput"></a>

```python
script_name_input: str
```

- *Type:* str

---

##### `script_parameters_input`<sup>Optional</sup> <a name="script_parameters_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptParametersInput"></a>

```python
script_parameters_input: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorScriptParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters">ApmSyntheticsMonitorScriptParameters</a>]]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `timeout_in_seconds_input`<sup>Optional</sup> <a name="timeout_in_seconds_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeoutInSecondsInput"></a>

```python
timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApmSyntheticsMonitorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts">ApmSyntheticsMonitorTimeouts</a>]

---

##### `vantage_points_input`<sup>Optional</sup> <a name="vantage_points_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.vantagePointsInput"></a>

```python
vantage_points_input: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorVantagePoints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints">ApmSyntheticsMonitorVantagePoints</a>]]

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

---

##### `batch_interval_in_seconds`<sup>Required</sup> <a name="batch_interval_in_seconds" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.batchIntervalInSeconds"></a>

```python
batch_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_ipv6`<sup>Required</sup> <a name="is_ipv6" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isIpv6"></a>

```python
is_ipv6: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_run_now`<sup>Required</sup> <a name="is_run_now" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isRunNow"></a>

```python
is_run_now: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_run_once`<sup>Required</sup> <a name="is_run_once" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isRunOnce"></a>

```python
is_run_once: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `monitor_type`<sup>Required</sup> <a name="monitor_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.monitorType"></a>

```python
monitor_type: str
```

- *Type:* str

---

##### `repeat_interval_in_seconds`<sup>Required</sup> <a name="repeat_interval_in_seconds" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.repeatIntervalInSeconds"></a>

```python
repeat_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scheduling_policy`<sup>Required</sup> <a name="scheduling_policy" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.schedulingPolicy"></a>

```python
scheduling_policy: str
```

- *Type:* str

---

##### `script_id`<sup>Required</sup> <a name="script_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptId"></a>

```python
script_id: str
```

- *Type:* str

---

##### `script_name`<sup>Required</sup> <a name="script_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptName"></a>

```python
script_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `timeout_in_seconds`<sup>Required</sup> <a name="timeout_in_seconds" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApmSyntheticsMonitorAvailabilityConfiguration <a name="ApmSyntheticsMonitorAvailabilityConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration(
  max_allowed_failures_per_interval: typing.Union[int, float] = None,
  min_allowed_runs_per_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration.property.maxAllowedFailuresPerInterval">max_allowed_failures_per_interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#max_allowed_failures_per_interval ApmSyntheticsMonitor#max_allowed_failures_per_interval}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration.property.minAllowedRunsPerInterval">min_allowed_runs_per_interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#min_allowed_runs_per_interval ApmSyntheticsMonitor#min_allowed_runs_per_interval}. |

---

##### `max_allowed_failures_per_interval`<sup>Optional</sup> <a name="max_allowed_failures_per_interval" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration.property.maxAllowedFailuresPerInterval"></a>

```python
max_allowed_failures_per_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#max_allowed_failures_per_interval ApmSyntheticsMonitor#max_allowed_failures_per_interval}.

---

##### `min_allowed_runs_per_interval`<sup>Optional</sup> <a name="min_allowed_runs_per_interval" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration.property.minAllowedRunsPerInterval"></a>

```python
min_allowed_runs_per_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#min_allowed_runs_per_interval ApmSyntheticsMonitor#min_allowed_runs_per_interval}.

---

### ApmSyntheticsMonitorConfig <a name="ApmSyntheticsMonitorConfig" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  apm_domain_id: str,
  display_name: str,
  monitor_type: str,
  repeat_interval_in_seconds: typing.Union[int, float],
  vantage_points: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorVantagePoints]],
  availability_configuration: ApmSyntheticsMonitorAvailabilityConfiguration = None,
  batch_interval_in_seconds: typing.Union[int, float] = None,
  configuration: ApmSyntheticsMonitorConfiguration = None,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_ipv6: typing.Union[bool, IResolvable] = None,
  is_run_now: typing.Union[bool, IResolvable] = None,
  is_run_once: typing.Union[bool, IResolvable] = None,
  maintenance_window_schedule: ApmSyntheticsMonitorMaintenanceWindowSchedule = None,
  scheduling_policy: str = None,
  script_id: str = None,
  script_name: str = None,
  script_parameters: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorScriptParameters]] = None,
  status: str = None,
  target: str = None,
  timeout_in_seconds: typing.Union[int, float] = None,
  timeouts: ApmSyntheticsMonitorTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#apm_domain_id ApmSyntheticsMonitor#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#display_name ApmSyntheticsMonitor#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.monitorType">monitor_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#monitor_type ApmSyntheticsMonitor#monitor_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.repeatIntervalInSeconds">repeat_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#repeat_interval_in_seconds ApmSyntheticsMonitor#repeat_interval_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.vantagePoints">vantage_points</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints">ApmSyntheticsMonitorVantagePoints</a>]]</code> | vantage_points block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.availabilityConfiguration">availability_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration">ApmSyntheticsMonitorAvailabilityConfiguration</a></code> | availability_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.batchIntervalInSeconds">batch_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#batch_interval_in_seconds ApmSyntheticsMonitor#batch_interval_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.configuration">configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration">ApmSyntheticsMonitorConfiguration</a></code> | configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#defined_tags ApmSyntheticsMonitor#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#freeform_tags ApmSyntheticsMonitor#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#id ApmSyntheticsMonitor#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.isIpv6">is_ipv6</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_ipv6 ApmSyntheticsMonitor#is_ipv6}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.isRunNow">is_run_now</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_run_now ApmSyntheticsMonitor#is_run_now}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.isRunOnce">is_run_once</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_run_once ApmSyntheticsMonitor#is_run_once}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.maintenanceWindowSchedule">maintenance_window_schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule">ApmSyntheticsMonitorMaintenanceWindowSchedule</a></code> | maintenance_window_schedule block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.schedulingPolicy">scheduling_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#scheduling_policy ApmSyntheticsMonitor#scheduling_policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.scriptId">script_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#script_id ApmSyntheticsMonitor#script_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.scriptName">script_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#script_name ApmSyntheticsMonitor#script_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.scriptParameters">script_parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters">ApmSyntheticsMonitorScriptParameters</a>]]</code> | script_parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#status ApmSyntheticsMonitor#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#target ApmSyntheticsMonitor#target}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#timeout_in_seconds ApmSyntheticsMonitor#timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts">ApmSyntheticsMonitorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#apm_domain_id ApmSyntheticsMonitor#apm_domain_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#display_name ApmSyntheticsMonitor#display_name}.

---

##### `monitor_type`<sup>Required</sup> <a name="monitor_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.monitorType"></a>

```python
monitor_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#monitor_type ApmSyntheticsMonitor#monitor_type}.

---

##### `repeat_interval_in_seconds`<sup>Required</sup> <a name="repeat_interval_in_seconds" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.repeatIntervalInSeconds"></a>

```python
repeat_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#repeat_interval_in_seconds ApmSyntheticsMonitor#repeat_interval_in_seconds}.

---

##### `vantage_points`<sup>Required</sup> <a name="vantage_points" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.vantagePoints"></a>

```python
vantage_points: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorVantagePoints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints">ApmSyntheticsMonitorVantagePoints</a>]]

vantage_points block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#vantage_points ApmSyntheticsMonitor#vantage_points}

---

##### `availability_configuration`<sup>Optional</sup> <a name="availability_configuration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.availabilityConfiguration"></a>

```python
availability_configuration: ApmSyntheticsMonitorAvailabilityConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration">ApmSyntheticsMonitorAvailabilityConfiguration</a>

availability_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#availability_configuration ApmSyntheticsMonitor#availability_configuration}

---

##### `batch_interval_in_seconds`<sup>Optional</sup> <a name="batch_interval_in_seconds" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.batchIntervalInSeconds"></a>

```python
batch_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#batch_interval_in_seconds ApmSyntheticsMonitor#batch_interval_in_seconds}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.configuration"></a>

```python
configuration: ApmSyntheticsMonitorConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration">ApmSyntheticsMonitorConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#configuration ApmSyntheticsMonitor#configuration}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#defined_tags ApmSyntheticsMonitor#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#freeform_tags ApmSyntheticsMonitor#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#id ApmSyntheticsMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_ipv6`<sup>Optional</sup> <a name="is_ipv6" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.isIpv6"></a>

```python
is_ipv6: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_ipv6 ApmSyntheticsMonitor#is_ipv6}.

---

##### `is_run_now`<sup>Optional</sup> <a name="is_run_now" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.isRunNow"></a>

```python
is_run_now: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_run_now ApmSyntheticsMonitor#is_run_now}.

---

##### `is_run_once`<sup>Optional</sup> <a name="is_run_once" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.isRunOnce"></a>

```python
is_run_once: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_run_once ApmSyntheticsMonitor#is_run_once}.

---

##### `maintenance_window_schedule`<sup>Optional</sup> <a name="maintenance_window_schedule" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.maintenanceWindowSchedule"></a>

```python
maintenance_window_schedule: ApmSyntheticsMonitorMaintenanceWindowSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule">ApmSyntheticsMonitorMaintenanceWindowSchedule</a>

maintenance_window_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#maintenance_window_schedule ApmSyntheticsMonitor#maintenance_window_schedule}

---

##### `scheduling_policy`<sup>Optional</sup> <a name="scheduling_policy" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.schedulingPolicy"></a>

```python
scheduling_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#scheduling_policy ApmSyntheticsMonitor#scheduling_policy}.

---

##### `script_id`<sup>Optional</sup> <a name="script_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.scriptId"></a>

```python
script_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#script_id ApmSyntheticsMonitor#script_id}.

---

##### `script_name`<sup>Optional</sup> <a name="script_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.scriptName"></a>

```python
script_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#script_name ApmSyntheticsMonitor#script_name}.

---

##### `script_parameters`<sup>Optional</sup> <a name="script_parameters" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.scriptParameters"></a>

```python
script_parameters: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorScriptParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters">ApmSyntheticsMonitorScriptParameters</a>]]

script_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#script_parameters ApmSyntheticsMonitor#script_parameters}

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#status ApmSyntheticsMonitor#status}.

---

##### `target`<sup>Optional</sup> <a name="target" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.target"></a>

```python
target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#target ApmSyntheticsMonitor#target}.

---

##### `timeout_in_seconds`<sup>Optional</sup> <a name="timeout_in_seconds" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#timeout_in_seconds ApmSyntheticsMonitor#timeout_in_seconds}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.timeouts"></a>

```python
timeouts: ApmSyntheticsMonitorTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts">ApmSyntheticsMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#timeouts ApmSyntheticsMonitor#timeouts}

---

### ApmSyntheticsMonitorConfiguration <a name="ApmSyntheticsMonitorConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration(
  client_certificate_details: ApmSyntheticsMonitorConfigurationClientCertificateDetails = None,
  config_type: str = None,
  connection_string: str = None,
  database_authentication_details: ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails = None,
  database_connection_type: str = None,
  database_role: str = None,
  database_type: str = None,
  database_wallet_details: ApmSyntheticsMonitorConfigurationDatabaseWalletDetails = None,
  dns_configuration: ApmSyntheticsMonitorConfigurationDnsConfiguration = None,
  download_size_limit_in_bytes: typing.Union[int, float] = None,
  ftp_basic_authentication_details: ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails = None,
  ftp_protocol: str = None,
  ftp_request_type: str = None,
  is_active_mode: typing.Union[bool, IResolvable] = None,
  is_certificate_validation_enabled: typing.Union[bool, IResolvable] = None,
  is_default_snapshot_enabled: typing.Union[bool, IResolvable] = None,
  is_failure_retried: typing.Union[bool, IResolvable] = None,
  is_query_recursive: typing.Union[bool, IResolvable] = None,
  is_redirection_enabled: typing.Union[bool, IResolvable] = None,
  name_server: str = None,
  network_configuration: ApmSyntheticsMonitorConfigurationNetworkConfiguration = None,
  protocol: str = None,
  query: str = None,
  record_type: str = None,
  req_authentication_details: ApmSyntheticsMonitorConfigurationReqAuthenticationDetails = None,
  req_authentication_scheme: str = None,
  request_headers: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorConfigurationRequestHeaders]] = None,
  request_method: str = None,
  request_post_body: str = None,
  request_query_params: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorConfigurationRequestQueryParams]] = None,
  upload_file_size_in_bytes: typing.Union[int, float] = None,
  verify_response_codes: typing.List[str] = None,
  verify_response_content: str = None,
  verify_texts: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorConfigurationVerifyTexts]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.clientCertificateDetails">client_certificate_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails">ApmSyntheticsMonitorConfigurationClientCertificateDetails</a></code> | client_certificate_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.configType">config_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#config_type ApmSyntheticsMonitor#config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.connectionString">connection_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#connection_string ApmSyntheticsMonitor#connection_string}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.databaseAuthenticationDetails">database_authentication_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails</a></code> | database_authentication_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.databaseConnectionType">database_connection_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_connection_type ApmSyntheticsMonitor#database_connection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.databaseRole">database_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_role ApmSyntheticsMonitor#database_role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.databaseType">database_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_type ApmSyntheticsMonitor#database_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.databaseWalletDetails">database_wallet_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails">ApmSyntheticsMonitorConfigurationDatabaseWalletDetails</a></code> | database_wallet_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.dnsConfiguration">dns_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration">ApmSyntheticsMonitorConfigurationDnsConfiguration</a></code> | dns_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.downloadSizeLimitInBytes">download_size_limit_in_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#download_size_limit_in_bytes ApmSyntheticsMonitor#download_size_limit_in_bytes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.ftpBasicAuthenticationDetails">ftp_basic_authentication_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails</a></code> | ftp_basic_authentication_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.ftpProtocol">ftp_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#ftp_protocol ApmSyntheticsMonitor#ftp_protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.ftpRequestType">ftp_request_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#ftp_request_type ApmSyntheticsMonitor#ftp_request_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isActiveMode">is_active_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_active_mode ApmSyntheticsMonitor#is_active_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isCertificateValidationEnabled">is_certificate_validation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_certificate_validation_enabled ApmSyntheticsMonitor#is_certificate_validation_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isDefaultSnapshotEnabled">is_default_snapshot_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_default_snapshot_enabled ApmSyntheticsMonitor#is_default_snapshot_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isFailureRetried">is_failure_retried</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_failure_retried ApmSyntheticsMonitor#is_failure_retried}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isQueryRecursive">is_query_recursive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_query_recursive ApmSyntheticsMonitor#is_query_recursive}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isRedirectionEnabled">is_redirection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_redirection_enabled ApmSyntheticsMonitor#is_redirection_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.nameServer">name_server</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#name_server ApmSyntheticsMonitor#name_server}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.networkConfiguration">network_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration">ApmSyntheticsMonitorConfigurationNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#protocol ApmSyntheticsMonitor#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.query">query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#query ApmSyntheticsMonitor#query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.recordType">record_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#record_type ApmSyntheticsMonitor#record_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.reqAuthenticationDetails">req_authentication_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails">ApmSyntheticsMonitorConfigurationReqAuthenticationDetails</a></code> | req_authentication_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.reqAuthenticationScheme">req_authentication_scheme</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#req_authentication_scheme ApmSyntheticsMonitor#req_authentication_scheme}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.requestHeaders">request_headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders">ApmSyntheticsMonitorConfigurationRequestHeaders</a>]]</code> | request_headers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.requestMethod">request_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#request_method ApmSyntheticsMonitor#request_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.requestPostBody">request_post_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#request_post_body ApmSyntheticsMonitor#request_post_body}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.requestQueryParams">request_query_params</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams">ApmSyntheticsMonitorConfigurationRequestQueryParams</a>]]</code> | request_query_params block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.uploadFileSizeInBytes">upload_file_size_in_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#upload_file_size_in_bytes ApmSyntheticsMonitor#upload_file_size_in_bytes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.verifyResponseCodes">verify_response_codes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#verify_response_codes ApmSyntheticsMonitor#verify_response_codes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.verifyResponseContent">verify_response_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#verify_response_content ApmSyntheticsMonitor#verify_response_content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.verifyTexts">verify_texts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts">ApmSyntheticsMonitorConfigurationVerifyTexts</a>]]</code> | verify_texts block. |

---

##### `client_certificate_details`<sup>Optional</sup> <a name="client_certificate_details" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.clientCertificateDetails"></a>

```python
client_certificate_details: ApmSyntheticsMonitorConfigurationClientCertificateDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails">ApmSyntheticsMonitorConfigurationClientCertificateDetails</a>

client_certificate_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#client_certificate_details ApmSyntheticsMonitor#client_certificate_details}

---

##### `config_type`<sup>Optional</sup> <a name="config_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.configType"></a>

```python
config_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#config_type ApmSyntheticsMonitor#config_type}.

---

##### `connection_string`<sup>Optional</sup> <a name="connection_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#connection_string ApmSyntheticsMonitor#connection_string}.

---

##### `database_authentication_details`<sup>Optional</sup> <a name="database_authentication_details" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.databaseAuthenticationDetails"></a>

```python
database_authentication_details: ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails</a>

database_authentication_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_authentication_details ApmSyntheticsMonitor#database_authentication_details}

---

##### `database_connection_type`<sup>Optional</sup> <a name="database_connection_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.databaseConnectionType"></a>

```python
database_connection_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_connection_type ApmSyntheticsMonitor#database_connection_type}.

---

##### `database_role`<sup>Optional</sup> <a name="database_role" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.databaseRole"></a>

```python
database_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_role ApmSyntheticsMonitor#database_role}.

---

##### `database_type`<sup>Optional</sup> <a name="database_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.databaseType"></a>

```python
database_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_type ApmSyntheticsMonitor#database_type}.

---

##### `database_wallet_details`<sup>Optional</sup> <a name="database_wallet_details" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.databaseWalletDetails"></a>

```python
database_wallet_details: ApmSyntheticsMonitorConfigurationDatabaseWalletDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails">ApmSyntheticsMonitorConfigurationDatabaseWalletDetails</a>

database_wallet_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_wallet_details ApmSyntheticsMonitor#database_wallet_details}

---

##### `dns_configuration`<sup>Optional</sup> <a name="dns_configuration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.dnsConfiguration"></a>

```python
dns_configuration: ApmSyntheticsMonitorConfigurationDnsConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration">ApmSyntheticsMonitorConfigurationDnsConfiguration</a>

dns_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#dns_configuration ApmSyntheticsMonitor#dns_configuration}

---

##### `download_size_limit_in_bytes`<sup>Optional</sup> <a name="download_size_limit_in_bytes" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.downloadSizeLimitInBytes"></a>

```python
download_size_limit_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#download_size_limit_in_bytes ApmSyntheticsMonitor#download_size_limit_in_bytes}.

---

##### `ftp_basic_authentication_details`<sup>Optional</sup> <a name="ftp_basic_authentication_details" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.ftpBasicAuthenticationDetails"></a>

```python
ftp_basic_authentication_details: ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails</a>

ftp_basic_authentication_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#ftp_basic_authentication_details ApmSyntheticsMonitor#ftp_basic_authentication_details}

---

##### `ftp_protocol`<sup>Optional</sup> <a name="ftp_protocol" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.ftpProtocol"></a>

```python
ftp_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#ftp_protocol ApmSyntheticsMonitor#ftp_protocol}.

---

##### `ftp_request_type`<sup>Optional</sup> <a name="ftp_request_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.ftpRequestType"></a>

```python
ftp_request_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#ftp_request_type ApmSyntheticsMonitor#ftp_request_type}.

---

##### `is_active_mode`<sup>Optional</sup> <a name="is_active_mode" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isActiveMode"></a>

```python
is_active_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_active_mode ApmSyntheticsMonitor#is_active_mode}.

---

##### `is_certificate_validation_enabled`<sup>Optional</sup> <a name="is_certificate_validation_enabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isCertificateValidationEnabled"></a>

```python
is_certificate_validation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_certificate_validation_enabled ApmSyntheticsMonitor#is_certificate_validation_enabled}.

---

##### `is_default_snapshot_enabled`<sup>Optional</sup> <a name="is_default_snapshot_enabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isDefaultSnapshotEnabled"></a>

```python
is_default_snapshot_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_default_snapshot_enabled ApmSyntheticsMonitor#is_default_snapshot_enabled}.

---

##### `is_failure_retried`<sup>Optional</sup> <a name="is_failure_retried" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isFailureRetried"></a>

```python
is_failure_retried: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_failure_retried ApmSyntheticsMonitor#is_failure_retried}.

---

##### `is_query_recursive`<sup>Optional</sup> <a name="is_query_recursive" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isQueryRecursive"></a>

```python
is_query_recursive: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_query_recursive ApmSyntheticsMonitor#is_query_recursive}.

---

##### `is_redirection_enabled`<sup>Optional</sup> <a name="is_redirection_enabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isRedirectionEnabled"></a>

```python
is_redirection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_redirection_enabled ApmSyntheticsMonitor#is_redirection_enabled}.

---

##### `name_server`<sup>Optional</sup> <a name="name_server" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.nameServer"></a>

```python
name_server: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#name_server ApmSyntheticsMonitor#name_server}.

---

##### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.networkConfiguration"></a>

```python
network_configuration: ApmSyntheticsMonitorConfigurationNetworkConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration">ApmSyntheticsMonitorConfigurationNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#network_configuration ApmSyntheticsMonitor#network_configuration}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#protocol ApmSyntheticsMonitor#protocol}.

---

##### `query`<sup>Optional</sup> <a name="query" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.query"></a>

```python
query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#query ApmSyntheticsMonitor#query}.

---

##### `record_type`<sup>Optional</sup> <a name="record_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.recordType"></a>

```python
record_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#record_type ApmSyntheticsMonitor#record_type}.

---

##### `req_authentication_details`<sup>Optional</sup> <a name="req_authentication_details" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.reqAuthenticationDetails"></a>

```python
req_authentication_details: ApmSyntheticsMonitorConfigurationReqAuthenticationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails">ApmSyntheticsMonitorConfigurationReqAuthenticationDetails</a>

req_authentication_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#req_authentication_details ApmSyntheticsMonitor#req_authentication_details}

---

##### `req_authentication_scheme`<sup>Optional</sup> <a name="req_authentication_scheme" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.reqAuthenticationScheme"></a>

```python
req_authentication_scheme: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#req_authentication_scheme ApmSyntheticsMonitor#req_authentication_scheme}.

---

##### `request_headers`<sup>Optional</sup> <a name="request_headers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.requestHeaders"></a>

```python
request_headers: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorConfigurationRequestHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders">ApmSyntheticsMonitorConfigurationRequestHeaders</a>]]

request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#request_headers ApmSyntheticsMonitor#request_headers}

---

##### `request_method`<sup>Optional</sup> <a name="request_method" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.requestMethod"></a>

```python
request_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#request_method ApmSyntheticsMonitor#request_method}.

---

##### `request_post_body`<sup>Optional</sup> <a name="request_post_body" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.requestPostBody"></a>

```python
request_post_body: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#request_post_body ApmSyntheticsMonitor#request_post_body}.

---

##### `request_query_params`<sup>Optional</sup> <a name="request_query_params" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.requestQueryParams"></a>

```python
request_query_params: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorConfigurationRequestQueryParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams">ApmSyntheticsMonitorConfigurationRequestQueryParams</a>]]

request_query_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#request_query_params ApmSyntheticsMonitor#request_query_params}

---

##### `upload_file_size_in_bytes`<sup>Optional</sup> <a name="upload_file_size_in_bytes" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.uploadFileSizeInBytes"></a>

```python
upload_file_size_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#upload_file_size_in_bytes ApmSyntheticsMonitor#upload_file_size_in_bytes}.

---

##### `verify_response_codes`<sup>Optional</sup> <a name="verify_response_codes" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.verifyResponseCodes"></a>

```python
verify_response_codes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#verify_response_codes ApmSyntheticsMonitor#verify_response_codes}.

---

##### `verify_response_content`<sup>Optional</sup> <a name="verify_response_content" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.verifyResponseContent"></a>

```python
verify_response_content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#verify_response_content ApmSyntheticsMonitor#verify_response_content}.

---

##### `verify_texts`<sup>Optional</sup> <a name="verify_texts" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.verifyTexts"></a>

```python
verify_texts: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorConfigurationVerifyTexts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts">ApmSyntheticsMonitorConfigurationVerifyTexts</a>]]

verify_texts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#verify_texts ApmSyntheticsMonitor#verify_texts}

---

### ApmSyntheticsMonitorConfigurationClientCertificateDetails <a name="ApmSyntheticsMonitorConfigurationClientCertificateDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails(
  client_certificate: ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate = None,
  private_key: ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails.property.clientCertificate">client_certificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate">ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate</a></code> | client_certificate block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails.property.privateKey">private_key</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey">ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey</a></code> | private_key block. |

---

##### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails.property.clientCertificate"></a>

```python
client_certificate: ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate">ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate</a>

client_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#client_certificate ApmSyntheticsMonitor#client_certificate}

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails.property.privateKey"></a>

```python
private_key: ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey">ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey</a>

private_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#private_key ApmSyntheticsMonitor#private_key}

---

### ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate <a name="ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate(
  content: str = None,
  file_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#content ApmSyntheticsMonitor#content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate.property.fileName">file_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#file_name ApmSyntheticsMonitor#file_name}. |

---

##### `content`<sup>Optional</sup> <a name="content" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#content ApmSyntheticsMonitor#content}.

---

##### `file_name`<sup>Optional</sup> <a name="file_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#file_name ApmSyntheticsMonitor#file_name}.

---

### ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey <a name="ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey(
  content: str = None,
  file_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#content ApmSyntheticsMonitor#content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey.property.fileName">file_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#file_name ApmSyntheticsMonitor#file_name}. |

---

##### `content`<sup>Optional</sup> <a name="content" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#content ApmSyntheticsMonitor#content}.

---

##### `file_name`<sup>Optional</sup> <a name="file_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#file_name ApmSyntheticsMonitor#file_name}.

---

### ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails <a name="ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails(
  password: ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails.property.password">password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword</a></code> | password block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#username ApmSyntheticsMonitor#username}. |

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails.property.password"></a>

```python
password: ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword</a>

password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password ApmSyntheticsMonitor#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#username ApmSyntheticsMonitor#username}.

---

### ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword <a name="ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword(
  password: str = None,
  password_type: str = None,
  vault_secret_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password ApmSyntheticsMonitor#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword.property.passwordType">password_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password_type ApmSyntheticsMonitor#password_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword.property.vaultSecretId">vault_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#vault_secret_id ApmSyntheticsMonitor#vault_secret_id}. |

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password ApmSyntheticsMonitor#password}.

---

##### `password_type`<sup>Optional</sup> <a name="password_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword.property.passwordType"></a>

```python
password_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password_type ApmSyntheticsMonitor#password_type}.

---

##### `vault_secret_id`<sup>Optional</sup> <a name="vault_secret_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword.property.vaultSecretId"></a>

```python
vault_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#vault_secret_id ApmSyntheticsMonitor#vault_secret_id}.

---

### ApmSyntheticsMonitorConfigurationDatabaseWalletDetails <a name="ApmSyntheticsMonitorConfigurationDatabaseWalletDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails(
  database_wallet: str = None,
  service_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails.property.databaseWallet">database_wallet</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_wallet ApmSyntheticsMonitor#database_wallet}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails.property.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#service_name ApmSyntheticsMonitor#service_name}. |

---

##### `database_wallet`<sup>Optional</sup> <a name="database_wallet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails.property.databaseWallet"></a>

```python
database_wallet: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_wallet ApmSyntheticsMonitor#database_wallet}.

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#service_name ApmSyntheticsMonitor#service_name}.

---

### ApmSyntheticsMonitorConfigurationDnsConfiguration <a name="ApmSyntheticsMonitorConfigurationDnsConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration(
  is_override_dns: typing.Union[bool, IResolvable] = None,
  override_dns_ip: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration.property.isOverrideDns">is_override_dns</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_override_dns ApmSyntheticsMonitor#is_override_dns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration.property.overrideDnsIp">override_dns_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#override_dns_ip ApmSyntheticsMonitor#override_dns_ip}. |

---

##### `is_override_dns`<sup>Optional</sup> <a name="is_override_dns" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration.property.isOverrideDns"></a>

```python
is_override_dns: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_override_dns ApmSyntheticsMonitor#is_override_dns}.

---

##### `override_dns_ip`<sup>Optional</sup> <a name="override_dns_ip" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration.property.overrideDnsIp"></a>

```python
override_dns_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#override_dns_ip ApmSyntheticsMonitor#override_dns_ip}.

---

### ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails <a name="ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails(
  password: ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails.property.password">password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword</a></code> | password block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#username ApmSyntheticsMonitor#username}. |

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails.property.password"></a>

```python
password: ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword</a>

password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password ApmSyntheticsMonitor#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#username ApmSyntheticsMonitor#username}.

---

### ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword <a name="ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword(
  password: str = None,
  password_type: str = None,
  vault_secret_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password ApmSyntheticsMonitor#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword.property.passwordType">password_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password_type ApmSyntheticsMonitor#password_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword.property.vaultSecretId">vault_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#vault_secret_id ApmSyntheticsMonitor#vault_secret_id}. |

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password ApmSyntheticsMonitor#password}.

---

##### `password_type`<sup>Optional</sup> <a name="password_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword.property.passwordType"></a>

```python
password_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password_type ApmSyntheticsMonitor#password_type}.

---

##### `vault_secret_id`<sup>Optional</sup> <a name="vault_secret_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword.property.vaultSecretId"></a>

```python
vault_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#vault_secret_id ApmSyntheticsMonitor#vault_secret_id}.

---

### ApmSyntheticsMonitorConfigurationNetworkConfiguration <a name="ApmSyntheticsMonitorConfigurationNetworkConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration(
  number_of_hops: typing.Union[int, float] = None,
  probe_mode: str = None,
  probe_per_hop: typing.Union[int, float] = None,
  protocol: str = None,
  transmission_rate: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration.property.numberOfHops">number_of_hops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#number_of_hops ApmSyntheticsMonitor#number_of_hops}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration.property.probeMode">probe_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#probe_mode ApmSyntheticsMonitor#probe_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration.property.probePerHop">probe_per_hop</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#probe_per_hop ApmSyntheticsMonitor#probe_per_hop}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#protocol ApmSyntheticsMonitor#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration.property.transmissionRate">transmission_rate</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#transmission_rate ApmSyntheticsMonitor#transmission_rate}. |

---

##### `number_of_hops`<sup>Optional</sup> <a name="number_of_hops" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration.property.numberOfHops"></a>

```python
number_of_hops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#number_of_hops ApmSyntheticsMonitor#number_of_hops}.

---

##### `probe_mode`<sup>Optional</sup> <a name="probe_mode" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration.property.probeMode"></a>

```python
probe_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#probe_mode ApmSyntheticsMonitor#probe_mode}.

---

##### `probe_per_hop`<sup>Optional</sup> <a name="probe_per_hop" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration.property.probePerHop"></a>

```python
probe_per_hop: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#probe_per_hop ApmSyntheticsMonitor#probe_per_hop}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#protocol ApmSyntheticsMonitor#protocol}.

---

##### `transmission_rate`<sup>Optional</sup> <a name="transmission_rate" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration.property.transmissionRate"></a>

```python
transmission_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#transmission_rate ApmSyntheticsMonitor#transmission_rate}.

---

### ApmSyntheticsMonitorConfigurationReqAuthenticationDetails <a name="ApmSyntheticsMonitorConfigurationReqAuthenticationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails(
  auth_headers: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders]] = None,
  auth_request_method: str = None,
  auth_request_post_body: str = None,
  auth_token: str = None,
  auth_url: str = None,
  auth_user_name: str = None,
  auth_user_password: str = None,
  oauth_scheme: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authHeaders">auth_headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders</a>]]</code> | auth_headers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authRequestMethod">auth_request_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_request_method ApmSyntheticsMonitor#auth_request_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authRequestPostBody">auth_request_post_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_request_post_body ApmSyntheticsMonitor#auth_request_post_body}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authToken">auth_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_token ApmSyntheticsMonitor#auth_token}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authUrl">auth_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_url ApmSyntheticsMonitor#auth_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authUserName">auth_user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_user_name ApmSyntheticsMonitor#auth_user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authUserPassword">auth_user_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_user_password ApmSyntheticsMonitor#auth_user_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.oauthScheme">oauth_scheme</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#oauth_scheme ApmSyntheticsMonitor#oauth_scheme}. |

---

##### `auth_headers`<sup>Optional</sup> <a name="auth_headers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authHeaders"></a>

```python
auth_headers: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders</a>]]

auth_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_headers ApmSyntheticsMonitor#auth_headers}

---

##### `auth_request_method`<sup>Optional</sup> <a name="auth_request_method" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authRequestMethod"></a>

```python
auth_request_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_request_method ApmSyntheticsMonitor#auth_request_method}.

---

##### `auth_request_post_body`<sup>Optional</sup> <a name="auth_request_post_body" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authRequestPostBody"></a>

```python
auth_request_post_body: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_request_post_body ApmSyntheticsMonitor#auth_request_post_body}.

---

##### `auth_token`<sup>Optional</sup> <a name="auth_token" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authToken"></a>

```python
auth_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_token ApmSyntheticsMonitor#auth_token}.

---

##### `auth_url`<sup>Optional</sup> <a name="auth_url" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authUrl"></a>

```python
auth_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_url ApmSyntheticsMonitor#auth_url}.

---

##### `auth_user_name`<sup>Optional</sup> <a name="auth_user_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authUserName"></a>

```python
auth_user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_user_name ApmSyntheticsMonitor#auth_user_name}.

---

##### `auth_user_password`<sup>Optional</sup> <a name="auth_user_password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authUserPassword"></a>

```python
auth_user_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_user_password ApmSyntheticsMonitor#auth_user_password}.

---

##### `oauth_scheme`<sup>Optional</sup> <a name="oauth_scheme" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.oauthScheme"></a>

```python
oauth_scheme: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#oauth_scheme ApmSyntheticsMonitor#oauth_scheme}.

---

### ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders <a name="ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders(
  header_name: str = None,
  header_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders.property.headerName">header_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#header_name ApmSyntheticsMonitor#header_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders.property.headerValue">header_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#header_value ApmSyntheticsMonitor#header_value}. |

---

##### `header_name`<sup>Optional</sup> <a name="header_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#header_name ApmSyntheticsMonitor#header_name}.

---

##### `header_value`<sup>Optional</sup> <a name="header_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders.property.headerValue"></a>

```python
header_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#header_value ApmSyntheticsMonitor#header_value}.

---

### ApmSyntheticsMonitorConfigurationRequestHeaders <a name="ApmSyntheticsMonitorConfigurationRequestHeaders" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders(
  header_name: str = None,
  header_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders.property.headerName">header_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#header_name ApmSyntheticsMonitor#header_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders.property.headerValue">header_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#header_value ApmSyntheticsMonitor#header_value}. |

---

##### `header_name`<sup>Optional</sup> <a name="header_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#header_name ApmSyntheticsMonitor#header_name}.

---

##### `header_value`<sup>Optional</sup> <a name="header_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders.property.headerValue"></a>

```python
header_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#header_value ApmSyntheticsMonitor#header_value}.

---

### ApmSyntheticsMonitorConfigurationRequestQueryParams <a name="ApmSyntheticsMonitorConfigurationRequestQueryParams" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams(
  param_name: str = None,
  param_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams.property.paramName">param_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#param_name ApmSyntheticsMonitor#param_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams.property.paramValue">param_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#param_value ApmSyntheticsMonitor#param_value}. |

---

##### `param_name`<sup>Optional</sup> <a name="param_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams.property.paramName"></a>

```python
param_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#param_name ApmSyntheticsMonitor#param_name}.

---

##### `param_value`<sup>Optional</sup> <a name="param_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams.property.paramValue"></a>

```python
param_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#param_value ApmSyntheticsMonitor#param_value}.

---

### ApmSyntheticsMonitorConfigurationVerifyTexts <a name="ApmSyntheticsMonitorConfigurationVerifyTexts" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts(
  text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts.property.text">text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#text ApmSyntheticsMonitor#text}. |

---

##### `text`<sup>Optional</sup> <a name="text" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts.property.text"></a>

```python
text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#text ApmSyntheticsMonitor#text}.

---

### ApmSyntheticsMonitorMaintenanceWindowSchedule <a name="ApmSyntheticsMonitorMaintenanceWindowSchedule" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule(
  time_ended: str = None,
  time_started: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule.property.timeEnded">time_ended</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#time_ended ApmSyntheticsMonitor#time_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule.property.timeStarted">time_started</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#time_started ApmSyntheticsMonitor#time_started}. |

---

##### `time_ended`<sup>Optional</sup> <a name="time_ended" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule.property.timeEnded"></a>

```python
time_ended: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#time_ended ApmSyntheticsMonitor#time_ended}.

---

##### `time_started`<sup>Optional</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#time_started ApmSyntheticsMonitor#time_started}.

---

### ApmSyntheticsMonitorScriptParameters <a name="ApmSyntheticsMonitorScriptParameters" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters(
  param_name: str,
  param_value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters.property.paramName">param_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#param_name ApmSyntheticsMonitor#param_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters.property.paramValue">param_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#param_value ApmSyntheticsMonitor#param_value}. |

---

##### `param_name`<sup>Required</sup> <a name="param_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters.property.paramName"></a>

```python
param_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#param_name ApmSyntheticsMonitor#param_name}.

---

##### `param_value`<sup>Required</sup> <a name="param_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters.property.paramValue"></a>

```python
param_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#param_value ApmSyntheticsMonitor#param_value}.

---

### ApmSyntheticsMonitorScriptParametersMonitorScriptParameter <a name="ApmSyntheticsMonitorScriptParametersMonitorScriptParameter" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameter()
```


### ApmSyntheticsMonitorTimeouts <a name="ApmSyntheticsMonitorTimeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#create ApmSyntheticsMonitor#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#delete ApmSyntheticsMonitor#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#update ApmSyntheticsMonitor#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#create ApmSyntheticsMonitor#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#delete ApmSyntheticsMonitor#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#update ApmSyntheticsMonitor#update}.

---

### ApmSyntheticsMonitorVantagePoints <a name="ApmSyntheticsMonitorVantagePoints" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints(
  name: str,
  display_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#name ApmSyntheticsMonitor#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#display_name ApmSyntheticsMonitor#display_name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#name ApmSyntheticsMonitor#name}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#display_name ApmSyntheticsMonitor#display_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApmSyntheticsMonitorAvailabilityConfigurationOutputReference <a name="ApmSyntheticsMonitorAvailabilityConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.resetMaxAllowedFailuresPerInterval">reset_max_allowed_failures_per_interval</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.resetMinAllowedRunsPerInterval">reset_min_allowed_runs_per_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_allowed_failures_per_interval` <a name="reset_max_allowed_failures_per_interval" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.resetMaxAllowedFailuresPerInterval"></a>

```python
def reset_max_allowed_failures_per_interval() -> None
```

##### `reset_min_allowed_runs_per_interval` <a name="reset_min_allowed_runs_per_interval" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.resetMinAllowedRunsPerInterval"></a>

```python
def reset_min_allowed_runs_per_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.maxAllowedFailuresPerIntervalInput">max_allowed_failures_per_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.minAllowedRunsPerIntervalInput">min_allowed_runs_per_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.maxAllowedFailuresPerInterval">max_allowed_failures_per_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.minAllowedRunsPerInterval">min_allowed_runs_per_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration">ApmSyntheticsMonitorAvailabilityConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_allowed_failures_per_interval_input`<sup>Optional</sup> <a name="max_allowed_failures_per_interval_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.maxAllowedFailuresPerIntervalInput"></a>

```python
max_allowed_failures_per_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_allowed_runs_per_interval_input`<sup>Optional</sup> <a name="min_allowed_runs_per_interval_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.minAllowedRunsPerIntervalInput"></a>

```python
min_allowed_runs_per_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_allowed_failures_per_interval`<sup>Required</sup> <a name="max_allowed_failures_per_interval" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.maxAllowedFailuresPerInterval"></a>

```python
max_allowed_failures_per_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_allowed_runs_per_interval`<sup>Required</sup> <a name="min_allowed_runs_per_interval" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.minAllowedRunsPerInterval"></a>

```python
min_allowed_runs_per_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: ApmSyntheticsMonitorAvailabilityConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration">ApmSyntheticsMonitorAvailabilityConfiguration</a>

---


### ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference <a name="ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.resetFileName">reset_file_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content` <a name="reset_content" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_file_name` <a name="reset_file_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.resetFileName"></a>

```python
def reset_file_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fileNameInput">file_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fileName">file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate">ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `file_name_input`<sup>Optional</sup> <a name="file_name_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fileNameInput"></a>

```python
file_name_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `file_name`<sup>Required</sup> <a name="file_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.internalValue"></a>

```python
internal_value: ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate">ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate</a>

---


### ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference <a name="ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.putClientCertificate">put_client_certificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.putPrivateKey">put_private_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.resetClientCertificate">reset_client_certificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.resetPrivateKey">reset_private_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_client_certificate` <a name="put_client_certificate" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.putClientCertificate"></a>

```python
def put_client_certificate(
  content: str = None,
  file_name: str = None
) -> None
```

###### `content`<sup>Optional</sup> <a name="content" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.putClientCertificate.parameter.content"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#content ApmSyntheticsMonitor#content}.

---

###### `file_name`<sup>Optional</sup> <a name="file_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.putClientCertificate.parameter.fileName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#file_name ApmSyntheticsMonitor#file_name}.

---

##### `put_private_key` <a name="put_private_key" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.putPrivateKey"></a>

```python
def put_private_key(
  content: str = None,
  file_name: str = None
) -> None
```

###### `content`<sup>Optional</sup> <a name="content" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.putPrivateKey.parameter.content"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#content ApmSyntheticsMonitor#content}.

---

###### `file_name`<sup>Optional</sup> <a name="file_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.putPrivateKey.parameter.fileName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#file_name ApmSyntheticsMonitor#file_name}.

---

##### `reset_client_certificate` <a name="reset_client_certificate" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.resetClientCertificate"></a>

```python
def reset_client_certificate() -> None
```

##### `reset_private_key` <a name="reset_private_key" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.resetPrivateKey"></a>

```python
def reset_private_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.clientCertificate">client_certificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference">ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.privateKey">private_key</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference">ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.clientCertificateInput">client_certificate_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate">ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.privateKeyInput">private_key_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey">ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails">ApmSyntheticsMonitorConfigurationClientCertificateDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_certificate`<sup>Required</sup> <a name="client_certificate" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.clientCertificate"></a>

```python
client_certificate: ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference">ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference</a>

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.privateKey"></a>

```python
private_key: ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference">ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference</a>

---

##### `client_certificate_input`<sup>Optional</sup> <a name="client_certificate_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.clientCertificateInput"></a>

```python
client_certificate_input: ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate">ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate</a>

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.privateKeyInput"></a>

```python
private_key_input: ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey">ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.internalValue"></a>

```python
internal_value: ApmSyntheticsMonitorConfigurationClientCertificateDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails">ApmSyntheticsMonitorConfigurationClientCertificateDetails</a>

---


### ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference <a name="ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.resetFileName">reset_file_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content` <a name="reset_content" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_file_name` <a name="reset_file_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.resetFileName"></a>

```python
def reset_file_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fileNameInput">file_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fileName">file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey">ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `file_name_input`<sup>Optional</sup> <a name="file_name_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fileNameInput"></a>

```python
file_name_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `file_name`<sup>Required</sup> <a name="file_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.internalValue"></a>

```python
internal_value: ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey">ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey</a>

---


### ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference <a name="ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.putPassword">put_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_password` <a name="put_password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.putPassword"></a>

```python
def put_password(
  password: str = None,
  password_type: str = None,
  vault_secret_id: str = None
) -> None
```

###### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.putPassword.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password ApmSyntheticsMonitor#password}.

---

###### `password_type`<sup>Optional</sup> <a name="password_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.putPassword.parameter.passwordType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password_type ApmSyntheticsMonitor#password_type}.

---

###### `vault_secret_id`<sup>Optional</sup> <a name="vault_secret_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.putPassword.parameter.vaultSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#vault_secret_id ApmSyntheticsMonitor#vault_secret_id}.

---

##### `reset_password` <a name="reset_password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_username` <a name="reset_username" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.password">password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.passwordInput">password_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.password"></a>

```python
password: ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference</a>

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.passwordInput"></a>

```python
password_input: ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword</a>

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails</a>

---


### ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference <a name="ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resetPasswordType">reset_password_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resetVaultSecretId">reset_vault_secret_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password` <a name="reset_password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_password_type` <a name="reset_password_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resetPasswordType"></a>

```python
def reset_password_type() -> None
```

##### `reset_vault_secret_id` <a name="reset_vault_secret_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resetVaultSecretId"></a>

```python
def reset_vault_secret_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.passwordTypeInput">password_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.vaultSecretIdInput">vault_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.passwordType">password_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.vaultSecretId">vault_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `password_type_input`<sup>Optional</sup> <a name="password_type_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.passwordTypeInput"></a>

```python
password_type_input: str
```

- *Type:* str

---

##### `vault_secret_id_input`<sup>Optional</sup> <a name="vault_secret_id_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.vaultSecretIdInput"></a>

```python
vault_secret_id_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `password_type`<sup>Required</sup> <a name="password_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.passwordType"></a>

```python
password_type: str
```

- *Type:* str

---

##### `vault_secret_id`<sup>Required</sup> <a name="vault_secret_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.vaultSecretId"></a>

```python
vault_secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.internalValue"></a>

```python
internal_value: ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword</a>

---


### ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference <a name="ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.resetDatabaseWallet">reset_database_wallet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.resetServiceName">reset_service_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_database_wallet` <a name="reset_database_wallet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.resetDatabaseWallet"></a>

```python
def reset_database_wallet() -> None
```

##### `reset_service_name` <a name="reset_service_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.resetServiceName"></a>

```python
def reset_service_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.databaseWalletInput">database_wallet_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.databaseWallet">database_wallet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails">ApmSyntheticsMonitorConfigurationDatabaseWalletDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_wallet_input`<sup>Optional</sup> <a name="database_wallet_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.databaseWalletInput"></a>

```python
database_wallet_input: str
```

- *Type:* str

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `database_wallet`<sup>Required</sup> <a name="database_wallet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.databaseWallet"></a>

```python
database_wallet: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.internalValue"></a>

```python
internal_value: ApmSyntheticsMonitorConfigurationDatabaseWalletDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails">ApmSyntheticsMonitorConfigurationDatabaseWalletDetails</a>

---


### ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference <a name="ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.resetIsOverrideDns">reset_is_override_dns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.resetOverrideDnsIp">reset_override_dns_ip</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_override_dns` <a name="reset_is_override_dns" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.resetIsOverrideDns"></a>

```python
def reset_is_override_dns() -> None
```

##### `reset_override_dns_ip` <a name="reset_override_dns_ip" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.resetOverrideDnsIp"></a>

```python
def reset_override_dns_ip() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.isOverrideDnsInput">is_override_dns_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.overrideDnsIpInput">override_dns_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.isOverrideDns">is_override_dns</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.overrideDnsIp">override_dns_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration">ApmSyntheticsMonitorConfigurationDnsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_override_dns_input`<sup>Optional</sup> <a name="is_override_dns_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.isOverrideDnsInput"></a>

```python
is_override_dns_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `override_dns_ip_input`<sup>Optional</sup> <a name="override_dns_ip_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.overrideDnsIpInput"></a>

```python
override_dns_ip_input: str
```

- *Type:* str

---

##### `is_override_dns`<sup>Required</sup> <a name="is_override_dns" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.isOverrideDns"></a>

```python
is_override_dns: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `override_dns_ip`<sup>Required</sup> <a name="override_dns_ip" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.overrideDnsIp"></a>

```python
override_dns_ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: ApmSyntheticsMonitorConfigurationDnsConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration">ApmSyntheticsMonitorConfigurationDnsConfiguration</a>

---


### ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference <a name="ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.putPassword">put_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_password` <a name="put_password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.putPassword"></a>

```python
def put_password(
  password: str = None,
  password_type: str = None,
  vault_secret_id: str = None
) -> None
```

###### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.putPassword.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password ApmSyntheticsMonitor#password}.

---

###### `password_type`<sup>Optional</sup> <a name="password_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.putPassword.parameter.passwordType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password_type ApmSyntheticsMonitor#password_type}.

---

###### `vault_secret_id`<sup>Optional</sup> <a name="vault_secret_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.putPassword.parameter.vaultSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#vault_secret_id ApmSyntheticsMonitor#vault_secret_id}.

---

##### `reset_password` <a name="reset_password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_username` <a name="reset_username" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.password">password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.passwordInput">password_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.password"></a>

```python
password: ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference</a>

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.passwordInput"></a>

```python
password_input: ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword</a>

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails</a>

---


### ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference <a name="ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resetPasswordType">reset_password_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resetVaultSecretId">reset_vault_secret_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password` <a name="reset_password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_password_type` <a name="reset_password_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resetPasswordType"></a>

```python
def reset_password_type() -> None
```

##### `reset_vault_secret_id` <a name="reset_vault_secret_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resetVaultSecretId"></a>

```python
def reset_vault_secret_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.passwordTypeInput">password_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.vaultSecretIdInput">vault_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.passwordType">password_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.vaultSecretId">vault_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `password_type_input`<sup>Optional</sup> <a name="password_type_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.passwordTypeInput"></a>

```python
password_type_input: str
```

- *Type:* str

---

##### `vault_secret_id_input`<sup>Optional</sup> <a name="vault_secret_id_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.vaultSecretIdInput"></a>

```python
vault_secret_id_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `password_type`<sup>Required</sup> <a name="password_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.passwordType"></a>

```python
password_type: str
```

- *Type:* str

---

##### `vault_secret_id`<sup>Required</sup> <a name="vault_secret_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.vaultSecretId"></a>

```python
vault_secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.internalValue"></a>

```python
internal_value: ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword</a>

---


### ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference <a name="ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resetNumberOfHops">reset_number_of_hops</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resetProbeMode">reset_probe_mode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resetProbePerHop">reset_probe_per_hop</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resetTransmissionRate">reset_transmission_rate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_number_of_hops` <a name="reset_number_of_hops" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resetNumberOfHops"></a>

```python
def reset_number_of_hops() -> None
```

##### `reset_probe_mode` <a name="reset_probe_mode" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resetProbeMode"></a>

```python
def reset_probe_mode() -> None
```

##### `reset_probe_per_hop` <a name="reset_probe_per_hop" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resetProbePerHop"></a>

```python
def reset_probe_per_hop() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_transmission_rate` <a name="reset_transmission_rate" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resetTransmissionRate"></a>

```python
def reset_transmission_rate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.numberOfHopsInput">number_of_hops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.probeModeInput">probe_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.probePerHopInput">probe_per_hop_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.transmissionRateInput">transmission_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.numberOfHops">number_of_hops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.probeMode">probe_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.probePerHop">probe_per_hop</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.transmissionRate">transmission_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration">ApmSyntheticsMonitorConfigurationNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `number_of_hops_input`<sup>Optional</sup> <a name="number_of_hops_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.numberOfHopsInput"></a>

```python
number_of_hops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `probe_mode_input`<sup>Optional</sup> <a name="probe_mode_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.probeModeInput"></a>

```python
probe_mode_input: str
```

- *Type:* str

---

##### `probe_per_hop_input`<sup>Optional</sup> <a name="probe_per_hop_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.probePerHopInput"></a>

```python
probe_per_hop_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `transmission_rate_input`<sup>Optional</sup> <a name="transmission_rate_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.transmissionRateInput"></a>

```python
transmission_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_hops`<sup>Required</sup> <a name="number_of_hops" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.numberOfHops"></a>

```python
number_of_hops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `probe_mode`<sup>Required</sup> <a name="probe_mode" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.probeMode"></a>

```python
probe_mode: str
```

- *Type:* str

---

##### `probe_per_hop`<sup>Required</sup> <a name="probe_per_hop" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.probePerHop"></a>

```python
probe_per_hop: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `transmission_rate`<sup>Required</sup> <a name="transmission_rate" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.transmissionRate"></a>

```python
transmission_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: ApmSyntheticsMonitorConfigurationNetworkConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration">ApmSyntheticsMonitorConfigurationNetworkConfiguration</a>

---


### ApmSyntheticsMonitorConfigurationOutputReference <a name="ApmSyntheticsMonitorConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putClientCertificateDetails">put_client_certificate_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putDatabaseAuthenticationDetails">put_database_authentication_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putDatabaseWalletDetails">put_database_wallet_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putDnsConfiguration">put_dns_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putFtpBasicAuthenticationDetails">put_ftp_basic_authentication_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putNetworkConfiguration">put_network_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putReqAuthenticationDetails">put_req_authentication_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putRequestHeaders">put_request_headers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putRequestQueryParams">put_request_query_params</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putVerifyTexts">put_verify_texts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetClientCertificateDetails">reset_client_certificate_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetConfigType">reset_config_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetConnectionString">reset_connection_string</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDatabaseAuthenticationDetails">reset_database_authentication_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDatabaseConnectionType">reset_database_connection_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDatabaseRole">reset_database_role</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDatabaseType">reset_database_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDatabaseWalletDetails">reset_database_wallet_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDnsConfiguration">reset_dns_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDownloadSizeLimitInBytes">reset_download_size_limit_in_bytes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetFtpBasicAuthenticationDetails">reset_ftp_basic_authentication_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetFtpProtocol">reset_ftp_protocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetFtpRequestType">reset_ftp_request_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsActiveMode">reset_is_active_mode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsCertificateValidationEnabled">reset_is_certificate_validation_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsDefaultSnapshotEnabled">reset_is_default_snapshot_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsFailureRetried">reset_is_failure_retried</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsQueryRecursive">reset_is_query_recursive</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsRedirectionEnabled">reset_is_redirection_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetNameServer">reset_name_server</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetNetworkConfiguration">reset_network_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetQuery">reset_query</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetRecordType">reset_record_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetReqAuthenticationDetails">reset_req_authentication_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetReqAuthenticationScheme">reset_req_authentication_scheme</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetRequestHeaders">reset_request_headers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetRequestMethod">reset_request_method</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetRequestPostBody">reset_request_post_body</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetRequestQueryParams">reset_request_query_params</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetUploadFileSizeInBytes">reset_upload_file_size_in_bytes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetVerifyResponseCodes">reset_verify_response_codes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetVerifyResponseContent">reset_verify_response_content</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetVerifyTexts">reset_verify_texts</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_client_certificate_details` <a name="put_client_certificate_details" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putClientCertificateDetails"></a>

```python
def put_client_certificate_details(
  client_certificate: ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate = None,
  private_key: ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey = None
) -> None
```

###### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putClientCertificateDetails.parameter.clientCertificate"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate">ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate</a>

client_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#client_certificate ApmSyntheticsMonitor#client_certificate}

---

###### `private_key`<sup>Optional</sup> <a name="private_key" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putClientCertificateDetails.parameter.privateKey"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey">ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey</a>

private_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#private_key ApmSyntheticsMonitor#private_key}

---

##### `put_database_authentication_details` <a name="put_database_authentication_details" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putDatabaseAuthenticationDetails"></a>

```python
def put_database_authentication_details(
  password: ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword = None,
  username: str = None
) -> None
```

###### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putDatabaseAuthenticationDetails.parameter.password"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword</a>

password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password ApmSyntheticsMonitor#password}

---

###### `username`<sup>Optional</sup> <a name="username" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putDatabaseAuthenticationDetails.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#username ApmSyntheticsMonitor#username}.

---

##### `put_database_wallet_details` <a name="put_database_wallet_details" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putDatabaseWalletDetails"></a>

```python
def put_database_wallet_details(
  database_wallet: str = None,
  service_name: str = None
) -> None
```

###### `database_wallet`<sup>Optional</sup> <a name="database_wallet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putDatabaseWalletDetails.parameter.databaseWallet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_wallet ApmSyntheticsMonitor#database_wallet}.

---

###### `service_name`<sup>Optional</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putDatabaseWalletDetails.parameter.serviceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#service_name ApmSyntheticsMonitor#service_name}.

---

##### `put_dns_configuration` <a name="put_dns_configuration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putDnsConfiguration"></a>

```python
def put_dns_configuration(
  is_override_dns: typing.Union[bool, IResolvable] = None,
  override_dns_ip: str = None
) -> None
```

###### `is_override_dns`<sup>Optional</sup> <a name="is_override_dns" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putDnsConfiguration.parameter.isOverrideDns"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_override_dns ApmSyntheticsMonitor#is_override_dns}.

---

###### `override_dns_ip`<sup>Optional</sup> <a name="override_dns_ip" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putDnsConfiguration.parameter.overrideDnsIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#override_dns_ip ApmSyntheticsMonitor#override_dns_ip}.

---

##### `put_ftp_basic_authentication_details` <a name="put_ftp_basic_authentication_details" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putFtpBasicAuthenticationDetails"></a>

```python
def put_ftp_basic_authentication_details(
  password: ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword = None,
  username: str = None
) -> None
```

###### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putFtpBasicAuthenticationDetails.parameter.password"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword</a>

password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password ApmSyntheticsMonitor#password}

---

###### `username`<sup>Optional</sup> <a name="username" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putFtpBasicAuthenticationDetails.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#username ApmSyntheticsMonitor#username}.

---

##### `put_network_configuration` <a name="put_network_configuration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putNetworkConfiguration"></a>

```python
def put_network_configuration(
  number_of_hops: typing.Union[int, float] = None,
  probe_mode: str = None,
  probe_per_hop: typing.Union[int, float] = None,
  protocol: str = None,
  transmission_rate: typing.Union[int, float] = None
) -> None
```

###### `number_of_hops`<sup>Optional</sup> <a name="number_of_hops" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putNetworkConfiguration.parameter.numberOfHops"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#number_of_hops ApmSyntheticsMonitor#number_of_hops}.

---

###### `probe_mode`<sup>Optional</sup> <a name="probe_mode" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putNetworkConfiguration.parameter.probeMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#probe_mode ApmSyntheticsMonitor#probe_mode}.

---

###### `probe_per_hop`<sup>Optional</sup> <a name="probe_per_hop" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putNetworkConfiguration.parameter.probePerHop"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#probe_per_hop ApmSyntheticsMonitor#probe_per_hop}.

---

###### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putNetworkConfiguration.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#protocol ApmSyntheticsMonitor#protocol}.

---

###### `transmission_rate`<sup>Optional</sup> <a name="transmission_rate" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putNetworkConfiguration.parameter.transmissionRate"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#transmission_rate ApmSyntheticsMonitor#transmission_rate}.

---

##### `put_req_authentication_details` <a name="put_req_authentication_details" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putReqAuthenticationDetails"></a>

```python
def put_req_authentication_details(
  auth_headers: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders]] = None,
  auth_request_method: str = None,
  auth_request_post_body: str = None,
  auth_token: str = None,
  auth_url: str = None,
  auth_user_name: str = None,
  auth_user_password: str = None,
  oauth_scheme: str = None
) -> None
```

###### `auth_headers`<sup>Optional</sup> <a name="auth_headers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putReqAuthenticationDetails.parameter.authHeaders"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders</a>]]

auth_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_headers ApmSyntheticsMonitor#auth_headers}

---

###### `auth_request_method`<sup>Optional</sup> <a name="auth_request_method" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putReqAuthenticationDetails.parameter.authRequestMethod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_request_method ApmSyntheticsMonitor#auth_request_method}.

---

###### `auth_request_post_body`<sup>Optional</sup> <a name="auth_request_post_body" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putReqAuthenticationDetails.parameter.authRequestPostBody"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_request_post_body ApmSyntheticsMonitor#auth_request_post_body}.

---

###### `auth_token`<sup>Optional</sup> <a name="auth_token" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putReqAuthenticationDetails.parameter.authToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_token ApmSyntheticsMonitor#auth_token}.

---

###### `auth_url`<sup>Optional</sup> <a name="auth_url" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putReqAuthenticationDetails.parameter.authUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_url ApmSyntheticsMonitor#auth_url}.

---

###### `auth_user_name`<sup>Optional</sup> <a name="auth_user_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putReqAuthenticationDetails.parameter.authUserName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_user_name ApmSyntheticsMonitor#auth_user_name}.

---

###### `auth_user_password`<sup>Optional</sup> <a name="auth_user_password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putReqAuthenticationDetails.parameter.authUserPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_user_password ApmSyntheticsMonitor#auth_user_password}.

---

###### `oauth_scheme`<sup>Optional</sup> <a name="oauth_scheme" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putReqAuthenticationDetails.parameter.oauthScheme"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#oauth_scheme ApmSyntheticsMonitor#oauth_scheme}.

---

##### `put_request_headers` <a name="put_request_headers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putRequestHeaders"></a>

```python
def put_request_headers(
  value: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorConfigurationRequestHeaders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putRequestHeaders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders">ApmSyntheticsMonitorConfigurationRequestHeaders</a>]]

---

##### `put_request_query_params` <a name="put_request_query_params" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putRequestQueryParams"></a>

```python
def put_request_query_params(
  value: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorConfigurationRequestQueryParams]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putRequestQueryParams.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams">ApmSyntheticsMonitorConfigurationRequestQueryParams</a>]]

---

##### `put_verify_texts` <a name="put_verify_texts" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putVerifyTexts"></a>

```python
def put_verify_texts(
  value: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorConfigurationVerifyTexts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putVerifyTexts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts">ApmSyntheticsMonitorConfigurationVerifyTexts</a>]]

---

##### `reset_client_certificate_details` <a name="reset_client_certificate_details" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetClientCertificateDetails"></a>

```python
def reset_client_certificate_details() -> None
```

##### `reset_config_type` <a name="reset_config_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetConfigType"></a>

```python
def reset_config_type() -> None
```

##### `reset_connection_string` <a name="reset_connection_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetConnectionString"></a>

```python
def reset_connection_string() -> None
```

##### `reset_database_authentication_details` <a name="reset_database_authentication_details" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDatabaseAuthenticationDetails"></a>

```python
def reset_database_authentication_details() -> None
```

##### `reset_database_connection_type` <a name="reset_database_connection_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDatabaseConnectionType"></a>

```python
def reset_database_connection_type() -> None
```

##### `reset_database_role` <a name="reset_database_role" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDatabaseRole"></a>

```python
def reset_database_role() -> None
```

##### `reset_database_type` <a name="reset_database_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDatabaseType"></a>

```python
def reset_database_type() -> None
```

##### `reset_database_wallet_details` <a name="reset_database_wallet_details" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDatabaseWalletDetails"></a>

```python
def reset_database_wallet_details() -> None
```

##### `reset_dns_configuration` <a name="reset_dns_configuration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDnsConfiguration"></a>

```python
def reset_dns_configuration() -> None
```

##### `reset_download_size_limit_in_bytes` <a name="reset_download_size_limit_in_bytes" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDownloadSizeLimitInBytes"></a>

```python
def reset_download_size_limit_in_bytes() -> None
```

##### `reset_ftp_basic_authentication_details` <a name="reset_ftp_basic_authentication_details" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetFtpBasicAuthenticationDetails"></a>

```python
def reset_ftp_basic_authentication_details() -> None
```

##### `reset_ftp_protocol` <a name="reset_ftp_protocol" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetFtpProtocol"></a>

```python
def reset_ftp_protocol() -> None
```

##### `reset_ftp_request_type` <a name="reset_ftp_request_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetFtpRequestType"></a>

```python
def reset_ftp_request_type() -> None
```

##### `reset_is_active_mode` <a name="reset_is_active_mode" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsActiveMode"></a>

```python
def reset_is_active_mode() -> None
```

##### `reset_is_certificate_validation_enabled` <a name="reset_is_certificate_validation_enabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsCertificateValidationEnabled"></a>

```python
def reset_is_certificate_validation_enabled() -> None
```

##### `reset_is_default_snapshot_enabled` <a name="reset_is_default_snapshot_enabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsDefaultSnapshotEnabled"></a>

```python
def reset_is_default_snapshot_enabled() -> None
```

##### `reset_is_failure_retried` <a name="reset_is_failure_retried" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsFailureRetried"></a>

```python
def reset_is_failure_retried() -> None
```

##### `reset_is_query_recursive` <a name="reset_is_query_recursive" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsQueryRecursive"></a>

```python
def reset_is_query_recursive() -> None
```

##### `reset_is_redirection_enabled` <a name="reset_is_redirection_enabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsRedirectionEnabled"></a>

```python
def reset_is_redirection_enabled() -> None
```

##### `reset_name_server` <a name="reset_name_server" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetNameServer"></a>

```python
def reset_name_server() -> None
```

##### `reset_network_configuration` <a name="reset_network_configuration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetNetworkConfiguration"></a>

```python
def reset_network_configuration() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_query` <a name="reset_query" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetQuery"></a>

```python
def reset_query() -> None
```

##### `reset_record_type` <a name="reset_record_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetRecordType"></a>

```python
def reset_record_type() -> None
```

##### `reset_req_authentication_details` <a name="reset_req_authentication_details" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetReqAuthenticationDetails"></a>

```python
def reset_req_authentication_details() -> None
```

##### `reset_req_authentication_scheme` <a name="reset_req_authentication_scheme" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetReqAuthenticationScheme"></a>

```python
def reset_req_authentication_scheme() -> None
```

##### `reset_request_headers` <a name="reset_request_headers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetRequestHeaders"></a>

```python
def reset_request_headers() -> None
```

##### `reset_request_method` <a name="reset_request_method" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetRequestMethod"></a>

```python
def reset_request_method() -> None
```

##### `reset_request_post_body` <a name="reset_request_post_body" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetRequestPostBody"></a>

```python
def reset_request_post_body() -> None
```

##### `reset_request_query_params` <a name="reset_request_query_params" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetRequestQueryParams"></a>

```python
def reset_request_query_params() -> None
```

##### `reset_upload_file_size_in_bytes` <a name="reset_upload_file_size_in_bytes" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetUploadFileSizeInBytes"></a>

```python
def reset_upload_file_size_in_bytes() -> None
```

##### `reset_verify_response_codes` <a name="reset_verify_response_codes" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetVerifyResponseCodes"></a>

```python
def reset_verify_response_codes() -> None
```

##### `reset_verify_response_content` <a name="reset_verify_response_content" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetVerifyResponseContent"></a>

```python
def reset_verify_response_content() -> None
```

##### `reset_verify_texts` <a name="reset_verify_texts" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetVerifyTexts"></a>

```python
def reset_verify_texts() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.clientCertificateDetails">client_certificate_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference">ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseAuthenticationDetails">database_authentication_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseWalletDetails">database_wallet_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference">ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.dnsConfiguration">dns_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference">ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpBasicAuthenticationDetails">ftp_basic_authentication_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.networkConfiguration">network_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference">ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.reqAuthenticationDetails">req_authentication_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestHeaders">request_headers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList">ApmSyntheticsMonitorConfigurationRequestHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestQueryParams">request_query_params</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList">ApmSyntheticsMonitorConfigurationRequestQueryParamsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyTexts">verify_texts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList">ApmSyntheticsMonitorConfigurationVerifyTextsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.clientCertificateDetailsInput">client_certificate_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails">ApmSyntheticsMonitorConfigurationClientCertificateDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.configTypeInput">config_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.connectionStringInput">connection_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseAuthenticationDetailsInput">database_authentication_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseConnectionTypeInput">database_connection_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseRoleInput">database_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseTypeInput">database_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseWalletDetailsInput">database_wallet_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails">ApmSyntheticsMonitorConfigurationDatabaseWalletDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.dnsConfigurationInput">dns_configuration_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration">ApmSyntheticsMonitorConfigurationDnsConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.downloadSizeLimitInBytesInput">download_size_limit_in_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpBasicAuthenticationDetailsInput">ftp_basic_authentication_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpProtocolInput">ftp_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpRequestTypeInput">ftp_request_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isActiveModeInput">is_active_mode_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isCertificateValidationEnabledInput">is_certificate_validation_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isDefaultSnapshotEnabledInput">is_default_snapshot_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isFailureRetriedInput">is_failure_retried_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isQueryRecursiveInput">is_query_recursive_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isRedirectionEnabledInput">is_redirection_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.nameServerInput">name_server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.networkConfigurationInput">network_configuration_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration">ApmSyntheticsMonitorConfigurationNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.recordTypeInput">record_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.reqAuthenticationDetailsInput">req_authentication_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails">ApmSyntheticsMonitorConfigurationReqAuthenticationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.reqAuthenticationSchemeInput">req_authentication_scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestHeadersInput">request_headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders">ApmSyntheticsMonitorConfigurationRequestHeaders</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestMethodInput">request_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestPostBodyInput">request_post_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestQueryParamsInput">request_query_params_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams">ApmSyntheticsMonitorConfigurationRequestQueryParams</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.uploadFileSizeInBytesInput">upload_file_size_in_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyResponseCodesInput">verify_response_codes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyResponseContentInput">verify_response_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyTextsInput">verify_texts_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts">ApmSyntheticsMonitorConfigurationVerifyTexts</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.configType">config_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.connectionString">connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseConnectionType">database_connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseRole">database_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseType">database_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.downloadSizeLimitInBytes">download_size_limit_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpProtocol">ftp_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpRequestType">ftp_request_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isActiveMode">is_active_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isCertificateValidationEnabled">is_certificate_validation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isDefaultSnapshotEnabled">is_default_snapshot_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isFailureRetried">is_failure_retried</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isQueryRecursive">is_query_recursive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isRedirectionEnabled">is_redirection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.nameServer">name_server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.recordType">record_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.reqAuthenticationScheme">req_authentication_scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestMethod">request_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestPostBody">request_post_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.uploadFileSizeInBytes">upload_file_size_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyResponseCodes">verify_response_codes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyResponseContent">verify_response_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration">ApmSyntheticsMonitorConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_certificate_details`<sup>Required</sup> <a name="client_certificate_details" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.clientCertificateDetails"></a>

```python
client_certificate_details: ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference">ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference</a>

---

##### `database_authentication_details`<sup>Required</sup> <a name="database_authentication_details" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseAuthenticationDetails"></a>

```python
database_authentication_details: ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference</a>

---

##### `database_wallet_details`<sup>Required</sup> <a name="database_wallet_details" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseWalletDetails"></a>

```python
database_wallet_details: ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference">ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference</a>

---

##### `dns_configuration`<sup>Required</sup> <a name="dns_configuration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.dnsConfiguration"></a>

```python
dns_configuration: ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference">ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference</a>

---

##### `ftp_basic_authentication_details`<sup>Required</sup> <a name="ftp_basic_authentication_details" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpBasicAuthenticationDetails"></a>

```python
ftp_basic_authentication_details: ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference</a>

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.networkConfiguration"></a>

```python
network_configuration: ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference">ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference</a>

---

##### `req_authentication_details`<sup>Required</sup> <a name="req_authentication_details" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.reqAuthenticationDetails"></a>

```python
req_authentication_details: ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference</a>

---

##### `request_headers`<sup>Required</sup> <a name="request_headers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestHeaders"></a>

```python
request_headers: ApmSyntheticsMonitorConfigurationRequestHeadersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList">ApmSyntheticsMonitorConfigurationRequestHeadersList</a>

---

##### `request_query_params`<sup>Required</sup> <a name="request_query_params" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestQueryParams"></a>

```python
request_query_params: ApmSyntheticsMonitorConfigurationRequestQueryParamsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList">ApmSyntheticsMonitorConfigurationRequestQueryParamsList</a>

---

##### `verify_texts`<sup>Required</sup> <a name="verify_texts" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyTexts"></a>

```python
verify_texts: ApmSyntheticsMonitorConfigurationVerifyTextsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList">ApmSyntheticsMonitorConfigurationVerifyTextsList</a>

---

##### `client_certificate_details_input`<sup>Optional</sup> <a name="client_certificate_details_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.clientCertificateDetailsInput"></a>

```python
client_certificate_details_input: ApmSyntheticsMonitorConfigurationClientCertificateDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails">ApmSyntheticsMonitorConfigurationClientCertificateDetails</a>

---

##### `config_type_input`<sup>Optional</sup> <a name="config_type_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.configTypeInput"></a>

```python
config_type_input: str
```

- *Type:* str

---

##### `connection_string_input`<sup>Optional</sup> <a name="connection_string_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.connectionStringInput"></a>

```python
connection_string_input: str
```

- *Type:* str

---

##### `database_authentication_details_input`<sup>Optional</sup> <a name="database_authentication_details_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseAuthenticationDetailsInput"></a>

```python
database_authentication_details_input: ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails</a>

---

##### `database_connection_type_input`<sup>Optional</sup> <a name="database_connection_type_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseConnectionTypeInput"></a>

```python
database_connection_type_input: str
```

- *Type:* str

---

##### `database_role_input`<sup>Optional</sup> <a name="database_role_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseRoleInput"></a>

```python
database_role_input: str
```

- *Type:* str

---

##### `database_type_input`<sup>Optional</sup> <a name="database_type_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseTypeInput"></a>

```python
database_type_input: str
```

- *Type:* str

---

##### `database_wallet_details_input`<sup>Optional</sup> <a name="database_wallet_details_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseWalletDetailsInput"></a>

```python
database_wallet_details_input: ApmSyntheticsMonitorConfigurationDatabaseWalletDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails">ApmSyntheticsMonitorConfigurationDatabaseWalletDetails</a>

---

##### `dns_configuration_input`<sup>Optional</sup> <a name="dns_configuration_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.dnsConfigurationInput"></a>

```python
dns_configuration_input: ApmSyntheticsMonitorConfigurationDnsConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration">ApmSyntheticsMonitorConfigurationDnsConfiguration</a>

---

##### `download_size_limit_in_bytes_input`<sup>Optional</sup> <a name="download_size_limit_in_bytes_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.downloadSizeLimitInBytesInput"></a>

```python
download_size_limit_in_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ftp_basic_authentication_details_input`<sup>Optional</sup> <a name="ftp_basic_authentication_details_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpBasicAuthenticationDetailsInput"></a>

```python
ftp_basic_authentication_details_input: ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails</a>

---

##### `ftp_protocol_input`<sup>Optional</sup> <a name="ftp_protocol_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpProtocolInput"></a>

```python
ftp_protocol_input: str
```

- *Type:* str

---

##### `ftp_request_type_input`<sup>Optional</sup> <a name="ftp_request_type_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpRequestTypeInput"></a>

```python
ftp_request_type_input: str
```

- *Type:* str

---

##### `is_active_mode_input`<sup>Optional</sup> <a name="is_active_mode_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isActiveModeInput"></a>

```python
is_active_mode_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_certificate_validation_enabled_input`<sup>Optional</sup> <a name="is_certificate_validation_enabled_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isCertificateValidationEnabledInput"></a>

```python
is_certificate_validation_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_default_snapshot_enabled_input`<sup>Optional</sup> <a name="is_default_snapshot_enabled_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isDefaultSnapshotEnabledInput"></a>

```python
is_default_snapshot_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_failure_retried_input`<sup>Optional</sup> <a name="is_failure_retried_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isFailureRetriedInput"></a>

```python
is_failure_retried_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_query_recursive_input`<sup>Optional</sup> <a name="is_query_recursive_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isQueryRecursiveInput"></a>

```python
is_query_recursive_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_redirection_enabled_input`<sup>Optional</sup> <a name="is_redirection_enabled_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isRedirectionEnabledInput"></a>

```python
is_redirection_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_server_input`<sup>Optional</sup> <a name="name_server_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.nameServerInput"></a>

```python
name_server_input: str
```

- *Type:* str

---

##### `network_configuration_input`<sup>Optional</sup> <a name="network_configuration_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.networkConfigurationInput"></a>

```python
network_configuration_input: ApmSyntheticsMonitorConfigurationNetworkConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration">ApmSyntheticsMonitorConfigurationNetworkConfiguration</a>

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `record_type_input`<sup>Optional</sup> <a name="record_type_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.recordTypeInput"></a>

```python
record_type_input: str
```

- *Type:* str

---

##### `req_authentication_details_input`<sup>Optional</sup> <a name="req_authentication_details_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.reqAuthenticationDetailsInput"></a>

```python
req_authentication_details_input: ApmSyntheticsMonitorConfigurationReqAuthenticationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails">ApmSyntheticsMonitorConfigurationReqAuthenticationDetails</a>

---

##### `req_authentication_scheme_input`<sup>Optional</sup> <a name="req_authentication_scheme_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.reqAuthenticationSchemeInput"></a>

```python
req_authentication_scheme_input: str
```

- *Type:* str

---

##### `request_headers_input`<sup>Optional</sup> <a name="request_headers_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestHeadersInput"></a>

```python
request_headers_input: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorConfigurationRequestHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders">ApmSyntheticsMonitorConfigurationRequestHeaders</a>]]

---

##### `request_method_input`<sup>Optional</sup> <a name="request_method_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestMethodInput"></a>

```python
request_method_input: str
```

- *Type:* str

---

##### `request_post_body_input`<sup>Optional</sup> <a name="request_post_body_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestPostBodyInput"></a>

```python
request_post_body_input: str
```

- *Type:* str

---

##### `request_query_params_input`<sup>Optional</sup> <a name="request_query_params_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestQueryParamsInput"></a>

```python
request_query_params_input: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorConfigurationRequestQueryParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams">ApmSyntheticsMonitorConfigurationRequestQueryParams</a>]]

---

##### `upload_file_size_in_bytes_input`<sup>Optional</sup> <a name="upload_file_size_in_bytes_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.uploadFileSizeInBytesInput"></a>

```python
upload_file_size_in_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `verify_response_codes_input`<sup>Optional</sup> <a name="verify_response_codes_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyResponseCodesInput"></a>

```python
verify_response_codes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `verify_response_content_input`<sup>Optional</sup> <a name="verify_response_content_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyResponseContentInput"></a>

```python
verify_response_content_input: str
```

- *Type:* str

---

##### `verify_texts_input`<sup>Optional</sup> <a name="verify_texts_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyTextsInput"></a>

```python
verify_texts_input: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorConfigurationVerifyTexts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts">ApmSyntheticsMonitorConfigurationVerifyTexts</a>]]

---

##### `config_type`<sup>Required</sup> <a name="config_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.configType"></a>

```python
config_type: str
```

- *Type:* str

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

---

##### `database_connection_type`<sup>Required</sup> <a name="database_connection_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseConnectionType"></a>

```python
database_connection_type: str
```

- *Type:* str

---

##### `database_role`<sup>Required</sup> <a name="database_role" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseRole"></a>

```python
database_role: str
```

- *Type:* str

---

##### `database_type`<sup>Required</sup> <a name="database_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseType"></a>

```python
database_type: str
```

- *Type:* str

---

##### `download_size_limit_in_bytes`<sup>Required</sup> <a name="download_size_limit_in_bytes" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.downloadSizeLimitInBytes"></a>

```python
download_size_limit_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ftp_protocol`<sup>Required</sup> <a name="ftp_protocol" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpProtocol"></a>

```python
ftp_protocol: str
```

- *Type:* str

---

##### `ftp_request_type`<sup>Required</sup> <a name="ftp_request_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpRequestType"></a>

```python
ftp_request_type: str
```

- *Type:* str

---

##### `is_active_mode`<sup>Required</sup> <a name="is_active_mode" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isActiveMode"></a>

```python
is_active_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_certificate_validation_enabled`<sup>Required</sup> <a name="is_certificate_validation_enabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isCertificateValidationEnabled"></a>

```python
is_certificate_validation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_default_snapshot_enabled`<sup>Required</sup> <a name="is_default_snapshot_enabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isDefaultSnapshotEnabled"></a>

```python
is_default_snapshot_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_failure_retried`<sup>Required</sup> <a name="is_failure_retried" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isFailureRetried"></a>

```python
is_failure_retried: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_query_recursive`<sup>Required</sup> <a name="is_query_recursive" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isQueryRecursive"></a>

```python
is_query_recursive: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_redirection_enabled`<sup>Required</sup> <a name="is_redirection_enabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isRedirectionEnabled"></a>

```python
is_redirection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_server`<sup>Required</sup> <a name="name_server" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.nameServer"></a>

```python
name_server: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `record_type`<sup>Required</sup> <a name="record_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.recordType"></a>

```python
record_type: str
```

- *Type:* str

---

##### `req_authentication_scheme`<sup>Required</sup> <a name="req_authentication_scheme" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.reqAuthenticationScheme"></a>

```python
req_authentication_scheme: str
```

- *Type:* str

---

##### `request_method`<sup>Required</sup> <a name="request_method" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestMethod"></a>

```python
request_method: str
```

- *Type:* str

---

##### `request_post_body`<sup>Required</sup> <a name="request_post_body" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestPostBody"></a>

```python
request_post_body: str
```

- *Type:* str

---

##### `upload_file_size_in_bytes`<sup>Required</sup> <a name="upload_file_size_in_bytes" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.uploadFileSizeInBytes"></a>

```python
upload_file_size_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `verify_response_codes`<sup>Required</sup> <a name="verify_response_codes" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyResponseCodes"></a>

```python
verify_response_codes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `verify_response_content`<sup>Required</sup> <a name="verify_response_content" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyResponseContent"></a>

```python
verify_response_content: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: ApmSyntheticsMonitorConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration">ApmSyntheticsMonitorConfiguration</a>

---


### ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList <a name="ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders</a>]]

---


### ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference <a name="ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resetHeaderName">reset_header_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resetHeaderValue">reset_header_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_header_name` <a name="reset_header_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resetHeaderName"></a>

```python
def reset_header_name() -> None
```

##### `reset_header_value` <a name="reset_header_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resetHeaderValue"></a>

```python
def reset_header_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerNameInput">header_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerValueInput">header_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerName">header_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerValue">header_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_name_input`<sup>Optional</sup> <a name="header_name_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerNameInput"></a>

```python
header_name_input: str
```

- *Type:* str

---

##### `header_value_input`<sup>Optional</sup> <a name="header_value_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerValueInput"></a>

```python
header_value_input: str
```

- *Type:* str

---

##### `header_name`<sup>Required</sup> <a name="header_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

---

##### `header_value`<sup>Required</sup> <a name="header_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerValue"></a>

```python
header_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders</a>]

---


### ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference <a name="ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.putAuthHeaders">put_auth_headers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthHeaders">reset_auth_headers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthRequestMethod">reset_auth_request_method</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthRequestPostBody">reset_auth_request_post_body</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthToken">reset_auth_token</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthUrl">reset_auth_url</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthUserName">reset_auth_user_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthUserPassword">reset_auth_user_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetOauthScheme">reset_oauth_scheme</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_auth_headers` <a name="put_auth_headers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.putAuthHeaders"></a>

```python
def put_auth_headers(
  value: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.putAuthHeaders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders</a>]]

---

##### `reset_auth_headers` <a name="reset_auth_headers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthHeaders"></a>

```python
def reset_auth_headers() -> None
```

##### `reset_auth_request_method` <a name="reset_auth_request_method" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthRequestMethod"></a>

```python
def reset_auth_request_method() -> None
```

##### `reset_auth_request_post_body` <a name="reset_auth_request_post_body" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthRequestPostBody"></a>

```python
def reset_auth_request_post_body() -> None
```

##### `reset_auth_token` <a name="reset_auth_token" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthToken"></a>

```python
def reset_auth_token() -> None
```

##### `reset_auth_url` <a name="reset_auth_url" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthUrl"></a>

```python
def reset_auth_url() -> None
```

##### `reset_auth_user_name` <a name="reset_auth_user_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthUserName"></a>

```python
def reset_auth_user_name() -> None
```

##### `reset_auth_user_password` <a name="reset_auth_user_password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthUserPassword"></a>

```python
def reset_auth_user_password() -> None
```

##### `reset_oauth_scheme` <a name="reset_oauth_scheme" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetOauthScheme"></a>

```python
def reset_oauth_scheme() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authHeaders">auth_headers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authHeadersInput">auth_headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authRequestMethodInput">auth_request_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authRequestPostBodyInput">auth_request_post_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authTokenInput">auth_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUrlInput">auth_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUserNameInput">auth_user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUserPasswordInput">auth_user_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.oauthSchemeInput">oauth_scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authRequestMethod">auth_request_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authRequestPostBody">auth_request_post_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authToken">auth_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUrl">auth_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUserName">auth_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUserPassword">auth_user_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.oauthScheme">oauth_scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails">ApmSyntheticsMonitorConfigurationReqAuthenticationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_headers`<sup>Required</sup> <a name="auth_headers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authHeaders"></a>

```python
auth_headers: ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList</a>

---

##### `auth_headers_input`<sup>Optional</sup> <a name="auth_headers_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authHeadersInput"></a>

```python
auth_headers_input: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders</a>]]

---

##### `auth_request_method_input`<sup>Optional</sup> <a name="auth_request_method_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authRequestMethodInput"></a>

```python
auth_request_method_input: str
```

- *Type:* str

---

##### `auth_request_post_body_input`<sup>Optional</sup> <a name="auth_request_post_body_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authRequestPostBodyInput"></a>

```python
auth_request_post_body_input: str
```

- *Type:* str

---

##### `auth_token_input`<sup>Optional</sup> <a name="auth_token_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authTokenInput"></a>

```python
auth_token_input: str
```

- *Type:* str

---

##### `auth_url_input`<sup>Optional</sup> <a name="auth_url_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUrlInput"></a>

```python
auth_url_input: str
```

- *Type:* str

---

##### `auth_user_name_input`<sup>Optional</sup> <a name="auth_user_name_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUserNameInput"></a>

```python
auth_user_name_input: str
```

- *Type:* str

---

##### `auth_user_password_input`<sup>Optional</sup> <a name="auth_user_password_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUserPasswordInput"></a>

```python
auth_user_password_input: str
```

- *Type:* str

---

##### `oauth_scheme_input`<sup>Optional</sup> <a name="oauth_scheme_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.oauthSchemeInput"></a>

```python
oauth_scheme_input: str
```

- *Type:* str

---

##### `auth_request_method`<sup>Required</sup> <a name="auth_request_method" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authRequestMethod"></a>

```python
auth_request_method: str
```

- *Type:* str

---

##### `auth_request_post_body`<sup>Required</sup> <a name="auth_request_post_body" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authRequestPostBody"></a>

```python
auth_request_post_body: str
```

- *Type:* str

---

##### `auth_token`<sup>Required</sup> <a name="auth_token" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authToken"></a>

```python
auth_token: str
```

- *Type:* str

---

##### `auth_url`<sup>Required</sup> <a name="auth_url" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUrl"></a>

```python
auth_url: str
```

- *Type:* str

---

##### `auth_user_name`<sup>Required</sup> <a name="auth_user_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUserName"></a>

```python
auth_user_name: str
```

- *Type:* str

---

##### `auth_user_password`<sup>Required</sup> <a name="auth_user_password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUserPassword"></a>

```python
auth_user_password: str
```

- *Type:* str

---

##### `oauth_scheme`<sup>Required</sup> <a name="oauth_scheme" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.oauthScheme"></a>

```python
oauth_scheme: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: ApmSyntheticsMonitorConfigurationReqAuthenticationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails">ApmSyntheticsMonitorConfigurationReqAuthenticationDetails</a>

---


### ApmSyntheticsMonitorConfigurationRequestHeadersList <a name="ApmSyntheticsMonitorConfigurationRequestHeadersList" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders">ApmSyntheticsMonitorConfigurationRequestHeaders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorConfigurationRequestHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders">ApmSyntheticsMonitorConfigurationRequestHeaders</a>]]

---


### ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference <a name="ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.resetHeaderName">reset_header_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.resetHeaderValue">reset_header_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_header_name` <a name="reset_header_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.resetHeaderName"></a>

```python
def reset_header_name() -> None
```

##### `reset_header_value` <a name="reset_header_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.resetHeaderValue"></a>

```python
def reset_header_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.headerNameInput">header_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.headerValueInput">header_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.headerName">header_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.headerValue">header_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders">ApmSyntheticsMonitorConfigurationRequestHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_name_input`<sup>Optional</sup> <a name="header_name_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.headerNameInput"></a>

```python
header_name_input: str
```

- *Type:* str

---

##### `header_value_input`<sup>Optional</sup> <a name="header_value_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.headerValueInput"></a>

```python
header_value_input: str
```

- *Type:* str

---

##### `header_name`<sup>Required</sup> <a name="header_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

---

##### `header_value`<sup>Required</sup> <a name="header_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.headerValue"></a>

```python
header_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApmSyntheticsMonitorConfigurationRequestHeaders]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders">ApmSyntheticsMonitorConfigurationRequestHeaders</a>]

---


### ApmSyntheticsMonitorConfigurationRequestQueryParamsList <a name="ApmSyntheticsMonitorConfigurationRequestQueryParamsList" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams">ApmSyntheticsMonitorConfigurationRequestQueryParams</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorConfigurationRequestQueryParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams">ApmSyntheticsMonitorConfigurationRequestQueryParams</a>]]

---


### ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference <a name="ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.resetParamName">reset_param_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.resetParamValue">reset_param_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_param_name` <a name="reset_param_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.resetParamName"></a>

```python
def reset_param_name() -> None
```

##### `reset_param_value` <a name="reset_param_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.resetParamValue"></a>

```python
def reset_param_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.paramNameInput">param_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.paramValueInput">param_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.paramName">param_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.paramValue">param_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams">ApmSyntheticsMonitorConfigurationRequestQueryParams</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `param_name_input`<sup>Optional</sup> <a name="param_name_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.paramNameInput"></a>

```python
param_name_input: str
```

- *Type:* str

---

##### `param_value_input`<sup>Optional</sup> <a name="param_value_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.paramValueInput"></a>

```python
param_value_input: str
```

- *Type:* str

---

##### `param_name`<sup>Required</sup> <a name="param_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.paramName"></a>

```python
param_name: str
```

- *Type:* str

---

##### `param_value`<sup>Required</sup> <a name="param_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.paramValue"></a>

```python
param_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApmSyntheticsMonitorConfigurationRequestQueryParams]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams">ApmSyntheticsMonitorConfigurationRequestQueryParams</a>]

---


### ApmSyntheticsMonitorConfigurationVerifyTextsList <a name="ApmSyntheticsMonitorConfigurationVerifyTextsList" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts">ApmSyntheticsMonitorConfigurationVerifyTexts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorConfigurationVerifyTexts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts">ApmSyntheticsMonitorConfigurationVerifyTexts</a>]]

---


### ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference <a name="ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.resetText">reset_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_text` <a name="reset_text" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.resetText"></a>

```python
def reset_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts">ApmSyntheticsMonitorConfigurationVerifyTexts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApmSyntheticsMonitorConfigurationVerifyTexts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts">ApmSyntheticsMonitorConfigurationVerifyTexts</a>]

---


### ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference <a name="ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.resetTimeEnded">reset_time_ended</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.resetTimeStarted">reset_time_started</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_time_ended` <a name="reset_time_ended" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.resetTimeEnded"></a>

```python
def reset_time_ended() -> None
```

##### `reset_time_started` <a name="reset_time_started" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.resetTimeStarted"></a>

```python
def reset_time_started() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.timeEndedInput">time_ended_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.timeStartedInput">time_started_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.timeEnded">time_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule">ApmSyntheticsMonitorMaintenanceWindowSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_ended_input`<sup>Optional</sup> <a name="time_ended_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.timeEndedInput"></a>

```python
time_ended_input: str
```

- *Type:* str

---

##### `time_started_input`<sup>Optional</sup> <a name="time_started_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.timeStartedInput"></a>

```python
time_started_input: str
```

- *Type:* str

---

##### `time_ended`<sup>Required</sup> <a name="time_ended" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.timeEnded"></a>

```python
time_ended: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.internalValue"></a>

```python
internal_value: ApmSyntheticsMonitorMaintenanceWindowSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule">ApmSyntheticsMonitorMaintenanceWindowSchedule</a>

---


### ApmSyntheticsMonitorScriptParametersList <a name="ApmSyntheticsMonitorScriptParametersList" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApmSyntheticsMonitorScriptParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters">ApmSyntheticsMonitorScriptParameters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorScriptParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters">ApmSyntheticsMonitorScriptParameters</a>]]

---


### ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList <a name="ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference <a name="ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.paramName">param_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.paramValue">param_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameter">ApmSyntheticsMonitorScriptParametersMonitorScriptParameter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `param_name`<sup>Required</sup> <a name="param_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.paramName"></a>

```python
param_name: str
```

- *Type:* str

---

##### `param_value`<sup>Required</sup> <a name="param_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.paramValue"></a>

```python
param_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.internalValue"></a>

```python
internal_value: ApmSyntheticsMonitorScriptParametersMonitorScriptParameter
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameter">ApmSyntheticsMonitorScriptParametersMonitorScriptParameter</a>

---


### ApmSyntheticsMonitorScriptParametersOutputReference <a name="ApmSyntheticsMonitorScriptParametersOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.isOverwritten">is_overwritten</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.isSecret">is_secret</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.monitorScriptParameter">monitor_script_parameter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList">ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.paramNameInput">param_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.paramValueInput">param_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.paramName">param_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.paramValue">param_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters">ApmSyntheticsMonitorScriptParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_overwritten`<sup>Required</sup> <a name="is_overwritten" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.isOverwritten"></a>

```python
is_overwritten: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_secret`<sup>Required</sup> <a name="is_secret" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.isSecret"></a>

```python
is_secret: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `monitor_script_parameter`<sup>Required</sup> <a name="monitor_script_parameter" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.monitorScriptParameter"></a>

```python
monitor_script_parameter: ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList">ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList</a>

---

##### `param_name_input`<sup>Optional</sup> <a name="param_name_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.paramNameInput"></a>

```python
param_name_input: str
```

- *Type:* str

---

##### `param_value_input`<sup>Optional</sup> <a name="param_value_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.paramValueInput"></a>

```python
param_value_input: str
```

- *Type:* str

---

##### `param_name`<sup>Required</sup> <a name="param_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.paramName"></a>

```python
param_name: str
```

- *Type:* str

---

##### `param_value`<sup>Required</sup> <a name="param_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.paramValue"></a>

```python
param_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApmSyntheticsMonitorScriptParameters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters">ApmSyntheticsMonitorScriptParameters</a>]

---


### ApmSyntheticsMonitorTimeoutsOutputReference <a name="ApmSyntheticsMonitorTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts">ApmSyntheticsMonitorTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApmSyntheticsMonitorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts">ApmSyntheticsMonitorTimeouts</a>]

---


### ApmSyntheticsMonitorVantagePointsList <a name="ApmSyntheticsMonitorVantagePointsList" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApmSyntheticsMonitorVantagePointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints">ApmSyntheticsMonitorVantagePoints</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApmSyntheticsMonitorVantagePoints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints">ApmSyntheticsMonitorVantagePoints</a>]]

---


### ApmSyntheticsMonitorVantagePointsOutputReference <a name="ApmSyntheticsMonitorVantagePointsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_monitor

apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.workerList">worker_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints">ApmSyntheticsMonitorVantagePoints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `worker_list`<sup>Required</sup> <a name="worker_list" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.workerList"></a>

```python
worker_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApmSyntheticsMonitorVantagePoints]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints">ApmSyntheticsMonitorVantagePoints</a>]

---




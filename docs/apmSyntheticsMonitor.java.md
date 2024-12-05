# `apmSyntheticsMonitor` Submodule <a name="`apmSyntheticsMonitor` Submodule" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApmSyntheticsMonitor <a name="ApmSyntheticsMonitor" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor oci_apm_synthetics_monitor}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitor;

ApmSyntheticsMonitor.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .apmDomainId(java.lang.String)
    .displayName(java.lang.String)
    .monitorType(java.lang.String)
    .repeatIntervalInSeconds(java.lang.Number)
    .vantagePoints(IResolvable)
    .vantagePoints(java.util.List<ApmSyntheticsMonitorVantagePoints>)
//  .availabilityConfiguration(ApmSyntheticsMonitorAvailabilityConfiguration)
//  .batchIntervalInSeconds(java.lang.Number)
//  .configuration(ApmSyntheticsMonitorConfiguration)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isIpv6(java.lang.Boolean)
//  .isIpv6(IResolvable)
//  .isRunNow(java.lang.Boolean)
//  .isRunNow(IResolvable)
//  .isRunOnce(java.lang.Boolean)
//  .isRunOnce(IResolvable)
//  .maintenanceWindowSchedule(ApmSyntheticsMonitorMaintenanceWindowSchedule)
//  .schedulingPolicy(java.lang.String)
//  .scriptId(java.lang.String)
//  .scriptName(java.lang.String)
//  .scriptParameters(IResolvable)
//  .scriptParameters(java.util.List<ApmSyntheticsMonitorScriptParameters>)
//  .status(java.lang.String)
//  .target(java.lang.String)
//  .timeoutInSeconds(java.lang.Number)
//  .timeouts(ApmSyntheticsMonitorTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.apmDomainId">apmDomainId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#apm_domain_id ApmSyntheticsMonitor#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#display_name ApmSyntheticsMonitor#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.monitorType">monitorType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#monitor_type ApmSyntheticsMonitor#monitor_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.repeatIntervalInSeconds">repeatIntervalInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#repeat_interval_in_seconds ApmSyntheticsMonitor#repeat_interval_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.vantagePoints">vantagePoints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints">ApmSyntheticsMonitorVantagePoints</a>></code> | vantage_points block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.availabilityConfiguration">availabilityConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration">ApmSyntheticsMonitorAvailabilityConfiguration</a></code> | availability_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.batchIntervalInSeconds">batchIntervalInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#batch_interval_in_seconds ApmSyntheticsMonitor#batch_interval_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration">ApmSyntheticsMonitorConfiguration</a></code> | configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#defined_tags ApmSyntheticsMonitor#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#freeform_tags ApmSyntheticsMonitor#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#id ApmSyntheticsMonitor#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.isIpv6">isIpv6</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_ipv6 ApmSyntheticsMonitor#is_ipv6}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.isRunNow">isRunNow</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_run_now ApmSyntheticsMonitor#is_run_now}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.isRunOnce">isRunOnce</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_run_once ApmSyntheticsMonitor#is_run_once}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.maintenanceWindowSchedule">maintenanceWindowSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule">ApmSyntheticsMonitorMaintenanceWindowSchedule</a></code> | maintenance_window_schedule block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.schedulingPolicy">schedulingPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#scheduling_policy ApmSyntheticsMonitor#scheduling_policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.scriptId">scriptId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#script_id ApmSyntheticsMonitor#script_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.scriptName">scriptName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#script_name ApmSyntheticsMonitor#script_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.scriptParameters">scriptParameters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters">ApmSyntheticsMonitorScriptParameters</a>></code> | script_parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#status ApmSyntheticsMonitor#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#target ApmSyntheticsMonitor#target}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#timeout_in_seconds ApmSyntheticsMonitor#timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts">ApmSyntheticsMonitorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.apmDomainId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#apm_domain_id ApmSyntheticsMonitor#apm_domain_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#display_name ApmSyntheticsMonitor#display_name}.

---

##### `monitorType`<sup>Required</sup> <a name="monitorType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.monitorType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#monitor_type ApmSyntheticsMonitor#monitor_type}.

---

##### `repeatIntervalInSeconds`<sup>Required</sup> <a name="repeatIntervalInSeconds" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.repeatIntervalInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#repeat_interval_in_seconds ApmSyntheticsMonitor#repeat_interval_in_seconds}.

---

##### `vantagePoints`<sup>Required</sup> <a name="vantagePoints" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.vantagePoints"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints">ApmSyntheticsMonitorVantagePoints</a>>

vantage_points block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#vantage_points ApmSyntheticsMonitor#vantage_points}

---

##### `availabilityConfiguration`<sup>Optional</sup> <a name="availabilityConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.availabilityConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration">ApmSyntheticsMonitorAvailabilityConfiguration</a>

availability_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#availability_configuration ApmSyntheticsMonitor#availability_configuration}

---

##### `batchIntervalInSeconds`<sup>Optional</sup> <a name="batchIntervalInSeconds" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.batchIntervalInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#batch_interval_in_seconds ApmSyntheticsMonitor#batch_interval_in_seconds}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.configuration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration">ApmSyntheticsMonitorConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#configuration ApmSyntheticsMonitor#configuration}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#defined_tags ApmSyntheticsMonitor#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#freeform_tags ApmSyntheticsMonitor#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#id ApmSyntheticsMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isIpv6`<sup>Optional</sup> <a name="isIpv6" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.isIpv6"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_ipv6 ApmSyntheticsMonitor#is_ipv6}.

---

##### `isRunNow`<sup>Optional</sup> <a name="isRunNow" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.isRunNow"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_run_now ApmSyntheticsMonitor#is_run_now}.

---

##### `isRunOnce`<sup>Optional</sup> <a name="isRunOnce" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.isRunOnce"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_run_once ApmSyntheticsMonitor#is_run_once}.

---

##### `maintenanceWindowSchedule`<sup>Optional</sup> <a name="maintenanceWindowSchedule" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.maintenanceWindowSchedule"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule">ApmSyntheticsMonitorMaintenanceWindowSchedule</a>

maintenance_window_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#maintenance_window_schedule ApmSyntheticsMonitor#maintenance_window_schedule}

---

##### `schedulingPolicy`<sup>Optional</sup> <a name="schedulingPolicy" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.schedulingPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#scheduling_policy ApmSyntheticsMonitor#scheduling_policy}.

---

##### `scriptId`<sup>Optional</sup> <a name="scriptId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.scriptId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#script_id ApmSyntheticsMonitor#script_id}.

---

##### `scriptName`<sup>Optional</sup> <a name="scriptName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.scriptName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#script_name ApmSyntheticsMonitor#script_name}.

---

##### `scriptParameters`<sup>Optional</sup> <a name="scriptParameters" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.scriptParameters"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters">ApmSyntheticsMonitorScriptParameters</a>>

script_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#script_parameters ApmSyntheticsMonitor#script_parameters}

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#status ApmSyntheticsMonitor#status}.

---

##### `target`<sup>Optional</sup> <a name="target" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.target"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#target ApmSyntheticsMonitor#target}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.Initializer.parameter.timeoutInSeconds"></a>

- *Type:* java.lang.Number

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
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putAvailabilityConfiguration">putAvailabilityConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putMaintenanceWindowSchedule">putMaintenanceWindowSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putScriptParameters">putScriptParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putVantagePoints">putVantagePoints</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetAvailabilityConfiguration">resetAvailabilityConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetBatchIntervalInSeconds">resetBatchIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetIsIpv6">resetIsIpv6</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetIsRunNow">resetIsRunNow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetIsRunOnce">resetIsRunOnce</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetMaintenanceWindowSchedule">resetMaintenanceWindowSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetSchedulingPolicy">resetSchedulingPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetScriptId">resetScriptId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetScriptName">resetScriptName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetScriptParameters">resetScriptParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAvailabilityConfiguration` <a name="putAvailabilityConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putAvailabilityConfiguration"></a>

```java
public void putAvailabilityConfiguration(ApmSyntheticsMonitorAvailabilityConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putAvailabilityConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration">ApmSyntheticsMonitorAvailabilityConfiguration</a>

---

##### `putConfiguration` <a name="putConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration"></a>

```java
public void putConfiguration(ApmSyntheticsMonitorConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration">ApmSyntheticsMonitorConfiguration</a>

---

##### `putMaintenanceWindowSchedule` <a name="putMaintenanceWindowSchedule" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putMaintenanceWindowSchedule"></a>

```java
public void putMaintenanceWindowSchedule(ApmSyntheticsMonitorMaintenanceWindowSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putMaintenanceWindowSchedule.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule">ApmSyntheticsMonitorMaintenanceWindowSchedule</a>

---

##### `putScriptParameters` <a name="putScriptParameters" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putScriptParameters"></a>

```java
public void putScriptParameters(IResolvable OR java.util.List<ApmSyntheticsMonitorScriptParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putScriptParameters.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters">ApmSyntheticsMonitorScriptParameters</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putTimeouts"></a>

```java
public void putTimeouts(ApmSyntheticsMonitorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts">ApmSyntheticsMonitorTimeouts</a>

---

##### `putVantagePoints` <a name="putVantagePoints" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putVantagePoints"></a>

```java
public void putVantagePoints(IResolvable OR java.util.List<ApmSyntheticsMonitorVantagePoints> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.putVantagePoints.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints">ApmSyntheticsMonitorVantagePoints</a>>

---

##### `resetAvailabilityConfiguration` <a name="resetAvailabilityConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetAvailabilityConfiguration"></a>

```java
public void resetAvailabilityConfiguration()
```

##### `resetBatchIntervalInSeconds` <a name="resetBatchIntervalInSeconds" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetBatchIntervalInSeconds"></a>

```java
public void resetBatchIntervalInSeconds()
```

##### `resetConfiguration` <a name="resetConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetConfiguration"></a>

```java
public void resetConfiguration()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetId"></a>

```java
public void resetId()
```

##### `resetIsIpv6` <a name="resetIsIpv6" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetIsIpv6"></a>

```java
public void resetIsIpv6()
```

##### `resetIsRunNow` <a name="resetIsRunNow" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetIsRunNow"></a>

```java
public void resetIsRunNow()
```

##### `resetIsRunOnce` <a name="resetIsRunOnce" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetIsRunOnce"></a>

```java
public void resetIsRunOnce()
```

##### `resetMaintenanceWindowSchedule` <a name="resetMaintenanceWindowSchedule" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetMaintenanceWindowSchedule"></a>

```java
public void resetMaintenanceWindowSchedule()
```

##### `resetSchedulingPolicy` <a name="resetSchedulingPolicy" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetSchedulingPolicy"></a>

```java
public void resetSchedulingPolicy()
```

##### `resetScriptId` <a name="resetScriptId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetScriptId"></a>

```java
public void resetScriptId()
```

##### `resetScriptName` <a name="resetScriptName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetScriptName"></a>

```java
public void resetScriptName()
```

##### `resetScriptParameters` <a name="resetScriptParameters" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetScriptParameters"></a>

```java
public void resetScriptParameters()
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTarget` <a name="resetTarget" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetTarget"></a>

```java
public void resetTarget()
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetTimeoutInSeconds"></a>

```java
public void resetTimeoutInSeconds()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApmSyntheticsMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitor;

ApmSyntheticsMonitor.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitor;

ApmSyntheticsMonitor.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitor;

ApmSyntheticsMonitor.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitor;

ApmSyntheticsMonitor.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApmSyntheticsMonitor.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApmSyntheticsMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApmSyntheticsMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApmSyntheticsMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApmSyntheticsMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.availabilityConfiguration">availabilityConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference">ApmSyntheticsMonitorAvailabilityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.configuration">configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference">ApmSyntheticsMonitorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.lastUpdatedBy">lastUpdatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.maintenanceWindowSchedule">maintenanceWindowSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference">ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptParameters">scriptParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList">ApmSyntheticsMonitorScriptParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference">ApmSyntheticsMonitorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.vantagePointCount">vantagePointCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.vantagePoints">vantagePoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList">ApmSyntheticsMonitorVantagePointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.apmDomainIdInput">apmDomainIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.availabilityConfigurationInput">availabilityConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration">ApmSyntheticsMonitorAvailabilityConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.batchIntervalInSecondsInput">batchIntervalInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.configurationInput">configurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration">ApmSyntheticsMonitorConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isIpv6Input">isIpv6Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isRunNowInput">isRunNowInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isRunOnceInput">isRunOnceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.maintenanceWindowScheduleInput">maintenanceWindowScheduleInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule">ApmSyntheticsMonitorMaintenanceWindowSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.monitorTypeInput">monitorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.repeatIntervalInSecondsInput">repeatIntervalInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.schedulingPolicyInput">schedulingPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptIdInput">scriptIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptNameInput">scriptNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptParametersInput">scriptParametersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters">ApmSyntheticsMonitorScriptParameters</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts">ApmSyntheticsMonitorTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.vantagePointsInput">vantagePointsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints">ApmSyntheticsMonitorVantagePoints</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.apmDomainId">apmDomainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.batchIntervalInSeconds">batchIntervalInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isIpv6">isIpv6</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isRunNow">isRunNow</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isRunOnce">isRunOnce</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.monitorType">monitorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.repeatIntervalInSeconds">repeatIntervalInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.schedulingPolicy">schedulingPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptId">scriptId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptName">scriptName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityConfiguration`<sup>Required</sup> <a name="availabilityConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.availabilityConfiguration"></a>

```java
public ApmSyntheticsMonitorAvailabilityConfigurationOutputReference getAvailabilityConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference">ApmSyntheticsMonitorAvailabilityConfigurationOutputReference</a>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.configuration"></a>

```java
public ApmSyntheticsMonitorConfigurationOutputReference getConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference">ApmSyntheticsMonitorConfigurationOutputReference</a>

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `lastUpdatedBy`<sup>Required</sup> <a name="lastUpdatedBy" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.lastUpdatedBy"></a>

```java
public java.lang.String getLastUpdatedBy();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowSchedule`<sup>Required</sup> <a name="maintenanceWindowSchedule" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.maintenanceWindowSchedule"></a>

```java
public ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference getMaintenanceWindowSchedule();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference">ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference</a>

---

##### `scriptParameters`<sup>Required</sup> <a name="scriptParameters" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptParameters"></a>

```java
public ApmSyntheticsMonitorScriptParametersList getScriptParameters();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList">ApmSyntheticsMonitorScriptParametersList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeouts"></a>

```java
public ApmSyntheticsMonitorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference">ApmSyntheticsMonitorTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `vantagePointCount`<sup>Required</sup> <a name="vantagePointCount" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.vantagePointCount"></a>

```java
public java.lang.Number getVantagePointCount();
```

- *Type:* java.lang.Number

---

##### `vantagePoints`<sup>Required</sup> <a name="vantagePoints" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.vantagePoints"></a>

```java
public ApmSyntheticsMonitorVantagePointsList getVantagePoints();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList">ApmSyntheticsMonitorVantagePointsList</a>

---

##### `apmDomainIdInput`<sup>Optional</sup> <a name="apmDomainIdInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.apmDomainIdInput"></a>

```java
public java.lang.String getApmDomainIdInput();
```

- *Type:* java.lang.String

---

##### `availabilityConfigurationInput`<sup>Optional</sup> <a name="availabilityConfigurationInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.availabilityConfigurationInput"></a>

```java
public ApmSyntheticsMonitorAvailabilityConfiguration getAvailabilityConfigurationInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration">ApmSyntheticsMonitorAvailabilityConfiguration</a>

---

##### `batchIntervalInSecondsInput`<sup>Optional</sup> <a name="batchIntervalInSecondsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.batchIntervalInSecondsInput"></a>

```java
public java.lang.Number getBatchIntervalInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.configurationInput"></a>

```java
public ApmSyntheticsMonitorConfiguration getConfigurationInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration">ApmSyntheticsMonitorConfiguration</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isIpv6Input`<sup>Optional</sup> <a name="isIpv6Input" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isIpv6Input"></a>

```java
public java.lang.Object getIsIpv6Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRunNowInput`<sup>Optional</sup> <a name="isRunNowInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isRunNowInput"></a>

```java
public java.lang.Object getIsRunNowInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRunOnceInput`<sup>Optional</sup> <a name="isRunOnceInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isRunOnceInput"></a>

```java
public java.lang.Object getIsRunOnceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maintenanceWindowScheduleInput`<sup>Optional</sup> <a name="maintenanceWindowScheduleInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.maintenanceWindowScheduleInput"></a>

```java
public ApmSyntheticsMonitorMaintenanceWindowSchedule getMaintenanceWindowScheduleInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule">ApmSyntheticsMonitorMaintenanceWindowSchedule</a>

---

##### `monitorTypeInput`<sup>Optional</sup> <a name="monitorTypeInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.monitorTypeInput"></a>

```java
public java.lang.String getMonitorTypeInput();
```

- *Type:* java.lang.String

---

##### `repeatIntervalInSecondsInput`<sup>Optional</sup> <a name="repeatIntervalInSecondsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.repeatIntervalInSecondsInput"></a>

```java
public java.lang.Number getRepeatIntervalInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `schedulingPolicyInput`<sup>Optional</sup> <a name="schedulingPolicyInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.schedulingPolicyInput"></a>

```java
public java.lang.String getSchedulingPolicyInput();
```

- *Type:* java.lang.String

---

##### `scriptIdInput`<sup>Optional</sup> <a name="scriptIdInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptIdInput"></a>

```java
public java.lang.String getScriptIdInput();
```

- *Type:* java.lang.String

---

##### `scriptNameInput`<sup>Optional</sup> <a name="scriptNameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptNameInput"></a>

```java
public java.lang.String getScriptNameInput();
```

- *Type:* java.lang.String

---

##### `scriptParametersInput`<sup>Optional</sup> <a name="scriptParametersInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptParametersInput"></a>

```java
public java.lang.Object getScriptParametersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters">ApmSyntheticsMonitorScriptParameters</a>>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeoutInSecondsInput"></a>

```java
public java.lang.Number getTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts">ApmSyntheticsMonitorTimeouts</a>

---

##### `vantagePointsInput`<sup>Optional</sup> <a name="vantagePointsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.vantagePointsInput"></a>

```java
public java.lang.Object getVantagePointsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints">ApmSyntheticsMonitorVantagePoints</a>>

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.apmDomainId"></a>

```java
public java.lang.String getApmDomainId();
```

- *Type:* java.lang.String

---

##### `batchIntervalInSeconds`<sup>Required</sup> <a name="batchIntervalInSeconds" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.batchIntervalInSeconds"></a>

```java
public java.lang.Number getBatchIntervalInSeconds();
```

- *Type:* java.lang.Number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isIpv6`<sup>Required</sup> <a name="isIpv6" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isIpv6"></a>

```java
public java.lang.Object getIsIpv6();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRunNow`<sup>Required</sup> <a name="isRunNow" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isRunNow"></a>

```java
public java.lang.Object getIsRunNow();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRunOnce`<sup>Required</sup> <a name="isRunOnce" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.isRunOnce"></a>

```java
public java.lang.Object getIsRunOnce();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `monitorType`<sup>Required</sup> <a name="monitorType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.monitorType"></a>

```java
public java.lang.String getMonitorType();
```

- *Type:* java.lang.String

---

##### `repeatIntervalInSeconds`<sup>Required</sup> <a name="repeatIntervalInSeconds" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.repeatIntervalInSeconds"></a>

```java
public java.lang.Number getRepeatIntervalInSeconds();
```

- *Type:* java.lang.Number

---

##### `schedulingPolicy`<sup>Required</sup> <a name="schedulingPolicy" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.schedulingPolicy"></a>

```java
public java.lang.String getSchedulingPolicy();
```

- *Type:* java.lang.String

---

##### `scriptId`<sup>Required</sup> <a name="scriptId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptId"></a>

```java
public java.lang.String getScriptId();
```

- *Type:* java.lang.String

---

##### `scriptName`<sup>Required</sup> <a name="scriptName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.scriptName"></a>

```java
public java.lang.String getScriptName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitor.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApmSyntheticsMonitorAvailabilityConfiguration <a name="ApmSyntheticsMonitorAvailabilityConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorAvailabilityConfiguration;

ApmSyntheticsMonitorAvailabilityConfiguration.builder()
//  .maxAllowedFailuresPerInterval(java.lang.Number)
//  .minAllowedRunsPerInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration.property.maxAllowedFailuresPerInterval">maxAllowedFailuresPerInterval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#max_allowed_failures_per_interval ApmSyntheticsMonitor#max_allowed_failures_per_interval}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration.property.minAllowedRunsPerInterval">minAllowedRunsPerInterval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#min_allowed_runs_per_interval ApmSyntheticsMonitor#min_allowed_runs_per_interval}. |

---

##### `maxAllowedFailuresPerInterval`<sup>Optional</sup> <a name="maxAllowedFailuresPerInterval" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration.property.maxAllowedFailuresPerInterval"></a>

```java
public java.lang.Number getMaxAllowedFailuresPerInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#max_allowed_failures_per_interval ApmSyntheticsMonitor#max_allowed_failures_per_interval}.

---

##### `minAllowedRunsPerInterval`<sup>Optional</sup> <a name="minAllowedRunsPerInterval" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration.property.minAllowedRunsPerInterval"></a>

```java
public java.lang.Number getMinAllowedRunsPerInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#min_allowed_runs_per_interval ApmSyntheticsMonitor#min_allowed_runs_per_interval}.

---

### ApmSyntheticsMonitorConfig <a name="ApmSyntheticsMonitorConfig" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfig;

ApmSyntheticsMonitorConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .apmDomainId(java.lang.String)
    .displayName(java.lang.String)
    .monitorType(java.lang.String)
    .repeatIntervalInSeconds(java.lang.Number)
    .vantagePoints(IResolvable)
    .vantagePoints(java.util.List<ApmSyntheticsMonitorVantagePoints>)
//  .availabilityConfiguration(ApmSyntheticsMonitorAvailabilityConfiguration)
//  .batchIntervalInSeconds(java.lang.Number)
//  .configuration(ApmSyntheticsMonitorConfiguration)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isIpv6(java.lang.Boolean)
//  .isIpv6(IResolvable)
//  .isRunNow(java.lang.Boolean)
//  .isRunNow(IResolvable)
//  .isRunOnce(java.lang.Boolean)
//  .isRunOnce(IResolvable)
//  .maintenanceWindowSchedule(ApmSyntheticsMonitorMaintenanceWindowSchedule)
//  .schedulingPolicy(java.lang.String)
//  .scriptId(java.lang.String)
//  .scriptName(java.lang.String)
//  .scriptParameters(IResolvable)
//  .scriptParameters(java.util.List<ApmSyntheticsMonitorScriptParameters>)
//  .status(java.lang.String)
//  .target(java.lang.String)
//  .timeoutInSeconds(java.lang.Number)
//  .timeouts(ApmSyntheticsMonitorTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.apmDomainId">apmDomainId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#apm_domain_id ApmSyntheticsMonitor#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#display_name ApmSyntheticsMonitor#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.monitorType">monitorType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#monitor_type ApmSyntheticsMonitor#monitor_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.repeatIntervalInSeconds">repeatIntervalInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#repeat_interval_in_seconds ApmSyntheticsMonitor#repeat_interval_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.vantagePoints">vantagePoints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints">ApmSyntheticsMonitorVantagePoints</a>></code> | vantage_points block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.availabilityConfiguration">availabilityConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration">ApmSyntheticsMonitorAvailabilityConfiguration</a></code> | availability_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.batchIntervalInSeconds">batchIntervalInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#batch_interval_in_seconds ApmSyntheticsMonitor#batch_interval_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.configuration">configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration">ApmSyntheticsMonitorConfiguration</a></code> | configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#defined_tags ApmSyntheticsMonitor#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#freeform_tags ApmSyntheticsMonitor#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#id ApmSyntheticsMonitor#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.isIpv6">isIpv6</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_ipv6 ApmSyntheticsMonitor#is_ipv6}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.isRunNow">isRunNow</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_run_now ApmSyntheticsMonitor#is_run_now}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.isRunOnce">isRunOnce</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_run_once ApmSyntheticsMonitor#is_run_once}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.maintenanceWindowSchedule">maintenanceWindowSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule">ApmSyntheticsMonitorMaintenanceWindowSchedule</a></code> | maintenance_window_schedule block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.schedulingPolicy">schedulingPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#scheduling_policy ApmSyntheticsMonitor#scheduling_policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.scriptId">scriptId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#script_id ApmSyntheticsMonitor#script_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.scriptName">scriptName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#script_name ApmSyntheticsMonitor#script_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.scriptParameters">scriptParameters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters">ApmSyntheticsMonitorScriptParameters</a>></code> | script_parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#status ApmSyntheticsMonitor#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#target ApmSyntheticsMonitor#target}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#timeout_in_seconds ApmSyntheticsMonitor#timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts">ApmSyntheticsMonitorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.apmDomainId"></a>

```java
public java.lang.String getApmDomainId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#apm_domain_id ApmSyntheticsMonitor#apm_domain_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#display_name ApmSyntheticsMonitor#display_name}.

---

##### `monitorType`<sup>Required</sup> <a name="monitorType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.monitorType"></a>

```java
public java.lang.String getMonitorType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#monitor_type ApmSyntheticsMonitor#monitor_type}.

---

##### `repeatIntervalInSeconds`<sup>Required</sup> <a name="repeatIntervalInSeconds" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.repeatIntervalInSeconds"></a>

```java
public java.lang.Number getRepeatIntervalInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#repeat_interval_in_seconds ApmSyntheticsMonitor#repeat_interval_in_seconds}.

---

##### `vantagePoints`<sup>Required</sup> <a name="vantagePoints" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.vantagePoints"></a>

```java
public java.lang.Object getVantagePoints();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints">ApmSyntheticsMonitorVantagePoints</a>>

vantage_points block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#vantage_points ApmSyntheticsMonitor#vantage_points}

---

##### `availabilityConfiguration`<sup>Optional</sup> <a name="availabilityConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.availabilityConfiguration"></a>

```java
public ApmSyntheticsMonitorAvailabilityConfiguration getAvailabilityConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration">ApmSyntheticsMonitorAvailabilityConfiguration</a>

availability_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#availability_configuration ApmSyntheticsMonitor#availability_configuration}

---

##### `batchIntervalInSeconds`<sup>Optional</sup> <a name="batchIntervalInSeconds" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.batchIntervalInSeconds"></a>

```java
public java.lang.Number getBatchIntervalInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#batch_interval_in_seconds ApmSyntheticsMonitor#batch_interval_in_seconds}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.configuration"></a>

```java
public ApmSyntheticsMonitorConfiguration getConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration">ApmSyntheticsMonitorConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#configuration ApmSyntheticsMonitor#configuration}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#defined_tags ApmSyntheticsMonitor#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#freeform_tags ApmSyntheticsMonitor#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#id ApmSyntheticsMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isIpv6`<sup>Optional</sup> <a name="isIpv6" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.isIpv6"></a>

```java
public java.lang.Object getIsIpv6();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_ipv6 ApmSyntheticsMonitor#is_ipv6}.

---

##### `isRunNow`<sup>Optional</sup> <a name="isRunNow" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.isRunNow"></a>

```java
public java.lang.Object getIsRunNow();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_run_now ApmSyntheticsMonitor#is_run_now}.

---

##### `isRunOnce`<sup>Optional</sup> <a name="isRunOnce" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.isRunOnce"></a>

```java
public java.lang.Object getIsRunOnce();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_run_once ApmSyntheticsMonitor#is_run_once}.

---

##### `maintenanceWindowSchedule`<sup>Optional</sup> <a name="maintenanceWindowSchedule" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.maintenanceWindowSchedule"></a>

```java
public ApmSyntheticsMonitorMaintenanceWindowSchedule getMaintenanceWindowSchedule();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule">ApmSyntheticsMonitorMaintenanceWindowSchedule</a>

maintenance_window_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#maintenance_window_schedule ApmSyntheticsMonitor#maintenance_window_schedule}

---

##### `schedulingPolicy`<sup>Optional</sup> <a name="schedulingPolicy" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.schedulingPolicy"></a>

```java
public java.lang.String getSchedulingPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#scheduling_policy ApmSyntheticsMonitor#scheduling_policy}.

---

##### `scriptId`<sup>Optional</sup> <a name="scriptId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.scriptId"></a>

```java
public java.lang.String getScriptId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#script_id ApmSyntheticsMonitor#script_id}.

---

##### `scriptName`<sup>Optional</sup> <a name="scriptName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.scriptName"></a>

```java
public java.lang.String getScriptName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#script_name ApmSyntheticsMonitor#script_name}.

---

##### `scriptParameters`<sup>Optional</sup> <a name="scriptParameters" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.scriptParameters"></a>

```java
public java.lang.Object getScriptParameters();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters">ApmSyntheticsMonitorScriptParameters</a>>

script_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#script_parameters ApmSyntheticsMonitor#script_parameters}

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#status ApmSyntheticsMonitor#status}.

---

##### `target`<sup>Optional</sup> <a name="target" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#target ApmSyntheticsMonitor#target}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#timeout_in_seconds ApmSyntheticsMonitor#timeout_in_seconds}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfig.property.timeouts"></a>

```java
public ApmSyntheticsMonitorTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts">ApmSyntheticsMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#timeouts ApmSyntheticsMonitor#timeouts}

---

### ApmSyntheticsMonitorConfiguration <a name="ApmSyntheticsMonitorConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfiguration;

ApmSyntheticsMonitorConfiguration.builder()
//  .clientCertificateDetails(ApmSyntheticsMonitorConfigurationClientCertificateDetails)
//  .configType(java.lang.String)
//  .connectionString(java.lang.String)
//  .databaseAuthenticationDetails(ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails)
//  .databaseConnectionType(java.lang.String)
//  .databaseRole(java.lang.String)
//  .databaseType(java.lang.String)
//  .databaseWalletDetails(ApmSyntheticsMonitorConfigurationDatabaseWalletDetails)
//  .dnsConfiguration(ApmSyntheticsMonitorConfigurationDnsConfiguration)
//  .downloadSizeLimitInBytes(java.lang.Number)
//  .ftpBasicAuthenticationDetails(ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails)
//  .ftpProtocol(java.lang.String)
//  .ftpRequestType(java.lang.String)
//  .isActiveMode(java.lang.Boolean)
//  .isActiveMode(IResolvable)
//  .isCertificateValidationEnabled(java.lang.Boolean)
//  .isCertificateValidationEnabled(IResolvable)
//  .isDefaultSnapshotEnabled(java.lang.Boolean)
//  .isDefaultSnapshotEnabled(IResolvable)
//  .isFailureRetried(java.lang.Boolean)
//  .isFailureRetried(IResolvable)
//  .isQueryRecursive(java.lang.Boolean)
//  .isQueryRecursive(IResolvable)
//  .isRedirectionEnabled(java.lang.Boolean)
//  .isRedirectionEnabled(IResolvable)
//  .nameServer(java.lang.String)
//  .networkConfiguration(ApmSyntheticsMonitorConfigurationNetworkConfiguration)
//  .protocol(java.lang.String)
//  .query(java.lang.String)
//  .recordType(java.lang.String)
//  .reqAuthenticationDetails(ApmSyntheticsMonitorConfigurationReqAuthenticationDetails)
//  .reqAuthenticationScheme(java.lang.String)
//  .requestHeaders(IResolvable)
//  .requestHeaders(java.util.List<ApmSyntheticsMonitorConfigurationRequestHeaders>)
//  .requestMethod(java.lang.String)
//  .requestPostBody(java.lang.String)
//  .requestQueryParams(IResolvable)
//  .requestQueryParams(java.util.List<ApmSyntheticsMonitorConfigurationRequestQueryParams>)
//  .uploadFileSizeInBytes(java.lang.Number)
//  .verifyResponseCodes(java.util.List<java.lang.String>)
//  .verifyResponseContent(java.lang.String)
//  .verifyTexts(IResolvable)
//  .verifyTexts(java.util.List<ApmSyntheticsMonitorConfigurationVerifyTexts>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.clientCertificateDetails">clientCertificateDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails">ApmSyntheticsMonitorConfigurationClientCertificateDetails</a></code> | client_certificate_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.configType">configType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#config_type ApmSyntheticsMonitor#config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.connectionString">connectionString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#connection_string ApmSyntheticsMonitor#connection_string}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.databaseAuthenticationDetails">databaseAuthenticationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails</a></code> | database_authentication_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.databaseConnectionType">databaseConnectionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_connection_type ApmSyntheticsMonitor#database_connection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.databaseRole">databaseRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_role ApmSyntheticsMonitor#database_role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.databaseType">databaseType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_type ApmSyntheticsMonitor#database_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.databaseWalletDetails">databaseWalletDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails">ApmSyntheticsMonitorConfigurationDatabaseWalletDetails</a></code> | database_wallet_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.dnsConfiguration">dnsConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration">ApmSyntheticsMonitorConfigurationDnsConfiguration</a></code> | dns_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.downloadSizeLimitInBytes">downloadSizeLimitInBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#download_size_limit_in_bytes ApmSyntheticsMonitor#download_size_limit_in_bytes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.ftpBasicAuthenticationDetails">ftpBasicAuthenticationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails</a></code> | ftp_basic_authentication_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.ftpProtocol">ftpProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#ftp_protocol ApmSyntheticsMonitor#ftp_protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.ftpRequestType">ftpRequestType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#ftp_request_type ApmSyntheticsMonitor#ftp_request_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isActiveMode">isActiveMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_active_mode ApmSyntheticsMonitor#is_active_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isCertificateValidationEnabled">isCertificateValidationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_certificate_validation_enabled ApmSyntheticsMonitor#is_certificate_validation_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isDefaultSnapshotEnabled">isDefaultSnapshotEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_default_snapshot_enabled ApmSyntheticsMonitor#is_default_snapshot_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isFailureRetried">isFailureRetried</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_failure_retried ApmSyntheticsMonitor#is_failure_retried}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isQueryRecursive">isQueryRecursive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_query_recursive ApmSyntheticsMonitor#is_query_recursive}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isRedirectionEnabled">isRedirectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_redirection_enabled ApmSyntheticsMonitor#is_redirection_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.nameServer">nameServer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#name_server ApmSyntheticsMonitor#name_server}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration">ApmSyntheticsMonitorConfigurationNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#protocol ApmSyntheticsMonitor#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.query">query</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#query ApmSyntheticsMonitor#query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.recordType">recordType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#record_type ApmSyntheticsMonitor#record_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.reqAuthenticationDetails">reqAuthenticationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails">ApmSyntheticsMonitorConfigurationReqAuthenticationDetails</a></code> | req_authentication_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.reqAuthenticationScheme">reqAuthenticationScheme</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#req_authentication_scheme ApmSyntheticsMonitor#req_authentication_scheme}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.requestHeaders">requestHeaders</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders">ApmSyntheticsMonitorConfigurationRequestHeaders</a>></code> | request_headers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.requestMethod">requestMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#request_method ApmSyntheticsMonitor#request_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.requestPostBody">requestPostBody</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#request_post_body ApmSyntheticsMonitor#request_post_body}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.requestQueryParams">requestQueryParams</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams">ApmSyntheticsMonitorConfigurationRequestQueryParams</a>></code> | request_query_params block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.uploadFileSizeInBytes">uploadFileSizeInBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#upload_file_size_in_bytes ApmSyntheticsMonitor#upload_file_size_in_bytes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.verifyResponseCodes">verifyResponseCodes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#verify_response_codes ApmSyntheticsMonitor#verify_response_codes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.verifyResponseContent">verifyResponseContent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#verify_response_content ApmSyntheticsMonitor#verify_response_content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.verifyTexts">verifyTexts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts">ApmSyntheticsMonitorConfigurationVerifyTexts</a>></code> | verify_texts block. |

---

##### `clientCertificateDetails`<sup>Optional</sup> <a name="clientCertificateDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.clientCertificateDetails"></a>

```java
public ApmSyntheticsMonitorConfigurationClientCertificateDetails getClientCertificateDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails">ApmSyntheticsMonitorConfigurationClientCertificateDetails</a>

client_certificate_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#client_certificate_details ApmSyntheticsMonitor#client_certificate_details}

---

##### `configType`<sup>Optional</sup> <a name="configType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.configType"></a>

```java
public java.lang.String getConfigType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#config_type ApmSyntheticsMonitor#config_type}.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.connectionString"></a>

```java
public java.lang.String getConnectionString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#connection_string ApmSyntheticsMonitor#connection_string}.

---

##### `databaseAuthenticationDetails`<sup>Optional</sup> <a name="databaseAuthenticationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.databaseAuthenticationDetails"></a>

```java
public ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails getDatabaseAuthenticationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails</a>

database_authentication_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_authentication_details ApmSyntheticsMonitor#database_authentication_details}

---

##### `databaseConnectionType`<sup>Optional</sup> <a name="databaseConnectionType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.databaseConnectionType"></a>

```java
public java.lang.String getDatabaseConnectionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_connection_type ApmSyntheticsMonitor#database_connection_type}.

---

##### `databaseRole`<sup>Optional</sup> <a name="databaseRole" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.databaseRole"></a>

```java
public java.lang.String getDatabaseRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_role ApmSyntheticsMonitor#database_role}.

---

##### `databaseType`<sup>Optional</sup> <a name="databaseType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.databaseType"></a>

```java
public java.lang.String getDatabaseType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_type ApmSyntheticsMonitor#database_type}.

---

##### `databaseWalletDetails`<sup>Optional</sup> <a name="databaseWalletDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.databaseWalletDetails"></a>

```java
public ApmSyntheticsMonitorConfigurationDatabaseWalletDetails getDatabaseWalletDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails">ApmSyntheticsMonitorConfigurationDatabaseWalletDetails</a>

database_wallet_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_wallet_details ApmSyntheticsMonitor#database_wallet_details}

---

##### `dnsConfiguration`<sup>Optional</sup> <a name="dnsConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.dnsConfiguration"></a>

```java
public ApmSyntheticsMonitorConfigurationDnsConfiguration getDnsConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration">ApmSyntheticsMonitorConfigurationDnsConfiguration</a>

dns_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#dns_configuration ApmSyntheticsMonitor#dns_configuration}

---

##### `downloadSizeLimitInBytes`<sup>Optional</sup> <a name="downloadSizeLimitInBytes" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.downloadSizeLimitInBytes"></a>

```java
public java.lang.Number getDownloadSizeLimitInBytes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#download_size_limit_in_bytes ApmSyntheticsMonitor#download_size_limit_in_bytes}.

---

##### `ftpBasicAuthenticationDetails`<sup>Optional</sup> <a name="ftpBasicAuthenticationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.ftpBasicAuthenticationDetails"></a>

```java
public ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails getFtpBasicAuthenticationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails</a>

ftp_basic_authentication_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#ftp_basic_authentication_details ApmSyntheticsMonitor#ftp_basic_authentication_details}

---

##### `ftpProtocol`<sup>Optional</sup> <a name="ftpProtocol" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.ftpProtocol"></a>

```java
public java.lang.String getFtpProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#ftp_protocol ApmSyntheticsMonitor#ftp_protocol}.

---

##### `ftpRequestType`<sup>Optional</sup> <a name="ftpRequestType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.ftpRequestType"></a>

```java
public java.lang.String getFtpRequestType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#ftp_request_type ApmSyntheticsMonitor#ftp_request_type}.

---

##### `isActiveMode`<sup>Optional</sup> <a name="isActiveMode" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isActiveMode"></a>

```java
public java.lang.Object getIsActiveMode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_active_mode ApmSyntheticsMonitor#is_active_mode}.

---

##### `isCertificateValidationEnabled`<sup>Optional</sup> <a name="isCertificateValidationEnabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isCertificateValidationEnabled"></a>

```java
public java.lang.Object getIsCertificateValidationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_certificate_validation_enabled ApmSyntheticsMonitor#is_certificate_validation_enabled}.

---

##### `isDefaultSnapshotEnabled`<sup>Optional</sup> <a name="isDefaultSnapshotEnabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isDefaultSnapshotEnabled"></a>

```java
public java.lang.Object getIsDefaultSnapshotEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_default_snapshot_enabled ApmSyntheticsMonitor#is_default_snapshot_enabled}.

---

##### `isFailureRetried`<sup>Optional</sup> <a name="isFailureRetried" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isFailureRetried"></a>

```java
public java.lang.Object getIsFailureRetried();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_failure_retried ApmSyntheticsMonitor#is_failure_retried}.

---

##### `isQueryRecursive`<sup>Optional</sup> <a name="isQueryRecursive" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isQueryRecursive"></a>

```java
public java.lang.Object getIsQueryRecursive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_query_recursive ApmSyntheticsMonitor#is_query_recursive}.

---

##### `isRedirectionEnabled`<sup>Optional</sup> <a name="isRedirectionEnabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.isRedirectionEnabled"></a>

```java
public java.lang.Object getIsRedirectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_redirection_enabled ApmSyntheticsMonitor#is_redirection_enabled}.

---

##### `nameServer`<sup>Optional</sup> <a name="nameServer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.nameServer"></a>

```java
public java.lang.String getNameServer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#name_server ApmSyntheticsMonitor#name_server}.

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.networkConfiguration"></a>

```java
public ApmSyntheticsMonitorConfigurationNetworkConfiguration getNetworkConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration">ApmSyntheticsMonitorConfigurationNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#network_configuration ApmSyntheticsMonitor#network_configuration}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#protocol ApmSyntheticsMonitor#protocol}.

---

##### `query`<sup>Optional</sup> <a name="query" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#query ApmSyntheticsMonitor#query}.

---

##### `recordType`<sup>Optional</sup> <a name="recordType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.recordType"></a>

```java
public java.lang.String getRecordType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#record_type ApmSyntheticsMonitor#record_type}.

---

##### `reqAuthenticationDetails`<sup>Optional</sup> <a name="reqAuthenticationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.reqAuthenticationDetails"></a>

```java
public ApmSyntheticsMonitorConfigurationReqAuthenticationDetails getReqAuthenticationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails">ApmSyntheticsMonitorConfigurationReqAuthenticationDetails</a>

req_authentication_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#req_authentication_details ApmSyntheticsMonitor#req_authentication_details}

---

##### `reqAuthenticationScheme`<sup>Optional</sup> <a name="reqAuthenticationScheme" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.reqAuthenticationScheme"></a>

```java
public java.lang.String getReqAuthenticationScheme();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#req_authentication_scheme ApmSyntheticsMonitor#req_authentication_scheme}.

---

##### `requestHeaders`<sup>Optional</sup> <a name="requestHeaders" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.requestHeaders"></a>

```java
public java.lang.Object getRequestHeaders();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders">ApmSyntheticsMonitorConfigurationRequestHeaders</a>>

request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#request_headers ApmSyntheticsMonitor#request_headers}

---

##### `requestMethod`<sup>Optional</sup> <a name="requestMethod" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.requestMethod"></a>

```java
public java.lang.String getRequestMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#request_method ApmSyntheticsMonitor#request_method}.

---

##### `requestPostBody`<sup>Optional</sup> <a name="requestPostBody" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.requestPostBody"></a>

```java
public java.lang.String getRequestPostBody();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#request_post_body ApmSyntheticsMonitor#request_post_body}.

---

##### `requestQueryParams`<sup>Optional</sup> <a name="requestQueryParams" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.requestQueryParams"></a>

```java
public java.lang.Object getRequestQueryParams();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams">ApmSyntheticsMonitorConfigurationRequestQueryParams</a>>

request_query_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#request_query_params ApmSyntheticsMonitor#request_query_params}

---

##### `uploadFileSizeInBytes`<sup>Optional</sup> <a name="uploadFileSizeInBytes" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.uploadFileSizeInBytes"></a>

```java
public java.lang.Number getUploadFileSizeInBytes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#upload_file_size_in_bytes ApmSyntheticsMonitor#upload_file_size_in_bytes}.

---

##### `verifyResponseCodes`<sup>Optional</sup> <a name="verifyResponseCodes" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.verifyResponseCodes"></a>

```java
public java.util.List<java.lang.String> getVerifyResponseCodes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#verify_response_codes ApmSyntheticsMonitor#verify_response_codes}.

---

##### `verifyResponseContent`<sup>Optional</sup> <a name="verifyResponseContent" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.verifyResponseContent"></a>

```java
public java.lang.String getVerifyResponseContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#verify_response_content ApmSyntheticsMonitor#verify_response_content}.

---

##### `verifyTexts`<sup>Optional</sup> <a name="verifyTexts" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration.property.verifyTexts"></a>

```java
public java.lang.Object getVerifyTexts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts">ApmSyntheticsMonitorConfigurationVerifyTexts</a>>

verify_texts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#verify_texts ApmSyntheticsMonitor#verify_texts}

---

### ApmSyntheticsMonitorConfigurationClientCertificateDetails <a name="ApmSyntheticsMonitorConfigurationClientCertificateDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails;

ApmSyntheticsMonitorConfigurationClientCertificateDetails.builder()
//  .clientCertificate(ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate)
//  .privateKey(ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails.property.clientCertificate">clientCertificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate">ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate</a></code> | client_certificate block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails.property.privateKey">privateKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey">ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey</a></code> | private_key block. |

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails.property.clientCertificate"></a>

```java
public ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate getClientCertificate();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate">ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate</a>

client_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#client_certificate ApmSyntheticsMonitor#client_certificate}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails.property.privateKey"></a>

```java
public ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey getPrivateKey();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey">ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey</a>

private_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#private_key ApmSyntheticsMonitor#private_key}

---

### ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate <a name="ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate;

ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate.builder()
//  .content(java.lang.String)
//  .fileName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#content ApmSyntheticsMonitor#content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate.property.fileName">fileName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#file_name ApmSyntheticsMonitor#file_name}. |

---

##### `content`<sup>Optional</sup> <a name="content" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#content ApmSyntheticsMonitor#content}.

---

##### `fileName`<sup>Optional</sup> <a name="fileName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#file_name ApmSyntheticsMonitor#file_name}.

---

### ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey <a name="ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey;

ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey.builder()
//  .content(java.lang.String)
//  .fileName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#content ApmSyntheticsMonitor#content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey.property.fileName">fileName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#file_name ApmSyntheticsMonitor#file_name}. |

---

##### `content`<sup>Optional</sup> <a name="content" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#content ApmSyntheticsMonitor#content}.

---

##### `fileName`<sup>Optional</sup> <a name="fileName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#file_name ApmSyntheticsMonitor#file_name}.

---

### ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails <a name="ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails;

ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails.builder()
//  .password(ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails.property.password">password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword</a></code> | password block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#username ApmSyntheticsMonitor#username}. |

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails.property.password"></a>

```java
public ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword getPassword();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword</a>

password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password ApmSyntheticsMonitor#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#username ApmSyntheticsMonitor#username}.

---

### ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword <a name="ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword;

ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword.builder()
//  .password(java.lang.String)
//  .passwordType(java.lang.String)
//  .vaultSecretId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password ApmSyntheticsMonitor#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword.property.passwordType">passwordType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password_type ApmSyntheticsMonitor#password_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword.property.vaultSecretId">vaultSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#vault_secret_id ApmSyntheticsMonitor#vault_secret_id}. |

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password ApmSyntheticsMonitor#password}.

---

##### `passwordType`<sup>Optional</sup> <a name="passwordType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword.property.passwordType"></a>

```java
public java.lang.String getPasswordType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password_type ApmSyntheticsMonitor#password_type}.

---

##### `vaultSecretId`<sup>Optional</sup> <a name="vaultSecretId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword.property.vaultSecretId"></a>

```java
public java.lang.String getVaultSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#vault_secret_id ApmSyntheticsMonitor#vault_secret_id}.

---

### ApmSyntheticsMonitorConfigurationDatabaseWalletDetails <a name="ApmSyntheticsMonitorConfigurationDatabaseWalletDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails;

ApmSyntheticsMonitorConfigurationDatabaseWalletDetails.builder()
//  .databaseWallet(java.lang.String)
//  .serviceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails.property.databaseWallet">databaseWallet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_wallet ApmSyntheticsMonitor#database_wallet}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#service_name ApmSyntheticsMonitor#service_name}. |

---

##### `databaseWallet`<sup>Optional</sup> <a name="databaseWallet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails.property.databaseWallet"></a>

```java
public java.lang.String getDatabaseWallet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#database_wallet ApmSyntheticsMonitor#database_wallet}.

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#service_name ApmSyntheticsMonitor#service_name}.

---

### ApmSyntheticsMonitorConfigurationDnsConfiguration <a name="ApmSyntheticsMonitorConfigurationDnsConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationDnsConfiguration;

ApmSyntheticsMonitorConfigurationDnsConfiguration.builder()
//  .isOverrideDns(java.lang.Boolean)
//  .isOverrideDns(IResolvable)
//  .overrideDnsIp(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration.property.isOverrideDns">isOverrideDns</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_override_dns ApmSyntheticsMonitor#is_override_dns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration.property.overrideDnsIp">overrideDnsIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#override_dns_ip ApmSyntheticsMonitor#override_dns_ip}. |

---

##### `isOverrideDns`<sup>Optional</sup> <a name="isOverrideDns" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration.property.isOverrideDns"></a>

```java
public java.lang.Object getIsOverrideDns();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#is_override_dns ApmSyntheticsMonitor#is_override_dns}.

---

##### `overrideDnsIp`<sup>Optional</sup> <a name="overrideDnsIp" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration.property.overrideDnsIp"></a>

```java
public java.lang.String getOverrideDnsIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#override_dns_ip ApmSyntheticsMonitor#override_dns_ip}.

---

### ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails <a name="ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails;

ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails.builder()
//  .password(ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails.property.password">password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword</a></code> | password block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#username ApmSyntheticsMonitor#username}. |

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails.property.password"></a>

```java
public ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword getPassword();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword</a>

password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password ApmSyntheticsMonitor#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#username ApmSyntheticsMonitor#username}.

---

### ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword <a name="ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword;

ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword.builder()
//  .password(java.lang.String)
//  .passwordType(java.lang.String)
//  .vaultSecretId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password ApmSyntheticsMonitor#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword.property.passwordType">passwordType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password_type ApmSyntheticsMonitor#password_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword.property.vaultSecretId">vaultSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#vault_secret_id ApmSyntheticsMonitor#vault_secret_id}. |

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password ApmSyntheticsMonitor#password}.

---

##### `passwordType`<sup>Optional</sup> <a name="passwordType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword.property.passwordType"></a>

```java
public java.lang.String getPasswordType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#password_type ApmSyntheticsMonitor#password_type}.

---

##### `vaultSecretId`<sup>Optional</sup> <a name="vaultSecretId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword.property.vaultSecretId"></a>

```java
public java.lang.String getVaultSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#vault_secret_id ApmSyntheticsMonitor#vault_secret_id}.

---

### ApmSyntheticsMonitorConfigurationNetworkConfiguration <a name="ApmSyntheticsMonitorConfigurationNetworkConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration;

ApmSyntheticsMonitorConfigurationNetworkConfiguration.builder()
//  .numberOfHops(java.lang.Number)
//  .probeMode(java.lang.String)
//  .probePerHop(java.lang.Number)
//  .protocol(java.lang.String)
//  .transmissionRate(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration.property.numberOfHops">numberOfHops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#number_of_hops ApmSyntheticsMonitor#number_of_hops}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration.property.probeMode">probeMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#probe_mode ApmSyntheticsMonitor#probe_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration.property.probePerHop">probePerHop</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#probe_per_hop ApmSyntheticsMonitor#probe_per_hop}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#protocol ApmSyntheticsMonitor#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration.property.transmissionRate">transmissionRate</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#transmission_rate ApmSyntheticsMonitor#transmission_rate}. |

---

##### `numberOfHops`<sup>Optional</sup> <a name="numberOfHops" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration.property.numberOfHops"></a>

```java
public java.lang.Number getNumberOfHops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#number_of_hops ApmSyntheticsMonitor#number_of_hops}.

---

##### `probeMode`<sup>Optional</sup> <a name="probeMode" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration.property.probeMode"></a>

```java
public java.lang.String getProbeMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#probe_mode ApmSyntheticsMonitor#probe_mode}.

---

##### `probePerHop`<sup>Optional</sup> <a name="probePerHop" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration.property.probePerHop"></a>

```java
public java.lang.Number getProbePerHop();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#probe_per_hop ApmSyntheticsMonitor#probe_per_hop}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#protocol ApmSyntheticsMonitor#protocol}.

---

##### `transmissionRate`<sup>Optional</sup> <a name="transmissionRate" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration.property.transmissionRate"></a>

```java
public java.lang.Number getTransmissionRate();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#transmission_rate ApmSyntheticsMonitor#transmission_rate}.

---

### ApmSyntheticsMonitorConfigurationReqAuthenticationDetails <a name="ApmSyntheticsMonitorConfigurationReqAuthenticationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails;

ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.builder()
//  .authHeaders(IResolvable)
//  .authHeaders(java.util.List<ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders>)
//  .authRequestMethod(java.lang.String)
//  .authRequestPostBody(java.lang.String)
//  .authToken(java.lang.String)
//  .authUrl(java.lang.String)
//  .authUserName(java.lang.String)
//  .authUserPassword(java.lang.String)
//  .oauthScheme(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authHeaders">authHeaders</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders</a>></code> | auth_headers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authRequestMethod">authRequestMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_request_method ApmSyntheticsMonitor#auth_request_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authRequestPostBody">authRequestPostBody</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_request_post_body ApmSyntheticsMonitor#auth_request_post_body}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authToken">authToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_token ApmSyntheticsMonitor#auth_token}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authUrl">authUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_url ApmSyntheticsMonitor#auth_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authUserName">authUserName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_user_name ApmSyntheticsMonitor#auth_user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authUserPassword">authUserPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_user_password ApmSyntheticsMonitor#auth_user_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.oauthScheme">oauthScheme</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#oauth_scheme ApmSyntheticsMonitor#oauth_scheme}. |

---

##### `authHeaders`<sup>Optional</sup> <a name="authHeaders" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authHeaders"></a>

```java
public java.lang.Object getAuthHeaders();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders</a>>

auth_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_headers ApmSyntheticsMonitor#auth_headers}

---

##### `authRequestMethod`<sup>Optional</sup> <a name="authRequestMethod" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authRequestMethod"></a>

```java
public java.lang.String getAuthRequestMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_request_method ApmSyntheticsMonitor#auth_request_method}.

---

##### `authRequestPostBody`<sup>Optional</sup> <a name="authRequestPostBody" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authRequestPostBody"></a>

```java
public java.lang.String getAuthRequestPostBody();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_request_post_body ApmSyntheticsMonitor#auth_request_post_body}.

---

##### `authToken`<sup>Optional</sup> <a name="authToken" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authToken"></a>

```java
public java.lang.String getAuthToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_token ApmSyntheticsMonitor#auth_token}.

---

##### `authUrl`<sup>Optional</sup> <a name="authUrl" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authUrl"></a>

```java
public java.lang.String getAuthUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_url ApmSyntheticsMonitor#auth_url}.

---

##### `authUserName`<sup>Optional</sup> <a name="authUserName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authUserName"></a>

```java
public java.lang.String getAuthUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_user_name ApmSyntheticsMonitor#auth_user_name}.

---

##### `authUserPassword`<sup>Optional</sup> <a name="authUserPassword" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.authUserPassword"></a>

```java
public java.lang.String getAuthUserPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#auth_user_password ApmSyntheticsMonitor#auth_user_password}.

---

##### `oauthScheme`<sup>Optional</sup> <a name="oauthScheme" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails.property.oauthScheme"></a>

```java
public java.lang.String getOauthScheme();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#oauth_scheme ApmSyntheticsMonitor#oauth_scheme}.

---

### ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders <a name="ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders;

ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders.builder()
//  .headerName(java.lang.String)
//  .headerValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders.property.headerName">headerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#header_name ApmSyntheticsMonitor#header_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders.property.headerValue">headerValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#header_value ApmSyntheticsMonitor#header_value}. |

---

##### `headerName`<sup>Optional</sup> <a name="headerName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#header_name ApmSyntheticsMonitor#header_name}.

---

##### `headerValue`<sup>Optional</sup> <a name="headerValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders.property.headerValue"></a>

```java
public java.lang.String getHeaderValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#header_value ApmSyntheticsMonitor#header_value}.

---

### ApmSyntheticsMonitorConfigurationRequestHeaders <a name="ApmSyntheticsMonitorConfigurationRequestHeaders" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationRequestHeaders;

ApmSyntheticsMonitorConfigurationRequestHeaders.builder()
//  .headerName(java.lang.String)
//  .headerValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders.property.headerName">headerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#header_name ApmSyntheticsMonitor#header_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders.property.headerValue">headerValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#header_value ApmSyntheticsMonitor#header_value}. |

---

##### `headerName`<sup>Optional</sup> <a name="headerName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#header_name ApmSyntheticsMonitor#header_name}.

---

##### `headerValue`<sup>Optional</sup> <a name="headerValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders.property.headerValue"></a>

```java
public java.lang.String getHeaderValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#header_value ApmSyntheticsMonitor#header_value}.

---

### ApmSyntheticsMonitorConfigurationRequestQueryParams <a name="ApmSyntheticsMonitorConfigurationRequestQueryParams" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationRequestQueryParams;

ApmSyntheticsMonitorConfigurationRequestQueryParams.builder()
//  .paramName(java.lang.String)
//  .paramValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams.property.paramName">paramName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#param_name ApmSyntheticsMonitor#param_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams.property.paramValue">paramValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#param_value ApmSyntheticsMonitor#param_value}. |

---

##### `paramName`<sup>Optional</sup> <a name="paramName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams.property.paramName"></a>

```java
public java.lang.String getParamName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#param_name ApmSyntheticsMonitor#param_name}.

---

##### `paramValue`<sup>Optional</sup> <a name="paramValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams.property.paramValue"></a>

```java
public java.lang.String getParamValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#param_value ApmSyntheticsMonitor#param_value}.

---

### ApmSyntheticsMonitorConfigurationVerifyTexts <a name="ApmSyntheticsMonitorConfigurationVerifyTexts" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationVerifyTexts;

ApmSyntheticsMonitorConfigurationVerifyTexts.builder()
//  .text(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts.property.text">text</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#text ApmSyntheticsMonitor#text}. |

---

##### `text`<sup>Optional</sup> <a name="text" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#text ApmSyntheticsMonitor#text}.

---

### ApmSyntheticsMonitorMaintenanceWindowSchedule <a name="ApmSyntheticsMonitorMaintenanceWindowSchedule" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorMaintenanceWindowSchedule;

ApmSyntheticsMonitorMaintenanceWindowSchedule.builder()
//  .timeEnded(java.lang.String)
//  .timeStarted(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule.property.timeEnded">timeEnded</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#time_ended ApmSyntheticsMonitor#time_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule.property.timeStarted">timeStarted</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#time_started ApmSyntheticsMonitor#time_started}. |

---

##### `timeEnded`<sup>Optional</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule.property.timeEnded"></a>

```java
public java.lang.String getTimeEnded();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#time_ended ApmSyntheticsMonitor#time_ended}.

---

##### `timeStarted`<sup>Optional</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule.property.timeStarted"></a>

```java
public java.lang.String getTimeStarted();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#time_started ApmSyntheticsMonitor#time_started}.

---

### ApmSyntheticsMonitorScriptParameters <a name="ApmSyntheticsMonitorScriptParameters" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorScriptParameters;

ApmSyntheticsMonitorScriptParameters.builder()
    .paramName(java.lang.String)
    .paramValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters.property.paramName">paramName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#param_name ApmSyntheticsMonitor#param_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters.property.paramValue">paramValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#param_value ApmSyntheticsMonitor#param_value}. |

---

##### `paramName`<sup>Required</sup> <a name="paramName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters.property.paramName"></a>

```java
public java.lang.String getParamName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#param_name ApmSyntheticsMonitor#param_name}.

---

##### `paramValue`<sup>Required</sup> <a name="paramValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters.property.paramValue"></a>

```java
public java.lang.String getParamValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#param_value ApmSyntheticsMonitor#param_value}.

---

### ApmSyntheticsMonitorScriptParametersMonitorScriptParameter <a name="ApmSyntheticsMonitorScriptParametersMonitorScriptParameter" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameter;

ApmSyntheticsMonitorScriptParametersMonitorScriptParameter.builder()
    .build();
```


### ApmSyntheticsMonitorTimeouts <a name="ApmSyntheticsMonitorTimeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorTimeouts;

ApmSyntheticsMonitorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#create ApmSyntheticsMonitor#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#delete ApmSyntheticsMonitor#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#update ApmSyntheticsMonitor#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#create ApmSyntheticsMonitor#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#delete ApmSyntheticsMonitor#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#update ApmSyntheticsMonitor#update}.

---

### ApmSyntheticsMonitorVantagePoints <a name="ApmSyntheticsMonitorVantagePoints" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorVantagePoints;

ApmSyntheticsMonitorVantagePoints.builder()
    .name(java.lang.String)
//  .displayName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#name ApmSyntheticsMonitor#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#display_name ApmSyntheticsMonitor#display_name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#name ApmSyntheticsMonitor#name}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_monitor#display_name ApmSyntheticsMonitor#display_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApmSyntheticsMonitorAvailabilityConfigurationOutputReference <a name="ApmSyntheticsMonitorAvailabilityConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference;

new ApmSyntheticsMonitorAvailabilityConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.resetMaxAllowedFailuresPerInterval">resetMaxAllowedFailuresPerInterval</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.resetMinAllowedRunsPerInterval">resetMinAllowedRunsPerInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxAllowedFailuresPerInterval` <a name="resetMaxAllowedFailuresPerInterval" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.resetMaxAllowedFailuresPerInterval"></a>

```java
public void resetMaxAllowedFailuresPerInterval()
```

##### `resetMinAllowedRunsPerInterval` <a name="resetMinAllowedRunsPerInterval" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.resetMinAllowedRunsPerInterval"></a>

```java
public void resetMinAllowedRunsPerInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.maxAllowedFailuresPerIntervalInput">maxAllowedFailuresPerIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.minAllowedRunsPerIntervalInput">minAllowedRunsPerIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.maxAllowedFailuresPerInterval">maxAllowedFailuresPerInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.minAllowedRunsPerInterval">minAllowedRunsPerInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration">ApmSyntheticsMonitorAvailabilityConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxAllowedFailuresPerIntervalInput`<sup>Optional</sup> <a name="maxAllowedFailuresPerIntervalInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.maxAllowedFailuresPerIntervalInput"></a>

```java
public java.lang.Number getMaxAllowedFailuresPerIntervalInput();
```

- *Type:* java.lang.Number

---

##### `minAllowedRunsPerIntervalInput`<sup>Optional</sup> <a name="minAllowedRunsPerIntervalInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.minAllowedRunsPerIntervalInput"></a>

```java
public java.lang.Number getMinAllowedRunsPerIntervalInput();
```

- *Type:* java.lang.Number

---

##### `maxAllowedFailuresPerInterval`<sup>Required</sup> <a name="maxAllowedFailuresPerInterval" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.maxAllowedFailuresPerInterval"></a>

```java
public java.lang.Number getMaxAllowedFailuresPerInterval();
```

- *Type:* java.lang.Number

---

##### `minAllowedRunsPerInterval`<sup>Required</sup> <a name="minAllowedRunsPerInterval" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.minAllowedRunsPerInterval"></a>

```java
public java.lang.Number getMinAllowedRunsPerInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.internalValue"></a>

```java
public ApmSyntheticsMonitorAvailabilityConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorAvailabilityConfiguration">ApmSyntheticsMonitorAvailabilityConfiguration</a>

---


### ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference <a name="ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference;

new ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.resetFileName">resetFileName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.resetContent"></a>

```java
public void resetContent()
```

##### `resetFileName` <a name="resetFileName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.resetFileName"></a>

```java
public void resetFileName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fileNameInput">fileNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fileName">fileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate">ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `fileNameInput`<sup>Optional</sup> <a name="fileNameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fileNameInput"></a>

```java
public java.lang.String getFileNameInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.internalValue"></a>

```java
public ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate">ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate</a>

---


### ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference <a name="ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference;

new ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.putClientCertificate">putClientCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.putPrivateKey">putPrivateKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientCertificate` <a name="putClientCertificate" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.putClientCertificate"></a>

```java
public void putClientCertificate(ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.putClientCertificate.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate">ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate</a>

---

##### `putPrivateKey` <a name="putPrivateKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.putPrivateKey"></a>

```java
public void putPrivateKey(ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.putPrivateKey.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey">ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey</a>

---

##### `resetClientCertificate` <a name="resetClientCertificate" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.resetClientCertificate"></a>

```java
public void resetClientCertificate()
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.resetPrivateKey"></a>

```java
public void resetPrivateKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.clientCertificate">clientCertificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference">ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.privateKey">privateKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference">ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.clientCertificateInput">clientCertificateInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate">ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey">ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails">ApmSyntheticsMonitorConfigurationClientCertificateDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.clientCertificate"></a>

```java
public ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference getClientCertificate();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference">ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference</a>

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.privateKey"></a>

```java
public ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference getPrivateKey();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference">ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference</a>

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.clientCertificateInput"></a>

```java
public ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate getClientCertificateInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate">ApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate</a>

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.privateKeyInput"></a>

```java
public ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey getPrivateKeyInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey">ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.internalValue"></a>

```java
public ApmSyntheticsMonitorConfigurationClientCertificateDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails">ApmSyntheticsMonitorConfigurationClientCertificateDetails</a>

---


### ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference <a name="ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference;

new ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.resetFileName">resetFileName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.resetContent"></a>

```java
public void resetContent()
```

##### `resetFileName` <a name="resetFileName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.resetFileName"></a>

```java
public void resetFileName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fileNameInput">fileNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fileName">fileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey">ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `fileNameInput`<sup>Optional</sup> <a name="fileNameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fileNameInput"></a>

```java
public java.lang.String getFileNameInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.internalValue"></a>

```java
public ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey">ApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey</a>

---


### ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference <a name="ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference;

new ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.putPassword">putPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPassword` <a name="putPassword" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.putPassword"></a>

```java
public void putPassword(ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.putPassword.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword</a>

---

##### `resetPassword` <a name="resetPassword" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetUsername` <a name="resetUsername" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.password">password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.passwordInput">passwordInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.password"></a>

```java
public ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference getPassword();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference</a>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.passwordInput"></a>

```java
public ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword getPasswordInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.internalValue"></a>

```java
public ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails</a>

---


### ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference <a name="ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference;

new ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resetPasswordType">resetPasswordType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resetVaultSecretId">resetVaultSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPasswordType` <a name="resetPasswordType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resetPasswordType"></a>

```java
public void resetPasswordType()
```

##### `resetVaultSecretId` <a name="resetVaultSecretId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resetVaultSecretId"></a>

```java
public void resetVaultSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.passwordTypeInput">passwordTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.vaultSecretIdInput">vaultSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.passwordType">passwordType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.vaultSecretId">vaultSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `passwordTypeInput`<sup>Optional</sup> <a name="passwordTypeInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.passwordTypeInput"></a>

```java
public java.lang.String getPasswordTypeInput();
```

- *Type:* java.lang.String

---

##### `vaultSecretIdInput`<sup>Optional</sup> <a name="vaultSecretIdInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.vaultSecretIdInput"></a>

```java
public java.lang.String getVaultSecretIdInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `passwordType`<sup>Required</sup> <a name="passwordType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.passwordType"></a>

```java
public java.lang.String getPasswordType();
```

- *Type:* java.lang.String

---

##### `vaultSecretId`<sup>Required</sup> <a name="vaultSecretId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.vaultSecretId"></a>

```java
public java.lang.String getVaultSecretId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.internalValue"></a>

```java
public ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword</a>

---


### ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference <a name="ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference;

new ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.resetDatabaseWallet">resetDatabaseWallet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatabaseWallet` <a name="resetDatabaseWallet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.resetDatabaseWallet"></a>

```java
public void resetDatabaseWallet()
```

##### `resetServiceName` <a name="resetServiceName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.resetServiceName"></a>

```java
public void resetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.databaseWalletInput">databaseWalletInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.databaseWallet">databaseWallet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails">ApmSyntheticsMonitorConfigurationDatabaseWalletDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseWalletInput`<sup>Optional</sup> <a name="databaseWalletInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.databaseWalletInput"></a>

```java
public java.lang.String getDatabaseWalletInput();
```

- *Type:* java.lang.String

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `databaseWallet`<sup>Required</sup> <a name="databaseWallet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.databaseWallet"></a>

```java
public java.lang.String getDatabaseWallet();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.internalValue"></a>

```java
public ApmSyntheticsMonitorConfigurationDatabaseWalletDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails">ApmSyntheticsMonitorConfigurationDatabaseWalletDetails</a>

---


### ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference <a name="ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference;

new ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.resetIsOverrideDns">resetIsOverrideDns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.resetOverrideDnsIp">resetOverrideDnsIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsOverrideDns` <a name="resetIsOverrideDns" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.resetIsOverrideDns"></a>

```java
public void resetIsOverrideDns()
```

##### `resetOverrideDnsIp` <a name="resetOverrideDnsIp" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.resetOverrideDnsIp"></a>

```java
public void resetOverrideDnsIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.isOverrideDnsInput">isOverrideDnsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.overrideDnsIpInput">overrideDnsIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.isOverrideDns">isOverrideDns</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.overrideDnsIp">overrideDnsIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration">ApmSyntheticsMonitorConfigurationDnsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isOverrideDnsInput`<sup>Optional</sup> <a name="isOverrideDnsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.isOverrideDnsInput"></a>

```java
public java.lang.Object getIsOverrideDnsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `overrideDnsIpInput`<sup>Optional</sup> <a name="overrideDnsIpInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.overrideDnsIpInput"></a>

```java
public java.lang.String getOverrideDnsIpInput();
```

- *Type:* java.lang.String

---

##### `isOverrideDns`<sup>Required</sup> <a name="isOverrideDns" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.isOverrideDns"></a>

```java
public java.lang.Object getIsOverrideDns();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `overrideDnsIp`<sup>Required</sup> <a name="overrideDnsIp" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.overrideDnsIp"></a>

```java
public java.lang.String getOverrideDnsIp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.internalValue"></a>

```java
public ApmSyntheticsMonitorConfigurationDnsConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration">ApmSyntheticsMonitorConfigurationDnsConfiguration</a>

---


### ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference <a name="ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference;

new ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.putPassword">putPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPassword` <a name="putPassword" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.putPassword"></a>

```java
public void putPassword(ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.putPassword.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword</a>

---

##### `resetPassword` <a name="resetPassword" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetUsername` <a name="resetUsername" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.password">password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.passwordInput">passwordInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.password"></a>

```java
public ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference getPassword();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference</a>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.passwordInput"></a>

```java
public ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword getPasswordInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.internalValue"></a>

```java
public ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails</a>

---


### ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference <a name="ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference;

new ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resetPasswordType">resetPasswordType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resetVaultSecretId">resetVaultSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPasswordType` <a name="resetPasswordType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resetPasswordType"></a>

```java
public void resetPasswordType()
```

##### `resetVaultSecretId` <a name="resetVaultSecretId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resetVaultSecretId"></a>

```java
public void resetVaultSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.passwordTypeInput">passwordTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.vaultSecretIdInput">vaultSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.passwordType">passwordType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.vaultSecretId">vaultSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `passwordTypeInput`<sup>Optional</sup> <a name="passwordTypeInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.passwordTypeInput"></a>

```java
public java.lang.String getPasswordTypeInput();
```

- *Type:* java.lang.String

---

##### `vaultSecretIdInput`<sup>Optional</sup> <a name="vaultSecretIdInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.vaultSecretIdInput"></a>

```java
public java.lang.String getVaultSecretIdInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `passwordType`<sup>Required</sup> <a name="passwordType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.passwordType"></a>

```java
public java.lang.String getPasswordType();
```

- *Type:* java.lang.String

---

##### `vaultSecretId`<sup>Required</sup> <a name="vaultSecretId" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.vaultSecretId"></a>

```java
public java.lang.String getVaultSecretId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.internalValue"></a>

```java
public ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword</a>

---


### ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference <a name="ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference;

new ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resetNumberOfHops">resetNumberOfHops</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resetProbeMode">resetProbeMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resetProbePerHop">resetProbePerHop</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resetTransmissionRate">resetTransmissionRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNumberOfHops` <a name="resetNumberOfHops" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resetNumberOfHops"></a>

```java
public void resetNumberOfHops()
```

##### `resetProbeMode` <a name="resetProbeMode" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resetProbeMode"></a>

```java
public void resetProbeMode()
```

##### `resetProbePerHop` <a name="resetProbePerHop" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resetProbePerHop"></a>

```java
public void resetProbePerHop()
```

##### `resetProtocol` <a name="resetProtocol" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetTransmissionRate` <a name="resetTransmissionRate" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resetTransmissionRate"></a>

```java
public void resetTransmissionRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.numberOfHopsInput">numberOfHopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.probeModeInput">probeModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.probePerHopInput">probePerHopInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.transmissionRateInput">transmissionRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.numberOfHops">numberOfHops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.probeMode">probeMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.probePerHop">probePerHop</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.transmissionRate">transmissionRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration">ApmSyntheticsMonitorConfigurationNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `numberOfHopsInput`<sup>Optional</sup> <a name="numberOfHopsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.numberOfHopsInput"></a>

```java
public java.lang.Number getNumberOfHopsInput();
```

- *Type:* java.lang.Number

---

##### `probeModeInput`<sup>Optional</sup> <a name="probeModeInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.probeModeInput"></a>

```java
public java.lang.String getProbeModeInput();
```

- *Type:* java.lang.String

---

##### `probePerHopInput`<sup>Optional</sup> <a name="probePerHopInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.probePerHopInput"></a>

```java
public java.lang.Number getProbePerHopInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `transmissionRateInput`<sup>Optional</sup> <a name="transmissionRateInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.transmissionRateInput"></a>

```java
public java.lang.Number getTransmissionRateInput();
```

- *Type:* java.lang.Number

---

##### `numberOfHops`<sup>Required</sup> <a name="numberOfHops" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.numberOfHops"></a>

```java
public java.lang.Number getNumberOfHops();
```

- *Type:* java.lang.Number

---

##### `probeMode`<sup>Required</sup> <a name="probeMode" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.probeMode"></a>

```java
public java.lang.String getProbeMode();
```

- *Type:* java.lang.String

---

##### `probePerHop`<sup>Required</sup> <a name="probePerHop" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.probePerHop"></a>

```java
public java.lang.Number getProbePerHop();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `transmissionRate`<sup>Required</sup> <a name="transmissionRate" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.transmissionRate"></a>

```java
public java.lang.Number getTransmissionRate();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public ApmSyntheticsMonitorConfigurationNetworkConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration">ApmSyntheticsMonitorConfigurationNetworkConfiguration</a>

---


### ApmSyntheticsMonitorConfigurationOutputReference <a name="ApmSyntheticsMonitorConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationOutputReference;

new ApmSyntheticsMonitorConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putClientCertificateDetails">putClientCertificateDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putDatabaseAuthenticationDetails">putDatabaseAuthenticationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putDatabaseWalletDetails">putDatabaseWalletDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putDnsConfiguration">putDnsConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putFtpBasicAuthenticationDetails">putFtpBasicAuthenticationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putReqAuthenticationDetails">putReqAuthenticationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putRequestHeaders">putRequestHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putRequestQueryParams">putRequestQueryParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putVerifyTexts">putVerifyTexts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetClientCertificateDetails">resetClientCertificateDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetConfigType">resetConfigType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetConnectionString">resetConnectionString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDatabaseAuthenticationDetails">resetDatabaseAuthenticationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDatabaseConnectionType">resetDatabaseConnectionType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDatabaseRole">resetDatabaseRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDatabaseType">resetDatabaseType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDatabaseWalletDetails">resetDatabaseWalletDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDnsConfiguration">resetDnsConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDownloadSizeLimitInBytes">resetDownloadSizeLimitInBytes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetFtpBasicAuthenticationDetails">resetFtpBasicAuthenticationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetFtpProtocol">resetFtpProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetFtpRequestType">resetFtpRequestType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsActiveMode">resetIsActiveMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsCertificateValidationEnabled">resetIsCertificateValidationEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsDefaultSnapshotEnabled">resetIsDefaultSnapshotEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsFailureRetried">resetIsFailureRetried</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsQueryRecursive">resetIsQueryRecursive</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsRedirectionEnabled">resetIsRedirectionEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetNameServer">resetNameServer</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetNetworkConfiguration">resetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetRecordType">resetRecordType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetReqAuthenticationDetails">resetReqAuthenticationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetReqAuthenticationScheme">resetReqAuthenticationScheme</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetRequestHeaders">resetRequestHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetRequestMethod">resetRequestMethod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetRequestPostBody">resetRequestPostBody</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetRequestQueryParams">resetRequestQueryParams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetUploadFileSizeInBytes">resetUploadFileSizeInBytes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetVerifyResponseCodes">resetVerifyResponseCodes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetVerifyResponseContent">resetVerifyResponseContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetVerifyTexts">resetVerifyTexts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientCertificateDetails` <a name="putClientCertificateDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putClientCertificateDetails"></a>

```java
public void putClientCertificateDetails(ApmSyntheticsMonitorConfigurationClientCertificateDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putClientCertificateDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails">ApmSyntheticsMonitorConfigurationClientCertificateDetails</a>

---

##### `putDatabaseAuthenticationDetails` <a name="putDatabaseAuthenticationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putDatabaseAuthenticationDetails"></a>

```java
public void putDatabaseAuthenticationDetails(ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putDatabaseAuthenticationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails</a>

---

##### `putDatabaseWalletDetails` <a name="putDatabaseWalletDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putDatabaseWalletDetails"></a>

```java
public void putDatabaseWalletDetails(ApmSyntheticsMonitorConfigurationDatabaseWalletDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putDatabaseWalletDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails">ApmSyntheticsMonitorConfigurationDatabaseWalletDetails</a>

---

##### `putDnsConfiguration` <a name="putDnsConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putDnsConfiguration"></a>

```java
public void putDnsConfiguration(ApmSyntheticsMonitorConfigurationDnsConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putDnsConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration">ApmSyntheticsMonitorConfigurationDnsConfiguration</a>

---

##### `putFtpBasicAuthenticationDetails` <a name="putFtpBasicAuthenticationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putFtpBasicAuthenticationDetails"></a>

```java
public void putFtpBasicAuthenticationDetails(ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putFtpBasicAuthenticationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails</a>

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putNetworkConfiguration"></a>

```java
public void putNetworkConfiguration(ApmSyntheticsMonitorConfigurationNetworkConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration">ApmSyntheticsMonitorConfigurationNetworkConfiguration</a>

---

##### `putReqAuthenticationDetails` <a name="putReqAuthenticationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putReqAuthenticationDetails"></a>

```java
public void putReqAuthenticationDetails(ApmSyntheticsMonitorConfigurationReqAuthenticationDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putReqAuthenticationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails">ApmSyntheticsMonitorConfigurationReqAuthenticationDetails</a>

---

##### `putRequestHeaders` <a name="putRequestHeaders" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putRequestHeaders"></a>

```java
public void putRequestHeaders(IResolvable OR java.util.List<ApmSyntheticsMonitorConfigurationRequestHeaders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putRequestHeaders.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders">ApmSyntheticsMonitorConfigurationRequestHeaders</a>>

---

##### `putRequestQueryParams` <a name="putRequestQueryParams" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putRequestQueryParams"></a>

```java
public void putRequestQueryParams(IResolvable OR java.util.List<ApmSyntheticsMonitorConfigurationRequestQueryParams> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putRequestQueryParams.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams">ApmSyntheticsMonitorConfigurationRequestQueryParams</a>>

---

##### `putVerifyTexts` <a name="putVerifyTexts" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putVerifyTexts"></a>

```java
public void putVerifyTexts(IResolvable OR java.util.List<ApmSyntheticsMonitorConfigurationVerifyTexts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.putVerifyTexts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts">ApmSyntheticsMonitorConfigurationVerifyTexts</a>>

---

##### `resetClientCertificateDetails` <a name="resetClientCertificateDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetClientCertificateDetails"></a>

```java
public void resetClientCertificateDetails()
```

##### `resetConfigType` <a name="resetConfigType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetConfigType"></a>

```java
public void resetConfigType()
```

##### `resetConnectionString` <a name="resetConnectionString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetConnectionString"></a>

```java
public void resetConnectionString()
```

##### `resetDatabaseAuthenticationDetails` <a name="resetDatabaseAuthenticationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDatabaseAuthenticationDetails"></a>

```java
public void resetDatabaseAuthenticationDetails()
```

##### `resetDatabaseConnectionType` <a name="resetDatabaseConnectionType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDatabaseConnectionType"></a>

```java
public void resetDatabaseConnectionType()
```

##### `resetDatabaseRole` <a name="resetDatabaseRole" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDatabaseRole"></a>

```java
public void resetDatabaseRole()
```

##### `resetDatabaseType` <a name="resetDatabaseType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDatabaseType"></a>

```java
public void resetDatabaseType()
```

##### `resetDatabaseWalletDetails` <a name="resetDatabaseWalletDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDatabaseWalletDetails"></a>

```java
public void resetDatabaseWalletDetails()
```

##### `resetDnsConfiguration` <a name="resetDnsConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDnsConfiguration"></a>

```java
public void resetDnsConfiguration()
```

##### `resetDownloadSizeLimitInBytes` <a name="resetDownloadSizeLimitInBytes" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetDownloadSizeLimitInBytes"></a>

```java
public void resetDownloadSizeLimitInBytes()
```

##### `resetFtpBasicAuthenticationDetails` <a name="resetFtpBasicAuthenticationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetFtpBasicAuthenticationDetails"></a>

```java
public void resetFtpBasicAuthenticationDetails()
```

##### `resetFtpProtocol` <a name="resetFtpProtocol" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetFtpProtocol"></a>

```java
public void resetFtpProtocol()
```

##### `resetFtpRequestType` <a name="resetFtpRequestType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetFtpRequestType"></a>

```java
public void resetFtpRequestType()
```

##### `resetIsActiveMode` <a name="resetIsActiveMode" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsActiveMode"></a>

```java
public void resetIsActiveMode()
```

##### `resetIsCertificateValidationEnabled` <a name="resetIsCertificateValidationEnabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsCertificateValidationEnabled"></a>

```java
public void resetIsCertificateValidationEnabled()
```

##### `resetIsDefaultSnapshotEnabled` <a name="resetIsDefaultSnapshotEnabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsDefaultSnapshotEnabled"></a>

```java
public void resetIsDefaultSnapshotEnabled()
```

##### `resetIsFailureRetried` <a name="resetIsFailureRetried" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsFailureRetried"></a>

```java
public void resetIsFailureRetried()
```

##### `resetIsQueryRecursive` <a name="resetIsQueryRecursive" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsQueryRecursive"></a>

```java
public void resetIsQueryRecursive()
```

##### `resetIsRedirectionEnabled` <a name="resetIsRedirectionEnabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetIsRedirectionEnabled"></a>

```java
public void resetIsRedirectionEnabled()
```

##### `resetNameServer` <a name="resetNameServer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetNameServer"></a>

```java
public void resetNameServer()
```

##### `resetNetworkConfiguration` <a name="resetNetworkConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetNetworkConfiguration"></a>

```java
public void resetNetworkConfiguration()
```

##### `resetProtocol` <a name="resetProtocol" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetQuery` <a name="resetQuery" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetQuery"></a>

```java
public void resetQuery()
```

##### `resetRecordType` <a name="resetRecordType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetRecordType"></a>

```java
public void resetRecordType()
```

##### `resetReqAuthenticationDetails` <a name="resetReqAuthenticationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetReqAuthenticationDetails"></a>

```java
public void resetReqAuthenticationDetails()
```

##### `resetReqAuthenticationScheme` <a name="resetReqAuthenticationScheme" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetReqAuthenticationScheme"></a>

```java
public void resetReqAuthenticationScheme()
```

##### `resetRequestHeaders` <a name="resetRequestHeaders" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetRequestHeaders"></a>

```java
public void resetRequestHeaders()
```

##### `resetRequestMethod` <a name="resetRequestMethod" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetRequestMethod"></a>

```java
public void resetRequestMethod()
```

##### `resetRequestPostBody` <a name="resetRequestPostBody" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetRequestPostBody"></a>

```java
public void resetRequestPostBody()
```

##### `resetRequestQueryParams` <a name="resetRequestQueryParams" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetRequestQueryParams"></a>

```java
public void resetRequestQueryParams()
```

##### `resetUploadFileSizeInBytes` <a name="resetUploadFileSizeInBytes" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetUploadFileSizeInBytes"></a>

```java
public void resetUploadFileSizeInBytes()
```

##### `resetVerifyResponseCodes` <a name="resetVerifyResponseCodes" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetVerifyResponseCodes"></a>

```java
public void resetVerifyResponseCodes()
```

##### `resetVerifyResponseContent` <a name="resetVerifyResponseContent" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetVerifyResponseContent"></a>

```java
public void resetVerifyResponseContent()
```

##### `resetVerifyTexts` <a name="resetVerifyTexts" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.resetVerifyTexts"></a>

```java
public void resetVerifyTexts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.clientCertificateDetails">clientCertificateDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference">ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseAuthenticationDetails">databaseAuthenticationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseWalletDetails">databaseWalletDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference">ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.dnsConfiguration">dnsConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference">ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpBasicAuthenticationDetails">ftpBasicAuthenticationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference">ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.reqAuthenticationDetails">reqAuthenticationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestHeaders">requestHeaders</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList">ApmSyntheticsMonitorConfigurationRequestHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestQueryParams">requestQueryParams</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList">ApmSyntheticsMonitorConfigurationRequestQueryParamsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyTexts">verifyTexts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList">ApmSyntheticsMonitorConfigurationVerifyTextsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.clientCertificateDetailsInput">clientCertificateDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails">ApmSyntheticsMonitorConfigurationClientCertificateDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.configTypeInput">configTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.connectionStringInput">connectionStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseAuthenticationDetailsInput">databaseAuthenticationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseConnectionTypeInput">databaseConnectionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseRoleInput">databaseRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseTypeInput">databaseTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseWalletDetailsInput">databaseWalletDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails">ApmSyntheticsMonitorConfigurationDatabaseWalletDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.dnsConfigurationInput">dnsConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration">ApmSyntheticsMonitorConfigurationDnsConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.downloadSizeLimitInBytesInput">downloadSizeLimitInBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpBasicAuthenticationDetailsInput">ftpBasicAuthenticationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpProtocolInput">ftpProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpRequestTypeInput">ftpRequestTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isActiveModeInput">isActiveModeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isCertificateValidationEnabledInput">isCertificateValidationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isDefaultSnapshotEnabledInput">isDefaultSnapshotEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isFailureRetriedInput">isFailureRetriedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isQueryRecursiveInput">isQueryRecursiveInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isRedirectionEnabledInput">isRedirectionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.nameServerInput">nameServerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration">ApmSyntheticsMonitorConfigurationNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.recordTypeInput">recordTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.reqAuthenticationDetailsInput">reqAuthenticationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails">ApmSyntheticsMonitorConfigurationReqAuthenticationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.reqAuthenticationSchemeInput">reqAuthenticationSchemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestHeadersInput">requestHeadersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders">ApmSyntheticsMonitorConfigurationRequestHeaders</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestMethodInput">requestMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestPostBodyInput">requestPostBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestQueryParamsInput">requestQueryParamsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams">ApmSyntheticsMonitorConfigurationRequestQueryParams</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.uploadFileSizeInBytesInput">uploadFileSizeInBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyResponseCodesInput">verifyResponseCodesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyResponseContentInput">verifyResponseContentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyTextsInput">verifyTextsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts">ApmSyntheticsMonitorConfigurationVerifyTexts</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.configType">configType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.connectionString">connectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseConnectionType">databaseConnectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseRole">databaseRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseType">databaseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.downloadSizeLimitInBytes">downloadSizeLimitInBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpProtocol">ftpProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpRequestType">ftpRequestType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isActiveMode">isActiveMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isCertificateValidationEnabled">isCertificateValidationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isDefaultSnapshotEnabled">isDefaultSnapshotEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isFailureRetried">isFailureRetried</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isQueryRecursive">isQueryRecursive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isRedirectionEnabled">isRedirectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.nameServer">nameServer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.recordType">recordType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.reqAuthenticationScheme">reqAuthenticationScheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestMethod">requestMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestPostBody">requestPostBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.uploadFileSizeInBytes">uploadFileSizeInBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyResponseCodes">verifyResponseCodes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyResponseContent">verifyResponseContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration">ApmSyntheticsMonitorConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientCertificateDetails`<sup>Required</sup> <a name="clientCertificateDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.clientCertificateDetails"></a>

```java
public ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference getClientCertificateDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference">ApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference</a>

---

##### `databaseAuthenticationDetails`<sup>Required</sup> <a name="databaseAuthenticationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseAuthenticationDetails"></a>

```java
public ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference getDatabaseAuthenticationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference</a>

---

##### `databaseWalletDetails`<sup>Required</sup> <a name="databaseWalletDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseWalletDetails"></a>

```java
public ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference getDatabaseWalletDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference">ApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference</a>

---

##### `dnsConfiguration`<sup>Required</sup> <a name="dnsConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.dnsConfiguration"></a>

```java
public ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference getDnsConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference">ApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference</a>

---

##### `ftpBasicAuthenticationDetails`<sup>Required</sup> <a name="ftpBasicAuthenticationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpBasicAuthenticationDetails"></a>

```java
public ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference getFtpBasicAuthenticationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.networkConfiguration"></a>

```java
public ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference getNetworkConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference">ApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference</a>

---

##### `reqAuthenticationDetails`<sup>Required</sup> <a name="reqAuthenticationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.reqAuthenticationDetails"></a>

```java
public ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference getReqAuthenticationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference</a>

---

##### `requestHeaders`<sup>Required</sup> <a name="requestHeaders" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestHeaders"></a>

```java
public ApmSyntheticsMonitorConfigurationRequestHeadersList getRequestHeaders();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList">ApmSyntheticsMonitorConfigurationRequestHeadersList</a>

---

##### `requestQueryParams`<sup>Required</sup> <a name="requestQueryParams" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestQueryParams"></a>

```java
public ApmSyntheticsMonitorConfigurationRequestQueryParamsList getRequestQueryParams();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList">ApmSyntheticsMonitorConfigurationRequestQueryParamsList</a>

---

##### `verifyTexts`<sup>Required</sup> <a name="verifyTexts" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyTexts"></a>

```java
public ApmSyntheticsMonitorConfigurationVerifyTextsList getVerifyTexts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList">ApmSyntheticsMonitorConfigurationVerifyTextsList</a>

---

##### `clientCertificateDetailsInput`<sup>Optional</sup> <a name="clientCertificateDetailsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.clientCertificateDetailsInput"></a>

```java
public ApmSyntheticsMonitorConfigurationClientCertificateDetails getClientCertificateDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationClientCertificateDetails">ApmSyntheticsMonitorConfigurationClientCertificateDetails</a>

---

##### `configTypeInput`<sup>Optional</sup> <a name="configTypeInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.configTypeInput"></a>

```java
public java.lang.String getConfigTypeInput();
```

- *Type:* java.lang.String

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.connectionStringInput"></a>

```java
public java.lang.String getConnectionStringInput();
```

- *Type:* java.lang.String

---

##### `databaseAuthenticationDetailsInput`<sup>Optional</sup> <a name="databaseAuthenticationDetailsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseAuthenticationDetailsInput"></a>

```java
public ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails getDatabaseAuthenticationDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails">ApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails</a>

---

##### `databaseConnectionTypeInput`<sup>Optional</sup> <a name="databaseConnectionTypeInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseConnectionTypeInput"></a>

```java
public java.lang.String getDatabaseConnectionTypeInput();
```

- *Type:* java.lang.String

---

##### `databaseRoleInput`<sup>Optional</sup> <a name="databaseRoleInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseRoleInput"></a>

```java
public java.lang.String getDatabaseRoleInput();
```

- *Type:* java.lang.String

---

##### `databaseTypeInput`<sup>Optional</sup> <a name="databaseTypeInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseTypeInput"></a>

```java
public java.lang.String getDatabaseTypeInput();
```

- *Type:* java.lang.String

---

##### `databaseWalletDetailsInput`<sup>Optional</sup> <a name="databaseWalletDetailsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseWalletDetailsInput"></a>

```java
public ApmSyntheticsMonitorConfigurationDatabaseWalletDetails getDatabaseWalletDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDatabaseWalletDetails">ApmSyntheticsMonitorConfigurationDatabaseWalletDetails</a>

---

##### `dnsConfigurationInput`<sup>Optional</sup> <a name="dnsConfigurationInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.dnsConfigurationInput"></a>

```java
public ApmSyntheticsMonitorConfigurationDnsConfiguration getDnsConfigurationInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationDnsConfiguration">ApmSyntheticsMonitorConfigurationDnsConfiguration</a>

---

##### `downloadSizeLimitInBytesInput`<sup>Optional</sup> <a name="downloadSizeLimitInBytesInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.downloadSizeLimitInBytesInput"></a>

```java
public java.lang.Number getDownloadSizeLimitInBytesInput();
```

- *Type:* java.lang.Number

---

##### `ftpBasicAuthenticationDetailsInput`<sup>Optional</sup> <a name="ftpBasicAuthenticationDetailsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpBasicAuthenticationDetailsInput"></a>

```java
public ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails getFtpBasicAuthenticationDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails">ApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails</a>

---

##### `ftpProtocolInput`<sup>Optional</sup> <a name="ftpProtocolInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpProtocolInput"></a>

```java
public java.lang.String getFtpProtocolInput();
```

- *Type:* java.lang.String

---

##### `ftpRequestTypeInput`<sup>Optional</sup> <a name="ftpRequestTypeInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpRequestTypeInput"></a>

```java
public java.lang.String getFtpRequestTypeInput();
```

- *Type:* java.lang.String

---

##### `isActiveModeInput`<sup>Optional</sup> <a name="isActiveModeInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isActiveModeInput"></a>

```java
public java.lang.Object getIsActiveModeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isCertificateValidationEnabledInput`<sup>Optional</sup> <a name="isCertificateValidationEnabledInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isCertificateValidationEnabledInput"></a>

```java
public java.lang.Object getIsCertificateValidationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isDefaultSnapshotEnabledInput`<sup>Optional</sup> <a name="isDefaultSnapshotEnabledInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isDefaultSnapshotEnabledInput"></a>

```java
public java.lang.Object getIsDefaultSnapshotEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isFailureRetriedInput`<sup>Optional</sup> <a name="isFailureRetriedInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isFailureRetriedInput"></a>

```java
public java.lang.Object getIsFailureRetriedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isQueryRecursiveInput`<sup>Optional</sup> <a name="isQueryRecursiveInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isQueryRecursiveInput"></a>

```java
public java.lang.Object getIsQueryRecursiveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRedirectionEnabledInput`<sup>Optional</sup> <a name="isRedirectionEnabledInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isRedirectionEnabledInput"></a>

```java
public java.lang.Object getIsRedirectionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameServerInput`<sup>Optional</sup> <a name="nameServerInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.nameServerInput"></a>

```java
public java.lang.String getNameServerInput();
```

- *Type:* java.lang.String

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.networkConfigurationInput"></a>

```java
public ApmSyntheticsMonitorConfigurationNetworkConfiguration getNetworkConfigurationInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationNetworkConfiguration">ApmSyntheticsMonitorConfigurationNetworkConfiguration</a>

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `recordTypeInput`<sup>Optional</sup> <a name="recordTypeInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.recordTypeInput"></a>

```java
public java.lang.String getRecordTypeInput();
```

- *Type:* java.lang.String

---

##### `reqAuthenticationDetailsInput`<sup>Optional</sup> <a name="reqAuthenticationDetailsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.reqAuthenticationDetailsInput"></a>

```java
public ApmSyntheticsMonitorConfigurationReqAuthenticationDetails getReqAuthenticationDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails">ApmSyntheticsMonitorConfigurationReqAuthenticationDetails</a>

---

##### `reqAuthenticationSchemeInput`<sup>Optional</sup> <a name="reqAuthenticationSchemeInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.reqAuthenticationSchemeInput"></a>

```java
public java.lang.String getReqAuthenticationSchemeInput();
```

- *Type:* java.lang.String

---

##### `requestHeadersInput`<sup>Optional</sup> <a name="requestHeadersInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestHeadersInput"></a>

```java
public java.lang.Object getRequestHeadersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders">ApmSyntheticsMonitorConfigurationRequestHeaders</a>>

---

##### `requestMethodInput`<sup>Optional</sup> <a name="requestMethodInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestMethodInput"></a>

```java
public java.lang.String getRequestMethodInput();
```

- *Type:* java.lang.String

---

##### `requestPostBodyInput`<sup>Optional</sup> <a name="requestPostBodyInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestPostBodyInput"></a>

```java
public java.lang.String getRequestPostBodyInput();
```

- *Type:* java.lang.String

---

##### `requestQueryParamsInput`<sup>Optional</sup> <a name="requestQueryParamsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestQueryParamsInput"></a>

```java
public java.lang.Object getRequestQueryParamsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams">ApmSyntheticsMonitorConfigurationRequestQueryParams</a>>

---

##### `uploadFileSizeInBytesInput`<sup>Optional</sup> <a name="uploadFileSizeInBytesInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.uploadFileSizeInBytesInput"></a>

```java
public java.lang.Number getUploadFileSizeInBytesInput();
```

- *Type:* java.lang.Number

---

##### `verifyResponseCodesInput`<sup>Optional</sup> <a name="verifyResponseCodesInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyResponseCodesInput"></a>

```java
public java.util.List<java.lang.String> getVerifyResponseCodesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `verifyResponseContentInput`<sup>Optional</sup> <a name="verifyResponseContentInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyResponseContentInput"></a>

```java
public java.lang.String getVerifyResponseContentInput();
```

- *Type:* java.lang.String

---

##### `verifyTextsInput`<sup>Optional</sup> <a name="verifyTextsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyTextsInput"></a>

```java
public java.lang.Object getVerifyTextsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts">ApmSyntheticsMonitorConfigurationVerifyTexts</a>>

---

##### `configType`<sup>Required</sup> <a name="configType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.configType"></a>

```java
public java.lang.String getConfigType();
```

- *Type:* java.lang.String

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.connectionString"></a>

```java
public java.lang.String getConnectionString();
```

- *Type:* java.lang.String

---

##### `databaseConnectionType`<sup>Required</sup> <a name="databaseConnectionType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseConnectionType"></a>

```java
public java.lang.String getDatabaseConnectionType();
```

- *Type:* java.lang.String

---

##### `databaseRole`<sup>Required</sup> <a name="databaseRole" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseRole"></a>

```java
public java.lang.String getDatabaseRole();
```

- *Type:* java.lang.String

---

##### `databaseType`<sup>Required</sup> <a name="databaseType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.databaseType"></a>

```java
public java.lang.String getDatabaseType();
```

- *Type:* java.lang.String

---

##### `downloadSizeLimitInBytes`<sup>Required</sup> <a name="downloadSizeLimitInBytes" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.downloadSizeLimitInBytes"></a>

```java
public java.lang.Number getDownloadSizeLimitInBytes();
```

- *Type:* java.lang.Number

---

##### `ftpProtocol`<sup>Required</sup> <a name="ftpProtocol" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpProtocol"></a>

```java
public java.lang.String getFtpProtocol();
```

- *Type:* java.lang.String

---

##### `ftpRequestType`<sup>Required</sup> <a name="ftpRequestType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.ftpRequestType"></a>

```java
public java.lang.String getFtpRequestType();
```

- *Type:* java.lang.String

---

##### `isActiveMode`<sup>Required</sup> <a name="isActiveMode" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isActiveMode"></a>

```java
public java.lang.Object getIsActiveMode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isCertificateValidationEnabled`<sup>Required</sup> <a name="isCertificateValidationEnabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isCertificateValidationEnabled"></a>

```java
public java.lang.Object getIsCertificateValidationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isDefaultSnapshotEnabled`<sup>Required</sup> <a name="isDefaultSnapshotEnabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isDefaultSnapshotEnabled"></a>

```java
public java.lang.Object getIsDefaultSnapshotEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isFailureRetried`<sup>Required</sup> <a name="isFailureRetried" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isFailureRetried"></a>

```java
public java.lang.Object getIsFailureRetried();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isQueryRecursive`<sup>Required</sup> <a name="isQueryRecursive" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isQueryRecursive"></a>

```java
public java.lang.Object getIsQueryRecursive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRedirectionEnabled`<sup>Required</sup> <a name="isRedirectionEnabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.isRedirectionEnabled"></a>

```java
public java.lang.Object getIsRedirectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameServer`<sup>Required</sup> <a name="nameServer" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.nameServer"></a>

```java
public java.lang.String getNameServer();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `recordType`<sup>Required</sup> <a name="recordType" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.recordType"></a>

```java
public java.lang.String getRecordType();
```

- *Type:* java.lang.String

---

##### `reqAuthenticationScheme`<sup>Required</sup> <a name="reqAuthenticationScheme" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.reqAuthenticationScheme"></a>

```java
public java.lang.String getReqAuthenticationScheme();
```

- *Type:* java.lang.String

---

##### `requestMethod`<sup>Required</sup> <a name="requestMethod" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestMethod"></a>

```java
public java.lang.String getRequestMethod();
```

- *Type:* java.lang.String

---

##### `requestPostBody`<sup>Required</sup> <a name="requestPostBody" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.requestPostBody"></a>

```java
public java.lang.String getRequestPostBody();
```

- *Type:* java.lang.String

---

##### `uploadFileSizeInBytes`<sup>Required</sup> <a name="uploadFileSizeInBytes" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.uploadFileSizeInBytes"></a>

```java
public java.lang.Number getUploadFileSizeInBytes();
```

- *Type:* java.lang.Number

---

##### `verifyResponseCodes`<sup>Required</sup> <a name="verifyResponseCodes" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyResponseCodes"></a>

```java
public java.util.List<java.lang.String> getVerifyResponseCodes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `verifyResponseContent`<sup>Required</sup> <a name="verifyResponseContent" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.verifyResponseContent"></a>

```java
public java.lang.String getVerifyResponseContent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationOutputReference.property.internalValue"></a>

```java
public ApmSyntheticsMonitorConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfiguration">ApmSyntheticsMonitorConfiguration</a>

---


### ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList <a name="ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList;

new ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.get"></a>

```java
public ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders</a>>

---


### ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference <a name="ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference;

new ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resetHeaderName">resetHeaderName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resetHeaderValue">resetHeaderValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaderName` <a name="resetHeaderName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resetHeaderName"></a>

```java
public void resetHeaderName()
```

##### `resetHeaderValue` <a name="resetHeaderValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resetHeaderValue"></a>

```java
public void resetHeaderValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerValueInput">headerValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerName">headerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerValue">headerValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerNameInput"></a>

```java
public java.lang.String getHeaderNameInput();
```

- *Type:* java.lang.String

---

##### `headerValueInput`<sup>Optional</sup> <a name="headerValueInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerValueInput"></a>

```java
public java.lang.String getHeaderValueInput();
```

- *Type:* java.lang.String

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

---

##### `headerValue`<sup>Required</sup> <a name="headerValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerValue"></a>

```java
public java.lang.String getHeaderValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders</a>

---


### ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference <a name="ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference;

new ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.putAuthHeaders">putAuthHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthHeaders">resetAuthHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthRequestMethod">resetAuthRequestMethod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthRequestPostBody">resetAuthRequestPostBody</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthToken">resetAuthToken</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthUrl">resetAuthUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthUserName">resetAuthUserName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthUserPassword">resetAuthUserPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetOauthScheme">resetOauthScheme</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthHeaders` <a name="putAuthHeaders" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.putAuthHeaders"></a>

```java
public void putAuthHeaders(IResolvable OR java.util.List<ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.putAuthHeaders.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders</a>>

---

##### `resetAuthHeaders` <a name="resetAuthHeaders" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthHeaders"></a>

```java
public void resetAuthHeaders()
```

##### `resetAuthRequestMethod` <a name="resetAuthRequestMethod" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthRequestMethod"></a>

```java
public void resetAuthRequestMethod()
```

##### `resetAuthRequestPostBody` <a name="resetAuthRequestPostBody" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthRequestPostBody"></a>

```java
public void resetAuthRequestPostBody()
```

##### `resetAuthToken` <a name="resetAuthToken" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthToken"></a>

```java
public void resetAuthToken()
```

##### `resetAuthUrl` <a name="resetAuthUrl" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthUrl"></a>

```java
public void resetAuthUrl()
```

##### `resetAuthUserName` <a name="resetAuthUserName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthUserName"></a>

```java
public void resetAuthUserName()
```

##### `resetAuthUserPassword` <a name="resetAuthUserPassword" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetAuthUserPassword"></a>

```java
public void resetAuthUserPassword()
```

##### `resetOauthScheme` <a name="resetOauthScheme" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resetOauthScheme"></a>

```java
public void resetOauthScheme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authHeaders">authHeaders</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authHeadersInput">authHeadersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authRequestMethodInput">authRequestMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authRequestPostBodyInput">authRequestPostBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authTokenInput">authTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUrlInput">authUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUserNameInput">authUserNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUserPasswordInput">authUserPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.oauthSchemeInput">oauthSchemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authRequestMethod">authRequestMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authRequestPostBody">authRequestPostBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authToken">authToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUrl">authUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUserName">authUserName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUserPassword">authUserPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.oauthScheme">oauthScheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails">ApmSyntheticsMonitorConfigurationReqAuthenticationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authHeaders`<sup>Required</sup> <a name="authHeaders" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authHeaders"></a>

```java
public ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList getAuthHeaders();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList</a>

---

##### `authHeadersInput`<sup>Optional</sup> <a name="authHeadersInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authHeadersInput"></a>

```java
public java.lang.Object getAuthHeadersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders">ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders</a>>

---

##### `authRequestMethodInput`<sup>Optional</sup> <a name="authRequestMethodInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authRequestMethodInput"></a>

```java
public java.lang.String getAuthRequestMethodInput();
```

- *Type:* java.lang.String

---

##### `authRequestPostBodyInput`<sup>Optional</sup> <a name="authRequestPostBodyInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authRequestPostBodyInput"></a>

```java
public java.lang.String getAuthRequestPostBodyInput();
```

- *Type:* java.lang.String

---

##### `authTokenInput`<sup>Optional</sup> <a name="authTokenInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authTokenInput"></a>

```java
public java.lang.String getAuthTokenInput();
```

- *Type:* java.lang.String

---

##### `authUrlInput`<sup>Optional</sup> <a name="authUrlInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUrlInput"></a>

```java
public java.lang.String getAuthUrlInput();
```

- *Type:* java.lang.String

---

##### `authUserNameInput`<sup>Optional</sup> <a name="authUserNameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUserNameInput"></a>

```java
public java.lang.String getAuthUserNameInput();
```

- *Type:* java.lang.String

---

##### `authUserPasswordInput`<sup>Optional</sup> <a name="authUserPasswordInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUserPasswordInput"></a>

```java
public java.lang.String getAuthUserPasswordInput();
```

- *Type:* java.lang.String

---

##### `oauthSchemeInput`<sup>Optional</sup> <a name="oauthSchemeInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.oauthSchemeInput"></a>

```java
public java.lang.String getOauthSchemeInput();
```

- *Type:* java.lang.String

---

##### `authRequestMethod`<sup>Required</sup> <a name="authRequestMethod" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authRequestMethod"></a>

```java
public java.lang.String getAuthRequestMethod();
```

- *Type:* java.lang.String

---

##### `authRequestPostBody`<sup>Required</sup> <a name="authRequestPostBody" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authRequestPostBody"></a>

```java
public java.lang.String getAuthRequestPostBody();
```

- *Type:* java.lang.String

---

##### `authToken`<sup>Required</sup> <a name="authToken" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authToken"></a>

```java
public java.lang.String getAuthToken();
```

- *Type:* java.lang.String

---

##### `authUrl`<sup>Required</sup> <a name="authUrl" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUrl"></a>

```java
public java.lang.String getAuthUrl();
```

- *Type:* java.lang.String

---

##### `authUserName`<sup>Required</sup> <a name="authUserName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUserName"></a>

```java
public java.lang.String getAuthUserName();
```

- *Type:* java.lang.String

---

##### `authUserPassword`<sup>Required</sup> <a name="authUserPassword" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUserPassword"></a>

```java
public java.lang.String getAuthUserPassword();
```

- *Type:* java.lang.String

---

##### `oauthScheme`<sup>Required</sup> <a name="oauthScheme" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.oauthScheme"></a>

```java
public java.lang.String getOauthScheme();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.internalValue"></a>

```java
public ApmSyntheticsMonitorConfigurationReqAuthenticationDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationReqAuthenticationDetails">ApmSyntheticsMonitorConfigurationReqAuthenticationDetails</a>

---


### ApmSyntheticsMonitorConfigurationRequestHeadersList <a name="ApmSyntheticsMonitorConfigurationRequestHeadersList" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationRequestHeadersList;

new ApmSyntheticsMonitorConfigurationRequestHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.get"></a>

```java
public ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders">ApmSyntheticsMonitorConfigurationRequestHeaders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders">ApmSyntheticsMonitorConfigurationRequestHeaders</a>>

---


### ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference <a name="ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference;

new ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.resetHeaderName">resetHeaderName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.resetHeaderValue">resetHeaderValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaderName` <a name="resetHeaderName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.resetHeaderName"></a>

```java
public void resetHeaderName()
```

##### `resetHeaderValue` <a name="resetHeaderValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.resetHeaderValue"></a>

```java
public void resetHeaderValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.headerValueInput">headerValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.headerName">headerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.headerValue">headerValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders">ApmSyntheticsMonitorConfigurationRequestHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.headerNameInput"></a>

```java
public java.lang.String getHeaderNameInput();
```

- *Type:* java.lang.String

---

##### `headerValueInput`<sup>Optional</sup> <a name="headerValueInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.headerValueInput"></a>

```java
public java.lang.String getHeaderValueInput();
```

- *Type:* java.lang.String

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

---

##### `headerValue`<sup>Required</sup> <a name="headerValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.headerValue"></a>

```java
public java.lang.String getHeaderValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestHeaders">ApmSyntheticsMonitorConfigurationRequestHeaders</a>

---


### ApmSyntheticsMonitorConfigurationRequestQueryParamsList <a name="ApmSyntheticsMonitorConfigurationRequestQueryParamsList" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList;

new ApmSyntheticsMonitorConfigurationRequestQueryParamsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.get"></a>

```java
public ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams">ApmSyntheticsMonitorConfigurationRequestQueryParams</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams">ApmSyntheticsMonitorConfigurationRequestQueryParams</a>>

---


### ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference <a name="ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference;

new ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.resetParamName">resetParamName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.resetParamValue">resetParamValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParamName` <a name="resetParamName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.resetParamName"></a>

```java
public void resetParamName()
```

##### `resetParamValue` <a name="resetParamValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.resetParamValue"></a>

```java
public void resetParamValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.paramNameInput">paramNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.paramValueInput">paramValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.paramName">paramName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.paramValue">paramValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams">ApmSyntheticsMonitorConfigurationRequestQueryParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `paramNameInput`<sup>Optional</sup> <a name="paramNameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.paramNameInput"></a>

```java
public java.lang.String getParamNameInput();
```

- *Type:* java.lang.String

---

##### `paramValueInput`<sup>Optional</sup> <a name="paramValueInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.paramValueInput"></a>

```java
public java.lang.String getParamValueInput();
```

- *Type:* java.lang.String

---

##### `paramName`<sup>Required</sup> <a name="paramName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.paramName"></a>

```java
public java.lang.String getParamName();
```

- *Type:* java.lang.String

---

##### `paramValue`<sup>Required</sup> <a name="paramValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.paramValue"></a>

```java
public java.lang.String getParamValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationRequestQueryParams">ApmSyntheticsMonitorConfigurationRequestQueryParams</a>

---


### ApmSyntheticsMonitorConfigurationVerifyTextsList <a name="ApmSyntheticsMonitorConfigurationVerifyTextsList" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationVerifyTextsList;

new ApmSyntheticsMonitorConfigurationVerifyTextsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.get"></a>

```java
public ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts">ApmSyntheticsMonitorConfigurationVerifyTexts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts">ApmSyntheticsMonitorConfigurationVerifyTexts</a>>

---


### ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference <a name="ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference;

new ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetText` <a name="resetText" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.resetText"></a>

```java
public void resetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts">ApmSyntheticsMonitorConfigurationVerifyTexts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorConfigurationVerifyTexts">ApmSyntheticsMonitorConfigurationVerifyTexts</a>

---


### ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference <a name="ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference;

new ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.resetTimeEnded">resetTimeEnded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.resetTimeStarted">resetTimeStarted</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeEnded` <a name="resetTimeEnded" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.resetTimeEnded"></a>

```java
public void resetTimeEnded()
```

##### `resetTimeStarted` <a name="resetTimeStarted" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.resetTimeStarted"></a>

```java
public void resetTimeStarted()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.timeEndedInput">timeEndedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.timeStartedInput">timeStartedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.timeEnded">timeEnded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.timeStarted">timeStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule">ApmSyntheticsMonitorMaintenanceWindowSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeEndedInput`<sup>Optional</sup> <a name="timeEndedInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.timeEndedInput"></a>

```java
public java.lang.String getTimeEndedInput();
```

- *Type:* java.lang.String

---

##### `timeStartedInput`<sup>Optional</sup> <a name="timeStartedInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.timeStartedInput"></a>

```java
public java.lang.String getTimeStartedInput();
```

- *Type:* java.lang.String

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.timeEnded"></a>

```java
public java.lang.String getTimeEnded();
```

- *Type:* java.lang.String

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.timeStarted"></a>

```java
public java.lang.String getTimeStarted();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.internalValue"></a>

```java
public ApmSyntheticsMonitorMaintenanceWindowSchedule getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorMaintenanceWindowSchedule">ApmSyntheticsMonitorMaintenanceWindowSchedule</a>

---


### ApmSyntheticsMonitorScriptParametersList <a name="ApmSyntheticsMonitorScriptParametersList" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorScriptParametersList;

new ApmSyntheticsMonitorScriptParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.get"></a>

```java
public ApmSyntheticsMonitorScriptParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters">ApmSyntheticsMonitorScriptParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters">ApmSyntheticsMonitorScriptParameters</a>>

---


### ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList <a name="ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList;

new ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.get"></a>

```java
public ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference <a name="ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference;

new ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.paramName">paramName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.paramValue">paramValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameter">ApmSyntheticsMonitorScriptParametersMonitorScriptParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `paramName`<sup>Required</sup> <a name="paramName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.paramName"></a>

```java
public java.lang.String getParamName();
```

- *Type:* java.lang.String

---

##### `paramValue`<sup>Required</sup> <a name="paramValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.paramValue"></a>

```java
public java.lang.String getParamValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.internalValue"></a>

```java
public ApmSyntheticsMonitorScriptParametersMonitorScriptParameter getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameter">ApmSyntheticsMonitorScriptParametersMonitorScriptParameter</a>

---


### ApmSyntheticsMonitorScriptParametersOutputReference <a name="ApmSyntheticsMonitorScriptParametersOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorScriptParametersOutputReference;

new ApmSyntheticsMonitorScriptParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.isOverwritten">isOverwritten</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.isSecret">isSecret</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.monitorScriptParameter">monitorScriptParameter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList">ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.paramNameInput">paramNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.paramValueInput">paramValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.paramName">paramName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.paramValue">paramValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters">ApmSyntheticsMonitorScriptParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isOverwritten`<sup>Required</sup> <a name="isOverwritten" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.isOverwritten"></a>

```java
public IResolvable getIsOverwritten();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isSecret`<sup>Required</sup> <a name="isSecret" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.isSecret"></a>

```java
public IResolvable getIsSecret();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `monitorScriptParameter`<sup>Required</sup> <a name="monitorScriptParameter" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.monitorScriptParameter"></a>

```java
public ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList getMonitorScriptParameter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList">ApmSyntheticsMonitorScriptParametersMonitorScriptParameterList</a>

---

##### `paramNameInput`<sup>Optional</sup> <a name="paramNameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.paramNameInput"></a>

```java
public java.lang.String getParamNameInput();
```

- *Type:* java.lang.String

---

##### `paramValueInput`<sup>Optional</sup> <a name="paramValueInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.paramValueInput"></a>

```java
public java.lang.String getParamValueInput();
```

- *Type:* java.lang.String

---

##### `paramName`<sup>Required</sup> <a name="paramName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.paramName"></a>

```java
public java.lang.String getParamName();
```

- *Type:* java.lang.String

---

##### `paramValue`<sup>Required</sup> <a name="paramValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.paramValue"></a>

```java
public java.lang.String getParamValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParametersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorScriptParameters">ApmSyntheticsMonitorScriptParameters</a>

---


### ApmSyntheticsMonitorTimeoutsOutputReference <a name="ApmSyntheticsMonitorTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorTimeoutsOutputReference;

new ApmSyntheticsMonitorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts">ApmSyntheticsMonitorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorTimeouts">ApmSyntheticsMonitorTimeouts</a>

---


### ApmSyntheticsMonitorVantagePointsList <a name="ApmSyntheticsMonitorVantagePointsList" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorVantagePointsList;

new ApmSyntheticsMonitorVantagePointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.get"></a>

```java
public ApmSyntheticsMonitorVantagePointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints">ApmSyntheticsMonitorVantagePoints</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints">ApmSyntheticsMonitorVantagePoints</a>>

---


### ApmSyntheticsMonitorVantagePointsOutputReference <a name="ApmSyntheticsMonitorVantagePointsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_monitor.ApmSyntheticsMonitorVantagePointsOutputReference;

new ApmSyntheticsMonitorVantagePointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.workerList">workerList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints">ApmSyntheticsMonitorVantagePoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workerList`<sup>Required</sup> <a name="workerList" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.workerList"></a>

```java
public java.util.List<java.lang.String> getWorkerList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePointsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsMonitor.ApmSyntheticsMonitorVantagePoints">ApmSyntheticsMonitorVantagePoints</a>

---




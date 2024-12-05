# `meteringComputationSchedule` Submodule <a name="`meteringComputationSchedule` Submodule" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MeteringComputationSchedule <a name="MeteringComputationSchedule" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule oci_metering_computation_schedule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_schedule.MeteringComputationSchedule;

MeteringComputationSchedule.Builder.create(Construct scope, java.lang.String id)
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
    .compartmentId(java.lang.String)
    .name(java.lang.String)
    .resultLocation(MeteringComputationScheduleResultLocation)
    .scheduleRecurrences(java.lang.String)
    .timeScheduled(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .outputFileFormat(java.lang.String)
//  .queryProperties(MeteringComputationScheduleQueryProperties)
//  .savedReportId(java.lang.String)
//  .timeouts(MeteringComputationScheduleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#compartment_id MeteringComputationSchedule#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#name MeteringComputationSchedule#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.resultLocation">resultLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation">MeteringComputationScheduleResultLocation</a></code> | result_location block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.scheduleRecurrences">scheduleRecurrences</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#schedule_recurrences MeteringComputationSchedule#schedule_recurrences}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.timeScheduled">timeScheduled</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#time_scheduled MeteringComputationSchedule#time_scheduled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#defined_tags MeteringComputationSchedule#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#description MeteringComputationSchedule#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#freeform_tags MeteringComputationSchedule#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#id MeteringComputationSchedule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.outputFileFormat">outputFileFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#output_file_format MeteringComputationSchedule#output_file_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.queryProperties">queryProperties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties">MeteringComputationScheduleQueryProperties</a></code> | query_properties block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.savedReportId">savedReportId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#saved_report_id MeteringComputationSchedule#saved_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts">MeteringComputationScheduleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#compartment_id MeteringComputationSchedule#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#name MeteringComputationSchedule#name}.

---

##### `resultLocation`<sup>Required</sup> <a name="resultLocation" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.resultLocation"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation">MeteringComputationScheduleResultLocation</a>

result_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#result_location MeteringComputationSchedule#result_location}

---

##### `scheduleRecurrences`<sup>Required</sup> <a name="scheduleRecurrences" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.scheduleRecurrences"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#schedule_recurrences MeteringComputationSchedule#schedule_recurrences}.

---

##### `timeScheduled`<sup>Required</sup> <a name="timeScheduled" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.timeScheduled"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#time_scheduled MeteringComputationSchedule#time_scheduled}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#defined_tags MeteringComputationSchedule#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#description MeteringComputationSchedule#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#freeform_tags MeteringComputationSchedule#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#id MeteringComputationSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `outputFileFormat`<sup>Optional</sup> <a name="outputFileFormat" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.outputFileFormat"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#output_file_format MeteringComputationSchedule#output_file_format}.

---

##### `queryProperties`<sup>Optional</sup> <a name="queryProperties" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.queryProperties"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties">MeteringComputationScheduleQueryProperties</a>

query_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#query_properties MeteringComputationSchedule#query_properties}

---

##### `savedReportId`<sup>Optional</sup> <a name="savedReportId" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.savedReportId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#saved_report_id MeteringComputationSchedule#saved_report_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts">MeteringComputationScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#timeouts MeteringComputationSchedule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putQueryProperties">putQueryProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putResultLocation">putResultLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetOutputFileFormat">resetOutputFileFormat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetQueryProperties">resetQueryProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetSavedReportId">resetSavedReportId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putQueryProperties` <a name="putQueryProperties" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putQueryProperties"></a>

```java
public void putQueryProperties(MeteringComputationScheduleQueryProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putQueryProperties.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties">MeteringComputationScheduleQueryProperties</a>

---

##### `putResultLocation` <a name="putResultLocation" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putResultLocation"></a>

```java
public void putResultLocation(MeteringComputationScheduleResultLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putResultLocation.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation">MeteringComputationScheduleResultLocation</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putTimeouts"></a>

```java
public void putTimeouts(MeteringComputationScheduleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts">MeteringComputationScheduleTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetId"></a>

```java
public void resetId()
```

##### `resetOutputFileFormat` <a name="resetOutputFileFormat" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetOutputFileFormat"></a>

```java
public void resetOutputFileFormat()
```

##### `resetQueryProperties` <a name="resetQueryProperties" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetQueryProperties"></a>

```java
public void resetQueryProperties()
```

##### `resetSavedReportId` <a name="resetSavedReportId" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetSavedReportId"></a>

```java
public void resetSavedReportId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MeteringComputationSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_schedule.MeteringComputationSchedule;

MeteringComputationSchedule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_schedule.MeteringComputationSchedule;

MeteringComputationSchedule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_schedule.MeteringComputationSchedule;

MeteringComputationSchedule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_schedule.MeteringComputationSchedule;

MeteringComputationSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MeteringComputationSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MeteringComputationSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MeteringComputationSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MeteringComputationSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MeteringComputationSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.queryProperties">queryProperties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference">MeteringComputationScheduleQueryPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.resultLocation">resultLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference">MeteringComputationScheduleResultLocationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeNextRun">timeNextRun</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference">MeteringComputationScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.outputFileFormatInput">outputFileFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.queryPropertiesInput">queryPropertiesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties">MeteringComputationScheduleQueryProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.resultLocationInput">resultLocationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation">MeteringComputationScheduleResultLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.savedReportIdInput">savedReportIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.scheduleRecurrencesInput">scheduleRecurrencesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts">MeteringComputationScheduleTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeScheduledInput">timeScheduledInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.outputFileFormat">outputFileFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.savedReportId">savedReportId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.scheduleRecurrences">scheduleRecurrences</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeScheduled">timeScheduled</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `queryProperties`<sup>Required</sup> <a name="queryProperties" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.queryProperties"></a>

```java
public MeteringComputationScheduleQueryPropertiesOutputReference getQueryProperties();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference">MeteringComputationScheduleQueryPropertiesOutputReference</a>

---

##### `resultLocation`<sup>Required</sup> <a name="resultLocation" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.resultLocation"></a>

```java
public MeteringComputationScheduleResultLocationOutputReference getResultLocation();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference">MeteringComputationScheduleResultLocationOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeNextRun`<sup>Required</sup> <a name="timeNextRun" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeNextRun"></a>

```java
public java.lang.String getTimeNextRun();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeouts"></a>

```java
public MeteringComputationScheduleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference">MeteringComputationScheduleTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `outputFileFormatInput`<sup>Optional</sup> <a name="outputFileFormatInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.outputFileFormatInput"></a>

```java
public java.lang.String getOutputFileFormatInput();
```

- *Type:* java.lang.String

---

##### `queryPropertiesInput`<sup>Optional</sup> <a name="queryPropertiesInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.queryPropertiesInput"></a>

```java
public MeteringComputationScheduleQueryProperties getQueryPropertiesInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties">MeteringComputationScheduleQueryProperties</a>

---

##### `resultLocationInput`<sup>Optional</sup> <a name="resultLocationInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.resultLocationInput"></a>

```java
public MeteringComputationScheduleResultLocation getResultLocationInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation">MeteringComputationScheduleResultLocation</a>

---

##### `savedReportIdInput`<sup>Optional</sup> <a name="savedReportIdInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.savedReportIdInput"></a>

```java
public java.lang.String getSavedReportIdInput();
```

- *Type:* java.lang.String

---

##### `scheduleRecurrencesInput`<sup>Optional</sup> <a name="scheduleRecurrencesInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.scheduleRecurrencesInput"></a>

```java
public java.lang.String getScheduleRecurrencesInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts">MeteringComputationScheduleTimeouts</a>

---

##### `timeScheduledInput`<sup>Optional</sup> <a name="timeScheduledInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeScheduledInput"></a>

```java
public java.lang.String getTimeScheduledInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `outputFileFormat`<sup>Required</sup> <a name="outputFileFormat" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.outputFileFormat"></a>

```java
public java.lang.String getOutputFileFormat();
```

- *Type:* java.lang.String

---

##### `savedReportId`<sup>Required</sup> <a name="savedReportId" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.savedReportId"></a>

```java
public java.lang.String getSavedReportId();
```

- *Type:* java.lang.String

---

##### `scheduleRecurrences`<sup>Required</sup> <a name="scheduleRecurrences" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.scheduleRecurrences"></a>

```java
public java.lang.String getScheduleRecurrences();
```

- *Type:* java.lang.String

---

##### `timeScheduled`<sup>Required</sup> <a name="timeScheduled" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.timeScheduled"></a>

```java
public java.lang.String getTimeScheduled();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationSchedule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MeteringComputationScheduleConfig <a name="MeteringComputationScheduleConfig" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_schedule.MeteringComputationScheduleConfig;

MeteringComputationScheduleConfig.builder()
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
    .compartmentId(java.lang.String)
    .name(java.lang.String)
    .resultLocation(MeteringComputationScheduleResultLocation)
    .scheduleRecurrences(java.lang.String)
    .timeScheduled(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .outputFileFormat(java.lang.String)
//  .queryProperties(MeteringComputationScheduleQueryProperties)
//  .savedReportId(java.lang.String)
//  .timeouts(MeteringComputationScheduleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#compartment_id MeteringComputationSchedule#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#name MeteringComputationSchedule#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.resultLocation">resultLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation">MeteringComputationScheduleResultLocation</a></code> | result_location block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.scheduleRecurrences">scheduleRecurrences</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#schedule_recurrences MeteringComputationSchedule#schedule_recurrences}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.timeScheduled">timeScheduled</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#time_scheduled MeteringComputationSchedule#time_scheduled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#defined_tags MeteringComputationSchedule#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#description MeteringComputationSchedule#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#freeform_tags MeteringComputationSchedule#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#id MeteringComputationSchedule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.outputFileFormat">outputFileFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#output_file_format MeteringComputationSchedule#output_file_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.queryProperties">queryProperties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties">MeteringComputationScheduleQueryProperties</a></code> | query_properties block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.savedReportId">savedReportId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#saved_report_id MeteringComputationSchedule#saved_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts">MeteringComputationScheduleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#compartment_id MeteringComputationSchedule#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#name MeteringComputationSchedule#name}.

---

##### `resultLocation`<sup>Required</sup> <a name="resultLocation" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.resultLocation"></a>

```java
public MeteringComputationScheduleResultLocation getResultLocation();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation">MeteringComputationScheduleResultLocation</a>

result_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#result_location MeteringComputationSchedule#result_location}

---

##### `scheduleRecurrences`<sup>Required</sup> <a name="scheduleRecurrences" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.scheduleRecurrences"></a>

```java
public java.lang.String getScheduleRecurrences();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#schedule_recurrences MeteringComputationSchedule#schedule_recurrences}.

---

##### `timeScheduled`<sup>Required</sup> <a name="timeScheduled" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.timeScheduled"></a>

```java
public java.lang.String getTimeScheduled();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#time_scheduled MeteringComputationSchedule#time_scheduled}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#defined_tags MeteringComputationSchedule#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#description MeteringComputationSchedule#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#freeform_tags MeteringComputationSchedule#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#id MeteringComputationSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `outputFileFormat`<sup>Optional</sup> <a name="outputFileFormat" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.outputFileFormat"></a>

```java
public java.lang.String getOutputFileFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#output_file_format MeteringComputationSchedule#output_file_format}.

---

##### `queryProperties`<sup>Optional</sup> <a name="queryProperties" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.queryProperties"></a>

```java
public MeteringComputationScheduleQueryProperties getQueryProperties();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties">MeteringComputationScheduleQueryProperties</a>

query_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#query_properties MeteringComputationSchedule#query_properties}

---

##### `savedReportId`<sup>Optional</sup> <a name="savedReportId" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.savedReportId"></a>

```java
public java.lang.String getSavedReportId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#saved_report_id MeteringComputationSchedule#saved_report_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleConfig.property.timeouts"></a>

```java
public MeteringComputationScheduleTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts">MeteringComputationScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#timeouts MeteringComputationSchedule#timeouts}

---

### MeteringComputationScheduleQueryProperties <a name="MeteringComputationScheduleQueryProperties" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_schedule.MeteringComputationScheduleQueryProperties;

MeteringComputationScheduleQueryProperties.builder()
    .dateRange(MeteringComputationScheduleQueryPropertiesDateRange)
    .granularity(java.lang.String)
//  .compartmentDepth(java.lang.Number)
//  .filter(java.lang.String)
//  .groupBy(java.util.List<java.lang.String>)
//  .groupByTag(IResolvable)
//  .groupByTag(java.util.List<MeteringComputationScheduleQueryPropertiesGroupByTag>)
//  .isAggregateByTime(java.lang.Boolean)
//  .isAggregateByTime(IResolvable)
//  .queryType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.dateRange">dateRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange">MeteringComputationScheduleQueryPropertiesDateRange</a></code> | date_range block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.granularity">granularity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#granularity MeteringComputationSchedule#granularity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.compartmentDepth">compartmentDepth</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#compartment_depth MeteringComputationSchedule#compartment_depth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#filter MeteringComputationSchedule#filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.groupBy">groupBy</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#group_by MeteringComputationSchedule#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.groupByTag">groupByTag</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag">MeteringComputationScheduleQueryPropertiesGroupByTag</a>></code> | group_by_tag block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.isAggregateByTime">isAggregateByTime</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#is_aggregate_by_time MeteringComputationSchedule#is_aggregate_by_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.queryType">queryType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#query_type MeteringComputationSchedule#query_type}. |

---

##### `dateRange`<sup>Required</sup> <a name="dateRange" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.dateRange"></a>

```java
public MeteringComputationScheduleQueryPropertiesDateRange getDateRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange">MeteringComputationScheduleQueryPropertiesDateRange</a>

date_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#date_range MeteringComputationSchedule#date_range}

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.granularity"></a>

```java
public java.lang.String getGranularity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#granularity MeteringComputationSchedule#granularity}.

---

##### `compartmentDepth`<sup>Optional</sup> <a name="compartmentDepth" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.compartmentDepth"></a>

```java
public java.lang.Number getCompartmentDepth();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#compartment_depth MeteringComputationSchedule#compartment_depth}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#filter MeteringComputationSchedule#filter}.

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.groupBy"></a>

```java
public java.util.List<java.lang.String> getGroupBy();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#group_by MeteringComputationSchedule#group_by}.

---

##### `groupByTag`<sup>Optional</sup> <a name="groupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.groupByTag"></a>

```java
public java.lang.Object getGroupByTag();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag">MeteringComputationScheduleQueryPropertiesGroupByTag</a>>

group_by_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#group_by_tag MeteringComputationSchedule#group_by_tag}

---

##### `isAggregateByTime`<sup>Optional</sup> <a name="isAggregateByTime" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.isAggregateByTime"></a>

```java
public java.lang.Object getIsAggregateByTime();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#is_aggregate_by_time MeteringComputationSchedule#is_aggregate_by_time}.

---

##### `queryType`<sup>Optional</sup> <a name="queryType" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties.property.queryType"></a>

```java
public java.lang.String getQueryType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#query_type MeteringComputationSchedule#query_type}.

---

### MeteringComputationScheduleQueryPropertiesDateRange <a name="MeteringComputationScheduleQueryPropertiesDateRange" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_schedule.MeteringComputationScheduleQueryPropertiesDateRange;

MeteringComputationScheduleQueryPropertiesDateRange.builder()
    .dateRangeType(java.lang.String)
//  .dynamicDateRangeType(java.lang.String)
//  .timeUsageEnded(java.lang.String)
//  .timeUsageStarted(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange.property.dateRangeType">dateRangeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#date_range_type MeteringComputationSchedule#date_range_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange.property.dynamicDateRangeType">dynamicDateRangeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#dynamic_date_range_type MeteringComputationSchedule#dynamic_date_range_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange.property.timeUsageEnded">timeUsageEnded</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#time_usage_ended MeteringComputationSchedule#time_usage_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange.property.timeUsageStarted">timeUsageStarted</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#time_usage_started MeteringComputationSchedule#time_usage_started}. |

---

##### `dateRangeType`<sup>Required</sup> <a name="dateRangeType" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange.property.dateRangeType"></a>

```java
public java.lang.String getDateRangeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#date_range_type MeteringComputationSchedule#date_range_type}.

---

##### `dynamicDateRangeType`<sup>Optional</sup> <a name="dynamicDateRangeType" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange.property.dynamicDateRangeType"></a>

```java
public java.lang.String getDynamicDateRangeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#dynamic_date_range_type MeteringComputationSchedule#dynamic_date_range_type}.

---

##### `timeUsageEnded`<sup>Optional</sup> <a name="timeUsageEnded" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange.property.timeUsageEnded"></a>

```java
public java.lang.String getTimeUsageEnded();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#time_usage_ended MeteringComputationSchedule#time_usage_ended}.

---

##### `timeUsageStarted`<sup>Optional</sup> <a name="timeUsageStarted" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange.property.timeUsageStarted"></a>

```java
public java.lang.String getTimeUsageStarted();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#time_usage_started MeteringComputationSchedule#time_usage_started}.

---

### MeteringComputationScheduleQueryPropertiesGroupByTag <a name="MeteringComputationScheduleQueryPropertiesGroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_schedule.MeteringComputationScheduleQueryPropertiesGroupByTag;

MeteringComputationScheduleQueryPropertiesGroupByTag.builder()
//  .key(java.lang.String)
//  .namespace(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#key MeteringComputationSchedule#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#namespace MeteringComputationSchedule#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#value MeteringComputationSchedule#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#key MeteringComputationSchedule#key}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#namespace MeteringComputationSchedule#namespace}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#value MeteringComputationSchedule#value}.

---

### MeteringComputationScheduleResultLocation <a name="MeteringComputationScheduleResultLocation" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_schedule.MeteringComputationScheduleResultLocation;

MeteringComputationScheduleResultLocation.builder()
    .bucket(java.lang.String)
    .locationType(java.lang.String)
    .namespace(java.lang.String)
    .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#bucket MeteringComputationSchedule#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation.property.locationType">locationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#location_type MeteringComputationSchedule#location_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#namespace MeteringComputationSchedule#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#region MeteringComputationSchedule#region}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#bucket MeteringComputationSchedule#bucket}.

---

##### `locationType`<sup>Required</sup> <a name="locationType" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation.property.locationType"></a>

```java
public java.lang.String getLocationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#location_type MeteringComputationSchedule#location_type}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#namespace MeteringComputationSchedule#namespace}.

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#region MeteringComputationSchedule#region}.

---

### MeteringComputationScheduleTimeouts <a name="MeteringComputationScheduleTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_schedule.MeteringComputationScheduleTimeouts;

MeteringComputationScheduleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#create MeteringComputationSchedule#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#delete MeteringComputationSchedule#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#update MeteringComputationSchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#create MeteringComputationSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#delete MeteringComputationSchedule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_schedule#update MeteringComputationSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MeteringComputationScheduleQueryPropertiesDateRangeOutputReference <a name="MeteringComputationScheduleQueryPropertiesDateRangeOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_schedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference;

new MeteringComputationScheduleQueryPropertiesDateRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.resetDynamicDateRangeType">resetDynamicDateRangeType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.resetTimeUsageEnded">resetTimeUsageEnded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.resetTimeUsageStarted">resetTimeUsageStarted</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDynamicDateRangeType` <a name="resetDynamicDateRangeType" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.resetDynamicDateRangeType"></a>

```java
public void resetDynamicDateRangeType()
```

##### `resetTimeUsageEnded` <a name="resetTimeUsageEnded" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.resetTimeUsageEnded"></a>

```java
public void resetTimeUsageEnded()
```

##### `resetTimeUsageStarted` <a name="resetTimeUsageStarted" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.resetTimeUsageStarted"></a>

```java
public void resetTimeUsageStarted()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.dateRangeTypeInput">dateRangeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.dynamicDateRangeTypeInput">dynamicDateRangeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.timeUsageEndedInput">timeUsageEndedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.timeUsageStartedInput">timeUsageStartedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.dateRangeType">dateRangeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.dynamicDateRangeType">dynamicDateRangeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.timeUsageEnded">timeUsageEnded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.timeUsageStarted">timeUsageStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange">MeteringComputationScheduleQueryPropertiesDateRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dateRangeTypeInput`<sup>Optional</sup> <a name="dateRangeTypeInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.dateRangeTypeInput"></a>

```java
public java.lang.String getDateRangeTypeInput();
```

- *Type:* java.lang.String

---

##### `dynamicDateRangeTypeInput`<sup>Optional</sup> <a name="dynamicDateRangeTypeInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.dynamicDateRangeTypeInput"></a>

```java
public java.lang.String getDynamicDateRangeTypeInput();
```

- *Type:* java.lang.String

---

##### `timeUsageEndedInput`<sup>Optional</sup> <a name="timeUsageEndedInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.timeUsageEndedInput"></a>

```java
public java.lang.String getTimeUsageEndedInput();
```

- *Type:* java.lang.String

---

##### `timeUsageStartedInput`<sup>Optional</sup> <a name="timeUsageStartedInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.timeUsageStartedInput"></a>

```java
public java.lang.String getTimeUsageStartedInput();
```

- *Type:* java.lang.String

---

##### `dateRangeType`<sup>Required</sup> <a name="dateRangeType" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.dateRangeType"></a>

```java
public java.lang.String getDateRangeType();
```

- *Type:* java.lang.String

---

##### `dynamicDateRangeType`<sup>Required</sup> <a name="dynamicDateRangeType" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.dynamicDateRangeType"></a>

```java
public java.lang.String getDynamicDateRangeType();
```

- *Type:* java.lang.String

---

##### `timeUsageEnded`<sup>Required</sup> <a name="timeUsageEnded" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.timeUsageEnded"></a>

```java
public java.lang.String getTimeUsageEnded();
```

- *Type:* java.lang.String

---

##### `timeUsageStarted`<sup>Required</sup> <a name="timeUsageStarted" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.timeUsageStarted"></a>

```java
public java.lang.String getTimeUsageStarted();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference.property.internalValue"></a>

```java
public MeteringComputationScheduleQueryPropertiesDateRange getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange">MeteringComputationScheduleQueryPropertiesDateRange</a>

---


### MeteringComputationScheduleQueryPropertiesGroupByTagList <a name="MeteringComputationScheduleQueryPropertiesGroupByTagList" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_schedule.MeteringComputationScheduleQueryPropertiesGroupByTagList;

new MeteringComputationScheduleQueryPropertiesGroupByTagList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.get"></a>

```java
public MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag">MeteringComputationScheduleQueryPropertiesGroupByTag</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag">MeteringComputationScheduleQueryPropertiesGroupByTag</a>>

---


### MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference <a name="MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_schedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference;

new MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag">MeteringComputationScheduleQueryPropertiesGroupByTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag">MeteringComputationScheduleQueryPropertiesGroupByTag</a>

---


### MeteringComputationScheduleQueryPropertiesOutputReference <a name="MeteringComputationScheduleQueryPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_schedule.MeteringComputationScheduleQueryPropertiesOutputReference;

new MeteringComputationScheduleQueryPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.putDateRange">putDateRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.putGroupByTag">putGroupByTag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetCompartmentDepth">resetCompartmentDepth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetGroupBy">resetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetGroupByTag">resetGroupByTag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetIsAggregateByTime">resetIsAggregateByTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetQueryType">resetQueryType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDateRange` <a name="putDateRange" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.putDateRange"></a>

```java
public void putDateRange(MeteringComputationScheduleQueryPropertiesDateRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.putDateRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange">MeteringComputationScheduleQueryPropertiesDateRange</a>

---

##### `putGroupByTag` <a name="putGroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.putGroupByTag"></a>

```java
public void putGroupByTag(IResolvable OR java.util.List<MeteringComputationScheduleQueryPropertiesGroupByTag> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.putGroupByTag.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag">MeteringComputationScheduleQueryPropertiesGroupByTag</a>>

---

##### `resetCompartmentDepth` <a name="resetCompartmentDepth" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetCompartmentDepth"></a>

```java
public void resetCompartmentDepth()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetGroupBy` <a name="resetGroupBy" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetGroupBy"></a>

```java
public void resetGroupBy()
```

##### `resetGroupByTag` <a name="resetGroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetGroupByTag"></a>

```java
public void resetGroupByTag()
```

##### `resetIsAggregateByTime` <a name="resetIsAggregateByTime" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetIsAggregateByTime"></a>

```java
public void resetIsAggregateByTime()
```

##### `resetQueryType` <a name="resetQueryType" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.resetQueryType"></a>

```java
public void resetQueryType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.dateRange">dateRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference">MeteringComputationScheduleQueryPropertiesDateRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.groupByTag">groupByTag</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList">MeteringComputationScheduleQueryPropertiesGroupByTagList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.compartmentDepthInput">compartmentDepthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.dateRangeInput">dateRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange">MeteringComputationScheduleQueryPropertiesDateRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.granularityInput">granularityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.groupByInput">groupByInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.groupByTagInput">groupByTagInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag">MeteringComputationScheduleQueryPropertiesGroupByTag</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.isAggregateByTimeInput">isAggregateByTimeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.queryTypeInput">queryTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.compartmentDepth">compartmentDepth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.granularity">granularity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.groupBy">groupBy</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.isAggregateByTime">isAggregateByTime</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.queryType">queryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties">MeteringComputationScheduleQueryProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dateRange`<sup>Required</sup> <a name="dateRange" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.dateRange"></a>

```java
public MeteringComputationScheduleQueryPropertiesDateRangeOutputReference getDateRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRangeOutputReference">MeteringComputationScheduleQueryPropertiesDateRangeOutputReference</a>

---

##### `groupByTag`<sup>Required</sup> <a name="groupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.groupByTag"></a>

```java
public MeteringComputationScheduleQueryPropertiesGroupByTagList getGroupByTag();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTagList">MeteringComputationScheduleQueryPropertiesGroupByTagList</a>

---

##### `compartmentDepthInput`<sup>Optional</sup> <a name="compartmentDepthInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.compartmentDepthInput"></a>

```java
public java.lang.Number getCompartmentDepthInput();
```

- *Type:* java.lang.Number

---

##### `dateRangeInput`<sup>Optional</sup> <a name="dateRangeInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.dateRangeInput"></a>

```java
public MeteringComputationScheduleQueryPropertiesDateRange getDateRangeInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesDateRange">MeteringComputationScheduleQueryPropertiesDateRange</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `granularityInput`<sup>Optional</sup> <a name="granularityInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.granularityInput"></a>

```java
public java.lang.String getGranularityInput();
```

- *Type:* java.lang.String

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.groupByInput"></a>

```java
public java.util.List<java.lang.String> getGroupByInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupByTagInput`<sup>Optional</sup> <a name="groupByTagInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.groupByTagInput"></a>

```java
public java.lang.Object getGroupByTagInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesGroupByTag">MeteringComputationScheduleQueryPropertiesGroupByTag</a>>

---

##### `isAggregateByTimeInput`<sup>Optional</sup> <a name="isAggregateByTimeInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.isAggregateByTimeInput"></a>

```java
public java.lang.Object getIsAggregateByTimeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `queryTypeInput`<sup>Optional</sup> <a name="queryTypeInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.queryTypeInput"></a>

```java
public java.lang.String getQueryTypeInput();
```

- *Type:* java.lang.String

---

##### `compartmentDepth`<sup>Required</sup> <a name="compartmentDepth" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.compartmentDepth"></a>

```java
public java.lang.Number getCompartmentDepth();
```

- *Type:* java.lang.Number

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.granularity"></a>

```java
public java.lang.String getGranularity();
```

- *Type:* java.lang.String

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.groupBy"></a>

```java
public java.util.List<java.lang.String> getGroupBy();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isAggregateByTime`<sup>Required</sup> <a name="isAggregateByTime" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.isAggregateByTime"></a>

```java
public java.lang.Object getIsAggregateByTime();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `queryType`<sup>Required</sup> <a name="queryType" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.queryType"></a>

```java
public java.lang.String getQueryType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryPropertiesOutputReference.property.internalValue"></a>

```java
public MeteringComputationScheduleQueryProperties getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleQueryProperties">MeteringComputationScheduleQueryProperties</a>

---


### MeteringComputationScheduleResultLocationOutputReference <a name="MeteringComputationScheduleResultLocationOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_schedule.MeteringComputationScheduleResultLocationOutputReference;

new MeteringComputationScheduleResultLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.locationTypeInput">locationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.locationType">locationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation">MeteringComputationScheduleResultLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `locationTypeInput`<sup>Optional</sup> <a name="locationTypeInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.locationTypeInput"></a>

```java
public java.lang.String getLocationTypeInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `locationType`<sup>Required</sup> <a name="locationType" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.locationType"></a>

```java
public java.lang.String getLocationType();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocationOutputReference.property.internalValue"></a>

```java
public MeteringComputationScheduleResultLocation getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleResultLocation">MeteringComputationScheduleResultLocation</a>

---


### MeteringComputationScheduleTimeoutsOutputReference <a name="MeteringComputationScheduleTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_schedule.MeteringComputationScheduleTimeoutsOutputReference;

new MeteringComputationScheduleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts">MeteringComputationScheduleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.meteringComputationSchedule.MeteringComputationScheduleTimeouts">MeteringComputationScheduleTimeouts</a>

---




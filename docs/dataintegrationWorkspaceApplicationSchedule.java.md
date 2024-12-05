# `dataintegrationWorkspaceApplicationSchedule` Submodule <a name="`dataintegrationWorkspaceApplicationSchedule` Submodule" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataintegrationWorkspaceApplicationSchedule <a name="DataintegrationWorkspaceApplicationSchedule" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule oci_dataintegration_workspace_application_schedule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_application_schedule.DataintegrationWorkspaceApplicationSchedule;

DataintegrationWorkspaceApplicationSchedule.Builder.create(Construct scope, java.lang.String id)
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
    .applicationKey(java.lang.String)
    .identifier(java.lang.String)
    .name(java.lang.String)
    .workspaceId(java.lang.String)
//  .description(java.lang.String)
//  .frequencyDetails(DataintegrationWorkspaceApplicationScheduleFrequencyDetails)
//  .id(java.lang.String)
//  .isDaylightAdjustmentEnabled(java.lang.Boolean)
//  .isDaylightAdjustmentEnabled(IResolvable)
//  .key(java.lang.String)
//  .modelVersion(java.lang.String)
//  .objectStatus(java.lang.Number)
//  .objectVersion(java.lang.Number)
//  .registryMetadata(DataintegrationWorkspaceApplicationScheduleRegistryMetadata)
//  .timeouts(DataintegrationWorkspaceApplicationScheduleTimeouts)
//  .timezone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.applicationKey">applicationKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#application_key DataintegrationWorkspaceApplicationSchedule#application_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.identifier">identifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#identifier DataintegrationWorkspaceApplicationSchedule#identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#name DataintegrationWorkspaceApplicationSchedule#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#workspace_id DataintegrationWorkspaceApplicationSchedule#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#description DataintegrationWorkspaceApplicationSchedule#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.frequencyDetails">frequencyDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails">DataintegrationWorkspaceApplicationScheduleFrequencyDetails</a></code> | frequency_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#id DataintegrationWorkspaceApplicationSchedule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.isDaylightAdjustmentEnabled">isDaylightAdjustmentEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#is_daylight_adjustment_enabled DataintegrationWorkspaceApplicationSchedule#is_daylight_adjustment_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#key DataintegrationWorkspaceApplicationSchedule#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.modelVersion">modelVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#model_version DataintegrationWorkspaceApplicationSchedule#model_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.objectStatus">objectStatus</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#object_status DataintegrationWorkspaceApplicationSchedule#object_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.objectVersion">objectVersion</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#object_version DataintegrationWorkspaceApplicationSchedule#object_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.registryMetadata">registryMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata">DataintegrationWorkspaceApplicationScheduleRegistryMetadata</a></code> | registry_metadata block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts">DataintegrationWorkspaceApplicationScheduleTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.timezone">timezone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#timezone DataintegrationWorkspaceApplicationSchedule#timezone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationKey`<sup>Required</sup> <a name="applicationKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.applicationKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#application_key DataintegrationWorkspaceApplicationSchedule#application_key}.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.identifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#identifier DataintegrationWorkspaceApplicationSchedule#identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#name DataintegrationWorkspaceApplicationSchedule#name}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#workspace_id DataintegrationWorkspaceApplicationSchedule#workspace_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#description DataintegrationWorkspaceApplicationSchedule#description}.

---

##### `frequencyDetails`<sup>Optional</sup> <a name="frequencyDetails" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.frequencyDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails">DataintegrationWorkspaceApplicationScheduleFrequencyDetails</a>

frequency_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#frequency_details DataintegrationWorkspaceApplicationSchedule#frequency_details}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#id DataintegrationWorkspaceApplicationSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDaylightAdjustmentEnabled`<sup>Optional</sup> <a name="isDaylightAdjustmentEnabled" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.isDaylightAdjustmentEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#is_daylight_adjustment_enabled DataintegrationWorkspaceApplicationSchedule#is_daylight_adjustment_enabled}.

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.key"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#key DataintegrationWorkspaceApplicationSchedule#key}.

---

##### `modelVersion`<sup>Optional</sup> <a name="modelVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.modelVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#model_version DataintegrationWorkspaceApplicationSchedule#model_version}.

---

##### `objectStatus`<sup>Optional</sup> <a name="objectStatus" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.objectStatus"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#object_status DataintegrationWorkspaceApplicationSchedule#object_status}.

---

##### `objectVersion`<sup>Optional</sup> <a name="objectVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.objectVersion"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#object_version DataintegrationWorkspaceApplicationSchedule#object_version}.

---

##### `registryMetadata`<sup>Optional</sup> <a name="registryMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.registryMetadata"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata">DataintegrationWorkspaceApplicationScheduleRegistryMetadata</a>

registry_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#registry_metadata DataintegrationWorkspaceApplicationSchedule#registry_metadata}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts">DataintegrationWorkspaceApplicationScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#timeouts DataintegrationWorkspaceApplicationSchedule#timeouts}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.timezone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#timezone DataintegrationWorkspaceApplicationSchedule#timezone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putFrequencyDetails">putFrequencyDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putRegistryMetadata">putRegistryMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetFrequencyDetails">resetFrequencyDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetIsDaylightAdjustmentEnabled">resetIsDaylightAdjustmentEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetModelVersion">resetModelVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetObjectStatus">resetObjectStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetObjectVersion">resetObjectVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetRegistryMetadata">resetRegistryMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetTimezone">resetTimezone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFrequencyDetails` <a name="putFrequencyDetails" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putFrequencyDetails"></a>

```java
public void putFrequencyDetails(DataintegrationWorkspaceApplicationScheduleFrequencyDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putFrequencyDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails">DataintegrationWorkspaceApplicationScheduleFrequencyDetails</a>

---

##### `putRegistryMetadata` <a name="putRegistryMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putRegistryMetadata"></a>

```java
public void putRegistryMetadata(DataintegrationWorkspaceApplicationScheduleRegistryMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putRegistryMetadata.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata">DataintegrationWorkspaceApplicationScheduleRegistryMetadata</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putTimeouts"></a>

```java
public void putTimeouts(DataintegrationWorkspaceApplicationScheduleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts">DataintegrationWorkspaceApplicationScheduleTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFrequencyDetails` <a name="resetFrequencyDetails" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetFrequencyDetails"></a>

```java
public void resetFrequencyDetails()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetId"></a>

```java
public void resetId()
```

##### `resetIsDaylightAdjustmentEnabled` <a name="resetIsDaylightAdjustmentEnabled" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetIsDaylightAdjustmentEnabled"></a>

```java
public void resetIsDaylightAdjustmentEnabled()
```

##### `resetKey` <a name="resetKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetKey"></a>

```java
public void resetKey()
```

##### `resetModelVersion` <a name="resetModelVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetModelVersion"></a>

```java
public void resetModelVersion()
```

##### `resetObjectStatus` <a name="resetObjectStatus" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetObjectStatus"></a>

```java
public void resetObjectStatus()
```

##### `resetObjectVersion` <a name="resetObjectVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetObjectVersion"></a>

```java
public void resetObjectVersion()
```

##### `resetRegistryMetadata` <a name="resetRegistryMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetRegistryMetadata"></a>

```java
public void resetRegistryMetadata()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimezone` <a name="resetTimezone" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetTimezone"></a>

```java
public void resetTimezone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataintegrationWorkspaceApplicationSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_application_schedule.DataintegrationWorkspaceApplicationSchedule;

DataintegrationWorkspaceApplicationSchedule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_application_schedule.DataintegrationWorkspaceApplicationSchedule;

DataintegrationWorkspaceApplicationSchedule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_application_schedule.DataintegrationWorkspaceApplicationSchedule;

DataintegrationWorkspaceApplicationSchedule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_application_schedule.DataintegrationWorkspaceApplicationSchedule;

DataintegrationWorkspaceApplicationSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataintegrationWorkspaceApplicationSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataintegrationWorkspaceApplicationSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataintegrationWorkspaceApplicationSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataintegrationWorkspaceApplicationSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataintegrationWorkspaceApplicationSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.frequencyDetails">frequencyDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference">DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList">DataintegrationWorkspaceApplicationScheduleMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.modelType">modelType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.parentRef">parentRef</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList">DataintegrationWorkspaceApplicationScheduleParentRefList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.registryMetadata">registryMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference">DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference">DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.applicationKeyInput">applicationKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.frequencyDetailsInput">frequencyDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails">DataintegrationWorkspaceApplicationScheduleFrequencyDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.identifierInput">identifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.isDaylightAdjustmentEnabledInput">isDaylightAdjustmentEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.modelVersionInput">modelVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.objectStatusInput">objectStatusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.objectVersionInput">objectVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.registryMetadataInput">registryMetadataInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata">DataintegrationWorkspaceApplicationScheduleRegistryMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts">DataintegrationWorkspaceApplicationScheduleTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.timezoneInput">timezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.applicationKey">applicationKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.isDaylightAdjustmentEnabled">isDaylightAdjustmentEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.modelVersion">modelVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.objectStatus">objectStatus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.objectVersion">objectVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `frequencyDetails`<sup>Required</sup> <a name="frequencyDetails" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.frequencyDetails"></a>

```java
public DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference getFrequencyDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference">DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.metadata"></a>

```java
public DataintegrationWorkspaceApplicationScheduleMetadataList getMetadata();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList">DataintegrationWorkspaceApplicationScheduleMetadataList</a>

---

##### `modelType`<sup>Required</sup> <a name="modelType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.modelType"></a>

```java
public java.lang.String getModelType();
```

- *Type:* java.lang.String

---

##### `parentRef`<sup>Required</sup> <a name="parentRef" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.parentRef"></a>

```java
public DataintegrationWorkspaceApplicationScheduleParentRefList getParentRef();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList">DataintegrationWorkspaceApplicationScheduleParentRefList</a>

---

##### `registryMetadata`<sup>Required</sup> <a name="registryMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.registryMetadata"></a>

```java
public DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference getRegistryMetadata();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference">DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.timeouts"></a>

```java
public DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference">DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference</a>

---

##### `applicationKeyInput`<sup>Optional</sup> <a name="applicationKeyInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.applicationKeyInput"></a>

```java
public java.lang.String getApplicationKeyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `frequencyDetailsInput`<sup>Optional</sup> <a name="frequencyDetailsInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.frequencyDetailsInput"></a>

```java
public DataintegrationWorkspaceApplicationScheduleFrequencyDetails getFrequencyDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails">DataintegrationWorkspaceApplicationScheduleFrequencyDetails</a>

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.identifierInput"></a>

```java
public java.lang.String getIdentifierInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isDaylightAdjustmentEnabledInput`<sup>Optional</sup> <a name="isDaylightAdjustmentEnabledInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.isDaylightAdjustmentEnabledInput"></a>

```java
public java.lang.Object getIsDaylightAdjustmentEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `modelVersionInput`<sup>Optional</sup> <a name="modelVersionInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.modelVersionInput"></a>

```java
public java.lang.String getModelVersionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `objectStatusInput`<sup>Optional</sup> <a name="objectStatusInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.objectStatusInput"></a>

```java
public java.lang.Number getObjectStatusInput();
```

- *Type:* java.lang.Number

---

##### `objectVersionInput`<sup>Optional</sup> <a name="objectVersionInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.objectVersionInput"></a>

```java
public java.lang.Number getObjectVersionInput();
```

- *Type:* java.lang.Number

---

##### `registryMetadataInput`<sup>Optional</sup> <a name="registryMetadataInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.registryMetadataInput"></a>

```java
public DataintegrationWorkspaceApplicationScheduleRegistryMetadata getRegistryMetadataInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata">DataintegrationWorkspaceApplicationScheduleRegistryMetadata</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts">DataintegrationWorkspaceApplicationScheduleTimeouts</a>

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.timezoneInput"></a>

```java
public java.lang.String getTimezoneInput();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `applicationKey`<sup>Required</sup> <a name="applicationKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.applicationKey"></a>

```java
public java.lang.String getApplicationKey();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `isDaylightAdjustmentEnabled`<sup>Required</sup> <a name="isDaylightAdjustmentEnabled" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.isDaylightAdjustmentEnabled"></a>

```java
public java.lang.Object getIsDaylightAdjustmentEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `modelVersion`<sup>Required</sup> <a name="modelVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.modelVersion"></a>

```java
public java.lang.String getModelVersion();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `objectStatus`<sup>Required</sup> <a name="objectStatus" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.objectStatus"></a>

```java
public java.lang.Number getObjectStatus();
```

- *Type:* java.lang.Number

---

##### `objectVersion`<sup>Required</sup> <a name="objectVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.objectVersion"></a>

```java
public java.lang.Number getObjectVersion();
```

- *Type:* java.lang.Number

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataintegrationWorkspaceApplicationScheduleConfig <a name="DataintegrationWorkspaceApplicationScheduleConfig" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_application_schedule.DataintegrationWorkspaceApplicationScheduleConfig;

DataintegrationWorkspaceApplicationScheduleConfig.builder()
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
    .applicationKey(java.lang.String)
    .identifier(java.lang.String)
    .name(java.lang.String)
    .workspaceId(java.lang.String)
//  .description(java.lang.String)
//  .frequencyDetails(DataintegrationWorkspaceApplicationScheduleFrequencyDetails)
//  .id(java.lang.String)
//  .isDaylightAdjustmentEnabled(java.lang.Boolean)
//  .isDaylightAdjustmentEnabled(IResolvable)
//  .key(java.lang.String)
//  .modelVersion(java.lang.String)
//  .objectStatus(java.lang.Number)
//  .objectVersion(java.lang.Number)
//  .registryMetadata(DataintegrationWorkspaceApplicationScheduleRegistryMetadata)
//  .timeouts(DataintegrationWorkspaceApplicationScheduleTimeouts)
//  .timezone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.applicationKey">applicationKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#application_key DataintegrationWorkspaceApplicationSchedule#application_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.identifier">identifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#identifier DataintegrationWorkspaceApplicationSchedule#identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#name DataintegrationWorkspaceApplicationSchedule#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#workspace_id DataintegrationWorkspaceApplicationSchedule#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#description DataintegrationWorkspaceApplicationSchedule#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.frequencyDetails">frequencyDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails">DataintegrationWorkspaceApplicationScheduleFrequencyDetails</a></code> | frequency_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#id DataintegrationWorkspaceApplicationSchedule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.isDaylightAdjustmentEnabled">isDaylightAdjustmentEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#is_daylight_adjustment_enabled DataintegrationWorkspaceApplicationSchedule#is_daylight_adjustment_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#key DataintegrationWorkspaceApplicationSchedule#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.modelVersion">modelVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#model_version DataintegrationWorkspaceApplicationSchedule#model_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.objectStatus">objectStatus</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#object_status DataintegrationWorkspaceApplicationSchedule#object_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.objectVersion">objectVersion</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#object_version DataintegrationWorkspaceApplicationSchedule#object_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.registryMetadata">registryMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata">DataintegrationWorkspaceApplicationScheduleRegistryMetadata</a></code> | registry_metadata block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts">DataintegrationWorkspaceApplicationScheduleTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.timezone">timezone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#timezone DataintegrationWorkspaceApplicationSchedule#timezone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationKey`<sup>Required</sup> <a name="applicationKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.applicationKey"></a>

```java
public java.lang.String getApplicationKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#application_key DataintegrationWorkspaceApplicationSchedule#application_key}.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#identifier DataintegrationWorkspaceApplicationSchedule#identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#name DataintegrationWorkspaceApplicationSchedule#name}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#workspace_id DataintegrationWorkspaceApplicationSchedule#workspace_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#description DataintegrationWorkspaceApplicationSchedule#description}.

---

##### `frequencyDetails`<sup>Optional</sup> <a name="frequencyDetails" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.frequencyDetails"></a>

```java
public DataintegrationWorkspaceApplicationScheduleFrequencyDetails getFrequencyDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails">DataintegrationWorkspaceApplicationScheduleFrequencyDetails</a>

frequency_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#frequency_details DataintegrationWorkspaceApplicationSchedule#frequency_details}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#id DataintegrationWorkspaceApplicationSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDaylightAdjustmentEnabled`<sup>Optional</sup> <a name="isDaylightAdjustmentEnabled" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.isDaylightAdjustmentEnabled"></a>

```java
public java.lang.Object getIsDaylightAdjustmentEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#is_daylight_adjustment_enabled DataintegrationWorkspaceApplicationSchedule#is_daylight_adjustment_enabled}.

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#key DataintegrationWorkspaceApplicationSchedule#key}.

---

##### `modelVersion`<sup>Optional</sup> <a name="modelVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.modelVersion"></a>

```java
public java.lang.String getModelVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#model_version DataintegrationWorkspaceApplicationSchedule#model_version}.

---

##### `objectStatus`<sup>Optional</sup> <a name="objectStatus" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.objectStatus"></a>

```java
public java.lang.Number getObjectStatus();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#object_status DataintegrationWorkspaceApplicationSchedule#object_status}.

---

##### `objectVersion`<sup>Optional</sup> <a name="objectVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.objectVersion"></a>

```java
public java.lang.Number getObjectVersion();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#object_version DataintegrationWorkspaceApplicationSchedule#object_version}.

---

##### `registryMetadata`<sup>Optional</sup> <a name="registryMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.registryMetadata"></a>

```java
public DataintegrationWorkspaceApplicationScheduleRegistryMetadata getRegistryMetadata();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata">DataintegrationWorkspaceApplicationScheduleRegistryMetadata</a>

registry_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#registry_metadata DataintegrationWorkspaceApplicationSchedule#registry_metadata}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.timeouts"></a>

```java
public DataintegrationWorkspaceApplicationScheduleTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts">DataintegrationWorkspaceApplicationScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#timeouts DataintegrationWorkspaceApplicationSchedule#timeouts}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#timezone DataintegrationWorkspaceApplicationSchedule#timezone}.

---

### DataintegrationWorkspaceApplicationScheduleFrequencyDetails <a name="DataintegrationWorkspaceApplicationScheduleFrequencyDetails" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_application_schedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails;

DataintegrationWorkspaceApplicationScheduleFrequencyDetails.builder()
    .modelType(java.lang.String)
//  .customExpression(java.lang.String)
//  .dayOfWeek(java.lang.String)
//  .days(java.util.List<java.lang.Number>)
//  .frequency(java.lang.String)
//  .interval(java.lang.Number)
//  .time(DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime)
//  .weekOfMonth(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.modelType">modelType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#model_type DataintegrationWorkspaceApplicationSchedule#model_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.customExpression">customExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#custom_expression DataintegrationWorkspaceApplicationSchedule#custom_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#day_of_week DataintegrationWorkspaceApplicationSchedule#day_of_week}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.days">days</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#days DataintegrationWorkspaceApplicationSchedule#days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.frequency">frequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#frequency DataintegrationWorkspaceApplicationSchedule#frequency}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.interval">interval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#interval DataintegrationWorkspaceApplicationSchedule#interval}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.time">time</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime">DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime</a></code> | time block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.weekOfMonth">weekOfMonth</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#week_of_month DataintegrationWorkspaceApplicationSchedule#week_of_month}. |

---

##### `modelType`<sup>Required</sup> <a name="modelType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.modelType"></a>

```java
public java.lang.String getModelType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#model_type DataintegrationWorkspaceApplicationSchedule#model_type}.

---

##### `customExpression`<sup>Optional</sup> <a name="customExpression" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.customExpression"></a>

```java
public java.lang.String getCustomExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#custom_expression DataintegrationWorkspaceApplicationSchedule#custom_expression}.

---

##### `dayOfWeek`<sup>Optional</sup> <a name="dayOfWeek" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#day_of_week DataintegrationWorkspaceApplicationSchedule#day_of_week}.

---

##### `days`<sup>Optional</sup> <a name="days" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.days"></a>

```java
public java.util.List<java.lang.Number> getDays();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#days DataintegrationWorkspaceApplicationSchedule#days}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#frequency DataintegrationWorkspaceApplicationSchedule#frequency}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#interval DataintegrationWorkspaceApplicationSchedule#interval}.

---

##### `time`<sup>Optional</sup> <a name="time" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.time"></a>

```java
public DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime getTime();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime">DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime</a>

time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#time DataintegrationWorkspaceApplicationSchedule#time}

---

##### `weekOfMonth`<sup>Optional</sup> <a name="weekOfMonth" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.weekOfMonth"></a>

```java
public java.lang.String getWeekOfMonth();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#week_of_month DataintegrationWorkspaceApplicationSchedule#week_of_month}.

---

### DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime <a name="DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_application_schedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime;

DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime.builder()
//  .hour(java.lang.Number)
//  .minute(java.lang.Number)
//  .second(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime.property.hour">hour</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#hour DataintegrationWorkspaceApplicationSchedule#hour}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime.property.minute">minute</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#minute DataintegrationWorkspaceApplicationSchedule#minute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime.property.second">second</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#second DataintegrationWorkspaceApplicationSchedule#second}. |

---

##### `hour`<sup>Optional</sup> <a name="hour" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime.property.hour"></a>

```java
public java.lang.Number getHour();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#hour DataintegrationWorkspaceApplicationSchedule#hour}.

---

##### `minute`<sup>Optional</sup> <a name="minute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime.property.minute"></a>

```java
public java.lang.Number getMinute();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#minute DataintegrationWorkspaceApplicationSchedule#minute}.

---

##### `second`<sup>Optional</sup> <a name="second" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime.property.second"></a>

```java
public java.lang.Number getSecond();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#second DataintegrationWorkspaceApplicationSchedule#second}.

---

### DataintegrationWorkspaceApplicationScheduleMetadata <a name="DataintegrationWorkspaceApplicationScheduleMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_application_schedule.DataintegrationWorkspaceApplicationScheduleMetadata;

DataintegrationWorkspaceApplicationScheduleMetadata.builder()
    .build();
```


### DataintegrationWorkspaceApplicationScheduleMetadataAggregator <a name="DataintegrationWorkspaceApplicationScheduleMetadataAggregator" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregator"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregator.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_application_schedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregator;

DataintegrationWorkspaceApplicationScheduleMetadataAggregator.builder()
    .build();
```


### DataintegrationWorkspaceApplicationScheduleMetadataCountStatistics <a name="DataintegrationWorkspaceApplicationScheduleMetadataCountStatistics" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatistics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatistics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_application_schedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatistics;

DataintegrationWorkspaceApplicationScheduleMetadataCountStatistics.builder()
    .build();
```


### DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStruct <a name="DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStruct" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_application_schedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStruct;

DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStruct.builder()
    .build();
```


### DataintegrationWorkspaceApplicationScheduleParentRef <a name="DataintegrationWorkspaceApplicationScheduleParentRef" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRef"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_application_schedule.DataintegrationWorkspaceApplicationScheduleParentRef;

DataintegrationWorkspaceApplicationScheduleParentRef.builder()
    .build();
```


### DataintegrationWorkspaceApplicationScheduleRegistryMetadata <a name="DataintegrationWorkspaceApplicationScheduleRegistryMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_application_schedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata;

DataintegrationWorkspaceApplicationScheduleRegistryMetadata.builder()
//  .aggregatorKey(java.lang.String)
//  .isFavorite(java.lang.Boolean)
//  .isFavorite(IResolvable)
//  .key(java.lang.String)
//  .labels(java.util.List<java.lang.String>)
//  .registryVersion(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata.property.aggregatorKey">aggregatorKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#aggregator_key DataintegrationWorkspaceApplicationSchedule#aggregator_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata.property.isFavorite">isFavorite</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#is_favorite DataintegrationWorkspaceApplicationSchedule#is_favorite}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#key DataintegrationWorkspaceApplicationSchedule#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#labels DataintegrationWorkspaceApplicationSchedule#labels}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata.property.registryVersion">registryVersion</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#registry_version DataintegrationWorkspaceApplicationSchedule#registry_version}. |

---

##### `aggregatorKey`<sup>Optional</sup> <a name="aggregatorKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata.property.aggregatorKey"></a>

```java
public java.lang.String getAggregatorKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#aggregator_key DataintegrationWorkspaceApplicationSchedule#aggregator_key}.

---

##### `isFavorite`<sup>Optional</sup> <a name="isFavorite" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata.property.isFavorite"></a>

```java
public java.lang.Object getIsFavorite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#is_favorite DataintegrationWorkspaceApplicationSchedule#is_favorite}.

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#key DataintegrationWorkspaceApplicationSchedule#key}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#labels DataintegrationWorkspaceApplicationSchedule#labels}.

---

##### `registryVersion`<sup>Optional</sup> <a name="registryVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata.property.registryVersion"></a>

```java
public java.lang.Number getRegistryVersion();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#registry_version DataintegrationWorkspaceApplicationSchedule#registry_version}.

---

### DataintegrationWorkspaceApplicationScheduleTimeouts <a name="DataintegrationWorkspaceApplicationScheduleTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_application_schedule.DataintegrationWorkspaceApplicationScheduleTimeouts;

DataintegrationWorkspaceApplicationScheduleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#create DataintegrationWorkspaceApplicationSchedule#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#delete DataintegrationWorkspaceApplicationSchedule#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#update DataintegrationWorkspaceApplicationSchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#create DataintegrationWorkspaceApplicationSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#delete DataintegrationWorkspaceApplicationSchedule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#update DataintegrationWorkspaceApplicationSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference <a name="DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_application_schedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference;

new DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.putTime">putTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetCustomExpression">resetCustomExpression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetDayOfWeek">resetDayOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetDays">resetDays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetTime">resetTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetWeekOfMonth">resetWeekOfMonth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTime` <a name="putTime" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.putTime"></a>

```java
public void putTime(DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.putTime.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime">DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime</a>

---

##### `resetCustomExpression` <a name="resetCustomExpression" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetCustomExpression"></a>

```java
public void resetCustomExpression()
```

##### `resetDayOfWeek` <a name="resetDayOfWeek" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetDayOfWeek"></a>

```java
public void resetDayOfWeek()
```

##### `resetDays` <a name="resetDays" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetDays"></a>

```java
public void resetDays()
```

##### `resetFrequency` <a name="resetFrequency" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetFrequency"></a>

```java
public void resetFrequency()
```

##### `resetInterval` <a name="resetInterval" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetInterval"></a>

```java
public void resetInterval()
```

##### `resetTime` <a name="resetTime" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetTime"></a>

```java
public void resetTime()
```

##### `resetWeekOfMonth` <a name="resetWeekOfMonth" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetWeekOfMonth"></a>

```java
public void resetWeekOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.time">time</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference">DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.customExpressionInput">customExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.daysInput">daysInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.frequencyInput">frequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.intervalInput">intervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.modelTypeInput">modelTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.timeInput">timeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime">DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.weekOfMonthInput">weekOfMonthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.customExpression">customExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.days">days</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.frequency">frequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.modelType">modelType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.weekOfMonth">weekOfMonth</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails">DataintegrationWorkspaceApplicationScheduleFrequencyDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `time`<sup>Required</sup> <a name="time" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.time"></a>

```java
public DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference getTime();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference">DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference</a>

---

##### `customExpressionInput`<sup>Optional</sup> <a name="customExpressionInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.customExpressionInput"></a>

```java
public java.lang.String getCustomExpressionInput();
```

- *Type:* java.lang.String

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.dayOfWeekInput"></a>

```java
public java.lang.String getDayOfWeekInput();
```

- *Type:* java.lang.String

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.daysInput"></a>

```java
public java.util.List<java.lang.Number> getDaysInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.frequencyInput"></a>

```java
public java.lang.String getFrequencyInput();
```

- *Type:* java.lang.String

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.intervalInput"></a>

```java
public java.lang.Number getIntervalInput();
```

- *Type:* java.lang.Number

---

##### `modelTypeInput`<sup>Optional</sup> <a name="modelTypeInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.modelTypeInput"></a>

```java
public java.lang.String getModelTypeInput();
```

- *Type:* java.lang.String

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.timeInput"></a>

```java
public DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime getTimeInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime">DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime</a>

---

##### `weekOfMonthInput`<sup>Optional</sup> <a name="weekOfMonthInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.weekOfMonthInput"></a>

```java
public java.lang.String getWeekOfMonthInput();
```

- *Type:* java.lang.String

---

##### `customExpression`<sup>Required</sup> <a name="customExpression" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.customExpression"></a>

```java
public java.lang.String getCustomExpression();
```

- *Type:* java.lang.String

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

---

##### `days`<sup>Required</sup> <a name="days" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.days"></a>

```java
public java.util.List<java.lang.Number> getDays();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

---

##### `interval`<sup>Required</sup> <a name="interval" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `modelType`<sup>Required</sup> <a name="modelType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.modelType"></a>

```java
public java.lang.String getModelType();
```

- *Type:* java.lang.String

---

##### `weekOfMonth`<sup>Required</sup> <a name="weekOfMonth" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.weekOfMonth"></a>

```java
public java.lang.String getWeekOfMonth();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.internalValue"></a>

```java
public DataintegrationWorkspaceApplicationScheduleFrequencyDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails">DataintegrationWorkspaceApplicationScheduleFrequencyDetails</a>

---


### DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference <a name="DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_application_schedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference;

new DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.resetHour">resetHour</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.resetMinute">resetMinute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.resetSecond">resetSecond</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHour` <a name="resetHour" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.resetHour"></a>

```java
public void resetHour()
```

##### `resetMinute` <a name="resetMinute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.resetMinute"></a>

```java
public void resetMinute()
```

##### `resetSecond` <a name="resetSecond" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.resetSecond"></a>

```java
public void resetSecond()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.hourInput">hourInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.minuteInput">minuteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.secondInput">secondInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.hour">hour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.minute">minute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.second">second</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime">DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hourInput`<sup>Optional</sup> <a name="hourInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.hourInput"></a>

```java
public java.lang.Number getHourInput();
```

- *Type:* java.lang.Number

---

##### `minuteInput`<sup>Optional</sup> <a name="minuteInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.minuteInput"></a>

```java
public java.lang.Number getMinuteInput();
```

- *Type:* java.lang.Number

---

##### `secondInput`<sup>Optional</sup> <a name="secondInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.secondInput"></a>

```java
public java.lang.Number getSecondInput();
```

- *Type:* java.lang.Number

---

##### `hour`<sup>Required</sup> <a name="hour" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.hour"></a>

```java
public java.lang.Number getHour();
```

- *Type:* java.lang.Number

---

##### `minute`<sup>Required</sup> <a name="minute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.minute"></a>

```java
public java.lang.Number getMinute();
```

- *Type:* java.lang.Number

---

##### `second`<sup>Required</sup> <a name="second" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.second"></a>

```java
public java.lang.Number getSecond();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.internalValue"></a>

```java
public DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime">DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime</a>

---


### DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList <a name="DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_application_schedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList;

new DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.get"></a>

```java
public DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference <a name="DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_application_schedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference;

new DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregator">DataintegrationWorkspaceApplicationScheduleMetadataAggregator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.internalValue"></a>

```java
public DataintegrationWorkspaceApplicationScheduleMetadataAggregator getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregator">DataintegrationWorkspaceApplicationScheduleMetadataAggregator</a>

---


### DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList <a name="DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_application_schedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList;

new DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.get"></a>

```java
public DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList <a name="DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_application_schedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList;

new DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.get"></a>

```java
public DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference <a name="DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_application_schedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference;

new DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount">objectCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType">objectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStruct">DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `objectCount`<sup>Required</sup> <a name="objectCount" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount"></a>

```java
public java.lang.String getObjectCount();
```

- *Type:* java.lang.String

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue"></a>

```java
public DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStruct getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStruct">DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStruct</a>

---


### DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference <a name="DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_application_schedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference;

new DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.property.objectTypeCountList">objectTypeCountList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList">DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatistics">DataintegrationWorkspaceApplicationScheduleMetadataCountStatistics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `objectTypeCountList`<sup>Required</sup> <a name="objectTypeCountList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.property.objectTypeCountList"></a>

```java
public DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList getObjectTypeCountList();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList">DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.property.internalValue"></a>

```java
public DataintegrationWorkspaceApplicationScheduleMetadataCountStatistics getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatistics">DataintegrationWorkspaceApplicationScheduleMetadataCountStatistics</a>

---


### DataintegrationWorkspaceApplicationScheduleMetadataList <a name="DataintegrationWorkspaceApplicationScheduleMetadataList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_application_schedule.DataintegrationWorkspaceApplicationScheduleMetadataList;

new DataintegrationWorkspaceApplicationScheduleMetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.get"></a>

```java
public DataintegrationWorkspaceApplicationScheduleMetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataintegrationWorkspaceApplicationScheduleMetadataOutputReference <a name="DataintegrationWorkspaceApplicationScheduleMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_application_schedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference;

new DataintegrationWorkspaceApplicationScheduleMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.aggregator">aggregator</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList">DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.aggregatorKey">aggregatorKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.countStatistics">countStatistics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList">DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.createdByName">createdByName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.identifierPath">identifierPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.infoFields">infoFields</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.isFavorite">isFavorite</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.registryVersion">registryVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.updatedBy">updatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.updatedByName">updatedByName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadata">DataintegrationWorkspaceApplicationScheduleMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregator`<sup>Required</sup> <a name="aggregator" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.aggregator"></a>

```java
public DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList getAggregator();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList">DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList</a>

---

##### `aggregatorKey`<sup>Required</sup> <a name="aggregatorKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.aggregatorKey"></a>

```java
public java.lang.String getAggregatorKey();
```

- *Type:* java.lang.String

---

##### `countStatistics`<sup>Required</sup> <a name="countStatistics" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.countStatistics"></a>

```java
public DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList getCountStatistics();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList">DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList</a>

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `createdByName`<sup>Required</sup> <a name="createdByName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.createdByName"></a>

```java
public java.lang.String getCreatedByName();
```

- *Type:* java.lang.String

---

##### `identifierPath`<sup>Required</sup> <a name="identifierPath" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.identifierPath"></a>

```java
public java.lang.String getIdentifierPath();
```

- *Type:* java.lang.String

---

##### `infoFields`<sup>Required</sup> <a name="infoFields" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.infoFields"></a>

```java
public StringMap getInfoFields();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `isFavorite`<sup>Required</sup> <a name="isFavorite" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.isFavorite"></a>

```java
public IResolvable getIsFavorite();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `registryVersion`<sup>Required</sup> <a name="registryVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.registryVersion"></a>

```java
public java.lang.Number getRegistryVersion();
```

- *Type:* java.lang.Number

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.updatedBy"></a>

```java
public java.lang.String getUpdatedBy();
```

- *Type:* java.lang.String

---

##### `updatedByName`<sup>Required</sup> <a name="updatedByName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.updatedByName"></a>

```java
public java.lang.String getUpdatedByName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.internalValue"></a>

```java
public DataintegrationWorkspaceApplicationScheduleMetadata getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadata">DataintegrationWorkspaceApplicationScheduleMetadata</a>

---


### DataintegrationWorkspaceApplicationScheduleParentRefList <a name="DataintegrationWorkspaceApplicationScheduleParentRefList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_application_schedule.DataintegrationWorkspaceApplicationScheduleParentRefList;

new DataintegrationWorkspaceApplicationScheduleParentRefList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.get"></a>

```java
public DataintegrationWorkspaceApplicationScheduleParentRefOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataintegrationWorkspaceApplicationScheduleParentRefOutputReference <a name="DataintegrationWorkspaceApplicationScheduleParentRefOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_application_schedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference;

new DataintegrationWorkspaceApplicationScheduleParentRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.property.rootDocId">rootDocId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRef">DataintegrationWorkspaceApplicationScheduleParentRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `rootDocId`<sup>Required</sup> <a name="rootDocId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.property.rootDocId"></a>

```java
public java.lang.String getRootDocId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.property.internalValue"></a>

```java
public DataintegrationWorkspaceApplicationScheduleParentRef getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRef">DataintegrationWorkspaceApplicationScheduleParentRef</a>

---


### DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference <a name="DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_application_schedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference;

new DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resetAggregatorKey">resetAggregatorKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resetIsFavorite">resetIsFavorite</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resetRegistryVersion">resetRegistryVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAggregatorKey` <a name="resetAggregatorKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resetAggregatorKey"></a>

```java
public void resetAggregatorKey()
```

##### `resetIsFavorite` <a name="resetIsFavorite" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resetIsFavorite"></a>

```java
public void resetIsFavorite()
```

##### `resetKey` <a name="resetKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetLabels` <a name="resetLabels" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetRegistryVersion` <a name="resetRegistryVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resetRegistryVersion"></a>

```java
public void resetRegistryVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.aggregatorKeyInput">aggregatorKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.isFavoriteInput">isFavoriteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.registryVersionInput">registryVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.aggregatorKey">aggregatorKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.isFavorite">isFavorite</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.registryVersion">registryVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata">DataintegrationWorkspaceApplicationScheduleRegistryMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregatorKeyInput`<sup>Optional</sup> <a name="aggregatorKeyInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.aggregatorKeyInput"></a>

```java
public java.lang.String getAggregatorKeyInput();
```

- *Type:* java.lang.String

---

##### `isFavoriteInput`<sup>Optional</sup> <a name="isFavoriteInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.isFavoriteInput"></a>

```java
public java.lang.Object getIsFavoriteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.labelsInput"></a>

```java
public java.util.List<java.lang.String> getLabelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `registryVersionInput`<sup>Optional</sup> <a name="registryVersionInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.registryVersionInput"></a>

```java
public java.lang.Number getRegistryVersionInput();
```

- *Type:* java.lang.Number

---

##### `aggregatorKey`<sup>Required</sup> <a name="aggregatorKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.aggregatorKey"></a>

```java
public java.lang.String getAggregatorKey();
```

- *Type:* java.lang.String

---

##### `isFavorite`<sup>Required</sup> <a name="isFavorite" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.isFavorite"></a>

```java
public java.lang.Object getIsFavorite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `registryVersion`<sup>Required</sup> <a name="registryVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.registryVersion"></a>

```java
public java.lang.Number getRegistryVersion();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.internalValue"></a>

```java
public DataintegrationWorkspaceApplicationScheduleRegistryMetadata getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata">DataintegrationWorkspaceApplicationScheduleRegistryMetadata</a>

---


### DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference <a name="DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_application_schedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference;

new DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts">DataintegrationWorkspaceApplicationScheduleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts">DataintegrationWorkspaceApplicationScheduleTimeouts</a>

---




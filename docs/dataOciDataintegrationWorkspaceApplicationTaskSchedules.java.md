# `dataOciDataintegrationWorkspaceApplicationTaskSchedules` Submodule <a name="`dataOciDataintegrationWorkspaceApplicationTaskSchedules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataintegrationWorkspaceApplicationTaskSchedules <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedules" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules oci_dataintegration_workspace_application_task_schedules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules;

DataOciDataintegrationWorkspaceApplicationTaskSchedules.Builder.create(Construct scope, java.lang.String id)
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
    .workspaceId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter>)
//  .id(java.lang.String)
//  .identifier(java.util.List<java.lang.String>)
//  .isEnabled(java.lang.Boolean)
//  .isEnabled(IResolvable)
//  .key(java.util.List<java.lang.String>)
//  .name(java.lang.String)
//  .type(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.applicationKey">applicationKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#application_key DataOciDataintegrationWorkspaceApplicationTaskSchedules#application_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#workspace_id DataOciDataintegrationWorkspaceApplicationTaskSchedules#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter">DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#id DataOciDataintegrationWorkspaceApplicationTaskSchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.identifier">identifier</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#identifier DataOciDataintegrationWorkspaceApplicationTaskSchedules#identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#is_enabled DataOciDataintegrationWorkspaceApplicationTaskSchedules#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.key">key</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#key DataOciDataintegrationWorkspaceApplicationTaskSchedules#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#name DataOciDataintegrationWorkspaceApplicationTaskSchedules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.type">type</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#type DataOciDataintegrationWorkspaceApplicationTaskSchedules#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationKey`<sup>Required</sup> <a name="applicationKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.applicationKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#application_key DataOciDataintegrationWorkspaceApplicationTaskSchedules#application_key}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#workspace_id DataOciDataintegrationWorkspaceApplicationTaskSchedules#workspace_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter">DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#filter DataOciDataintegrationWorkspaceApplicationTaskSchedules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#id DataOciDataintegrationWorkspaceApplicationTaskSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.identifier"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#identifier DataOciDataintegrationWorkspaceApplicationTaskSchedules#identifier}.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.isEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#is_enabled DataOciDataintegrationWorkspaceApplicationTaskSchedules#is_enabled}.

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.key"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#key DataOciDataintegrationWorkspaceApplicationTaskSchedules#key}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#name DataOciDataintegrationWorkspaceApplicationTaskSchedules#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.type"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#type DataOciDataintegrationWorkspaceApplicationTaskSchedules#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.resetIdentifier">resetIdentifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter">DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.resetId"></a>

```java
public void resetId()
```

##### `resetIdentifier` <a name="resetIdentifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.resetIdentifier"></a>

```java
public void resetIdentifier()
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```

##### `resetKey` <a name="resetKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.resetKey"></a>

```java
public void resetKey()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.resetName"></a>

```java
public void resetName()
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataintegrationWorkspaceApplicationTaskSchedules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules;

DataOciDataintegrationWorkspaceApplicationTaskSchedules.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules;

DataOciDataintegrationWorkspaceApplicationTaskSchedules.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules;

DataOciDataintegrationWorkspaceApplicationTaskSchedules.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules;

DataOciDataintegrationWorkspaceApplicationTaskSchedules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDataintegrationWorkspaceApplicationTaskSchedules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDataintegrationWorkspaceApplicationTaskSchedules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDataintegrationWorkspaceApplicationTaskSchedules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDataintegrationWorkspaceApplicationTaskSchedules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataintegrationWorkspaceApplicationTaskSchedules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.taskScheduleSummaryCollection">taskScheduleSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.applicationKeyInput">applicationKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter">DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.identifierInput">identifierInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.keyInput">keyInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.typeInput">typeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.applicationKey">applicationKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.identifier">identifier</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.key">key</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.type">type</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.filter"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList</a>

---

##### `taskScheduleSummaryCollection`<sup>Required</sup> <a name="taskScheduleSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.taskScheduleSummaryCollection"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList getTaskScheduleSummaryCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList</a>

---

##### `applicationKeyInput`<sup>Optional</sup> <a name="applicationKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.applicationKeyInput"></a>

```java
public java.lang.String getApplicationKeyInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter">DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter</a>>

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.identifierInput"></a>

```java
public java.util.List<java.lang.String> getIdentifierInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.keyInput"></a>

```java
public java.util.List<java.lang.String> getKeyInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.typeInput"></a>

```java
public java.util.List<java.lang.String> getTypeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `applicationKey`<sup>Required</sup> <a name="applicationKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.applicationKey"></a>

```java
public java.lang.String getApplicationKey();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.identifier"></a>

```java
public java.util.List<java.lang.String> getIdentifier();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.key"></a>

```java
public java.util.List<java.lang.String> getKey();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.type"></a>

```java
public java.util.List<java.lang.String> getType();
```

- *Type:* java.util.List<java.lang.String>

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig;

DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.builder()
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
    .workspaceId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter>)
//  .id(java.lang.String)
//  .identifier(java.util.List<java.lang.String>)
//  .isEnabled(java.lang.Boolean)
//  .isEnabled(IResolvable)
//  .key(java.util.List<java.lang.String>)
//  .name(java.lang.String)
//  .type(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.applicationKey">applicationKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#application_key DataOciDataintegrationWorkspaceApplicationTaskSchedules#application_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#workspace_id DataOciDataintegrationWorkspaceApplicationTaskSchedules#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter">DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#id DataOciDataintegrationWorkspaceApplicationTaskSchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.identifier">identifier</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#identifier DataOciDataintegrationWorkspaceApplicationTaskSchedules#identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#is_enabled DataOciDataintegrationWorkspaceApplicationTaskSchedules#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.key">key</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#key DataOciDataintegrationWorkspaceApplicationTaskSchedules#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#name DataOciDataintegrationWorkspaceApplicationTaskSchedules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.type">type</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#type DataOciDataintegrationWorkspaceApplicationTaskSchedules#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationKey`<sup>Required</sup> <a name="applicationKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.applicationKey"></a>

```java
public java.lang.String getApplicationKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#application_key DataOciDataintegrationWorkspaceApplicationTaskSchedules#application_key}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#workspace_id DataOciDataintegrationWorkspaceApplicationTaskSchedules#workspace_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter">DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#filter DataOciDataintegrationWorkspaceApplicationTaskSchedules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#id DataOciDataintegrationWorkspaceApplicationTaskSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.identifier"></a>

```java
public java.util.List<java.lang.String> getIdentifier();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#identifier DataOciDataintegrationWorkspaceApplicationTaskSchedules#identifier}.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#is_enabled DataOciDataintegrationWorkspaceApplicationTaskSchedules#is_enabled}.

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.key"></a>

```java
public java.util.List<java.lang.String> getKey();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#key DataOciDataintegrationWorkspaceApplicationTaskSchedules#key}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#name DataOciDataintegrationWorkspaceApplicationTaskSchedules#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.type"></a>

```java
public java.util.List<java.lang.String> getType();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#type DataOciDataintegrationWorkspaceApplicationTaskSchedules#type}.

---

### DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter;

DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#name DataOciDataintegrationWorkspaceApplicationTaskSchedules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#values DataOciDataintegrationWorkspaceApplicationTaskSchedules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#regex DataOciDataintegrationWorkspaceApplicationTaskSchedules#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#name DataOciDataintegrationWorkspaceApplicationTaskSchedules#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#values DataOciDataintegrationWorkspaceApplicationTaskSchedules#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#regex DataOciDataintegrationWorkspaceApplicationTaskSchedules#regex}.

---

### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollection <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollection;

DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollection.builder()
    .build();
```


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItems <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItems;

DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItems.builder()
    .build();
```


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetails <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetails" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetails;

DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetails.builder()
    .build();
```


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRef <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRef" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRef"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRef;

DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRef.builder()
    .build();
```


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadata <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadata;

DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadata.builder()
    .build();
```


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregator <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregator" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregator"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregator.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregator;

DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregator.builder()
    .build();
```


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatistics <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatistics" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatistics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatistics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatistics;

DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatistics.builder()
    .build();
```


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct;

DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct.builder()
    .build();
```


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRef <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRef" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRef"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRef;

DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRef.builder()
    .build();
```


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadata <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadata;

DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadata.builder()
    .build();
```


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRef <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRef" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRef"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRef;

DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRef.builder()
    .build();
```


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetails <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetails" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetails;

DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetails.builder()
    .build();
```


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTime <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTime" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTime"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTime;

DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTime.builder()
    .build();
```


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadata <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadata;

DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadata.builder()
    .build();
```


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregator <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregator" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregator"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregator.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregator;

DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregator.builder()
    .build();
```


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatistics <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatistics" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatistics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatistics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatistics;

DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatistics.builder()
    .build();
```


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStruct <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStruct" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStruct;

DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStruct.builder()
    .build();
```


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRef <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRef" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRef"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRef;

DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRef.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.get"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter">DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter">DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter</a>>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter">DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter">DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.get"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.lastRunTimeMillis">lastRunTimeMillis</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.modelType">modelType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.modelVersion">modelVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.objectStatus">objectStatus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.objectVersion">objectVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.parentRef">parentRef</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetails">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `lastRunTimeMillis`<sup>Required</sup> <a name="lastRunTimeMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.lastRunTimeMillis"></a>

```java
public java.lang.String getLastRunTimeMillis();
```

- *Type:* java.lang.String

---

##### `modelType`<sup>Required</sup> <a name="modelType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.modelType"></a>

```java
public java.lang.String getModelType();
```

- *Type:* java.lang.String

---

##### `modelVersion`<sup>Required</sup> <a name="modelVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.modelVersion"></a>

```java
public java.lang.String getModelVersion();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `objectStatus`<sup>Required</sup> <a name="objectStatus" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.objectStatus"></a>

```java
public java.lang.Number getObjectStatus();
```

- *Type:* java.lang.Number

---

##### `objectVersion`<sup>Required</sup> <a name="objectVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.objectVersion"></a>

```java
public java.lang.Number getObjectVersion();
```

- *Type:* java.lang.Number

---

##### `parentRef`<sup>Required</sup> <a name="parentRef" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.parentRef"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList getParentRef();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetails">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetails</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.get"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.property.rootDocId">rootDocId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRef">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `rootDocId`<sup>Required</sup> <a name="rootDocId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.property.rootDocId"></a>

```java
public java.lang.String getRootDocId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.property.internalValue"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRef getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRef">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRef</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.get"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.get"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregator">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.internalValue"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregator getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregator">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregator</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.get"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.get"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount">objectCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType">objectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `objectCount`<sup>Required</sup> <a name="objectCount" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount"></a>

```java
public java.lang.String getObjectCount();
```

- *Type:* java.lang.String

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.objectTypeCountList">objectTypeCountList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatistics">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatistics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `objectTypeCountList`<sup>Required</sup> <a name="objectTypeCountList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.objectTypeCountList"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList getObjectTypeCountList();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.internalValue"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatistics getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatistics">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatistics</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.get"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.aggregator">aggregator</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.aggregatorKey">aggregatorKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.countStatistics">countStatistics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.createdByName">createdByName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.identifierPath">identifierPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.infoFields">infoFields</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.isFavorite">isFavorite</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.registryVersion">registryVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.updatedBy">updatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.updatedByName">updatedByName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadata">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregator`<sup>Required</sup> <a name="aggregator" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.aggregator"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList getAggregator();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList</a>

---

##### `aggregatorKey`<sup>Required</sup> <a name="aggregatorKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.aggregatorKey"></a>

```java
public java.lang.String getAggregatorKey();
```

- *Type:* java.lang.String

---

##### `countStatistics`<sup>Required</sup> <a name="countStatistics" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.countStatistics"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList getCountStatistics();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList</a>

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `createdByName`<sup>Required</sup> <a name="createdByName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.createdByName"></a>

```java
public java.lang.String getCreatedByName();
```

- *Type:* java.lang.String

---

##### `identifierPath`<sup>Required</sup> <a name="identifierPath" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.identifierPath"></a>

```java
public java.lang.String getIdentifierPath();
```

- *Type:* java.lang.String

---

##### `infoFields`<sup>Required</sup> <a name="infoFields" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.infoFields"></a>

```java
public StringMap getInfoFields();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `isFavorite`<sup>Required</sup> <a name="isFavorite" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.isFavorite"></a>

```java
public IResolvable getIsFavorite();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `registryVersion`<sup>Required</sup> <a name="registryVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.registryVersion"></a>

```java
public java.lang.Number getRegistryVersion();
```

- *Type:* java.lang.Number

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.updatedBy"></a>

```java
public java.lang.String getUpdatedBy();
```

- *Type:* java.lang.String

---

##### `updatedByName`<sup>Required</sup> <a name="updatedByName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.updatedByName"></a>

```java
public java.lang.String getUpdatedByName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.internalValue"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadata getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadata">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadata</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.applicationKey">applicationKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.authMode">authMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.configProviderDelegate">configProviderDelegate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.endTimeMillis">endTimeMillis</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.expectedDuration">expectedDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.expectedDurationUnit">expectedDurationUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.isBackfillEnabled">isBackfillEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.isConcurrentAllowed">isConcurrentAllowed</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.isEnabled">isEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.lastRunDetails">lastRunDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.modelType">modelType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.modelVersion">modelVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.nextRunTimeMillis">nextRunTimeMillis</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.numberOfRetries">numberOfRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.objectStatus">objectStatus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.objectVersion">objectVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.parentRef">parentRef</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.registryMetadata">registryMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.retryAttempts">retryAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.retryDelay">retryDelay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.retryDelayUnit">retryDelayUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.scheduleRef">scheduleRef</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.startTimeMillis">startTimeMillis</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItems">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationKey`<sup>Required</sup> <a name="applicationKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.applicationKey"></a>

```java
public java.lang.String getApplicationKey();
```

- *Type:* java.lang.String

---

##### `authMode`<sup>Required</sup> <a name="authMode" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.authMode"></a>

```java
public java.lang.String getAuthMode();
```

- *Type:* java.lang.String

---

##### `configProviderDelegate`<sup>Required</sup> <a name="configProviderDelegate" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.configProviderDelegate"></a>

```java
public java.lang.String getConfigProviderDelegate();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `endTimeMillis`<sup>Required</sup> <a name="endTimeMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.endTimeMillis"></a>

```java
public java.lang.String getEndTimeMillis();
```

- *Type:* java.lang.String

---

##### `expectedDuration`<sup>Required</sup> <a name="expectedDuration" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.expectedDuration"></a>

```java
public java.lang.Number getExpectedDuration();
```

- *Type:* java.lang.Number

---

##### `expectedDurationUnit`<sup>Required</sup> <a name="expectedDurationUnit" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.expectedDurationUnit"></a>

```java
public java.lang.String getExpectedDurationUnit();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `isBackfillEnabled`<sup>Required</sup> <a name="isBackfillEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.isBackfillEnabled"></a>

```java
public IResolvable getIsBackfillEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isConcurrentAllowed`<sup>Required</sup> <a name="isConcurrentAllowed" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.isConcurrentAllowed"></a>

```java
public IResolvable getIsConcurrentAllowed();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `lastRunDetails`<sup>Required</sup> <a name="lastRunDetails" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.lastRunDetails"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList getLastRunDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.metadata"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList getMetadata();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList</a>

---

##### `modelType`<sup>Required</sup> <a name="modelType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.modelType"></a>

```java
public java.lang.String getModelType();
```

- *Type:* java.lang.String

---

##### `modelVersion`<sup>Required</sup> <a name="modelVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.modelVersion"></a>

```java
public java.lang.String getModelVersion();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nextRunTimeMillis`<sup>Required</sup> <a name="nextRunTimeMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.nextRunTimeMillis"></a>

```java
public java.lang.String getNextRunTimeMillis();
```

- *Type:* java.lang.String

---

##### `numberOfRetries`<sup>Required</sup> <a name="numberOfRetries" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.numberOfRetries"></a>

```java
public java.lang.Number getNumberOfRetries();
```

- *Type:* java.lang.Number

---

##### `objectStatus`<sup>Required</sup> <a name="objectStatus" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.objectStatus"></a>

```java
public java.lang.Number getObjectStatus();
```

- *Type:* java.lang.Number

---

##### `objectVersion`<sup>Required</sup> <a name="objectVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.objectVersion"></a>

```java
public java.lang.Number getObjectVersion();
```

- *Type:* java.lang.Number

---

##### `parentRef`<sup>Required</sup> <a name="parentRef" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.parentRef"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList getParentRef();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList</a>

---

##### `registryMetadata`<sup>Required</sup> <a name="registryMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.registryMetadata"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList getRegistryMetadata();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList</a>

---

##### `retryAttempts`<sup>Required</sup> <a name="retryAttempts" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.retryAttempts"></a>

```java
public java.lang.Number getRetryAttempts();
```

- *Type:* java.lang.Number

---

##### `retryDelay`<sup>Required</sup> <a name="retryDelay" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.retryDelay"></a>

```java
public java.lang.Number getRetryDelay();
```

- *Type:* java.lang.Number

---

##### `retryDelayUnit`<sup>Required</sup> <a name="retryDelayUnit" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.retryDelayUnit"></a>

```java
public java.lang.String getRetryDelayUnit();
```

- *Type:* java.lang.String

---

##### `scheduleRef`<sup>Required</sup> <a name="scheduleRef" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.scheduleRef"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList getScheduleRef();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList</a>

---

##### `startTimeMillis`<sup>Required</sup> <a name="startTimeMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.startTimeMillis"></a>

```java
public java.lang.String getStartTimeMillis();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItems">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItems</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.get"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.property.rootDocId">rootDocId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRef">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `rootDocId`<sup>Required</sup> <a name="rootDocId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.property.rootDocId"></a>

```java
public java.lang.String getRootDocId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.property.internalValue"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRef getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRef">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRef</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.get"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.aggregatorKey">aggregatorKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.isFavorite">isFavorite</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.registryVersion">registryVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadata">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregatorKey`<sup>Required</sup> <a name="aggregatorKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.aggregatorKey"></a>

```java
public java.lang.String getAggregatorKey();
```

- *Type:* java.lang.String

---

##### `isFavorite`<sup>Required</sup> <a name="isFavorite" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.isFavorite"></a>

```java
public IResolvable getIsFavorite();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `registryVersion`<sup>Required</sup> <a name="registryVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.registryVersion"></a>

```java
public java.lang.Number getRegistryVersion();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.internalValue"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadata getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadata">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadata</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.get"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.customExpression">customExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.days">days</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.frequency">frequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.modelType">modelType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.time">time</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.weekOfMonth">weekOfMonth</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetails">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customExpression`<sup>Required</sup> <a name="customExpression" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.customExpression"></a>

```java
public java.lang.String getCustomExpression();
```

- *Type:* java.lang.String

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

---

##### `days`<sup>Required</sup> <a name="days" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.days"></a>

```java
public java.util.List<java.lang.Number> getDays();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

---

##### `interval`<sup>Required</sup> <a name="interval" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `modelType`<sup>Required</sup> <a name="modelType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.modelType"></a>

```java
public java.lang.String getModelType();
```

- *Type:* java.lang.String

---

##### `time`<sup>Required</sup> <a name="time" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.time"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList getTime();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList</a>

---

##### `weekOfMonth`<sup>Required</sup> <a name="weekOfMonth" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.weekOfMonth"></a>

```java
public java.lang.String getWeekOfMonth();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetails">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetails</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.get"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.property.hour">hour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.property.minute">minute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.property.second">second</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTime">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hour`<sup>Required</sup> <a name="hour" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.property.hour"></a>

```java
public java.lang.Number getHour();
```

- *Type:* java.lang.Number

---

##### `minute`<sup>Required</sup> <a name="minute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.property.minute"></a>

```java
public java.lang.Number getMinute();
```

- *Type:* java.lang.Number

---

##### `second`<sup>Required</sup> <a name="second" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.property.second"></a>

```java
public java.lang.Number getSecond();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.property.internalValue"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTime getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTime">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTime</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.get"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.get"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregator">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.property.internalValue"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregator getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregator">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregator</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.get"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.get"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount">objectCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType">objectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStruct">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `objectCount`<sup>Required</sup> <a name="objectCount" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount"></a>

```java
public java.lang.String getObjectCount();
```

- *Type:* java.lang.String

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStruct getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStruct">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStruct</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.property.objectTypeCountList">objectTypeCountList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatistics">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatistics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `objectTypeCountList`<sup>Required</sup> <a name="objectTypeCountList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.property.objectTypeCountList"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList getObjectTypeCountList();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.property.internalValue"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatistics getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatistics">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatistics</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.get"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.aggregator">aggregator</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.aggregatorKey">aggregatorKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.countStatistics">countStatistics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.createdByName">createdByName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.identifierPath">identifierPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.infoFields">infoFields</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.isFavorite">isFavorite</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.registryVersion">registryVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.updatedBy">updatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.updatedByName">updatedByName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadata">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregator`<sup>Required</sup> <a name="aggregator" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.aggregator"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList getAggregator();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList</a>

---

##### `aggregatorKey`<sup>Required</sup> <a name="aggregatorKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.aggregatorKey"></a>

```java
public java.lang.String getAggregatorKey();
```

- *Type:* java.lang.String

---

##### `countStatistics`<sup>Required</sup> <a name="countStatistics" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.countStatistics"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList getCountStatistics();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList</a>

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `createdByName`<sup>Required</sup> <a name="createdByName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.createdByName"></a>

```java
public java.lang.String getCreatedByName();
```

- *Type:* java.lang.String

---

##### `identifierPath`<sup>Required</sup> <a name="identifierPath" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.identifierPath"></a>

```java
public java.lang.String getIdentifierPath();
```

- *Type:* java.lang.String

---

##### `infoFields`<sup>Required</sup> <a name="infoFields" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.infoFields"></a>

```java
public StringMap getInfoFields();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `isFavorite`<sup>Required</sup> <a name="isFavorite" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.isFavorite"></a>

```java
public IResolvable getIsFavorite();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `registryVersion`<sup>Required</sup> <a name="registryVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.registryVersion"></a>

```java
public java.lang.Number getRegistryVersion();
```

- *Type:* java.lang.Number

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.updatedBy"></a>

```java
public java.lang.String getUpdatedBy();
```

- *Type:* java.lang.String

---

##### `updatedByName`<sup>Required</sup> <a name="updatedByName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.updatedByName"></a>

```java
public java.lang.String getUpdatedByName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.internalValue"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadata getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadata">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadata</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.frequencyDetails">frequencyDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.isDaylightAdjustmentEnabled">isDaylightAdjustmentEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.modelType">modelType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.modelVersion">modelVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.objectStatus">objectStatus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.objectVersion">objectVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.parentRef">parentRef</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRef">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `frequencyDetails`<sup>Required</sup> <a name="frequencyDetails" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.frequencyDetails"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList getFrequencyDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList</a>

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `isDaylightAdjustmentEnabled`<sup>Required</sup> <a name="isDaylightAdjustmentEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.isDaylightAdjustmentEnabled"></a>

```java
public IResolvable getIsDaylightAdjustmentEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.metadata"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList getMetadata();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList</a>

---

##### `modelType`<sup>Required</sup> <a name="modelType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.modelType"></a>

```java
public java.lang.String getModelType();
```

- *Type:* java.lang.String

---

##### `modelVersion`<sup>Required</sup> <a name="modelVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.modelVersion"></a>

```java
public java.lang.String getModelVersion();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `objectStatus`<sup>Required</sup> <a name="objectStatus" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.objectStatus"></a>

```java
public java.lang.Number getObjectStatus();
```

- *Type:* java.lang.Number

---

##### `objectVersion`<sup>Required</sup> <a name="objectVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.objectVersion"></a>

```java
public java.lang.Number getObjectVersion();
```

- *Type:* java.lang.Number

---

##### `parentRef`<sup>Required</sup> <a name="parentRef" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.parentRef"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList getParentRef();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList</a>

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.internalValue"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRef getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRef">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRef</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.get"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.property.rootDocId">rootDocId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRef">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `rootDocId`<sup>Required</sup> <a name="rootDocId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.property.rootDocId"></a>

```java
public java.lang.String getRootDocId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.property.internalValue"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRef getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRef">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRef</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.get"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_application_task_schedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference;

new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollection">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.property.items"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollection">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollection</a>

---




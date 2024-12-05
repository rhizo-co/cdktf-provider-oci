# `dataOciDataintegrationWorkspaceExportRequests` Submodule <a name="`dataOciDataintegrationWorkspaceExportRequests` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataintegrationWorkspaceExportRequests <a name="DataOciDataintegrationWorkspaceExportRequests" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests oci_dataintegration_workspace_export_requests}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_export_requests.DataOciDataintegrationWorkspaceExportRequests;

DataOciDataintegrationWorkspaceExportRequests.Builder.create(Construct scope, java.lang.String id)
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
    .workspaceId(java.lang.String)
//  .exportStatus(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataintegrationWorkspaceExportRequestsFilter>)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .projection(java.lang.String)
//  .timeEndedInMillis(java.lang.String)
//  .timeStartedInMillis(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#workspace_id DataOciDataintegrationWorkspaceExportRequests#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.exportStatus">exportStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#export_status DataOciDataintegrationWorkspaceExportRequests#export_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilter">DataOciDataintegrationWorkspaceExportRequestsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#id DataOciDataintegrationWorkspaceExportRequests#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#name DataOciDataintegrationWorkspaceExportRequests#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.projection">projection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#projection DataOciDataintegrationWorkspaceExportRequests#projection}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.timeEndedInMillis">timeEndedInMillis</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#time_ended_in_millis DataOciDataintegrationWorkspaceExportRequests#time_ended_in_millis}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.timeStartedInMillis">timeStartedInMillis</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#time_started_in_millis DataOciDataintegrationWorkspaceExportRequests#time_started_in_millis}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#workspace_id DataOciDataintegrationWorkspaceExportRequests#workspace_id}.

---

##### `exportStatus`<sup>Optional</sup> <a name="exportStatus" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.exportStatus"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#export_status DataOciDataintegrationWorkspaceExportRequests#export_status}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilter">DataOciDataintegrationWorkspaceExportRequestsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#filter DataOciDataintegrationWorkspaceExportRequests#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#id DataOciDataintegrationWorkspaceExportRequests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#name DataOciDataintegrationWorkspaceExportRequests#name}.

---

##### `projection`<sup>Optional</sup> <a name="projection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.projection"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#projection DataOciDataintegrationWorkspaceExportRequests#projection}.

---

##### `timeEndedInMillis`<sup>Optional</sup> <a name="timeEndedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.timeEndedInMillis"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#time_ended_in_millis DataOciDataintegrationWorkspaceExportRequests#time_ended_in_millis}.

---

##### `timeStartedInMillis`<sup>Optional</sup> <a name="timeStartedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.timeStartedInMillis"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#time_started_in_millis DataOciDataintegrationWorkspaceExportRequests#time_started_in_millis}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.resetExportStatus">resetExportStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.resetProjection">resetProjection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.resetTimeEndedInMillis">resetTimeEndedInMillis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.resetTimeStartedInMillis">resetTimeStartedInMillis</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDataintegrationWorkspaceExportRequestsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilter">DataOciDataintegrationWorkspaceExportRequestsFilter</a>>

---

##### `resetExportStatus` <a name="resetExportStatus" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.resetExportStatus"></a>

```java
public void resetExportStatus()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.resetName"></a>

```java
public void resetName()
```

##### `resetProjection` <a name="resetProjection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.resetProjection"></a>

```java
public void resetProjection()
```

##### `resetTimeEndedInMillis` <a name="resetTimeEndedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.resetTimeEndedInMillis"></a>

```java
public void resetTimeEndedInMillis()
```

##### `resetTimeStartedInMillis` <a name="resetTimeStartedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.resetTimeStartedInMillis"></a>

```java
public void resetTimeStartedInMillis()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataintegrationWorkspaceExportRequests resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_export_requests.DataOciDataintegrationWorkspaceExportRequests;

DataOciDataintegrationWorkspaceExportRequests.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_export_requests.DataOciDataintegrationWorkspaceExportRequests;

DataOciDataintegrationWorkspaceExportRequests.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_export_requests.DataOciDataintegrationWorkspaceExportRequests;

DataOciDataintegrationWorkspaceExportRequests.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_export_requests.DataOciDataintegrationWorkspaceExportRequests;

DataOciDataintegrationWorkspaceExportRequests.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDataintegrationWorkspaceExportRequests.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDataintegrationWorkspaceExportRequests resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDataintegrationWorkspaceExportRequests to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDataintegrationWorkspaceExportRequests that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataintegrationWorkspaceExportRequests to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.exportRequestSummaryCollection">exportRequestSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList">DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList">DataOciDataintegrationWorkspaceExportRequestsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.exportStatusInput">exportStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilter">DataOciDataintegrationWorkspaceExportRequestsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.projectionInput">projectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.timeEndedInMillisInput">timeEndedInMillisInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.timeStartedInMillisInput">timeStartedInMillisInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.exportStatus">exportStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.projection">projection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.timeEndedInMillis">timeEndedInMillis</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.timeStartedInMillis">timeStartedInMillis</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `exportRequestSummaryCollection`<sup>Required</sup> <a name="exportRequestSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.exportRequestSummaryCollection"></a>

```java
public DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList getExportRequestSummaryCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList">DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.filter"></a>

```java
public DataOciDataintegrationWorkspaceExportRequestsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList">DataOciDataintegrationWorkspaceExportRequestsFilterList</a>

---

##### `exportStatusInput`<sup>Optional</sup> <a name="exportStatusInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.exportStatusInput"></a>

```java
public java.lang.String getExportStatusInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilter">DataOciDataintegrationWorkspaceExportRequestsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectionInput`<sup>Optional</sup> <a name="projectionInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.projectionInput"></a>

```java
public java.lang.String getProjectionInput();
```

- *Type:* java.lang.String

---

##### `timeEndedInMillisInput`<sup>Optional</sup> <a name="timeEndedInMillisInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.timeEndedInMillisInput"></a>

```java
public java.lang.String getTimeEndedInMillisInput();
```

- *Type:* java.lang.String

---

##### `timeStartedInMillisInput`<sup>Optional</sup> <a name="timeStartedInMillisInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.timeStartedInMillisInput"></a>

```java
public java.lang.String getTimeStartedInMillisInput();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `exportStatus`<sup>Required</sup> <a name="exportStatus" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.exportStatus"></a>

```java
public java.lang.String getExportStatus();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projection`<sup>Required</sup> <a name="projection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.projection"></a>

```java
public java.lang.String getProjection();
```

- *Type:* java.lang.String

---

##### `timeEndedInMillis`<sup>Required</sup> <a name="timeEndedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.timeEndedInMillis"></a>

```java
public java.lang.String getTimeEndedInMillis();
```

- *Type:* java.lang.String

---

##### `timeStartedInMillis`<sup>Required</sup> <a name="timeStartedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.timeStartedInMillis"></a>

```java
public java.lang.String getTimeStartedInMillis();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataintegrationWorkspaceExportRequestsConfig <a name="DataOciDataintegrationWorkspaceExportRequestsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_export_requests.DataOciDataintegrationWorkspaceExportRequestsConfig;

DataOciDataintegrationWorkspaceExportRequestsConfig.builder()
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
    .workspaceId(java.lang.String)
//  .exportStatus(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataintegrationWorkspaceExportRequestsFilter>)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .projection(java.lang.String)
//  .timeEndedInMillis(java.lang.String)
//  .timeStartedInMillis(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#workspace_id DataOciDataintegrationWorkspaceExportRequests#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.exportStatus">exportStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#export_status DataOciDataintegrationWorkspaceExportRequests#export_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilter">DataOciDataintegrationWorkspaceExportRequestsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#id DataOciDataintegrationWorkspaceExportRequests#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#name DataOciDataintegrationWorkspaceExportRequests#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.projection">projection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#projection DataOciDataintegrationWorkspaceExportRequests#projection}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.timeEndedInMillis">timeEndedInMillis</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#time_ended_in_millis DataOciDataintegrationWorkspaceExportRequests#time_ended_in_millis}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.timeStartedInMillis">timeStartedInMillis</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#time_started_in_millis DataOciDataintegrationWorkspaceExportRequests#time_started_in_millis}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#workspace_id DataOciDataintegrationWorkspaceExportRequests#workspace_id}.

---

##### `exportStatus`<sup>Optional</sup> <a name="exportStatus" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.exportStatus"></a>

```java
public java.lang.String getExportStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#export_status DataOciDataintegrationWorkspaceExportRequests#export_status}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilter">DataOciDataintegrationWorkspaceExportRequestsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#filter DataOciDataintegrationWorkspaceExportRequests#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#id DataOciDataintegrationWorkspaceExportRequests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#name DataOciDataintegrationWorkspaceExportRequests#name}.

---

##### `projection`<sup>Optional</sup> <a name="projection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.projection"></a>

```java
public java.lang.String getProjection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#projection DataOciDataintegrationWorkspaceExportRequests#projection}.

---

##### `timeEndedInMillis`<sup>Optional</sup> <a name="timeEndedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.timeEndedInMillis"></a>

```java
public java.lang.String getTimeEndedInMillis();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#time_ended_in_millis DataOciDataintegrationWorkspaceExportRequests#time_ended_in_millis}.

---

##### `timeStartedInMillis`<sup>Optional</sup> <a name="timeStartedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.timeStartedInMillis"></a>

```java
public java.lang.String getTimeStartedInMillis();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#time_started_in_millis DataOciDataintegrationWorkspaceExportRequests#time_started_in_millis}.

---

### DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollection <a name="DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_export_requests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollection;

DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollection.builder()
    .build();
```


### DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItems <a name="DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_export_requests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItems;

DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItems.builder()
    .build();
```


### DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItems <a name="DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItems" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_export_requests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItems;

DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItems.builder()
    .build();
```


### DataOciDataintegrationWorkspaceExportRequestsFilter <a name="DataOciDataintegrationWorkspaceExportRequestsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_export_requests.DataOciDataintegrationWorkspaceExportRequestsFilter;

DataOciDataintegrationWorkspaceExportRequestsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#name DataOciDataintegrationWorkspaceExportRequests#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#values DataOciDataintegrationWorkspaceExportRequests#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#regex DataOciDataintegrationWorkspaceExportRequests#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#name DataOciDataintegrationWorkspaceExportRequests#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#values DataOciDataintegrationWorkspaceExportRequests#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#regex DataOciDataintegrationWorkspaceExportRequests#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList <a name="DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_export_requests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList;

new DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.get"></a>

```java
public DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference <a name="DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_export_requests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference;

new DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.aggregatorKey">aggregatorKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.namePath">namePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.objectType">objectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.objectVersion">objectVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.timeUpdatedInMillis">timeUpdatedInMillis</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItems">DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregatorKey`<sup>Required</sup> <a name="aggregatorKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.aggregatorKey"></a>

```java
public java.lang.String getAggregatorKey();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namePath`<sup>Required</sup> <a name="namePath" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.namePath"></a>

```java
public java.lang.String getNamePath();
```

- *Type:* java.lang.String

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

---

##### `objectVersion`<sup>Required</sup> <a name="objectVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.objectVersion"></a>

```java
public java.lang.String getObjectVersion();
```

- *Type:* java.lang.String

---

##### `timeUpdatedInMillis`<sup>Required</sup> <a name="timeUpdatedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.timeUpdatedInMillis"></a>

```java
public java.lang.String getTimeUpdatedInMillis();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.internalValue"></a>

```java
public DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItems">DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItems</a>

---


### DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList <a name="DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_export_requests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList;

new DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.get"></a>

```java
public DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference <a name="DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_export_requests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference;

new DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.areReferencesIncluded">areReferencesIncluded</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.errorMessages">errorMessages</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.exportedItems">exportedItems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList">DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.fileName">fileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.filters">filters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.isObjectOverwriteEnabled">isObjectOverwriteEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.objectKeys">objectKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.objectStorageRegion">objectStorageRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.objectStorageTenancyId">objectStorageTenancyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.referencedItems">referencedItems</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.timeEndedInMillis">timeEndedInMillis</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.timeStartedInMillis">timeStartedInMillis</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.totalExportedObjectCount">totalExportedObjectCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItems">DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `areReferencesIncluded`<sup>Required</sup> <a name="areReferencesIncluded" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.areReferencesIncluded"></a>

```java
public IResolvable getAreReferencesIncluded();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `errorMessages`<sup>Required</sup> <a name="errorMessages" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.errorMessages"></a>

```java
public StringMap getErrorMessages();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `exportedItems`<sup>Required</sup> <a name="exportedItems" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.exportedItems"></a>

```java
public DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList getExportedItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList">DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList</a>

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.filters"></a>

```java
public java.util.List<java.lang.String> getFilters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isObjectOverwriteEnabled`<sup>Required</sup> <a name="isObjectOverwriteEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.isObjectOverwriteEnabled"></a>

```java
public IResolvable getIsObjectOverwriteEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `objectKeys`<sup>Required</sup> <a name="objectKeys" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.objectKeys"></a>

```java
public java.util.List<java.lang.String> getObjectKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `objectStorageRegion`<sup>Required</sup> <a name="objectStorageRegion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.objectStorageRegion"></a>

```java
public java.lang.String getObjectStorageRegion();
```

- *Type:* java.lang.String

---

##### `objectStorageTenancyId`<sup>Required</sup> <a name="objectStorageTenancyId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.objectStorageTenancyId"></a>

```java
public java.lang.String getObjectStorageTenancyId();
```

- *Type:* java.lang.String

---

##### `referencedItems`<sup>Required</sup> <a name="referencedItems" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.referencedItems"></a>

```java
public java.lang.String getReferencedItems();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeEndedInMillis`<sup>Required</sup> <a name="timeEndedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.timeEndedInMillis"></a>

```java
public java.lang.String getTimeEndedInMillis();
```

- *Type:* java.lang.String

---

##### `timeStartedInMillis`<sup>Required</sup> <a name="timeStartedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.timeStartedInMillis"></a>

```java
public java.lang.String getTimeStartedInMillis();
```

- *Type:* java.lang.String

---

##### `totalExportedObjectCount`<sup>Required</sup> <a name="totalExportedObjectCount" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.totalExportedObjectCount"></a>

```java
public java.lang.Number getTotalExportedObjectCount();
```

- *Type:* java.lang.Number

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItems">DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItems</a>

---


### DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList <a name="DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_export_requests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList;

new DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.get"></a>

```java
public DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference <a name="DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_export_requests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference;

new DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList">DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollection">DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.property.items"></a>

```java
public DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList">DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollection">DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollection</a>

---


### DataOciDataintegrationWorkspaceExportRequestsFilterList <a name="DataOciDataintegrationWorkspaceExportRequestsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_export_requests.DataOciDataintegrationWorkspaceExportRequestsFilterList;

new DataOciDataintegrationWorkspaceExportRequestsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.get"></a>

```java
public DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilter">DataOciDataintegrationWorkspaceExportRequestsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilter">DataOciDataintegrationWorkspaceExportRequestsFilter</a>>

---


### DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference <a name="DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_dataintegration_workspace_export_requests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference;

new DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilter">DataOciDataintegrationWorkspaceExportRequestsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilter">DataOciDataintegrationWorkspaceExportRequestsFilter</a>

---




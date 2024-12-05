# `dataintegrationWorkspaceExportRequest` Submodule <a name="`dataintegrationWorkspaceExportRequest` Submodule" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataintegrationWorkspaceExportRequest <a name="DataintegrationWorkspaceExportRequest" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request oci_dataintegration_workspace_export_request}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_export_request.DataintegrationWorkspaceExportRequest;

DataintegrationWorkspaceExportRequest.Builder.create(Construct scope, java.lang.String id)
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
    .bucket(java.lang.String)
    .workspaceId(java.lang.String)
//  .areReferencesIncluded(java.lang.Boolean)
//  .areReferencesIncluded(IResolvable)
//  .fileName(java.lang.String)
//  .filters(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .isObjectOverwriteEnabled(java.lang.Boolean)
//  .isObjectOverwriteEnabled(IResolvable)
//  .objectKeys(java.util.List<java.lang.String>)
//  .objectStorageRegion(java.lang.String)
//  .objectStorageTenancyId(java.lang.String)
//  .timeouts(DataintegrationWorkspaceExportRequestTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#bucket DataintegrationWorkspaceExportRequest#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#workspace_id DataintegrationWorkspaceExportRequest#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.areReferencesIncluded">areReferencesIncluded</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#are_references_included DataintegrationWorkspaceExportRequest#are_references_included}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.fileName">fileName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#file_name DataintegrationWorkspaceExportRequest#file_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.filters">filters</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#filters DataintegrationWorkspaceExportRequest#filters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#id DataintegrationWorkspaceExportRequest#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.isObjectOverwriteEnabled">isObjectOverwriteEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#is_object_overwrite_enabled DataintegrationWorkspaceExportRequest#is_object_overwrite_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.objectKeys">objectKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#object_keys DataintegrationWorkspaceExportRequest#object_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.objectStorageRegion">objectStorageRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#object_storage_region DataintegrationWorkspaceExportRequest#object_storage_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.objectStorageTenancyId">objectStorageTenancyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#object_storage_tenancy_id DataintegrationWorkspaceExportRequest#object_storage_tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts">DataintegrationWorkspaceExportRequestTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#bucket DataintegrationWorkspaceExportRequest#bucket}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#workspace_id DataintegrationWorkspaceExportRequest#workspace_id}.

---

##### `areReferencesIncluded`<sup>Optional</sup> <a name="areReferencesIncluded" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.areReferencesIncluded"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#are_references_included DataintegrationWorkspaceExportRequest#are_references_included}.

---

##### `fileName`<sup>Optional</sup> <a name="fileName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.fileName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#file_name DataintegrationWorkspaceExportRequest#file_name}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.filters"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#filters DataintegrationWorkspaceExportRequest#filters}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#id DataintegrationWorkspaceExportRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isObjectOverwriteEnabled`<sup>Optional</sup> <a name="isObjectOverwriteEnabled" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.isObjectOverwriteEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#is_object_overwrite_enabled DataintegrationWorkspaceExportRequest#is_object_overwrite_enabled}.

---

##### `objectKeys`<sup>Optional</sup> <a name="objectKeys" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.objectKeys"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#object_keys DataintegrationWorkspaceExportRequest#object_keys}.

---

##### `objectStorageRegion`<sup>Optional</sup> <a name="objectStorageRegion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.objectStorageRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#object_storage_region DataintegrationWorkspaceExportRequest#object_storage_region}.

---

##### `objectStorageTenancyId`<sup>Optional</sup> <a name="objectStorageTenancyId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.objectStorageTenancyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#object_storage_tenancy_id DataintegrationWorkspaceExportRequest#object_storage_tenancy_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts">DataintegrationWorkspaceExportRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#timeouts DataintegrationWorkspaceExportRequest#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetAreReferencesIncluded">resetAreReferencesIncluded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetFileName">resetFileName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetIsObjectOverwriteEnabled">resetIsObjectOverwriteEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetObjectKeys">resetObjectKeys</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetObjectStorageRegion">resetObjectStorageRegion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetObjectStorageTenancyId">resetObjectStorageTenancyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.putTimeouts"></a>

```java
public void putTimeouts(DataintegrationWorkspaceExportRequestTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts">DataintegrationWorkspaceExportRequestTimeouts</a>

---

##### `resetAreReferencesIncluded` <a name="resetAreReferencesIncluded" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetAreReferencesIncluded"></a>

```java
public void resetAreReferencesIncluded()
```

##### `resetFileName` <a name="resetFileName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetFileName"></a>

```java
public void resetFileName()
```

##### `resetFilters` <a name="resetFilters" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetFilters"></a>

```java
public void resetFilters()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetId"></a>

```java
public void resetId()
```

##### `resetIsObjectOverwriteEnabled` <a name="resetIsObjectOverwriteEnabled" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetIsObjectOverwriteEnabled"></a>

```java
public void resetIsObjectOverwriteEnabled()
```

##### `resetObjectKeys` <a name="resetObjectKeys" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetObjectKeys"></a>

```java
public void resetObjectKeys()
```

##### `resetObjectStorageRegion` <a name="resetObjectStorageRegion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetObjectStorageRegion"></a>

```java
public void resetObjectStorageRegion()
```

##### `resetObjectStorageTenancyId` <a name="resetObjectStorageTenancyId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetObjectStorageTenancyId"></a>

```java
public void resetObjectStorageTenancyId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataintegrationWorkspaceExportRequest resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_export_request.DataintegrationWorkspaceExportRequest;

DataintegrationWorkspaceExportRequest.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_export_request.DataintegrationWorkspaceExportRequest;

DataintegrationWorkspaceExportRequest.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_export_request.DataintegrationWorkspaceExportRequest;

DataintegrationWorkspaceExportRequest.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_export_request.DataintegrationWorkspaceExportRequest;

DataintegrationWorkspaceExportRequest.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataintegrationWorkspaceExportRequest.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataintegrationWorkspaceExportRequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataintegrationWorkspaceExportRequest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataintegrationWorkspaceExportRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataintegrationWorkspaceExportRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.errorMessages">errorMessages</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.exportedItems">exportedItems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList">DataintegrationWorkspaceExportRequestExportedItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.referencedItems">referencedItems</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.timeEndedInMillis">timeEndedInMillis</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference">DataintegrationWorkspaceExportRequestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.timeStartedInMillis">timeStartedInMillis</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.totalExportedObjectCount">totalExportedObjectCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.areReferencesIncludedInput">areReferencesIncludedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.fileNameInput">fileNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.filtersInput">filtersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.isObjectOverwriteEnabledInput">isObjectOverwriteEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectKeysInput">objectKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectStorageRegionInput">objectStorageRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectStorageTenancyIdInput">objectStorageTenancyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts">DataintegrationWorkspaceExportRequestTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.areReferencesIncluded">areReferencesIncluded</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.fileName">fileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.filters">filters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.isObjectOverwriteEnabled">isObjectOverwriteEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectKeys">objectKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectStorageRegion">objectStorageRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectStorageTenancyId">objectStorageTenancyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `errorMessages`<sup>Required</sup> <a name="errorMessages" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.errorMessages"></a>

```java
public StringMap getErrorMessages();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `exportedItems`<sup>Required</sup> <a name="exportedItems" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.exportedItems"></a>

```java
public DataintegrationWorkspaceExportRequestExportedItemsList getExportedItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList">DataintegrationWorkspaceExportRequestExportedItemsList</a>

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `referencedItems`<sup>Required</sup> <a name="referencedItems" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.referencedItems"></a>

```java
public java.lang.String getReferencedItems();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeEndedInMillis`<sup>Required</sup> <a name="timeEndedInMillis" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.timeEndedInMillis"></a>

```java
public java.lang.String getTimeEndedInMillis();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.timeouts"></a>

```java
public DataintegrationWorkspaceExportRequestTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference">DataintegrationWorkspaceExportRequestTimeoutsOutputReference</a>

---

##### `timeStartedInMillis`<sup>Required</sup> <a name="timeStartedInMillis" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.timeStartedInMillis"></a>

```java
public java.lang.String getTimeStartedInMillis();
```

- *Type:* java.lang.String

---

##### `totalExportedObjectCount`<sup>Required</sup> <a name="totalExportedObjectCount" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.totalExportedObjectCount"></a>

```java
public java.lang.Number getTotalExportedObjectCount();
```

- *Type:* java.lang.Number

---

##### `areReferencesIncludedInput`<sup>Optional</sup> <a name="areReferencesIncludedInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.areReferencesIncludedInput"></a>

```java
public java.lang.Object getAreReferencesIncludedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `fileNameInput`<sup>Optional</sup> <a name="fileNameInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.fileNameInput"></a>

```java
public java.lang.String getFileNameInput();
```

- *Type:* java.lang.String

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.filtersInput"></a>

```java
public java.util.List<java.lang.String> getFiltersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isObjectOverwriteEnabledInput`<sup>Optional</sup> <a name="isObjectOverwriteEnabledInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.isObjectOverwriteEnabledInput"></a>

```java
public java.lang.Object getIsObjectOverwriteEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `objectKeysInput`<sup>Optional</sup> <a name="objectKeysInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectKeysInput"></a>

```java
public java.util.List<java.lang.String> getObjectKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `objectStorageRegionInput`<sup>Optional</sup> <a name="objectStorageRegionInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectStorageRegionInput"></a>

```java
public java.lang.String getObjectStorageRegionInput();
```

- *Type:* java.lang.String

---

##### `objectStorageTenancyIdInput`<sup>Optional</sup> <a name="objectStorageTenancyIdInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectStorageTenancyIdInput"></a>

```java
public java.lang.String getObjectStorageTenancyIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts">DataintegrationWorkspaceExportRequestTimeouts</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `areReferencesIncluded`<sup>Required</sup> <a name="areReferencesIncluded" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.areReferencesIncluded"></a>

```java
public java.lang.Object getAreReferencesIncluded();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.filters"></a>

```java
public java.util.List<java.lang.String> getFilters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isObjectOverwriteEnabled`<sup>Required</sup> <a name="isObjectOverwriteEnabled" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.isObjectOverwriteEnabled"></a>

```java
public java.lang.Object getIsObjectOverwriteEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `objectKeys`<sup>Required</sup> <a name="objectKeys" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectKeys"></a>

```java
public java.util.List<java.lang.String> getObjectKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `objectStorageRegion`<sup>Required</sup> <a name="objectStorageRegion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectStorageRegion"></a>

```java
public java.lang.String getObjectStorageRegion();
```

- *Type:* java.lang.String

---

##### `objectStorageTenancyId`<sup>Required</sup> <a name="objectStorageTenancyId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.objectStorageTenancyId"></a>

```java
public java.lang.String getObjectStorageTenancyId();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequest.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataintegrationWorkspaceExportRequestConfig <a name="DataintegrationWorkspaceExportRequestConfig" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_export_request.DataintegrationWorkspaceExportRequestConfig;

DataintegrationWorkspaceExportRequestConfig.builder()
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
    .bucket(java.lang.String)
    .workspaceId(java.lang.String)
//  .areReferencesIncluded(java.lang.Boolean)
//  .areReferencesIncluded(IResolvable)
//  .fileName(java.lang.String)
//  .filters(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .isObjectOverwriteEnabled(java.lang.Boolean)
//  .isObjectOverwriteEnabled(IResolvable)
//  .objectKeys(java.util.List<java.lang.String>)
//  .objectStorageRegion(java.lang.String)
//  .objectStorageTenancyId(java.lang.String)
//  .timeouts(DataintegrationWorkspaceExportRequestTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#bucket DataintegrationWorkspaceExportRequest#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#workspace_id DataintegrationWorkspaceExportRequest#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.areReferencesIncluded">areReferencesIncluded</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#are_references_included DataintegrationWorkspaceExportRequest#are_references_included}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.fileName">fileName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#file_name DataintegrationWorkspaceExportRequest#file_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.filters">filters</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#filters DataintegrationWorkspaceExportRequest#filters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#id DataintegrationWorkspaceExportRequest#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.isObjectOverwriteEnabled">isObjectOverwriteEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#is_object_overwrite_enabled DataintegrationWorkspaceExportRequest#is_object_overwrite_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.objectKeys">objectKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#object_keys DataintegrationWorkspaceExportRequest#object_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.objectStorageRegion">objectStorageRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#object_storage_region DataintegrationWorkspaceExportRequest#object_storage_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.objectStorageTenancyId">objectStorageTenancyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#object_storage_tenancy_id DataintegrationWorkspaceExportRequest#object_storage_tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts">DataintegrationWorkspaceExportRequestTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#bucket DataintegrationWorkspaceExportRequest#bucket}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#workspace_id DataintegrationWorkspaceExportRequest#workspace_id}.

---

##### `areReferencesIncluded`<sup>Optional</sup> <a name="areReferencesIncluded" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.areReferencesIncluded"></a>

```java
public java.lang.Object getAreReferencesIncluded();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#are_references_included DataintegrationWorkspaceExportRequest#are_references_included}.

---

##### `fileName`<sup>Optional</sup> <a name="fileName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#file_name DataintegrationWorkspaceExportRequest#file_name}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.filters"></a>

```java
public java.util.List<java.lang.String> getFilters();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#filters DataintegrationWorkspaceExportRequest#filters}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#id DataintegrationWorkspaceExportRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isObjectOverwriteEnabled`<sup>Optional</sup> <a name="isObjectOverwriteEnabled" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.isObjectOverwriteEnabled"></a>

```java
public java.lang.Object getIsObjectOverwriteEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#is_object_overwrite_enabled DataintegrationWorkspaceExportRequest#is_object_overwrite_enabled}.

---

##### `objectKeys`<sup>Optional</sup> <a name="objectKeys" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.objectKeys"></a>

```java
public java.util.List<java.lang.String> getObjectKeys();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#object_keys DataintegrationWorkspaceExportRequest#object_keys}.

---

##### `objectStorageRegion`<sup>Optional</sup> <a name="objectStorageRegion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.objectStorageRegion"></a>

```java
public java.lang.String getObjectStorageRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#object_storage_region DataintegrationWorkspaceExportRequest#object_storage_region}.

---

##### `objectStorageTenancyId`<sup>Optional</sup> <a name="objectStorageTenancyId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.objectStorageTenancyId"></a>

```java
public java.lang.String getObjectStorageTenancyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#object_storage_tenancy_id DataintegrationWorkspaceExportRequest#object_storage_tenancy_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestConfig.property.timeouts"></a>

```java
public DataintegrationWorkspaceExportRequestTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts">DataintegrationWorkspaceExportRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#timeouts DataintegrationWorkspaceExportRequest#timeouts}

---

### DataintegrationWorkspaceExportRequestExportedItems <a name="DataintegrationWorkspaceExportRequestExportedItems" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_export_request.DataintegrationWorkspaceExportRequestExportedItems;

DataintegrationWorkspaceExportRequestExportedItems.builder()
    .build();
```


### DataintegrationWorkspaceExportRequestTimeouts <a name="DataintegrationWorkspaceExportRequestTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_export_request.DataintegrationWorkspaceExportRequestTimeouts;

DataintegrationWorkspaceExportRequestTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#create DataintegrationWorkspaceExportRequest#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#delete DataintegrationWorkspaceExportRequest#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#update DataintegrationWorkspaceExportRequest#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#create DataintegrationWorkspaceExportRequest#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#delete DataintegrationWorkspaceExportRequest#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_export_request#update DataintegrationWorkspaceExportRequest#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataintegrationWorkspaceExportRequestExportedItemsList <a name="DataintegrationWorkspaceExportRequestExportedItemsList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_export_request.DataintegrationWorkspaceExportRequestExportedItemsList;

new DataintegrationWorkspaceExportRequestExportedItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.get"></a>

```java
public DataintegrationWorkspaceExportRequestExportedItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataintegrationWorkspaceExportRequestExportedItemsOutputReference <a name="DataintegrationWorkspaceExportRequestExportedItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_export_request.DataintegrationWorkspaceExportRequestExportedItemsOutputReference;

new DataintegrationWorkspaceExportRequestExportedItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.aggregatorKey">aggregatorKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.namePath">namePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.objectType">objectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.objectVersion">objectVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.timeUpdatedInMillis">timeUpdatedInMillis</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItems">DataintegrationWorkspaceExportRequestExportedItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregatorKey`<sup>Required</sup> <a name="aggregatorKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.aggregatorKey"></a>

```java
public java.lang.String getAggregatorKey();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namePath`<sup>Required</sup> <a name="namePath" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.namePath"></a>

```java
public java.lang.String getNamePath();
```

- *Type:* java.lang.String

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

---

##### `objectVersion`<sup>Required</sup> <a name="objectVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.objectVersion"></a>

```java
public java.lang.String getObjectVersion();
```

- *Type:* java.lang.String

---

##### `timeUpdatedInMillis`<sup>Required</sup> <a name="timeUpdatedInMillis" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.timeUpdatedInMillis"></a>

```java
public java.lang.String getTimeUpdatedInMillis();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItemsOutputReference.property.internalValue"></a>

```java
public DataintegrationWorkspaceExportRequestExportedItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestExportedItems">DataintegrationWorkspaceExportRequestExportedItems</a>

---


### DataintegrationWorkspaceExportRequestTimeoutsOutputReference <a name="DataintegrationWorkspaceExportRequestTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_export_request.DataintegrationWorkspaceExportRequestTimeoutsOutputReference;

new DataintegrationWorkspaceExportRequestTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts">DataintegrationWorkspaceExportRequestTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceExportRequest.DataintegrationWorkspaceExportRequestTimeouts">DataintegrationWorkspaceExportRequestTimeouts</a>

---




# `dataintegrationWorkspaceImportRequest` Submodule <a name="`dataintegrationWorkspaceImportRequest` Submodule" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataintegrationWorkspaceImportRequest <a name="DataintegrationWorkspaceImportRequest" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request oci_dataintegration_workspace_import_request}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_import_request.DataintegrationWorkspaceImportRequest;

DataintegrationWorkspaceImportRequest.Builder.create(Construct scope, java.lang.String id)
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
    .fileName(java.lang.String)
    .workspaceId(java.lang.String)
//  .areDataAssetReferencesIncluded(java.lang.Boolean)
//  .areDataAssetReferencesIncluded(IResolvable)
//  .id(java.lang.String)
//  .importConflictResolution(DataintegrationWorkspaceImportRequestImportConflictResolution)
//  .objectKeyForImport(java.lang.String)
//  .objectStorageRegion(java.lang.String)
//  .objectStorageTenancyId(java.lang.String)
//  .timeouts(DataintegrationWorkspaceImportRequestTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#bucket DataintegrationWorkspaceImportRequest#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.fileName">fileName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#file_name DataintegrationWorkspaceImportRequest#file_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#workspace_id DataintegrationWorkspaceImportRequest#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.areDataAssetReferencesIncluded">areDataAssetReferencesIncluded</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#are_data_asset_references_included DataintegrationWorkspaceImportRequest#are_data_asset_references_included}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#id DataintegrationWorkspaceImportRequest#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.importConflictResolution">importConflictResolution</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution">DataintegrationWorkspaceImportRequestImportConflictResolution</a></code> | import_conflict_resolution block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.objectKeyForImport">objectKeyForImport</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#object_key_for_import DataintegrationWorkspaceImportRequest#object_key_for_import}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.objectStorageRegion">objectStorageRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#object_storage_region DataintegrationWorkspaceImportRequest#object_storage_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.objectStorageTenancyId">objectStorageTenancyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#object_storage_tenancy_id DataintegrationWorkspaceImportRequest#object_storage_tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts">DataintegrationWorkspaceImportRequestTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#bucket DataintegrationWorkspaceImportRequest#bucket}.

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.fileName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#file_name DataintegrationWorkspaceImportRequest#file_name}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#workspace_id DataintegrationWorkspaceImportRequest#workspace_id}.

---

##### `areDataAssetReferencesIncluded`<sup>Optional</sup> <a name="areDataAssetReferencesIncluded" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.areDataAssetReferencesIncluded"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#are_data_asset_references_included DataintegrationWorkspaceImportRequest#are_data_asset_references_included}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#id DataintegrationWorkspaceImportRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importConflictResolution`<sup>Optional</sup> <a name="importConflictResolution" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.importConflictResolution"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution">DataintegrationWorkspaceImportRequestImportConflictResolution</a>

import_conflict_resolution block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#import_conflict_resolution DataintegrationWorkspaceImportRequest#import_conflict_resolution}

---

##### `objectKeyForImport`<sup>Optional</sup> <a name="objectKeyForImport" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.objectKeyForImport"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#object_key_for_import DataintegrationWorkspaceImportRequest#object_key_for_import}.

---

##### `objectStorageRegion`<sup>Optional</sup> <a name="objectStorageRegion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.objectStorageRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#object_storage_region DataintegrationWorkspaceImportRequest#object_storage_region}.

---

##### `objectStorageTenancyId`<sup>Optional</sup> <a name="objectStorageTenancyId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.objectStorageTenancyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#object_storage_tenancy_id DataintegrationWorkspaceImportRequest#object_storage_tenancy_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts">DataintegrationWorkspaceImportRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#timeouts DataintegrationWorkspaceImportRequest#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.putImportConflictResolution">putImportConflictResolution</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetAreDataAssetReferencesIncluded">resetAreDataAssetReferencesIncluded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetImportConflictResolution">resetImportConflictResolution</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetObjectKeyForImport">resetObjectKeyForImport</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetObjectStorageRegion">resetObjectStorageRegion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetObjectStorageTenancyId">resetObjectStorageTenancyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putImportConflictResolution` <a name="putImportConflictResolution" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.putImportConflictResolution"></a>

```java
public void putImportConflictResolution(DataintegrationWorkspaceImportRequestImportConflictResolution value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.putImportConflictResolution.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution">DataintegrationWorkspaceImportRequestImportConflictResolution</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.putTimeouts"></a>

```java
public void putTimeouts(DataintegrationWorkspaceImportRequestTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts">DataintegrationWorkspaceImportRequestTimeouts</a>

---

##### `resetAreDataAssetReferencesIncluded` <a name="resetAreDataAssetReferencesIncluded" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetAreDataAssetReferencesIncluded"></a>

```java
public void resetAreDataAssetReferencesIncluded()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetId"></a>

```java
public void resetId()
```

##### `resetImportConflictResolution` <a name="resetImportConflictResolution" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetImportConflictResolution"></a>

```java
public void resetImportConflictResolution()
```

##### `resetObjectKeyForImport` <a name="resetObjectKeyForImport" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetObjectKeyForImport"></a>

```java
public void resetObjectKeyForImport()
```

##### `resetObjectStorageRegion` <a name="resetObjectStorageRegion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetObjectStorageRegion"></a>

```java
public void resetObjectStorageRegion()
```

##### `resetObjectStorageTenancyId` <a name="resetObjectStorageTenancyId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetObjectStorageTenancyId"></a>

```java
public void resetObjectStorageTenancyId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataintegrationWorkspaceImportRequest resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_import_request.DataintegrationWorkspaceImportRequest;

DataintegrationWorkspaceImportRequest.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_import_request.DataintegrationWorkspaceImportRequest;

DataintegrationWorkspaceImportRequest.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_import_request.DataintegrationWorkspaceImportRequest;

DataintegrationWorkspaceImportRequest.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_import_request.DataintegrationWorkspaceImportRequest;

DataintegrationWorkspaceImportRequest.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataintegrationWorkspaceImportRequest.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataintegrationWorkspaceImportRequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataintegrationWorkspaceImportRequest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataintegrationWorkspaceImportRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataintegrationWorkspaceImportRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.errorMessages">errorMessages</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.importConflictResolution">importConflictResolution</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference">DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.importedObjects">importedObjects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList">DataintegrationWorkspaceImportRequestImportedObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.timeEndedInMillis">timeEndedInMillis</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference">DataintegrationWorkspaceImportRequestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.timeStartedInMillis">timeStartedInMillis</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.totalImportedObjectCount">totalImportedObjectCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.areDataAssetReferencesIncludedInput">areDataAssetReferencesIncludedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.fileNameInput">fileNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.importConflictResolutionInput">importConflictResolutionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution">DataintegrationWorkspaceImportRequestImportConflictResolution</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectKeyForImportInput">objectKeyForImportInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectStorageRegionInput">objectStorageRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectStorageTenancyIdInput">objectStorageTenancyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts">DataintegrationWorkspaceImportRequestTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.areDataAssetReferencesIncluded">areDataAssetReferencesIncluded</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.fileName">fileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectKeyForImport">objectKeyForImport</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectStorageRegion">objectStorageRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectStorageTenancyId">objectStorageTenancyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `errorMessages`<sup>Required</sup> <a name="errorMessages" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.errorMessages"></a>

```java
public StringMap getErrorMessages();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `importConflictResolution`<sup>Required</sup> <a name="importConflictResolution" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.importConflictResolution"></a>

```java
public DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference getImportConflictResolution();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference">DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference</a>

---

##### `importedObjects`<sup>Required</sup> <a name="importedObjects" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.importedObjects"></a>

```java
public DataintegrationWorkspaceImportRequestImportedObjectsList getImportedObjects();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList">DataintegrationWorkspaceImportRequestImportedObjectsList</a>

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeEndedInMillis`<sup>Required</sup> <a name="timeEndedInMillis" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.timeEndedInMillis"></a>

```java
public java.lang.String getTimeEndedInMillis();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.timeouts"></a>

```java
public DataintegrationWorkspaceImportRequestTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference">DataintegrationWorkspaceImportRequestTimeoutsOutputReference</a>

---

##### `timeStartedInMillis`<sup>Required</sup> <a name="timeStartedInMillis" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.timeStartedInMillis"></a>

```java
public java.lang.String getTimeStartedInMillis();
```

- *Type:* java.lang.String

---

##### `totalImportedObjectCount`<sup>Required</sup> <a name="totalImportedObjectCount" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.totalImportedObjectCount"></a>

```java
public java.lang.Number getTotalImportedObjectCount();
```

- *Type:* java.lang.Number

---

##### `areDataAssetReferencesIncludedInput`<sup>Optional</sup> <a name="areDataAssetReferencesIncludedInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.areDataAssetReferencesIncludedInput"></a>

```java
public java.lang.Object getAreDataAssetReferencesIncludedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `fileNameInput`<sup>Optional</sup> <a name="fileNameInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.fileNameInput"></a>

```java
public java.lang.String getFileNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `importConflictResolutionInput`<sup>Optional</sup> <a name="importConflictResolutionInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.importConflictResolutionInput"></a>

```java
public DataintegrationWorkspaceImportRequestImportConflictResolution getImportConflictResolutionInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution">DataintegrationWorkspaceImportRequestImportConflictResolution</a>

---

##### `objectKeyForImportInput`<sup>Optional</sup> <a name="objectKeyForImportInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectKeyForImportInput"></a>

```java
public java.lang.String getObjectKeyForImportInput();
```

- *Type:* java.lang.String

---

##### `objectStorageRegionInput`<sup>Optional</sup> <a name="objectStorageRegionInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectStorageRegionInput"></a>

```java
public java.lang.String getObjectStorageRegionInput();
```

- *Type:* java.lang.String

---

##### `objectStorageTenancyIdInput`<sup>Optional</sup> <a name="objectStorageTenancyIdInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectStorageTenancyIdInput"></a>

```java
public java.lang.String getObjectStorageTenancyIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts">DataintegrationWorkspaceImportRequestTimeouts</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `areDataAssetReferencesIncluded`<sup>Required</sup> <a name="areDataAssetReferencesIncluded" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.areDataAssetReferencesIncluded"></a>

```java
public java.lang.Object getAreDataAssetReferencesIncluded();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `objectKeyForImport`<sup>Required</sup> <a name="objectKeyForImport" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectKeyForImport"></a>

```java
public java.lang.String getObjectKeyForImport();
```

- *Type:* java.lang.String

---

##### `objectStorageRegion`<sup>Required</sup> <a name="objectStorageRegion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectStorageRegion"></a>

```java
public java.lang.String getObjectStorageRegion();
```

- *Type:* java.lang.String

---

##### `objectStorageTenancyId`<sup>Required</sup> <a name="objectStorageTenancyId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.objectStorageTenancyId"></a>

```java
public java.lang.String getObjectStorageTenancyId();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequest.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataintegrationWorkspaceImportRequestConfig <a name="DataintegrationWorkspaceImportRequestConfig" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_import_request.DataintegrationWorkspaceImportRequestConfig;

DataintegrationWorkspaceImportRequestConfig.builder()
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
    .fileName(java.lang.String)
    .workspaceId(java.lang.String)
//  .areDataAssetReferencesIncluded(java.lang.Boolean)
//  .areDataAssetReferencesIncluded(IResolvable)
//  .id(java.lang.String)
//  .importConflictResolution(DataintegrationWorkspaceImportRequestImportConflictResolution)
//  .objectKeyForImport(java.lang.String)
//  .objectStorageRegion(java.lang.String)
//  .objectStorageTenancyId(java.lang.String)
//  .timeouts(DataintegrationWorkspaceImportRequestTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#bucket DataintegrationWorkspaceImportRequest#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.fileName">fileName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#file_name DataintegrationWorkspaceImportRequest#file_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#workspace_id DataintegrationWorkspaceImportRequest#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.areDataAssetReferencesIncluded">areDataAssetReferencesIncluded</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#are_data_asset_references_included DataintegrationWorkspaceImportRequest#are_data_asset_references_included}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#id DataintegrationWorkspaceImportRequest#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.importConflictResolution">importConflictResolution</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution">DataintegrationWorkspaceImportRequestImportConflictResolution</a></code> | import_conflict_resolution block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.objectKeyForImport">objectKeyForImport</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#object_key_for_import DataintegrationWorkspaceImportRequest#object_key_for_import}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.objectStorageRegion">objectStorageRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#object_storage_region DataintegrationWorkspaceImportRequest#object_storage_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.objectStorageTenancyId">objectStorageTenancyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#object_storage_tenancy_id DataintegrationWorkspaceImportRequest#object_storage_tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts">DataintegrationWorkspaceImportRequestTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#bucket DataintegrationWorkspaceImportRequest#bucket}.

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#file_name DataintegrationWorkspaceImportRequest#file_name}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#workspace_id DataintegrationWorkspaceImportRequest#workspace_id}.

---

##### `areDataAssetReferencesIncluded`<sup>Optional</sup> <a name="areDataAssetReferencesIncluded" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.areDataAssetReferencesIncluded"></a>

```java
public java.lang.Object getAreDataAssetReferencesIncluded();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#are_data_asset_references_included DataintegrationWorkspaceImportRequest#are_data_asset_references_included}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#id DataintegrationWorkspaceImportRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importConflictResolution`<sup>Optional</sup> <a name="importConflictResolution" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.importConflictResolution"></a>

```java
public DataintegrationWorkspaceImportRequestImportConflictResolution getImportConflictResolution();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution">DataintegrationWorkspaceImportRequestImportConflictResolution</a>

import_conflict_resolution block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#import_conflict_resolution DataintegrationWorkspaceImportRequest#import_conflict_resolution}

---

##### `objectKeyForImport`<sup>Optional</sup> <a name="objectKeyForImport" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.objectKeyForImport"></a>

```java
public java.lang.String getObjectKeyForImport();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#object_key_for_import DataintegrationWorkspaceImportRequest#object_key_for_import}.

---

##### `objectStorageRegion`<sup>Optional</sup> <a name="objectStorageRegion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.objectStorageRegion"></a>

```java
public java.lang.String getObjectStorageRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#object_storage_region DataintegrationWorkspaceImportRequest#object_storage_region}.

---

##### `objectStorageTenancyId`<sup>Optional</sup> <a name="objectStorageTenancyId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.objectStorageTenancyId"></a>

```java
public java.lang.String getObjectStorageTenancyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#object_storage_tenancy_id DataintegrationWorkspaceImportRequest#object_storage_tenancy_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestConfig.property.timeouts"></a>

```java
public DataintegrationWorkspaceImportRequestTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts">DataintegrationWorkspaceImportRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#timeouts DataintegrationWorkspaceImportRequest#timeouts}

---

### DataintegrationWorkspaceImportRequestImportConflictResolution <a name="DataintegrationWorkspaceImportRequestImportConflictResolution" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_import_request.DataintegrationWorkspaceImportRequestImportConflictResolution;

DataintegrationWorkspaceImportRequestImportConflictResolution.builder()
    .importConflictResolutionType(java.lang.String)
//  .duplicatePrefix(java.lang.String)
//  .duplicateSuffix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution.property.importConflictResolutionType">importConflictResolutionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#import_conflict_resolution_type DataintegrationWorkspaceImportRequest#import_conflict_resolution_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution.property.duplicatePrefix">duplicatePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#duplicate_prefix DataintegrationWorkspaceImportRequest#duplicate_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution.property.duplicateSuffix">duplicateSuffix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#duplicate_suffix DataintegrationWorkspaceImportRequest#duplicate_suffix}. |

---

##### `importConflictResolutionType`<sup>Required</sup> <a name="importConflictResolutionType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution.property.importConflictResolutionType"></a>

```java
public java.lang.String getImportConflictResolutionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#import_conflict_resolution_type DataintegrationWorkspaceImportRequest#import_conflict_resolution_type}.

---

##### `duplicatePrefix`<sup>Optional</sup> <a name="duplicatePrefix" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution.property.duplicatePrefix"></a>

```java
public java.lang.String getDuplicatePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#duplicate_prefix DataintegrationWorkspaceImportRequest#duplicate_prefix}.

---

##### `duplicateSuffix`<sup>Optional</sup> <a name="duplicateSuffix" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution.property.duplicateSuffix"></a>

```java
public java.lang.String getDuplicateSuffix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#duplicate_suffix DataintegrationWorkspaceImportRequest#duplicate_suffix}.

---

### DataintegrationWorkspaceImportRequestImportedObjects <a name="DataintegrationWorkspaceImportRequestImportedObjects" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjects.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_import_request.DataintegrationWorkspaceImportRequestImportedObjects;

DataintegrationWorkspaceImportRequestImportedObjects.builder()
    .build();
```


### DataintegrationWorkspaceImportRequestTimeouts <a name="DataintegrationWorkspaceImportRequestTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_import_request.DataintegrationWorkspaceImportRequestTimeouts;

DataintegrationWorkspaceImportRequestTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#create DataintegrationWorkspaceImportRequest#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#delete DataintegrationWorkspaceImportRequest#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#update DataintegrationWorkspaceImportRequest#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#create DataintegrationWorkspaceImportRequest#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#delete DataintegrationWorkspaceImportRequest#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_import_request#update DataintegrationWorkspaceImportRequest#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference <a name="DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_import_request.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference;

new DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.resetDuplicatePrefix">resetDuplicatePrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.resetDuplicateSuffix">resetDuplicateSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDuplicatePrefix` <a name="resetDuplicatePrefix" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.resetDuplicatePrefix"></a>

```java
public void resetDuplicatePrefix()
```

##### `resetDuplicateSuffix` <a name="resetDuplicateSuffix" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.resetDuplicateSuffix"></a>

```java
public void resetDuplicateSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicatePrefixInput">duplicatePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicateSuffixInput">duplicateSuffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.importConflictResolutionTypeInput">importConflictResolutionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicatePrefix">duplicatePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicateSuffix">duplicateSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.importConflictResolutionType">importConflictResolutionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution">DataintegrationWorkspaceImportRequestImportConflictResolution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `duplicatePrefixInput`<sup>Optional</sup> <a name="duplicatePrefixInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicatePrefixInput"></a>

```java
public java.lang.String getDuplicatePrefixInput();
```

- *Type:* java.lang.String

---

##### `duplicateSuffixInput`<sup>Optional</sup> <a name="duplicateSuffixInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicateSuffixInput"></a>

```java
public java.lang.String getDuplicateSuffixInput();
```

- *Type:* java.lang.String

---

##### `importConflictResolutionTypeInput`<sup>Optional</sup> <a name="importConflictResolutionTypeInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.importConflictResolutionTypeInput"></a>

```java
public java.lang.String getImportConflictResolutionTypeInput();
```

- *Type:* java.lang.String

---

##### `duplicatePrefix`<sup>Required</sup> <a name="duplicatePrefix" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicatePrefix"></a>

```java
public java.lang.String getDuplicatePrefix();
```

- *Type:* java.lang.String

---

##### `duplicateSuffix`<sup>Required</sup> <a name="duplicateSuffix" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicateSuffix"></a>

```java
public java.lang.String getDuplicateSuffix();
```

- *Type:* java.lang.String

---

##### `importConflictResolutionType`<sup>Required</sup> <a name="importConflictResolutionType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.importConflictResolutionType"></a>

```java
public java.lang.String getImportConflictResolutionType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.internalValue"></a>

```java
public DataintegrationWorkspaceImportRequestImportConflictResolution getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportConflictResolution">DataintegrationWorkspaceImportRequestImportConflictResolution</a>

---


### DataintegrationWorkspaceImportRequestImportedObjectsList <a name="DataintegrationWorkspaceImportRequestImportedObjectsList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_import_request.DataintegrationWorkspaceImportRequestImportedObjectsList;

new DataintegrationWorkspaceImportRequestImportedObjectsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.get"></a>

```java
public DataintegrationWorkspaceImportRequestImportedObjectsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataintegrationWorkspaceImportRequestImportedObjectsOutputReference <a name="DataintegrationWorkspaceImportRequestImportedObjectsOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_import_request.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference;

new DataintegrationWorkspaceImportRequestImportedObjectsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.aggregatorKey">aggregatorKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.namePath">namePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.newKey">newKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.objectType">objectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.objectVersion">objectVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.oldKey">oldKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.resolutionAction">resolutionAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.timeUpdatedInMillis">timeUpdatedInMillis</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjects">DataintegrationWorkspaceImportRequestImportedObjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregatorKey`<sup>Required</sup> <a name="aggregatorKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.aggregatorKey"></a>

```java
public java.lang.String getAggregatorKey();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namePath`<sup>Required</sup> <a name="namePath" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.namePath"></a>

```java
public java.lang.String getNamePath();
```

- *Type:* java.lang.String

---

##### `newKey`<sup>Required</sup> <a name="newKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.newKey"></a>

```java
public java.lang.String getNewKey();
```

- *Type:* java.lang.String

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

---

##### `objectVersion`<sup>Required</sup> <a name="objectVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.objectVersion"></a>

```java
public java.lang.String getObjectVersion();
```

- *Type:* java.lang.String

---

##### `oldKey`<sup>Required</sup> <a name="oldKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.oldKey"></a>

```java
public java.lang.String getOldKey();
```

- *Type:* java.lang.String

---

##### `resolutionAction`<sup>Required</sup> <a name="resolutionAction" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.resolutionAction"></a>

```java
public java.lang.String getResolutionAction();
```

- *Type:* java.lang.String

---

##### `timeUpdatedInMillis`<sup>Required</sup> <a name="timeUpdatedInMillis" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.timeUpdatedInMillis"></a>

```java
public java.lang.String getTimeUpdatedInMillis();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.internalValue"></a>

```java
public DataintegrationWorkspaceImportRequestImportedObjects getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestImportedObjects">DataintegrationWorkspaceImportRequestImportedObjects</a>

---


### DataintegrationWorkspaceImportRequestTimeoutsOutputReference <a name="DataintegrationWorkspaceImportRequestTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.dataintegration_workspace_import_request.DataintegrationWorkspaceImportRequestTimeoutsOutputReference;

new DataintegrationWorkspaceImportRequestTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts">DataintegrationWorkspaceImportRequestTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceImportRequest.DataintegrationWorkspaceImportRequestTimeouts">DataintegrationWorkspaceImportRequestTimeouts</a>

---




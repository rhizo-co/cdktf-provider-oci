# `cloudBridgeAsset` Submodule <a name="`cloudBridgeAsset` Submodule" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudBridgeAsset <a name="CloudBridgeAsset" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset oci_cloud_bridge_asset}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAsset;

CloudBridgeAsset.Builder.create(Construct scope, java.lang.String id)
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
    .assetType(java.lang.String)
    .compartmentId(java.lang.String)
    .externalAssetKey(java.lang.String)
    .inventoryId(java.lang.String)
    .sourceKey(java.lang.String)
//  .assetSourceIds(java.util.List<java.lang.String>)
//  .compute(CloudBridgeAssetCompute)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(CloudBridgeAssetTimeouts)
//  .vm(CloudBridgeAssetVm)
//  .vmwareVcenter(CloudBridgeAssetVmwareVcenter)
//  .vmwareVm(CloudBridgeAssetVmwareVm)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.assetType">assetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#asset_type CloudBridgeAsset#asset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#compartment_id CloudBridgeAsset#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.externalAssetKey">externalAssetKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#external_asset_key CloudBridgeAsset#external_asset_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.inventoryId">inventoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#inventory_id CloudBridgeAsset#inventory_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.sourceKey">sourceKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#source_key CloudBridgeAsset#source_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.assetSourceIds">assetSourceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#asset_source_ids CloudBridgeAsset#asset_source_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.compute">compute</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a></code> | compute block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#defined_tags CloudBridgeAsset#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#display_name CloudBridgeAsset#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#freeform_tags CloudBridgeAsset#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#id CloudBridgeAsset#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts">CloudBridgeAssetTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.vm">vm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a></code> | vm block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.vmwareVcenter">vmwareVcenter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a></code> | vmware_vcenter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.vmwareVm">vmwareVm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a></code> | vmware_vm block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assetType`<sup>Required</sup> <a name="assetType" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.assetType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#asset_type CloudBridgeAsset#asset_type}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#compartment_id CloudBridgeAsset#compartment_id}.

---

##### `externalAssetKey`<sup>Required</sup> <a name="externalAssetKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.externalAssetKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#external_asset_key CloudBridgeAsset#external_asset_key}.

---

##### `inventoryId`<sup>Required</sup> <a name="inventoryId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.inventoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#inventory_id CloudBridgeAsset#inventory_id}.

---

##### `sourceKey`<sup>Required</sup> <a name="sourceKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.sourceKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#source_key CloudBridgeAsset#source_key}.

---

##### `assetSourceIds`<sup>Optional</sup> <a name="assetSourceIds" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.assetSourceIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#asset_source_ids CloudBridgeAsset#asset_source_ids}.

---

##### `compute`<sup>Optional</sup> <a name="compute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.compute"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a>

compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#compute CloudBridgeAsset#compute}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#defined_tags CloudBridgeAsset#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#display_name CloudBridgeAsset#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#freeform_tags CloudBridgeAsset#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#id CloudBridgeAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts">CloudBridgeAssetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#timeouts CloudBridgeAsset#timeouts}

---

##### `vm`<sup>Optional</sup> <a name="vm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.vm"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a>

vm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vm CloudBridgeAsset#vm}

---

##### `vmwareVcenter`<sup>Optional</sup> <a name="vmwareVcenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.vmwareVcenter"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a>

vmware_vcenter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vmware_vcenter CloudBridgeAsset#vmware_vcenter}

---

##### `vmwareVm`<sup>Optional</sup> <a name="vmwareVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.vmwareVm"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a>

vmware_vm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vmware_vm CloudBridgeAsset#vmware_vm}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute">putCompute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVm">putVm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVcenter">putVmwareVcenter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVm">putVmwareVm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetAssetSourceIds">resetAssetSourceIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetCompute">resetCompute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetVm">resetVm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetVmwareVcenter">resetVmwareVcenter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetVmwareVm">resetVmwareVm</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCompute` <a name="putCompute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute"></a>

```java
public void putCompute(CloudBridgeAssetCompute value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putTimeouts"></a>

```java
public void putTimeouts(CloudBridgeAssetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts">CloudBridgeAssetTimeouts</a>

---

##### `putVm` <a name="putVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVm"></a>

```java
public void putVm(CloudBridgeAssetVm value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVm.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a>

---

##### `putVmwareVcenter` <a name="putVmwareVcenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVcenter"></a>

```java
public void putVmwareVcenter(CloudBridgeAssetVmwareVcenter value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVcenter.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a>

---

##### `putVmwareVm` <a name="putVmwareVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVm"></a>

```java
public void putVmwareVm(CloudBridgeAssetVmwareVm value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVm.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a>

---

##### `resetAssetSourceIds` <a name="resetAssetSourceIds" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetAssetSourceIds"></a>

```java
public void resetAssetSourceIds()
```

##### `resetCompute` <a name="resetCompute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetCompute"></a>

```java
public void resetCompute()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVm` <a name="resetVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetVm"></a>

```java
public void resetVm()
```

##### `resetVmwareVcenter` <a name="resetVmwareVcenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetVmwareVcenter"></a>

```java
public void resetVmwareVcenter()
```

##### `resetVmwareVm` <a name="resetVmwareVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetVmwareVm"></a>

```java
public void resetVmwareVm()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudBridgeAsset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAsset;

CloudBridgeAsset.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAsset;

CloudBridgeAsset.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAsset;

CloudBridgeAsset.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAsset;

CloudBridgeAsset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudBridgeAsset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CloudBridgeAsset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudBridgeAsset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudBridgeAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CloudBridgeAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.compute">compute</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference">CloudBridgeAssetComputeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference">CloudBridgeAssetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vm">vm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference">CloudBridgeAssetVmOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVcenter">vmwareVcenter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference">CloudBridgeAssetVmwareVcenterOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVm">vmwareVm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference">CloudBridgeAssetVmwareVmOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetSourceIdsInput">assetSourceIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetTypeInput">assetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.computeInput">computeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.externalAssetKeyInput">externalAssetKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.inventoryIdInput">inventoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.sourceKeyInput">sourceKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts">CloudBridgeAssetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmInput">vmInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVcenterInput">vmwareVcenterInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVmInput">vmwareVmInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetSourceIds">assetSourceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetType">assetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.externalAssetKey">externalAssetKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.inventoryId">inventoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.sourceKey">sourceKey</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compute`<sup>Required</sup> <a name="compute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.compute"></a>

```java
public CloudBridgeAssetComputeOutputReference getCompute();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference">CloudBridgeAssetComputeOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeouts"></a>

```java
public CloudBridgeAssetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference">CloudBridgeAssetTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `vm`<sup>Required</sup> <a name="vm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vm"></a>

```java
public CloudBridgeAssetVmOutputReference getVm();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference">CloudBridgeAssetVmOutputReference</a>

---

##### `vmwareVcenter`<sup>Required</sup> <a name="vmwareVcenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVcenter"></a>

```java
public CloudBridgeAssetVmwareVcenterOutputReference getVmwareVcenter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference">CloudBridgeAssetVmwareVcenterOutputReference</a>

---

##### `vmwareVm`<sup>Required</sup> <a name="vmwareVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVm"></a>

```java
public CloudBridgeAssetVmwareVmOutputReference getVmwareVm();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference">CloudBridgeAssetVmwareVmOutputReference</a>

---

##### `assetSourceIdsInput`<sup>Optional</sup> <a name="assetSourceIdsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetSourceIdsInput"></a>

```java
public java.util.List<java.lang.String> getAssetSourceIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `assetTypeInput`<sup>Optional</sup> <a name="assetTypeInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetTypeInput"></a>

```java
public java.lang.String getAssetTypeInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `computeInput`<sup>Optional</sup> <a name="computeInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.computeInput"></a>

```java
public CloudBridgeAssetCompute getComputeInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `externalAssetKeyInput`<sup>Optional</sup> <a name="externalAssetKeyInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.externalAssetKeyInput"></a>

```java
public java.lang.String getExternalAssetKeyInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inventoryIdInput`<sup>Optional</sup> <a name="inventoryIdInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.inventoryIdInput"></a>

```java
public java.lang.String getInventoryIdInput();
```

- *Type:* java.lang.String

---

##### `sourceKeyInput`<sup>Optional</sup> <a name="sourceKeyInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.sourceKeyInput"></a>

```java
public java.lang.String getSourceKeyInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts">CloudBridgeAssetTimeouts</a>

---

##### `vmInput`<sup>Optional</sup> <a name="vmInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmInput"></a>

```java
public CloudBridgeAssetVm getVmInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a>

---

##### `vmwareVcenterInput`<sup>Optional</sup> <a name="vmwareVcenterInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVcenterInput"></a>

```java
public CloudBridgeAssetVmwareVcenter getVmwareVcenterInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a>

---

##### `vmwareVmInput`<sup>Optional</sup> <a name="vmwareVmInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVmInput"></a>

```java
public CloudBridgeAssetVmwareVm getVmwareVmInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a>

---

##### `assetSourceIds`<sup>Required</sup> <a name="assetSourceIds" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetSourceIds"></a>

```java
public java.util.List<java.lang.String> getAssetSourceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `assetType`<sup>Required</sup> <a name="assetType" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetType"></a>

```java
public java.lang.String getAssetType();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `externalAssetKey`<sup>Required</sup> <a name="externalAssetKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.externalAssetKey"></a>

```java
public java.lang.String getExternalAssetKey();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inventoryId`<sup>Required</sup> <a name="inventoryId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.inventoryId"></a>

```java
public java.lang.String getInventoryId();
```

- *Type:* java.lang.String

---

##### `sourceKey`<sup>Required</sup> <a name="sourceKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.sourceKey"></a>

```java
public java.lang.String getSourceKey();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudBridgeAssetCompute <a name="CloudBridgeAssetCompute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAssetCompute;

CloudBridgeAssetCompute.builder()
//  .connectedNetworks(java.lang.Number)
//  .coresCount(java.lang.Number)
//  .cpuModel(java.lang.String)
//  .description(java.lang.String)
//  .disks(IResolvable)
//  .disks(java.util.List<CloudBridgeAssetComputeDisks>)
//  .disksCount(java.lang.Number)
//  .dnsName(java.lang.String)
//  .firmware(java.lang.String)
//  .gpuDevices(IResolvable)
//  .gpuDevices(java.util.List<CloudBridgeAssetComputeGpuDevices>)
//  .gpuDevicesCount(java.lang.Number)
//  .guestState(java.lang.String)
//  .hardwareVersion(java.lang.String)
//  .hostName(java.lang.String)
//  .isPmemEnabled(java.lang.Boolean)
//  .isPmemEnabled(IResolvable)
//  .isTpmEnabled(java.lang.Boolean)
//  .isTpmEnabled(IResolvable)
//  .latencySensitivity(java.lang.String)
//  .memoryInMbs(java.lang.String)
//  .nics(IResolvable)
//  .nics(java.util.List<CloudBridgeAssetComputeNics>)
//  .nicsCount(java.lang.Number)
//  .nvdimmController(CloudBridgeAssetComputeNvdimmController)
//  .nvdimms(IResolvable)
//  .nvdimms(java.util.List<CloudBridgeAssetComputeNvdimms>)
//  .operatingSystem(java.lang.String)
//  .operatingSystemVersion(java.lang.String)
//  .pmemInMbs(java.lang.String)
//  .powerState(java.lang.String)
//  .primaryIp(java.lang.String)
//  .scsiController(CloudBridgeAssetComputeScsiController)
//  .storageProvisionedInMbs(java.lang.String)
//  .threadsPerCoreCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.connectedNetworks">connectedNetworks</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#connected_networks CloudBridgeAsset#connected_networks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.coresCount">coresCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cores_count CloudBridgeAsset#cores_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.cpuModel">cpuModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cpu_model CloudBridgeAsset#cpu_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#description CloudBridgeAsset#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.disks">disks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks">CloudBridgeAssetComputeDisks</a>></code> | disks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.disksCount">disksCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#disks_count CloudBridgeAsset#disks_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#dns_name CloudBridgeAsset#dns_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.firmware">firmware</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#firmware CloudBridgeAsset#firmware}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.gpuDevices">gpuDevices</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices">CloudBridgeAssetComputeGpuDevices</a>></code> | gpu_devices block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.gpuDevicesCount">gpuDevicesCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#gpu_devices_count CloudBridgeAsset#gpu_devices_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.guestState">guestState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#guest_state CloudBridgeAsset#guest_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.hardwareVersion">hardwareVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hardware_version CloudBridgeAsset#hardware_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.hostName">hostName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#host_name CloudBridgeAsset#host_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.isPmemEnabled">isPmemEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_pmem_enabled CloudBridgeAsset#is_pmem_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.isTpmEnabled">isTpmEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_tpm_enabled CloudBridgeAsset#is_tpm_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.latencySensitivity">latencySensitivity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#latency_sensitivity CloudBridgeAsset#latency_sensitivity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.memoryInMbs">memoryInMbs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#memory_in_mbs CloudBridgeAsset#memory_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nics">nics</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics">CloudBridgeAssetComputeNics</a>></code> | nics block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nicsCount">nicsCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#nics_count CloudBridgeAsset#nics_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nvdimmController">nvdimmController</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a></code> | nvdimm_controller block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nvdimms">nvdimms</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms">CloudBridgeAssetComputeNvdimms</a>></code> | nvdimms block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.operatingSystem">operatingSystem</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#operating_system CloudBridgeAsset#operating_system}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.operatingSystemVersion">operatingSystemVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#operating_system_version CloudBridgeAsset#operating_system_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.pmemInMbs">pmemInMbs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#pmem_in_mbs CloudBridgeAsset#pmem_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.powerState">powerState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#power_state CloudBridgeAsset#power_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.primaryIp">primaryIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#primary_ip CloudBridgeAsset#primary_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.scsiController">scsiController</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a></code> | scsi_controller block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.storageProvisionedInMbs">storageProvisionedInMbs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#storage_provisioned_in_mbs CloudBridgeAsset#storage_provisioned_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.threadsPerCoreCount">threadsPerCoreCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#threads_per_core_count CloudBridgeAsset#threads_per_core_count}. |

---

##### `connectedNetworks`<sup>Optional</sup> <a name="connectedNetworks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.connectedNetworks"></a>

```java
public java.lang.Number getConnectedNetworks();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#connected_networks CloudBridgeAsset#connected_networks}.

---

##### `coresCount`<sup>Optional</sup> <a name="coresCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.coresCount"></a>

```java
public java.lang.Number getCoresCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cores_count CloudBridgeAsset#cores_count}.

---

##### `cpuModel`<sup>Optional</sup> <a name="cpuModel" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.cpuModel"></a>

```java
public java.lang.String getCpuModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cpu_model CloudBridgeAsset#cpu_model}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#description CloudBridgeAsset#description}.

---

##### `disks`<sup>Optional</sup> <a name="disks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.disks"></a>

```java
public java.lang.Object getDisks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks">CloudBridgeAssetComputeDisks</a>>

disks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#disks CloudBridgeAsset#disks}

---

##### `disksCount`<sup>Optional</sup> <a name="disksCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.disksCount"></a>

```java
public java.lang.Number getDisksCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#disks_count CloudBridgeAsset#disks_count}.

---

##### `dnsName`<sup>Optional</sup> <a name="dnsName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#dns_name CloudBridgeAsset#dns_name}.

---

##### `firmware`<sup>Optional</sup> <a name="firmware" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.firmware"></a>

```java
public java.lang.String getFirmware();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#firmware CloudBridgeAsset#firmware}.

---

##### `gpuDevices`<sup>Optional</sup> <a name="gpuDevices" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.gpuDevices"></a>

```java
public java.lang.Object getGpuDevices();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices">CloudBridgeAssetComputeGpuDevices</a>>

gpu_devices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#gpu_devices CloudBridgeAsset#gpu_devices}

---

##### `gpuDevicesCount`<sup>Optional</sup> <a name="gpuDevicesCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.gpuDevicesCount"></a>

```java
public java.lang.Number getGpuDevicesCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#gpu_devices_count CloudBridgeAsset#gpu_devices_count}.

---

##### `guestState`<sup>Optional</sup> <a name="guestState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.guestState"></a>

```java
public java.lang.String getGuestState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#guest_state CloudBridgeAsset#guest_state}.

---

##### `hardwareVersion`<sup>Optional</sup> <a name="hardwareVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.hardwareVersion"></a>

```java
public java.lang.String getHardwareVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hardware_version CloudBridgeAsset#hardware_version}.

---

##### `hostName`<sup>Optional</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#host_name CloudBridgeAsset#host_name}.

---

##### `isPmemEnabled`<sup>Optional</sup> <a name="isPmemEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.isPmemEnabled"></a>

```java
public java.lang.Object getIsPmemEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_pmem_enabled CloudBridgeAsset#is_pmem_enabled}.

---

##### `isTpmEnabled`<sup>Optional</sup> <a name="isTpmEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.isTpmEnabled"></a>

```java
public java.lang.Object getIsTpmEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_tpm_enabled CloudBridgeAsset#is_tpm_enabled}.

---

##### `latencySensitivity`<sup>Optional</sup> <a name="latencySensitivity" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.latencySensitivity"></a>

```java
public java.lang.String getLatencySensitivity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#latency_sensitivity CloudBridgeAsset#latency_sensitivity}.

---

##### `memoryInMbs`<sup>Optional</sup> <a name="memoryInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.memoryInMbs"></a>

```java
public java.lang.String getMemoryInMbs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#memory_in_mbs CloudBridgeAsset#memory_in_mbs}.

---

##### `nics`<sup>Optional</sup> <a name="nics" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nics"></a>

```java
public java.lang.Object getNics();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics">CloudBridgeAssetComputeNics</a>>

nics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#nics CloudBridgeAsset#nics}

---

##### `nicsCount`<sup>Optional</sup> <a name="nicsCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nicsCount"></a>

```java
public java.lang.Number getNicsCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#nics_count CloudBridgeAsset#nics_count}.

---

##### `nvdimmController`<sup>Optional</sup> <a name="nvdimmController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nvdimmController"></a>

```java
public CloudBridgeAssetComputeNvdimmController getNvdimmController();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a>

nvdimm_controller block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#nvdimm_controller CloudBridgeAsset#nvdimm_controller}

---

##### `nvdimms`<sup>Optional</sup> <a name="nvdimms" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nvdimms"></a>

```java
public java.lang.Object getNvdimms();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms">CloudBridgeAssetComputeNvdimms</a>>

nvdimms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#nvdimms CloudBridgeAsset#nvdimms}

---

##### `operatingSystem`<sup>Optional</sup> <a name="operatingSystem" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.operatingSystem"></a>

```java
public java.lang.String getOperatingSystem();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#operating_system CloudBridgeAsset#operating_system}.

---

##### `operatingSystemVersion`<sup>Optional</sup> <a name="operatingSystemVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.operatingSystemVersion"></a>

```java
public java.lang.String getOperatingSystemVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#operating_system_version CloudBridgeAsset#operating_system_version}.

---

##### `pmemInMbs`<sup>Optional</sup> <a name="pmemInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.pmemInMbs"></a>

```java
public java.lang.String getPmemInMbs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#pmem_in_mbs CloudBridgeAsset#pmem_in_mbs}.

---

##### `powerState`<sup>Optional</sup> <a name="powerState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.powerState"></a>

```java
public java.lang.String getPowerState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#power_state CloudBridgeAsset#power_state}.

---

##### `primaryIp`<sup>Optional</sup> <a name="primaryIp" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.primaryIp"></a>

```java
public java.lang.String getPrimaryIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#primary_ip CloudBridgeAsset#primary_ip}.

---

##### `scsiController`<sup>Optional</sup> <a name="scsiController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.scsiController"></a>

```java
public CloudBridgeAssetComputeScsiController getScsiController();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a>

scsi_controller block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#scsi_controller CloudBridgeAsset#scsi_controller}

---

##### `storageProvisionedInMbs`<sup>Optional</sup> <a name="storageProvisionedInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.storageProvisionedInMbs"></a>

```java
public java.lang.String getStorageProvisionedInMbs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#storage_provisioned_in_mbs CloudBridgeAsset#storage_provisioned_in_mbs}.

---

##### `threadsPerCoreCount`<sup>Optional</sup> <a name="threadsPerCoreCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.threadsPerCoreCount"></a>

```java
public java.lang.Number getThreadsPerCoreCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#threads_per_core_count CloudBridgeAsset#threads_per_core_count}.

---

### CloudBridgeAssetComputeDisks <a name="CloudBridgeAssetComputeDisks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAssetComputeDisks;

CloudBridgeAssetComputeDisks.builder()
//  .bootOrder(java.lang.Number)
//  .location(java.lang.String)
//  .name(java.lang.String)
//  .persistentMode(java.lang.String)
//  .sizeInMbs(java.lang.String)
//  .uuid(java.lang.String)
//  .uuidLun(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.bootOrder">bootOrder</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#boot_order CloudBridgeAsset#boot_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#location CloudBridgeAsset#location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#name CloudBridgeAsset#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.persistentMode">persistentMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#persistent_mode CloudBridgeAsset#persistent_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.sizeInMbs">sizeInMbs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#size_in_mbs CloudBridgeAsset#size_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.uuid">uuid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#uuid CloudBridgeAsset#uuid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.uuidLun">uuidLun</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#uuid_lun CloudBridgeAsset#uuid_lun}. |

---

##### `bootOrder`<sup>Optional</sup> <a name="bootOrder" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.bootOrder"></a>

```java
public java.lang.Number getBootOrder();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#boot_order CloudBridgeAsset#boot_order}.

---

##### `location`<sup>Optional</sup> <a name="location" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#location CloudBridgeAsset#location}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#name CloudBridgeAsset#name}.

---

##### `persistentMode`<sup>Optional</sup> <a name="persistentMode" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.persistentMode"></a>

```java
public java.lang.String getPersistentMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#persistent_mode CloudBridgeAsset#persistent_mode}.

---

##### `sizeInMbs`<sup>Optional</sup> <a name="sizeInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.sizeInMbs"></a>

```java
public java.lang.String getSizeInMbs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#size_in_mbs CloudBridgeAsset#size_in_mbs}.

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#uuid CloudBridgeAsset#uuid}.

---

##### `uuidLun`<sup>Optional</sup> <a name="uuidLun" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.uuidLun"></a>

```java
public java.lang.String getUuidLun();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#uuid_lun CloudBridgeAsset#uuid_lun}.

---

### CloudBridgeAssetComputeGpuDevices <a name="CloudBridgeAssetComputeGpuDevices" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAssetComputeGpuDevices;

CloudBridgeAssetComputeGpuDevices.builder()
//  .coresCount(java.lang.Number)
//  .description(java.lang.String)
//  .manufacturer(java.lang.String)
//  .memoryInMbs(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.coresCount">coresCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cores_count CloudBridgeAsset#cores_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#description CloudBridgeAsset#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.manufacturer">manufacturer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#manufacturer CloudBridgeAsset#manufacturer}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.memoryInMbs">memoryInMbs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#memory_in_mbs CloudBridgeAsset#memory_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#name CloudBridgeAsset#name}. |

---

##### `coresCount`<sup>Optional</sup> <a name="coresCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.coresCount"></a>

```java
public java.lang.Number getCoresCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cores_count CloudBridgeAsset#cores_count}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#description CloudBridgeAsset#description}.

---

##### `manufacturer`<sup>Optional</sup> <a name="manufacturer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.manufacturer"></a>

```java
public java.lang.String getManufacturer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#manufacturer CloudBridgeAsset#manufacturer}.

---

##### `memoryInMbs`<sup>Optional</sup> <a name="memoryInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.memoryInMbs"></a>

```java
public java.lang.String getMemoryInMbs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#memory_in_mbs CloudBridgeAsset#memory_in_mbs}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#name CloudBridgeAsset#name}.

---

### CloudBridgeAssetComputeNics <a name="CloudBridgeAssetComputeNics" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAssetComputeNics;

CloudBridgeAssetComputeNics.builder()
//  .ipAddresses(java.util.List<java.lang.String>)
//  .label(java.lang.String)
//  .macAddress(java.lang.String)
//  .macAddressType(java.lang.String)
//  .networkName(java.lang.String)
//  .switchName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.ipAddresses">ipAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#ip_addresses CloudBridgeAsset#ip_addresses}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.label">label</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.macAddress">macAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#mac_address CloudBridgeAsset#mac_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.macAddressType">macAddressType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#mac_address_type CloudBridgeAsset#mac_address_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.networkName">networkName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#network_name CloudBridgeAsset#network_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.switchName">switchName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#switch_name CloudBridgeAsset#switch_name}. |

---

##### `ipAddresses`<sup>Optional</sup> <a name="ipAddresses" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.ipAddresses"></a>

```java
public java.util.List<java.lang.String> getIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#ip_addresses CloudBridgeAsset#ip_addresses}.

---

##### `label`<sup>Optional</sup> <a name="label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}.

---

##### `macAddress`<sup>Optional</sup> <a name="macAddress" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.macAddress"></a>

```java
public java.lang.String getMacAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#mac_address CloudBridgeAsset#mac_address}.

---

##### `macAddressType`<sup>Optional</sup> <a name="macAddressType" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.macAddressType"></a>

```java
public java.lang.String getMacAddressType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#mac_address_type CloudBridgeAsset#mac_address_type}.

---

##### `networkName`<sup>Optional</sup> <a name="networkName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.networkName"></a>

```java
public java.lang.String getNetworkName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#network_name CloudBridgeAsset#network_name}.

---

##### `switchName`<sup>Optional</sup> <a name="switchName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.switchName"></a>

```java
public java.lang.String getSwitchName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#switch_name CloudBridgeAsset#switch_name}.

---

### CloudBridgeAssetComputeNvdimmController <a name="CloudBridgeAssetComputeNvdimmController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAssetComputeNvdimmController;

CloudBridgeAssetComputeNvdimmController.builder()
//  .busNumber(java.lang.Number)
//  .label(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController.property.busNumber">busNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#bus_number CloudBridgeAsset#bus_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController.property.label">label</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}. |

---

##### `busNumber`<sup>Optional</sup> <a name="busNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController.property.busNumber"></a>

```java
public java.lang.Number getBusNumber();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#bus_number CloudBridgeAsset#bus_number}.

---

##### `label`<sup>Optional</sup> <a name="label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}.

---

### CloudBridgeAssetComputeNvdimms <a name="CloudBridgeAssetComputeNvdimms" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAssetComputeNvdimms;

CloudBridgeAssetComputeNvdimms.builder()
//  .controllerKey(java.lang.Number)
//  .label(java.lang.String)
//  .unitNumber(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.property.controllerKey">controllerKey</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#controller_key CloudBridgeAsset#controller_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.property.label">label</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.property.unitNumber">unitNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#unit_number CloudBridgeAsset#unit_number}. |

---

##### `controllerKey`<sup>Optional</sup> <a name="controllerKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.property.controllerKey"></a>

```java
public java.lang.Number getControllerKey();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#controller_key CloudBridgeAsset#controller_key}.

---

##### `label`<sup>Optional</sup> <a name="label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}.

---

##### `unitNumber`<sup>Optional</sup> <a name="unitNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.property.unitNumber"></a>

```java
public java.lang.Number getUnitNumber();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#unit_number CloudBridgeAsset#unit_number}.

---

### CloudBridgeAssetComputeScsiController <a name="CloudBridgeAssetComputeScsiController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAssetComputeScsiController;

CloudBridgeAssetComputeScsiController.builder()
//  .label(java.lang.String)
//  .sharedBus(java.lang.String)
//  .unitNumber(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.property.label">label</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.property.sharedBus">sharedBus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#shared_bus CloudBridgeAsset#shared_bus}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.property.unitNumber">unitNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#unit_number CloudBridgeAsset#unit_number}. |

---

##### `label`<sup>Optional</sup> <a name="label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}.

---

##### `sharedBus`<sup>Optional</sup> <a name="sharedBus" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.property.sharedBus"></a>

```java
public java.lang.String getSharedBus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#shared_bus CloudBridgeAsset#shared_bus}.

---

##### `unitNumber`<sup>Optional</sup> <a name="unitNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.property.unitNumber"></a>

```java
public java.lang.Number getUnitNumber();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#unit_number CloudBridgeAsset#unit_number}.

---

### CloudBridgeAssetConfig <a name="CloudBridgeAssetConfig" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAssetConfig;

CloudBridgeAssetConfig.builder()
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
    .assetType(java.lang.String)
    .compartmentId(java.lang.String)
    .externalAssetKey(java.lang.String)
    .inventoryId(java.lang.String)
    .sourceKey(java.lang.String)
//  .assetSourceIds(java.util.List<java.lang.String>)
//  .compute(CloudBridgeAssetCompute)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(CloudBridgeAssetTimeouts)
//  .vm(CloudBridgeAssetVm)
//  .vmwareVcenter(CloudBridgeAssetVmwareVcenter)
//  .vmwareVm(CloudBridgeAssetVmwareVm)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.assetType">assetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#asset_type CloudBridgeAsset#asset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#compartment_id CloudBridgeAsset#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.externalAssetKey">externalAssetKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#external_asset_key CloudBridgeAsset#external_asset_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.inventoryId">inventoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#inventory_id CloudBridgeAsset#inventory_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.sourceKey">sourceKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#source_key CloudBridgeAsset#source_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.assetSourceIds">assetSourceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#asset_source_ids CloudBridgeAsset#asset_source_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.compute">compute</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a></code> | compute block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#defined_tags CloudBridgeAsset#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#display_name CloudBridgeAsset#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#freeform_tags CloudBridgeAsset#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#id CloudBridgeAsset#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts">CloudBridgeAssetTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.vm">vm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a></code> | vm block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.vmwareVcenter">vmwareVcenter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a></code> | vmware_vcenter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.vmwareVm">vmwareVm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a></code> | vmware_vm block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assetType`<sup>Required</sup> <a name="assetType" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.assetType"></a>

```java
public java.lang.String getAssetType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#asset_type CloudBridgeAsset#asset_type}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#compartment_id CloudBridgeAsset#compartment_id}.

---

##### `externalAssetKey`<sup>Required</sup> <a name="externalAssetKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.externalAssetKey"></a>

```java
public java.lang.String getExternalAssetKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#external_asset_key CloudBridgeAsset#external_asset_key}.

---

##### `inventoryId`<sup>Required</sup> <a name="inventoryId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.inventoryId"></a>

```java
public java.lang.String getInventoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#inventory_id CloudBridgeAsset#inventory_id}.

---

##### `sourceKey`<sup>Required</sup> <a name="sourceKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.sourceKey"></a>

```java
public java.lang.String getSourceKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#source_key CloudBridgeAsset#source_key}.

---

##### `assetSourceIds`<sup>Optional</sup> <a name="assetSourceIds" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.assetSourceIds"></a>

```java
public java.util.List<java.lang.String> getAssetSourceIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#asset_source_ids CloudBridgeAsset#asset_source_ids}.

---

##### `compute`<sup>Optional</sup> <a name="compute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.compute"></a>

```java
public CloudBridgeAssetCompute getCompute();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a>

compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#compute CloudBridgeAsset#compute}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#defined_tags CloudBridgeAsset#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#display_name CloudBridgeAsset#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#freeform_tags CloudBridgeAsset#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#id CloudBridgeAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.timeouts"></a>

```java
public CloudBridgeAssetTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts">CloudBridgeAssetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#timeouts CloudBridgeAsset#timeouts}

---

##### `vm`<sup>Optional</sup> <a name="vm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.vm"></a>

```java
public CloudBridgeAssetVm getVm();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a>

vm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vm CloudBridgeAsset#vm}

---

##### `vmwareVcenter`<sup>Optional</sup> <a name="vmwareVcenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.vmwareVcenter"></a>

```java
public CloudBridgeAssetVmwareVcenter getVmwareVcenter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a>

vmware_vcenter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vmware_vcenter CloudBridgeAsset#vmware_vcenter}

---

##### `vmwareVm`<sup>Optional</sup> <a name="vmwareVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.vmwareVm"></a>

```java
public CloudBridgeAssetVmwareVm getVmwareVm();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a>

vmware_vm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vmware_vm CloudBridgeAsset#vmware_vm}

---

### CloudBridgeAssetTimeouts <a name="CloudBridgeAssetTimeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAssetTimeouts;

CloudBridgeAssetTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#create CloudBridgeAsset#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#delete CloudBridgeAsset#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#update CloudBridgeAsset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#create CloudBridgeAsset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#delete CloudBridgeAsset#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#update CloudBridgeAsset#update}.

---

### CloudBridgeAssetVm <a name="CloudBridgeAssetVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAssetVm;

CloudBridgeAssetVm.builder()
//  .hypervisorHost(java.lang.String)
//  .hypervisorVendor(java.lang.String)
//  .hypervisorVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.property.hypervisorHost">hypervisorHost</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hypervisor_host CloudBridgeAsset#hypervisor_host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.property.hypervisorVendor">hypervisorVendor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hypervisor_vendor CloudBridgeAsset#hypervisor_vendor}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.property.hypervisorVersion">hypervisorVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hypervisor_version CloudBridgeAsset#hypervisor_version}. |

---

##### `hypervisorHost`<sup>Optional</sup> <a name="hypervisorHost" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.property.hypervisorHost"></a>

```java
public java.lang.String getHypervisorHost();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hypervisor_host CloudBridgeAsset#hypervisor_host}.

---

##### `hypervisorVendor`<sup>Optional</sup> <a name="hypervisorVendor" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.property.hypervisorVendor"></a>

```java
public java.lang.String getHypervisorVendor();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hypervisor_vendor CloudBridgeAsset#hypervisor_vendor}.

---

##### `hypervisorVersion`<sup>Optional</sup> <a name="hypervisorVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.property.hypervisorVersion"></a>

```java
public java.lang.String getHypervisorVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hypervisor_version CloudBridgeAsset#hypervisor_version}.

---

### CloudBridgeAssetVmwareVcenter <a name="CloudBridgeAssetVmwareVcenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAssetVmwareVcenter;

CloudBridgeAssetVmwareVcenter.builder()
//  .dataCenter(java.lang.String)
//  .vcenterKey(java.lang.String)
//  .vcenterVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.property.dataCenter">dataCenter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#data_center CloudBridgeAsset#data_center}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.property.vcenterKey">vcenterKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vcenter_key CloudBridgeAsset#vcenter_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.property.vcenterVersion">vcenterVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vcenter_version CloudBridgeAsset#vcenter_version}. |

---

##### `dataCenter`<sup>Optional</sup> <a name="dataCenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.property.dataCenter"></a>

```java
public java.lang.String getDataCenter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#data_center CloudBridgeAsset#data_center}.

---

##### `vcenterKey`<sup>Optional</sup> <a name="vcenterKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.property.vcenterKey"></a>

```java
public java.lang.String getVcenterKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vcenter_key CloudBridgeAsset#vcenter_key}.

---

##### `vcenterVersion`<sup>Optional</sup> <a name="vcenterVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.property.vcenterVersion"></a>

```java
public java.lang.String getVcenterVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vcenter_version CloudBridgeAsset#vcenter_version}.

---

### CloudBridgeAssetVmwareVm <a name="CloudBridgeAssetVmwareVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAssetVmwareVm;

CloudBridgeAssetVmwareVm.builder()
//  .cluster(java.lang.String)
//  .customerFields(java.util.List<java.lang.String>)
//  .customerTags(IResolvable)
//  .customerTags(java.util.List<CloudBridgeAssetVmwareVmCustomerTags>)
//  .faultToleranceBandwidth(java.lang.Number)
//  .faultToleranceSecondaryLatency(java.lang.Number)
//  .faultToleranceState(java.lang.String)
//  .instanceUuid(java.lang.String)
//  .isDisksCbtEnabled(java.lang.Boolean)
//  .isDisksCbtEnabled(IResolvable)
//  .isDisksUuidEnabled(java.lang.Boolean)
//  .isDisksUuidEnabled(IResolvable)
//  .path(java.lang.String)
//  .vmwareToolsStatus(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.cluster">cluster</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cluster CloudBridgeAsset#cluster}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.customerFields">customerFields</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#customer_fields CloudBridgeAsset#customer_fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.customerTags">customerTags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags">CloudBridgeAssetVmwareVmCustomerTags</a>></code> | customer_tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.faultToleranceBandwidth">faultToleranceBandwidth</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#fault_tolerance_bandwidth CloudBridgeAsset#fault_tolerance_bandwidth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.faultToleranceSecondaryLatency">faultToleranceSecondaryLatency</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#fault_tolerance_secondary_latency CloudBridgeAsset#fault_tolerance_secondary_latency}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.faultToleranceState">faultToleranceState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#fault_tolerance_state CloudBridgeAsset#fault_tolerance_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.instanceUuid">instanceUuid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#instance_uuid CloudBridgeAsset#instance_uuid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.isDisksCbtEnabled">isDisksCbtEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_disks_cbt_enabled CloudBridgeAsset#is_disks_cbt_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.isDisksUuidEnabled">isDisksUuidEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_disks_uuid_enabled CloudBridgeAsset#is_disks_uuid_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#path CloudBridgeAsset#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.vmwareToolsStatus">vmwareToolsStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vmware_tools_status CloudBridgeAsset#vmware_tools_status}. |

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cluster CloudBridgeAsset#cluster}.

---

##### `customerFields`<sup>Optional</sup> <a name="customerFields" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.customerFields"></a>

```java
public java.util.List<java.lang.String> getCustomerFields();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#customer_fields CloudBridgeAsset#customer_fields}.

---

##### `customerTags`<sup>Optional</sup> <a name="customerTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.customerTags"></a>

```java
public java.lang.Object getCustomerTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags">CloudBridgeAssetVmwareVmCustomerTags</a>>

customer_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#customer_tags CloudBridgeAsset#customer_tags}

---

##### `faultToleranceBandwidth`<sup>Optional</sup> <a name="faultToleranceBandwidth" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.faultToleranceBandwidth"></a>

```java
public java.lang.Number getFaultToleranceBandwidth();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#fault_tolerance_bandwidth CloudBridgeAsset#fault_tolerance_bandwidth}.

---

##### `faultToleranceSecondaryLatency`<sup>Optional</sup> <a name="faultToleranceSecondaryLatency" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.faultToleranceSecondaryLatency"></a>

```java
public java.lang.Number getFaultToleranceSecondaryLatency();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#fault_tolerance_secondary_latency CloudBridgeAsset#fault_tolerance_secondary_latency}.

---

##### `faultToleranceState`<sup>Optional</sup> <a name="faultToleranceState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.faultToleranceState"></a>

```java
public java.lang.String getFaultToleranceState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#fault_tolerance_state CloudBridgeAsset#fault_tolerance_state}.

---

##### `instanceUuid`<sup>Optional</sup> <a name="instanceUuid" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.instanceUuid"></a>

```java
public java.lang.String getInstanceUuid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#instance_uuid CloudBridgeAsset#instance_uuid}.

---

##### `isDisksCbtEnabled`<sup>Optional</sup> <a name="isDisksCbtEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.isDisksCbtEnabled"></a>

```java
public java.lang.Object getIsDisksCbtEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_disks_cbt_enabled CloudBridgeAsset#is_disks_cbt_enabled}.

---

##### `isDisksUuidEnabled`<sup>Optional</sup> <a name="isDisksUuidEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.isDisksUuidEnabled"></a>

```java
public java.lang.Object getIsDisksUuidEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_disks_uuid_enabled CloudBridgeAsset#is_disks_uuid_enabled}.

---

##### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#path CloudBridgeAsset#path}.

---

##### `vmwareToolsStatus`<sup>Optional</sup> <a name="vmwareToolsStatus" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.vmwareToolsStatus"></a>

```java
public java.lang.String getVmwareToolsStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vmware_tools_status CloudBridgeAsset#vmware_tools_status}.

---

### CloudBridgeAssetVmwareVmCustomerTags <a name="CloudBridgeAssetVmwareVmCustomerTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAssetVmwareVmCustomerTags;

CloudBridgeAssetVmwareVmCustomerTags.builder()
//  .description(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#description CloudBridgeAsset#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#name CloudBridgeAsset#name}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#description CloudBridgeAsset#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#name CloudBridgeAsset#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudBridgeAssetComputeDisksList <a name="CloudBridgeAssetComputeDisksList" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAssetComputeDisksList;

new CloudBridgeAssetComputeDisksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.get"></a>

```java
public CloudBridgeAssetComputeDisksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks">CloudBridgeAssetComputeDisks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks">CloudBridgeAssetComputeDisks</a>>

---


### CloudBridgeAssetComputeDisksOutputReference <a name="CloudBridgeAssetComputeDisksOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAssetComputeDisksOutputReference;

new CloudBridgeAssetComputeDisksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetBootOrder">resetBootOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetPersistentMode">resetPersistentMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetSizeInMbs">resetSizeInMbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetUuid">resetUuid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetUuidLun">resetUuidLun</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBootOrder` <a name="resetBootOrder" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetBootOrder"></a>

```java
public void resetBootOrder()
```

##### `resetLocation` <a name="resetLocation" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPersistentMode` <a name="resetPersistentMode" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetPersistentMode"></a>

```java
public void resetPersistentMode()
```

##### `resetSizeInMbs` <a name="resetSizeInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetSizeInMbs"></a>

```java
public void resetSizeInMbs()
```

##### `resetUuid` <a name="resetUuid" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetUuid"></a>

```java
public void resetUuid()
```

##### `resetUuidLun` <a name="resetUuidLun" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetUuidLun"></a>

```java
public void resetUuidLun()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.bootOrderInput">bootOrderInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.persistentModeInput">persistentModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.sizeInMbsInput">sizeInMbsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuidInput">uuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuidLunInput">uuidLunInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.bootOrder">bootOrder</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.persistentMode">persistentMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.sizeInMbs">sizeInMbs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuidLun">uuidLun</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks">CloudBridgeAssetComputeDisks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bootOrderInput`<sup>Optional</sup> <a name="bootOrderInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.bootOrderInput"></a>

```java
public java.lang.Number getBootOrderInput();
```

- *Type:* java.lang.Number

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `persistentModeInput`<sup>Optional</sup> <a name="persistentModeInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.persistentModeInput"></a>

```java
public java.lang.String getPersistentModeInput();
```

- *Type:* java.lang.String

---

##### `sizeInMbsInput`<sup>Optional</sup> <a name="sizeInMbsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.sizeInMbsInput"></a>

```java
public java.lang.String getSizeInMbsInput();
```

- *Type:* java.lang.String

---

##### `uuidInput`<sup>Optional</sup> <a name="uuidInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuidInput"></a>

```java
public java.lang.String getUuidInput();
```

- *Type:* java.lang.String

---

##### `uuidLunInput`<sup>Optional</sup> <a name="uuidLunInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuidLunInput"></a>

```java
public java.lang.String getUuidLunInput();
```

- *Type:* java.lang.String

---

##### `bootOrder`<sup>Required</sup> <a name="bootOrder" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.bootOrder"></a>

```java
public java.lang.Number getBootOrder();
```

- *Type:* java.lang.Number

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `persistentMode`<sup>Required</sup> <a name="persistentMode" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.persistentMode"></a>

```java
public java.lang.String getPersistentMode();
```

- *Type:* java.lang.String

---

##### `sizeInMbs`<sup>Required</sup> <a name="sizeInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.sizeInMbs"></a>

```java
public java.lang.String getSizeInMbs();
```

- *Type:* java.lang.String

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `uuidLun`<sup>Required</sup> <a name="uuidLun" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuidLun"></a>

```java
public java.lang.String getUuidLun();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks">CloudBridgeAssetComputeDisks</a>

---


### CloudBridgeAssetComputeGpuDevicesList <a name="CloudBridgeAssetComputeGpuDevicesList" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAssetComputeGpuDevicesList;

new CloudBridgeAssetComputeGpuDevicesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.get"></a>

```java
public CloudBridgeAssetComputeGpuDevicesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices">CloudBridgeAssetComputeGpuDevices</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices">CloudBridgeAssetComputeGpuDevices</a>>

---


### CloudBridgeAssetComputeGpuDevicesOutputReference <a name="CloudBridgeAssetComputeGpuDevicesOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAssetComputeGpuDevicesOutputReference;

new CloudBridgeAssetComputeGpuDevicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetCoresCount">resetCoresCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetManufacturer">resetManufacturer</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetMemoryInMbs">resetMemoryInMbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCoresCount` <a name="resetCoresCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetCoresCount"></a>

```java
public void resetCoresCount()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetManufacturer` <a name="resetManufacturer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetManufacturer"></a>

```java
public void resetManufacturer()
```

##### `resetMemoryInMbs` <a name="resetMemoryInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetMemoryInMbs"></a>

```java
public void resetMemoryInMbs()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.coresCountInput">coresCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.manufacturerInput">manufacturerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.memoryInMbsInput">memoryInMbsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.coresCount">coresCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.manufacturer">manufacturer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.memoryInMbs">memoryInMbs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices">CloudBridgeAssetComputeGpuDevices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `coresCountInput`<sup>Optional</sup> <a name="coresCountInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.coresCountInput"></a>

```java
public java.lang.Number getCoresCountInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `manufacturerInput`<sup>Optional</sup> <a name="manufacturerInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.manufacturerInput"></a>

```java
public java.lang.String getManufacturerInput();
```

- *Type:* java.lang.String

---

##### `memoryInMbsInput`<sup>Optional</sup> <a name="memoryInMbsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.memoryInMbsInput"></a>

```java
public java.lang.String getMemoryInMbsInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `coresCount`<sup>Required</sup> <a name="coresCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.coresCount"></a>

```java
public java.lang.Number getCoresCount();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `manufacturer`<sup>Required</sup> <a name="manufacturer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.manufacturer"></a>

```java
public java.lang.String getManufacturer();
```

- *Type:* java.lang.String

---

##### `memoryInMbs`<sup>Required</sup> <a name="memoryInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.memoryInMbs"></a>

```java
public java.lang.String getMemoryInMbs();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices">CloudBridgeAssetComputeGpuDevices</a>

---


### CloudBridgeAssetComputeNicsList <a name="CloudBridgeAssetComputeNicsList" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAssetComputeNicsList;

new CloudBridgeAssetComputeNicsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.get"></a>

```java
public CloudBridgeAssetComputeNicsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics">CloudBridgeAssetComputeNics</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics">CloudBridgeAssetComputeNics</a>>

---


### CloudBridgeAssetComputeNicsOutputReference <a name="CloudBridgeAssetComputeNicsOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAssetComputeNicsOutputReference;

new CloudBridgeAssetComputeNicsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetIpAddresses">resetIpAddresses</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetMacAddress">resetMacAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetMacAddressType">resetMacAddressType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetNetworkName">resetNetworkName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetSwitchName">resetSwitchName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddresses` <a name="resetIpAddresses" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetIpAddresses"></a>

```java
public void resetIpAddresses()
```

##### `resetLabel` <a name="resetLabel" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetLabel"></a>

```java
public void resetLabel()
```

##### `resetMacAddress` <a name="resetMacAddress" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetMacAddress"></a>

```java
public void resetMacAddress()
```

##### `resetMacAddressType` <a name="resetMacAddressType" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetMacAddressType"></a>

```java
public void resetMacAddressType()
```

##### `resetNetworkName` <a name="resetNetworkName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetNetworkName"></a>

```java
public void resetNetworkName()
```

##### `resetSwitchName` <a name="resetSwitchName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetSwitchName"></a>

```java
public void resetSwitchName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.ipAddressesInput">ipAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddressInput">macAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddressTypeInput">macAddressTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.networkNameInput">networkNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.switchNameInput">switchNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.ipAddresses">ipAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddress">macAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddressType">macAddressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.networkName">networkName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.switchName">switchName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics">CloudBridgeAssetComputeNics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddressesInput`<sup>Optional</sup> <a name="ipAddressesInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.ipAddressesInput"></a>

```java
public java.util.List<java.lang.String> getIpAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `macAddressInput`<sup>Optional</sup> <a name="macAddressInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddressInput"></a>

```java
public java.lang.String getMacAddressInput();
```

- *Type:* java.lang.String

---

##### `macAddressTypeInput`<sup>Optional</sup> <a name="macAddressTypeInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddressTypeInput"></a>

```java
public java.lang.String getMacAddressTypeInput();
```

- *Type:* java.lang.String

---

##### `networkNameInput`<sup>Optional</sup> <a name="networkNameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.networkNameInput"></a>

```java
public java.lang.String getNetworkNameInput();
```

- *Type:* java.lang.String

---

##### `switchNameInput`<sup>Optional</sup> <a name="switchNameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.switchNameInput"></a>

```java
public java.lang.String getSwitchNameInput();
```

- *Type:* java.lang.String

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.ipAddresses"></a>

```java
public java.util.List<java.lang.String> getIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `macAddress`<sup>Required</sup> <a name="macAddress" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddress"></a>

```java
public java.lang.String getMacAddress();
```

- *Type:* java.lang.String

---

##### `macAddressType`<sup>Required</sup> <a name="macAddressType" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddressType"></a>

```java
public java.lang.String getMacAddressType();
```

- *Type:* java.lang.String

---

##### `networkName`<sup>Required</sup> <a name="networkName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.networkName"></a>

```java
public java.lang.String getNetworkName();
```

- *Type:* java.lang.String

---

##### `switchName`<sup>Required</sup> <a name="switchName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.switchName"></a>

```java
public java.lang.String getSwitchName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics">CloudBridgeAssetComputeNics</a>

---


### CloudBridgeAssetComputeNvdimmControllerOutputReference <a name="CloudBridgeAssetComputeNvdimmControllerOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAssetComputeNvdimmControllerOutputReference;

new CloudBridgeAssetComputeNvdimmControllerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resetBusNumber">resetBusNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resetLabel">resetLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBusNumber` <a name="resetBusNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resetBusNumber"></a>

```java
public void resetBusNumber()
```

##### `resetLabel` <a name="resetLabel" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resetLabel"></a>

```java
public void resetLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.busNumberInput">busNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.busNumber">busNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `busNumberInput`<sup>Optional</sup> <a name="busNumberInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.busNumberInput"></a>

```java
public java.lang.Number getBusNumberInput();
```

- *Type:* java.lang.Number

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `busNumber`<sup>Required</sup> <a name="busNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.busNumber"></a>

```java
public java.lang.Number getBusNumber();
```

- *Type:* java.lang.Number

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.internalValue"></a>

```java
public CloudBridgeAssetComputeNvdimmController getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a>

---


### CloudBridgeAssetComputeNvdimmsList <a name="CloudBridgeAssetComputeNvdimmsList" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAssetComputeNvdimmsList;

new CloudBridgeAssetComputeNvdimmsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.get"></a>

```java
public CloudBridgeAssetComputeNvdimmsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms">CloudBridgeAssetComputeNvdimms</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms">CloudBridgeAssetComputeNvdimms</a>>

---


### CloudBridgeAssetComputeNvdimmsOutputReference <a name="CloudBridgeAssetComputeNvdimmsOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAssetComputeNvdimmsOutputReference;

new CloudBridgeAssetComputeNvdimmsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resetControllerKey">resetControllerKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resetUnitNumber">resetUnitNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetControllerKey` <a name="resetControllerKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resetControllerKey"></a>

```java
public void resetControllerKey()
```

##### `resetLabel` <a name="resetLabel" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resetLabel"></a>

```java
public void resetLabel()
```

##### `resetUnitNumber` <a name="resetUnitNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resetUnitNumber"></a>

```java
public void resetUnitNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.controllerKeyInput">controllerKeyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.unitNumberInput">unitNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.controllerKey">controllerKey</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.unitNumber">unitNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms">CloudBridgeAssetComputeNvdimms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `controllerKeyInput`<sup>Optional</sup> <a name="controllerKeyInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.controllerKeyInput"></a>

```java
public java.lang.Number getControllerKeyInput();
```

- *Type:* java.lang.Number

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `unitNumberInput`<sup>Optional</sup> <a name="unitNumberInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.unitNumberInput"></a>

```java
public java.lang.Number getUnitNumberInput();
```

- *Type:* java.lang.Number

---

##### `controllerKey`<sup>Required</sup> <a name="controllerKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.controllerKey"></a>

```java
public java.lang.Number getControllerKey();
```

- *Type:* java.lang.Number

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `unitNumber`<sup>Required</sup> <a name="unitNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.unitNumber"></a>

```java
public java.lang.Number getUnitNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms">CloudBridgeAssetComputeNvdimms</a>

---


### CloudBridgeAssetComputeOutputReference <a name="CloudBridgeAssetComputeOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAssetComputeOutputReference;

new CloudBridgeAssetComputeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putDisks">putDisks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putGpuDevices">putGpuDevices</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNics">putNics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNvdimmController">putNvdimmController</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNvdimms">putNvdimms</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putScsiController">putScsiController</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetConnectedNetworks">resetConnectedNetworks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetCoresCount">resetCoresCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetCpuModel">resetCpuModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDisks">resetDisks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDisksCount">resetDisksCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDnsName">resetDnsName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetFirmware">resetFirmware</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetGpuDevices">resetGpuDevices</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetGpuDevicesCount">resetGpuDevicesCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetGuestState">resetGuestState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetHardwareVersion">resetHardwareVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetHostName">resetHostName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetIsPmemEnabled">resetIsPmemEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetIsTpmEnabled">resetIsTpmEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetLatencySensitivity">resetLatencySensitivity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetMemoryInMbs">resetMemoryInMbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNics">resetNics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNicsCount">resetNicsCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNvdimmController">resetNvdimmController</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNvdimms">resetNvdimms</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetOperatingSystem">resetOperatingSystem</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetOperatingSystemVersion">resetOperatingSystemVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetPmemInMbs">resetPmemInMbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetPowerState">resetPowerState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetPrimaryIp">resetPrimaryIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetScsiController">resetScsiController</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetStorageProvisionedInMbs">resetStorageProvisionedInMbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetThreadsPerCoreCount">resetThreadsPerCoreCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDisks` <a name="putDisks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putDisks"></a>

```java
public void putDisks(IResolvable OR java.util.List<CloudBridgeAssetComputeDisks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putDisks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks">CloudBridgeAssetComputeDisks</a>>

---

##### `putGpuDevices` <a name="putGpuDevices" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putGpuDevices"></a>

```java
public void putGpuDevices(IResolvable OR java.util.List<CloudBridgeAssetComputeGpuDevices> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putGpuDevices.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices">CloudBridgeAssetComputeGpuDevices</a>>

---

##### `putNics` <a name="putNics" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNics"></a>

```java
public void putNics(IResolvable OR java.util.List<CloudBridgeAssetComputeNics> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNics.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics">CloudBridgeAssetComputeNics</a>>

---

##### `putNvdimmController` <a name="putNvdimmController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNvdimmController"></a>

```java
public void putNvdimmController(CloudBridgeAssetComputeNvdimmController value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNvdimmController.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a>

---

##### `putNvdimms` <a name="putNvdimms" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNvdimms"></a>

```java
public void putNvdimms(IResolvable OR java.util.List<CloudBridgeAssetComputeNvdimms> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNvdimms.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms">CloudBridgeAssetComputeNvdimms</a>>

---

##### `putScsiController` <a name="putScsiController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putScsiController"></a>

```java
public void putScsiController(CloudBridgeAssetComputeScsiController value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putScsiController.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a>

---

##### `resetConnectedNetworks` <a name="resetConnectedNetworks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetConnectedNetworks"></a>

```java
public void resetConnectedNetworks()
```

##### `resetCoresCount` <a name="resetCoresCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetCoresCount"></a>

```java
public void resetCoresCount()
```

##### `resetCpuModel` <a name="resetCpuModel" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetCpuModel"></a>

```java
public void resetCpuModel()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisks` <a name="resetDisks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDisks"></a>

```java
public void resetDisks()
```

##### `resetDisksCount` <a name="resetDisksCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDisksCount"></a>

```java
public void resetDisksCount()
```

##### `resetDnsName` <a name="resetDnsName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDnsName"></a>

```java
public void resetDnsName()
```

##### `resetFirmware` <a name="resetFirmware" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetFirmware"></a>

```java
public void resetFirmware()
```

##### `resetGpuDevices` <a name="resetGpuDevices" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetGpuDevices"></a>

```java
public void resetGpuDevices()
```

##### `resetGpuDevicesCount` <a name="resetGpuDevicesCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetGpuDevicesCount"></a>

```java
public void resetGpuDevicesCount()
```

##### `resetGuestState` <a name="resetGuestState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetGuestState"></a>

```java
public void resetGuestState()
```

##### `resetHardwareVersion` <a name="resetHardwareVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetHardwareVersion"></a>

```java
public void resetHardwareVersion()
```

##### `resetHostName` <a name="resetHostName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetHostName"></a>

```java
public void resetHostName()
```

##### `resetIsPmemEnabled` <a name="resetIsPmemEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetIsPmemEnabled"></a>

```java
public void resetIsPmemEnabled()
```

##### `resetIsTpmEnabled` <a name="resetIsTpmEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetIsTpmEnabled"></a>

```java
public void resetIsTpmEnabled()
```

##### `resetLatencySensitivity` <a name="resetLatencySensitivity" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetLatencySensitivity"></a>

```java
public void resetLatencySensitivity()
```

##### `resetMemoryInMbs` <a name="resetMemoryInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetMemoryInMbs"></a>

```java
public void resetMemoryInMbs()
```

##### `resetNics` <a name="resetNics" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNics"></a>

```java
public void resetNics()
```

##### `resetNicsCount` <a name="resetNicsCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNicsCount"></a>

```java
public void resetNicsCount()
```

##### `resetNvdimmController` <a name="resetNvdimmController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNvdimmController"></a>

```java
public void resetNvdimmController()
```

##### `resetNvdimms` <a name="resetNvdimms" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNvdimms"></a>

```java
public void resetNvdimms()
```

##### `resetOperatingSystem` <a name="resetOperatingSystem" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetOperatingSystem"></a>

```java
public void resetOperatingSystem()
```

##### `resetOperatingSystemVersion` <a name="resetOperatingSystemVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetOperatingSystemVersion"></a>

```java
public void resetOperatingSystemVersion()
```

##### `resetPmemInMbs` <a name="resetPmemInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetPmemInMbs"></a>

```java
public void resetPmemInMbs()
```

##### `resetPowerState` <a name="resetPowerState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetPowerState"></a>

```java
public void resetPowerState()
```

##### `resetPrimaryIp` <a name="resetPrimaryIp" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetPrimaryIp"></a>

```java
public void resetPrimaryIp()
```

##### `resetScsiController` <a name="resetScsiController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetScsiController"></a>

```java
public void resetScsiController()
```

##### `resetStorageProvisionedInMbs` <a name="resetStorageProvisionedInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetStorageProvisionedInMbs"></a>

```java
public void resetStorageProvisionedInMbs()
```

##### `resetThreadsPerCoreCount` <a name="resetThreadsPerCoreCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetThreadsPerCoreCount"></a>

```java
public void resetThreadsPerCoreCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disks">disks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList">CloudBridgeAssetComputeDisksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevices">gpuDevices</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList">CloudBridgeAssetComputeGpuDevicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nics">nics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList">CloudBridgeAssetComputeNicsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimmController">nvdimmController</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference">CloudBridgeAssetComputeNvdimmControllerOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimms">nvdimms</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList">CloudBridgeAssetComputeNvdimmsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.scsiController">scsiController</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference">CloudBridgeAssetComputeScsiControllerOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.connectedNetworksInput">connectedNetworksInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.coresCountInput">coresCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.cpuModelInput">cpuModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disksCountInput">disksCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disksInput">disksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks">CloudBridgeAssetComputeDisks</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.dnsNameInput">dnsNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.firmwareInput">firmwareInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevicesCountInput">gpuDevicesCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevicesInput">gpuDevicesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices">CloudBridgeAssetComputeGpuDevices</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.guestStateInput">guestStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hardwareVersionInput">hardwareVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isPmemEnabledInput">isPmemEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isTpmEnabledInput">isTpmEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.latencySensitivityInput">latencySensitivityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.memoryInMbsInput">memoryInMbsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nicsCountInput">nicsCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nicsInput">nicsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics">CloudBridgeAssetComputeNics</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimmControllerInput">nvdimmControllerInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimmsInput">nvdimmsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms">CloudBridgeAssetComputeNvdimms</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystemInput">operatingSystemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystemVersionInput">operatingSystemVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.pmemInMbsInput">pmemInMbsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.powerStateInput">powerStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.primaryIpInput">primaryIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.scsiControllerInput">scsiControllerInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.storageProvisionedInMbsInput">storageProvisionedInMbsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.threadsPerCoreCountInput">threadsPerCoreCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.connectedNetworks">connectedNetworks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.coresCount">coresCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.cpuModel">cpuModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disksCount">disksCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.firmware">firmware</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevicesCount">gpuDevicesCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.guestState">guestState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hardwareVersion">hardwareVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isPmemEnabled">isPmemEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isTpmEnabled">isTpmEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.latencySensitivity">latencySensitivity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.memoryInMbs">memoryInMbs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nicsCount">nicsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystem">operatingSystem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystemVersion">operatingSystemVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.pmemInMbs">pmemInMbs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.powerState">powerState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.primaryIp">primaryIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.storageProvisionedInMbs">storageProvisionedInMbs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.threadsPerCoreCount">threadsPerCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disks`<sup>Required</sup> <a name="disks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disks"></a>

```java
public CloudBridgeAssetComputeDisksList getDisks();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList">CloudBridgeAssetComputeDisksList</a>

---

##### `gpuDevices`<sup>Required</sup> <a name="gpuDevices" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevices"></a>

```java
public CloudBridgeAssetComputeGpuDevicesList getGpuDevices();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList">CloudBridgeAssetComputeGpuDevicesList</a>

---

##### `nics`<sup>Required</sup> <a name="nics" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nics"></a>

```java
public CloudBridgeAssetComputeNicsList getNics();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList">CloudBridgeAssetComputeNicsList</a>

---

##### `nvdimmController`<sup>Required</sup> <a name="nvdimmController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimmController"></a>

```java
public CloudBridgeAssetComputeNvdimmControllerOutputReference getNvdimmController();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference">CloudBridgeAssetComputeNvdimmControllerOutputReference</a>

---

##### `nvdimms`<sup>Required</sup> <a name="nvdimms" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimms"></a>

```java
public CloudBridgeAssetComputeNvdimmsList getNvdimms();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList">CloudBridgeAssetComputeNvdimmsList</a>

---

##### `scsiController`<sup>Required</sup> <a name="scsiController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.scsiController"></a>

```java
public CloudBridgeAssetComputeScsiControllerOutputReference getScsiController();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference">CloudBridgeAssetComputeScsiControllerOutputReference</a>

---

##### `connectedNetworksInput`<sup>Optional</sup> <a name="connectedNetworksInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.connectedNetworksInput"></a>

```java
public java.lang.Number getConnectedNetworksInput();
```

- *Type:* java.lang.Number

---

##### `coresCountInput`<sup>Optional</sup> <a name="coresCountInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.coresCountInput"></a>

```java
public java.lang.Number getCoresCountInput();
```

- *Type:* java.lang.Number

---

##### `cpuModelInput`<sup>Optional</sup> <a name="cpuModelInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.cpuModelInput"></a>

```java
public java.lang.String getCpuModelInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disksCountInput`<sup>Optional</sup> <a name="disksCountInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disksCountInput"></a>

```java
public java.lang.Number getDisksCountInput();
```

- *Type:* java.lang.Number

---

##### `disksInput`<sup>Optional</sup> <a name="disksInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disksInput"></a>

```java
public java.lang.Object getDisksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks">CloudBridgeAssetComputeDisks</a>>

---

##### `dnsNameInput`<sup>Optional</sup> <a name="dnsNameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.dnsNameInput"></a>

```java
public java.lang.String getDnsNameInput();
```

- *Type:* java.lang.String

---

##### `firmwareInput`<sup>Optional</sup> <a name="firmwareInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.firmwareInput"></a>

```java
public java.lang.String getFirmwareInput();
```

- *Type:* java.lang.String

---

##### `gpuDevicesCountInput`<sup>Optional</sup> <a name="gpuDevicesCountInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevicesCountInput"></a>

```java
public java.lang.Number getGpuDevicesCountInput();
```

- *Type:* java.lang.Number

---

##### `gpuDevicesInput`<sup>Optional</sup> <a name="gpuDevicesInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevicesInput"></a>

```java
public java.lang.Object getGpuDevicesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices">CloudBridgeAssetComputeGpuDevices</a>>

---

##### `guestStateInput`<sup>Optional</sup> <a name="guestStateInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.guestStateInput"></a>

```java
public java.lang.String getGuestStateInput();
```

- *Type:* java.lang.String

---

##### `hardwareVersionInput`<sup>Optional</sup> <a name="hardwareVersionInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hardwareVersionInput"></a>

```java
public java.lang.String getHardwareVersionInput();
```

- *Type:* java.lang.String

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hostNameInput"></a>

```java
public java.lang.String getHostNameInput();
```

- *Type:* java.lang.String

---

##### `isPmemEnabledInput`<sup>Optional</sup> <a name="isPmemEnabledInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isPmemEnabledInput"></a>

```java
public java.lang.Object getIsPmemEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isTpmEnabledInput`<sup>Optional</sup> <a name="isTpmEnabledInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isTpmEnabledInput"></a>

```java
public java.lang.Object getIsTpmEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `latencySensitivityInput`<sup>Optional</sup> <a name="latencySensitivityInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.latencySensitivityInput"></a>

```java
public java.lang.String getLatencySensitivityInput();
```

- *Type:* java.lang.String

---

##### `memoryInMbsInput`<sup>Optional</sup> <a name="memoryInMbsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.memoryInMbsInput"></a>

```java
public java.lang.String getMemoryInMbsInput();
```

- *Type:* java.lang.String

---

##### `nicsCountInput`<sup>Optional</sup> <a name="nicsCountInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nicsCountInput"></a>

```java
public java.lang.Number getNicsCountInput();
```

- *Type:* java.lang.Number

---

##### `nicsInput`<sup>Optional</sup> <a name="nicsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nicsInput"></a>

```java
public java.lang.Object getNicsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics">CloudBridgeAssetComputeNics</a>>

---

##### `nvdimmControllerInput`<sup>Optional</sup> <a name="nvdimmControllerInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimmControllerInput"></a>

```java
public CloudBridgeAssetComputeNvdimmController getNvdimmControllerInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a>

---

##### `nvdimmsInput`<sup>Optional</sup> <a name="nvdimmsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimmsInput"></a>

```java
public java.lang.Object getNvdimmsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms">CloudBridgeAssetComputeNvdimms</a>>

---

##### `operatingSystemInput`<sup>Optional</sup> <a name="operatingSystemInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystemInput"></a>

```java
public java.lang.String getOperatingSystemInput();
```

- *Type:* java.lang.String

---

##### `operatingSystemVersionInput`<sup>Optional</sup> <a name="operatingSystemVersionInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystemVersionInput"></a>

```java
public java.lang.String getOperatingSystemVersionInput();
```

- *Type:* java.lang.String

---

##### `pmemInMbsInput`<sup>Optional</sup> <a name="pmemInMbsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.pmemInMbsInput"></a>

```java
public java.lang.String getPmemInMbsInput();
```

- *Type:* java.lang.String

---

##### `powerStateInput`<sup>Optional</sup> <a name="powerStateInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.powerStateInput"></a>

```java
public java.lang.String getPowerStateInput();
```

- *Type:* java.lang.String

---

##### `primaryIpInput`<sup>Optional</sup> <a name="primaryIpInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.primaryIpInput"></a>

```java
public java.lang.String getPrimaryIpInput();
```

- *Type:* java.lang.String

---

##### `scsiControllerInput`<sup>Optional</sup> <a name="scsiControllerInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.scsiControllerInput"></a>

```java
public CloudBridgeAssetComputeScsiController getScsiControllerInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a>

---

##### `storageProvisionedInMbsInput`<sup>Optional</sup> <a name="storageProvisionedInMbsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.storageProvisionedInMbsInput"></a>

```java
public java.lang.String getStorageProvisionedInMbsInput();
```

- *Type:* java.lang.String

---

##### `threadsPerCoreCountInput`<sup>Optional</sup> <a name="threadsPerCoreCountInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.threadsPerCoreCountInput"></a>

```java
public java.lang.Number getThreadsPerCoreCountInput();
```

- *Type:* java.lang.Number

---

##### `connectedNetworks`<sup>Required</sup> <a name="connectedNetworks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.connectedNetworks"></a>

```java
public java.lang.Number getConnectedNetworks();
```

- *Type:* java.lang.Number

---

##### `coresCount`<sup>Required</sup> <a name="coresCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.coresCount"></a>

```java
public java.lang.Number getCoresCount();
```

- *Type:* java.lang.Number

---

##### `cpuModel`<sup>Required</sup> <a name="cpuModel" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.cpuModel"></a>

```java
public java.lang.String getCpuModel();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disksCount`<sup>Required</sup> <a name="disksCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disksCount"></a>

```java
public java.lang.Number getDisksCount();
```

- *Type:* java.lang.Number

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `firmware`<sup>Required</sup> <a name="firmware" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.firmware"></a>

```java
public java.lang.String getFirmware();
```

- *Type:* java.lang.String

---

##### `gpuDevicesCount`<sup>Required</sup> <a name="gpuDevicesCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevicesCount"></a>

```java
public java.lang.Number getGpuDevicesCount();
```

- *Type:* java.lang.Number

---

##### `guestState`<sup>Required</sup> <a name="guestState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.guestState"></a>

```java
public java.lang.String getGuestState();
```

- *Type:* java.lang.String

---

##### `hardwareVersion`<sup>Required</sup> <a name="hardwareVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hardwareVersion"></a>

```java
public java.lang.String getHardwareVersion();
```

- *Type:* java.lang.String

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `isPmemEnabled`<sup>Required</sup> <a name="isPmemEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isPmemEnabled"></a>

```java
public java.lang.Object getIsPmemEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isTpmEnabled`<sup>Required</sup> <a name="isTpmEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isTpmEnabled"></a>

```java
public java.lang.Object getIsTpmEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `latencySensitivity`<sup>Required</sup> <a name="latencySensitivity" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.latencySensitivity"></a>

```java
public java.lang.String getLatencySensitivity();
```

- *Type:* java.lang.String

---

##### `memoryInMbs`<sup>Required</sup> <a name="memoryInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.memoryInMbs"></a>

```java
public java.lang.String getMemoryInMbs();
```

- *Type:* java.lang.String

---

##### `nicsCount`<sup>Required</sup> <a name="nicsCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nicsCount"></a>

```java
public java.lang.Number getNicsCount();
```

- *Type:* java.lang.Number

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystem"></a>

```java
public java.lang.String getOperatingSystem();
```

- *Type:* java.lang.String

---

##### `operatingSystemVersion`<sup>Required</sup> <a name="operatingSystemVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystemVersion"></a>

```java
public java.lang.String getOperatingSystemVersion();
```

- *Type:* java.lang.String

---

##### `pmemInMbs`<sup>Required</sup> <a name="pmemInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.pmemInMbs"></a>

```java
public java.lang.String getPmemInMbs();
```

- *Type:* java.lang.String

---

##### `powerState`<sup>Required</sup> <a name="powerState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.powerState"></a>

```java
public java.lang.String getPowerState();
```

- *Type:* java.lang.String

---

##### `primaryIp`<sup>Required</sup> <a name="primaryIp" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.primaryIp"></a>

```java
public java.lang.String getPrimaryIp();
```

- *Type:* java.lang.String

---

##### `storageProvisionedInMbs`<sup>Required</sup> <a name="storageProvisionedInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.storageProvisionedInMbs"></a>

```java
public java.lang.String getStorageProvisionedInMbs();
```

- *Type:* java.lang.String

---

##### `threadsPerCoreCount`<sup>Required</sup> <a name="threadsPerCoreCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.threadsPerCoreCount"></a>

```java
public java.lang.Number getThreadsPerCoreCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.internalValue"></a>

```java
public CloudBridgeAssetCompute getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a>

---


### CloudBridgeAssetComputeScsiControllerOutputReference <a name="CloudBridgeAssetComputeScsiControllerOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAssetComputeScsiControllerOutputReference;

new CloudBridgeAssetComputeScsiControllerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resetSharedBus">resetSharedBus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resetUnitNumber">resetUnitNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabel` <a name="resetLabel" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resetLabel"></a>

```java
public void resetLabel()
```

##### `resetSharedBus` <a name="resetSharedBus" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resetSharedBus"></a>

```java
public void resetSharedBus()
```

##### `resetUnitNumber` <a name="resetUnitNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resetUnitNumber"></a>

```java
public void resetUnitNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.sharedBusInput">sharedBusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.unitNumberInput">unitNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.sharedBus">sharedBus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.unitNumber">unitNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `sharedBusInput`<sup>Optional</sup> <a name="sharedBusInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.sharedBusInput"></a>

```java
public java.lang.String getSharedBusInput();
```

- *Type:* java.lang.String

---

##### `unitNumberInput`<sup>Optional</sup> <a name="unitNumberInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.unitNumberInput"></a>

```java
public java.lang.Number getUnitNumberInput();
```

- *Type:* java.lang.Number

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `sharedBus`<sup>Required</sup> <a name="sharedBus" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.sharedBus"></a>

```java
public java.lang.String getSharedBus();
```

- *Type:* java.lang.String

---

##### `unitNumber`<sup>Required</sup> <a name="unitNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.unitNumber"></a>

```java
public java.lang.Number getUnitNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.internalValue"></a>

```java
public CloudBridgeAssetComputeScsiController getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a>

---


### CloudBridgeAssetTimeoutsOutputReference <a name="CloudBridgeAssetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAssetTimeoutsOutputReference;

new CloudBridgeAssetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts">CloudBridgeAssetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts">CloudBridgeAssetTimeouts</a>

---


### CloudBridgeAssetVmOutputReference <a name="CloudBridgeAssetVmOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAssetVmOutputReference;

new CloudBridgeAssetVmOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resetHypervisorHost">resetHypervisorHost</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resetHypervisorVendor">resetHypervisorVendor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resetHypervisorVersion">resetHypervisorVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHypervisorHost` <a name="resetHypervisorHost" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resetHypervisorHost"></a>

```java
public void resetHypervisorHost()
```

##### `resetHypervisorVendor` <a name="resetHypervisorVendor" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resetHypervisorVendor"></a>

```java
public void resetHypervisorVendor()
```

##### `resetHypervisorVersion` <a name="resetHypervisorVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resetHypervisorVersion"></a>

```java
public void resetHypervisorVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorHostInput">hypervisorHostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVendorInput">hypervisorVendorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVersionInput">hypervisorVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorHost">hypervisorHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVendor">hypervisorVendor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVersion">hypervisorVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hypervisorHostInput`<sup>Optional</sup> <a name="hypervisorHostInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorHostInput"></a>

```java
public java.lang.String getHypervisorHostInput();
```

- *Type:* java.lang.String

---

##### `hypervisorVendorInput`<sup>Optional</sup> <a name="hypervisorVendorInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVendorInput"></a>

```java
public java.lang.String getHypervisorVendorInput();
```

- *Type:* java.lang.String

---

##### `hypervisorVersionInput`<sup>Optional</sup> <a name="hypervisorVersionInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVersionInput"></a>

```java
public java.lang.String getHypervisorVersionInput();
```

- *Type:* java.lang.String

---

##### `hypervisorHost`<sup>Required</sup> <a name="hypervisorHost" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorHost"></a>

```java
public java.lang.String getHypervisorHost();
```

- *Type:* java.lang.String

---

##### `hypervisorVendor`<sup>Required</sup> <a name="hypervisorVendor" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVendor"></a>

```java
public java.lang.String getHypervisorVendor();
```

- *Type:* java.lang.String

---

##### `hypervisorVersion`<sup>Required</sup> <a name="hypervisorVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVersion"></a>

```java
public java.lang.String getHypervisorVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.internalValue"></a>

```java
public CloudBridgeAssetVm getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a>

---


### CloudBridgeAssetVmwareVcenterOutputReference <a name="CloudBridgeAssetVmwareVcenterOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAssetVmwareVcenterOutputReference;

new CloudBridgeAssetVmwareVcenterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resetDataCenter">resetDataCenter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resetVcenterKey">resetVcenterKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resetVcenterVersion">resetVcenterVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataCenter` <a name="resetDataCenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resetDataCenter"></a>

```java
public void resetDataCenter()
```

##### `resetVcenterKey` <a name="resetVcenterKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resetVcenterKey"></a>

```java
public void resetVcenterKey()
```

##### `resetVcenterVersion` <a name="resetVcenterVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resetVcenterVersion"></a>

```java
public void resetVcenterVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.dataCenterInput">dataCenterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterKeyInput">vcenterKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterVersionInput">vcenterVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.dataCenter">dataCenter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterKey">vcenterKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterVersion">vcenterVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataCenterInput`<sup>Optional</sup> <a name="dataCenterInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.dataCenterInput"></a>

```java
public java.lang.String getDataCenterInput();
```

- *Type:* java.lang.String

---

##### `vcenterKeyInput`<sup>Optional</sup> <a name="vcenterKeyInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterKeyInput"></a>

```java
public java.lang.String getVcenterKeyInput();
```

- *Type:* java.lang.String

---

##### `vcenterVersionInput`<sup>Optional</sup> <a name="vcenterVersionInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterVersionInput"></a>

```java
public java.lang.String getVcenterVersionInput();
```

- *Type:* java.lang.String

---

##### `dataCenter`<sup>Required</sup> <a name="dataCenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.dataCenter"></a>

```java
public java.lang.String getDataCenter();
```

- *Type:* java.lang.String

---

##### `vcenterKey`<sup>Required</sup> <a name="vcenterKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterKey"></a>

```java
public java.lang.String getVcenterKey();
```

- *Type:* java.lang.String

---

##### `vcenterVersion`<sup>Required</sup> <a name="vcenterVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterVersion"></a>

```java
public java.lang.String getVcenterVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.internalValue"></a>

```java
public CloudBridgeAssetVmwareVcenter getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a>

---


### CloudBridgeAssetVmwareVmCustomerTagsList <a name="CloudBridgeAssetVmwareVmCustomerTagsList" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAssetVmwareVmCustomerTagsList;

new CloudBridgeAssetVmwareVmCustomerTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.get"></a>

```java
public CloudBridgeAssetVmwareVmCustomerTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags">CloudBridgeAssetVmwareVmCustomerTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags">CloudBridgeAssetVmwareVmCustomerTags</a>>

---


### CloudBridgeAssetVmwareVmCustomerTagsOutputReference <a name="CloudBridgeAssetVmwareVmCustomerTagsOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference;

new CloudBridgeAssetVmwareVmCustomerTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags">CloudBridgeAssetVmwareVmCustomerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags">CloudBridgeAssetVmwareVmCustomerTags</a>

---


### CloudBridgeAssetVmwareVmOutputReference <a name="CloudBridgeAssetVmwareVmOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset.CloudBridgeAssetVmwareVmOutputReference;

new CloudBridgeAssetVmwareVmOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.putCustomerTags">putCustomerTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetCluster">resetCluster</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetCustomerFields">resetCustomerFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetCustomerTags">resetCustomerTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetFaultToleranceBandwidth">resetFaultToleranceBandwidth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetFaultToleranceSecondaryLatency">resetFaultToleranceSecondaryLatency</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetFaultToleranceState">resetFaultToleranceState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetInstanceUuid">resetInstanceUuid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetIsDisksCbtEnabled">resetIsDisksCbtEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetIsDisksUuidEnabled">resetIsDisksUuidEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetVmwareToolsStatus">resetVmwareToolsStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomerTags` <a name="putCustomerTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.putCustomerTags"></a>

```java
public void putCustomerTags(IResolvable OR java.util.List<CloudBridgeAssetVmwareVmCustomerTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.putCustomerTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags">CloudBridgeAssetVmwareVmCustomerTags</a>>

---

##### `resetCluster` <a name="resetCluster" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetCluster"></a>

```java
public void resetCluster()
```

##### `resetCustomerFields` <a name="resetCustomerFields" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetCustomerFields"></a>

```java
public void resetCustomerFields()
```

##### `resetCustomerTags` <a name="resetCustomerTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetCustomerTags"></a>

```java
public void resetCustomerTags()
```

##### `resetFaultToleranceBandwidth` <a name="resetFaultToleranceBandwidth" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetFaultToleranceBandwidth"></a>

```java
public void resetFaultToleranceBandwidth()
```

##### `resetFaultToleranceSecondaryLatency` <a name="resetFaultToleranceSecondaryLatency" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetFaultToleranceSecondaryLatency"></a>

```java
public void resetFaultToleranceSecondaryLatency()
```

##### `resetFaultToleranceState` <a name="resetFaultToleranceState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetFaultToleranceState"></a>

```java
public void resetFaultToleranceState()
```

##### `resetInstanceUuid` <a name="resetInstanceUuid" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetInstanceUuid"></a>

```java
public void resetInstanceUuid()
```

##### `resetIsDisksCbtEnabled` <a name="resetIsDisksCbtEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetIsDisksCbtEnabled"></a>

```java
public void resetIsDisksCbtEnabled()
```

##### `resetIsDisksUuidEnabled` <a name="resetIsDisksUuidEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetIsDisksUuidEnabled"></a>

```java
public void resetIsDisksUuidEnabled()
```

##### `resetPath` <a name="resetPath" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetVmwareToolsStatus` <a name="resetVmwareToolsStatus" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetVmwareToolsStatus"></a>

```java
public void resetVmwareToolsStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerTags">customerTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList">CloudBridgeAssetVmwareVmCustomerTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerFieldsInput">customerFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerTagsInput">customerTagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags">CloudBridgeAssetVmwareVmCustomerTags</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceBandwidthInput">faultToleranceBandwidthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceSecondaryLatencyInput">faultToleranceSecondaryLatencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceStateInput">faultToleranceStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.instanceUuidInput">instanceUuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksCbtEnabledInput">isDisksCbtEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksUuidEnabledInput">isDisksUuidEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.vmwareToolsStatusInput">vmwareToolsStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerFields">customerFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceBandwidth">faultToleranceBandwidth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceSecondaryLatency">faultToleranceSecondaryLatency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceState">faultToleranceState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.instanceUuid">instanceUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksCbtEnabled">isDisksCbtEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksUuidEnabled">isDisksUuidEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.vmwareToolsStatus">vmwareToolsStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customerTags`<sup>Required</sup> <a name="customerTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerTags"></a>

```java
public CloudBridgeAssetVmwareVmCustomerTagsList getCustomerTags();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList">CloudBridgeAssetVmwareVmCustomerTagsList</a>

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `customerFieldsInput`<sup>Optional</sup> <a name="customerFieldsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerFieldsInput"></a>

```java
public java.util.List<java.lang.String> getCustomerFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customerTagsInput`<sup>Optional</sup> <a name="customerTagsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerTagsInput"></a>

```java
public java.lang.Object getCustomerTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags">CloudBridgeAssetVmwareVmCustomerTags</a>>

---

##### `faultToleranceBandwidthInput`<sup>Optional</sup> <a name="faultToleranceBandwidthInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceBandwidthInput"></a>

```java
public java.lang.Number getFaultToleranceBandwidthInput();
```

- *Type:* java.lang.Number

---

##### `faultToleranceSecondaryLatencyInput`<sup>Optional</sup> <a name="faultToleranceSecondaryLatencyInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceSecondaryLatencyInput"></a>

```java
public java.lang.Number getFaultToleranceSecondaryLatencyInput();
```

- *Type:* java.lang.Number

---

##### `faultToleranceStateInput`<sup>Optional</sup> <a name="faultToleranceStateInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceStateInput"></a>

```java
public java.lang.String getFaultToleranceStateInput();
```

- *Type:* java.lang.String

---

##### `instanceUuidInput`<sup>Optional</sup> <a name="instanceUuidInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.instanceUuidInput"></a>

```java
public java.lang.String getInstanceUuidInput();
```

- *Type:* java.lang.String

---

##### `isDisksCbtEnabledInput`<sup>Optional</sup> <a name="isDisksCbtEnabledInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksCbtEnabledInput"></a>

```java
public java.lang.Object getIsDisksCbtEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isDisksUuidEnabledInput`<sup>Optional</sup> <a name="isDisksUuidEnabledInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksUuidEnabledInput"></a>

```java
public java.lang.Object getIsDisksUuidEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `vmwareToolsStatusInput`<sup>Optional</sup> <a name="vmwareToolsStatusInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.vmwareToolsStatusInput"></a>

```java
public java.lang.String getVmwareToolsStatusInput();
```

- *Type:* java.lang.String

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `customerFields`<sup>Required</sup> <a name="customerFields" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerFields"></a>

```java
public java.util.List<java.lang.String> getCustomerFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `faultToleranceBandwidth`<sup>Required</sup> <a name="faultToleranceBandwidth" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceBandwidth"></a>

```java
public java.lang.Number getFaultToleranceBandwidth();
```

- *Type:* java.lang.Number

---

##### `faultToleranceSecondaryLatency`<sup>Required</sup> <a name="faultToleranceSecondaryLatency" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceSecondaryLatency"></a>

```java
public java.lang.Number getFaultToleranceSecondaryLatency();
```

- *Type:* java.lang.Number

---

##### `faultToleranceState`<sup>Required</sup> <a name="faultToleranceState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceState"></a>

```java
public java.lang.String getFaultToleranceState();
```

- *Type:* java.lang.String

---

##### `instanceUuid`<sup>Required</sup> <a name="instanceUuid" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.instanceUuid"></a>

```java
public java.lang.String getInstanceUuid();
```

- *Type:* java.lang.String

---

##### `isDisksCbtEnabled`<sup>Required</sup> <a name="isDisksCbtEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksCbtEnabled"></a>

```java
public java.lang.Object getIsDisksCbtEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isDisksUuidEnabled`<sup>Required</sup> <a name="isDisksUuidEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksUuidEnabled"></a>

```java
public java.lang.Object getIsDisksUuidEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `vmwareToolsStatus`<sup>Required</sup> <a name="vmwareToolsStatus" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.vmwareToolsStatus"></a>

```java
public java.lang.String getVmwareToolsStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.internalValue"></a>

```java
public CloudBridgeAssetVmwareVm getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a>

---




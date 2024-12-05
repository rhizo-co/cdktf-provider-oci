# `dataOciCloudBridgeAssets` Submodule <a name="`dataOciCloudBridgeAssets` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudBridgeAssets <a name="DataOciCloudBridgeAssets" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets oci_cloud_bridge_assets}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssets;

DataOciCloudBridgeAssets.Builder.create(Construct scope, java.lang.String id)
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
//  .assetId(java.lang.String)
//  .assetType(java.lang.String)
//  .displayName(java.lang.String)
//  .externalAssetKey(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCloudBridgeAssetsFilter>)
//  .id(java.lang.String)
//  .inventoryId(java.lang.String)
//  .sourceKey(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#compartment_id DataOciCloudBridgeAssets#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.assetId">assetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#asset_id DataOciCloudBridgeAssets#asset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.assetType">assetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#asset_type DataOciCloudBridgeAssets#asset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#display_name DataOciCloudBridgeAssets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.externalAssetKey">externalAssetKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#external_asset_key DataOciCloudBridgeAssets#external_asset_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter">DataOciCloudBridgeAssetsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#id DataOciCloudBridgeAssets#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.inventoryId">inventoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#inventory_id DataOciCloudBridgeAssets#inventory_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.sourceKey">sourceKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#source_key DataOciCloudBridgeAssets#source_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#state DataOciCloudBridgeAssets#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#compartment_id DataOciCloudBridgeAssets#compartment_id}.

---

##### `assetId`<sup>Optional</sup> <a name="assetId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.assetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#asset_id DataOciCloudBridgeAssets#asset_id}.

---

##### `assetType`<sup>Optional</sup> <a name="assetType" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.assetType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#asset_type DataOciCloudBridgeAssets#asset_type}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#display_name DataOciCloudBridgeAssets#display_name}.

---

##### `externalAssetKey`<sup>Optional</sup> <a name="externalAssetKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.externalAssetKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#external_asset_key DataOciCloudBridgeAssets#external_asset_key}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter">DataOciCloudBridgeAssetsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#filter DataOciCloudBridgeAssets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#id DataOciCloudBridgeAssets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inventoryId`<sup>Optional</sup> <a name="inventoryId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.inventoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#inventory_id DataOciCloudBridgeAssets#inventory_id}.

---

##### `sourceKey`<sup>Optional</sup> <a name="sourceKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.sourceKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#source_key DataOciCloudBridgeAssets#source_key}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#state DataOciCloudBridgeAssets#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetAssetId">resetAssetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetAssetType">resetAssetType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetExternalAssetKey">resetExternalAssetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetInventoryId">resetInventoryId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetSourceKey">resetSourceKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciCloudBridgeAssetsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter">DataOciCloudBridgeAssetsFilter</a>>

---

##### `resetAssetId` <a name="resetAssetId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetAssetId"></a>

```java
public void resetAssetId()
```

##### `resetAssetType` <a name="resetAssetType" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetAssetType"></a>

```java
public void resetAssetType()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetExternalAssetKey` <a name="resetExternalAssetKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetExternalAssetKey"></a>

```java
public void resetExternalAssetKey()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetId"></a>

```java
public void resetId()
```

##### `resetInventoryId` <a name="resetInventoryId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetInventoryId"></a>

```java
public void resetInventoryId()
```

##### `resetSourceKey` <a name="resetSourceKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetSourceKey"></a>

```java
public void resetSourceKey()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudBridgeAssets resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssets;

DataOciCloudBridgeAssets.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssets;

DataOciCloudBridgeAssets.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssets;

DataOciCloudBridgeAssets.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssets;

DataOciCloudBridgeAssets.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCloudBridgeAssets.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCloudBridgeAssets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCloudBridgeAssets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCloudBridgeAssets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudBridgeAssets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.assetCollection">assetCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList">DataOciCloudBridgeAssetsAssetCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList">DataOciCloudBridgeAssetsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.assetIdInput">assetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.assetTypeInput">assetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.externalAssetKeyInput">externalAssetKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter">DataOciCloudBridgeAssetsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.inventoryIdInput">inventoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.sourceKeyInput">sourceKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.assetId">assetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.assetType">assetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.externalAssetKey">externalAssetKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.inventoryId">inventoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.sourceKey">sourceKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `assetCollection`<sup>Required</sup> <a name="assetCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.assetCollection"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionList getAssetCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList">DataOciCloudBridgeAssetsAssetCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.filter"></a>

```java
public DataOciCloudBridgeAssetsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList">DataOciCloudBridgeAssetsFilterList</a>

---

##### `assetIdInput`<sup>Optional</sup> <a name="assetIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.assetIdInput"></a>

```java
public java.lang.String getAssetIdInput();
```

- *Type:* java.lang.String

---

##### `assetTypeInput`<sup>Optional</sup> <a name="assetTypeInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.assetTypeInput"></a>

```java
public java.lang.String getAssetTypeInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `externalAssetKeyInput`<sup>Optional</sup> <a name="externalAssetKeyInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.externalAssetKeyInput"></a>

```java
public java.lang.String getExternalAssetKeyInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter">DataOciCloudBridgeAssetsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inventoryIdInput`<sup>Optional</sup> <a name="inventoryIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.inventoryIdInput"></a>

```java
public java.lang.String getInventoryIdInput();
```

- *Type:* java.lang.String

---

##### `sourceKeyInput`<sup>Optional</sup> <a name="sourceKeyInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.sourceKeyInput"></a>

```java
public java.lang.String getSourceKeyInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.assetId"></a>

```java
public java.lang.String getAssetId();
```

- *Type:* java.lang.String

---

##### `assetType`<sup>Required</sup> <a name="assetType" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.assetType"></a>

```java
public java.lang.String getAssetType();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `externalAssetKey`<sup>Required</sup> <a name="externalAssetKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.externalAssetKey"></a>

```java
public java.lang.String getExternalAssetKey();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inventoryId`<sup>Required</sup> <a name="inventoryId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.inventoryId"></a>

```java
public java.lang.String getInventoryId();
```

- *Type:* java.lang.String

---

##### `sourceKey`<sup>Required</sup> <a name="sourceKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.sourceKey"></a>

```java
public java.lang.String getSourceKey();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssets.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudBridgeAssetsAssetCollection <a name="DataOciCloudBridgeAssetsAssetCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollection;

DataOciCloudBridgeAssetsAssetCollection.builder()
    .build();
```


### DataOciCloudBridgeAssetsAssetCollectionItems <a name="DataOciCloudBridgeAssetsAssetCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItems;

DataOciCloudBridgeAssetsAssetCollectionItems.builder()
    .build();
```


### DataOciCloudBridgeAssetsAssetCollectionItemsCompute <a name="DataOciCloudBridgeAssetsAssetCollectionItemsCompute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsCompute"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsCompute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsCompute;

DataOciCloudBridgeAssetsAssetCollectionItemsCompute.builder()
    .build();
```


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisks <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisks" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisks;

DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisks.builder()
    .build();
```


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevices <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevices" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevices.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevices;

DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevices.builder()
    .build();
```


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeNics <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeNics" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNics;

DataOciCloudBridgeAssetsAssetCollectionItemsComputeNics.builder()
    .build();
```


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmController <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmController" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmController"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmController.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmController;

DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmController.builder()
    .build();
```


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimms <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimms" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimms"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimms.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimms;

DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimms.builder()
    .build();
```


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiController <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiController" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiController"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiController.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiController;

DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiController.builder()
    .build();
```


### DataOciCloudBridgeAssetsAssetCollectionItemsVm <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVm" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVm"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVm.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsVm;

DataOciCloudBridgeAssetsAssetCollectionItemsVm.builder()
    .build();
```


### DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenter <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenter;

DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenter.builder()
    .build();
```


### DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVm <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVm" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVm"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVm.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVm;

DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVm.builder()
    .build();
```


### DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTags <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTags;

DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTags.builder()
    .build();
```


### DataOciCloudBridgeAssetsConfig <a name="DataOciCloudBridgeAssetsConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsConfig;

DataOciCloudBridgeAssetsConfig.builder()
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
//  .assetId(java.lang.String)
//  .assetType(java.lang.String)
//  .displayName(java.lang.String)
//  .externalAssetKey(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCloudBridgeAssetsFilter>)
//  .id(java.lang.String)
//  .inventoryId(java.lang.String)
//  .sourceKey(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#compartment_id DataOciCloudBridgeAssets#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.assetId">assetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#asset_id DataOciCloudBridgeAssets#asset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.assetType">assetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#asset_type DataOciCloudBridgeAssets#asset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#display_name DataOciCloudBridgeAssets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.externalAssetKey">externalAssetKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#external_asset_key DataOciCloudBridgeAssets#external_asset_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter">DataOciCloudBridgeAssetsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#id DataOciCloudBridgeAssets#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.inventoryId">inventoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#inventory_id DataOciCloudBridgeAssets#inventory_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.sourceKey">sourceKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#source_key DataOciCloudBridgeAssets#source_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#state DataOciCloudBridgeAssets#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#compartment_id DataOciCloudBridgeAssets#compartment_id}.

---

##### `assetId`<sup>Optional</sup> <a name="assetId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.assetId"></a>

```java
public java.lang.String getAssetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#asset_id DataOciCloudBridgeAssets#asset_id}.

---

##### `assetType`<sup>Optional</sup> <a name="assetType" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.assetType"></a>

```java
public java.lang.String getAssetType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#asset_type DataOciCloudBridgeAssets#asset_type}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#display_name DataOciCloudBridgeAssets#display_name}.

---

##### `externalAssetKey`<sup>Optional</sup> <a name="externalAssetKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.externalAssetKey"></a>

```java
public java.lang.String getExternalAssetKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#external_asset_key DataOciCloudBridgeAssets#external_asset_key}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter">DataOciCloudBridgeAssetsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#filter DataOciCloudBridgeAssets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#id DataOciCloudBridgeAssets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inventoryId`<sup>Optional</sup> <a name="inventoryId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.inventoryId"></a>

```java
public java.lang.String getInventoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#inventory_id DataOciCloudBridgeAssets#inventory_id}.

---

##### `sourceKey`<sup>Optional</sup> <a name="sourceKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.sourceKey"></a>

```java
public java.lang.String getSourceKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#source_key DataOciCloudBridgeAssets#source_key}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#state DataOciCloudBridgeAssets#state}.

---

### DataOciCloudBridgeAssetsFilter <a name="DataOciCloudBridgeAssetsFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsFilter;

DataOciCloudBridgeAssetsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#name DataOciCloudBridgeAssets#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#values DataOciCloudBridgeAssets#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#regex DataOciCloudBridgeAssets#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#name DataOciCloudBridgeAssets#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#values DataOciCloudBridgeAssets#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_assets#regex DataOciCloudBridgeAssets#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList;

new DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.get"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference;

new DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.bootOrder">bootOrder</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.persistentMode">persistentMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.sizeInMbs">sizeInMbs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.uuidLun">uuidLun</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisks">DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bootOrder`<sup>Required</sup> <a name="bootOrder" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.bootOrder"></a>

```java
public java.lang.Number getBootOrder();
```

- *Type:* java.lang.Number

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `persistentMode`<sup>Required</sup> <a name="persistentMode" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.persistentMode"></a>

```java
public java.lang.String getPersistentMode();
```

- *Type:* java.lang.String

---

##### `sizeInMbs`<sup>Required</sup> <a name="sizeInMbs" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.sizeInMbs"></a>

```java
public java.lang.String getSizeInMbs();
```

- *Type:* java.lang.String

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `uuidLun`<sup>Required</sup> <a name="uuidLun" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.uuidLun"></a>

```java
public java.lang.String getUuidLun();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksOutputReference.property.internalValue"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisks getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisks">DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisks</a>

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList;

new DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.get"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference;

new DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.coresCount">coresCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.manufacturer">manufacturer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.memoryInMbs">memoryInMbs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevices">DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `coresCount`<sup>Required</sup> <a name="coresCount" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.coresCount"></a>

```java
public java.lang.Number getCoresCount();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `manufacturer`<sup>Required</sup> <a name="manufacturer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.manufacturer"></a>

```java
public java.lang.String getManufacturer();
```

- *Type:* java.lang.String

---

##### `memoryInMbs`<sup>Required</sup> <a name="memoryInMbs" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.memoryInMbs"></a>

```java
public java.lang.String getMemoryInMbs();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesOutputReference.property.internalValue"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevices getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevices">DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevices</a>

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList;

new DataOciCloudBridgeAssetsAssetCollectionItemsComputeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.get"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList;

new DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.get"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference;

new DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.ipAddresses">ipAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.macAddress">macAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.macAddressType">macAddressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.networkName">networkName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.switchName">switchName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNics">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.ipAddresses"></a>

```java
public java.util.List<java.lang.String> getIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `macAddress`<sup>Required</sup> <a name="macAddress" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.macAddress"></a>

```java
public java.lang.String getMacAddress();
```

- *Type:* java.lang.String

---

##### `macAddressType`<sup>Required</sup> <a name="macAddressType" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.macAddressType"></a>

```java
public java.lang.String getMacAddressType();
```

- *Type:* java.lang.String

---

##### `networkName`<sup>Required</sup> <a name="networkName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.networkName"></a>

```java
public java.lang.String getNetworkName();
```

- *Type:* java.lang.String

---

##### `switchName`<sup>Required</sup> <a name="switchName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.switchName"></a>

```java
public java.lang.String getSwitchName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsOutputReference.property.internalValue"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsComputeNics getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNics">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNics</a>

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList;

new DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.get"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference;

new DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.property.busNumber">busNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmController">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmController</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `busNumber`<sup>Required</sup> <a name="busNumber" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.property.busNumber"></a>

```java
public java.lang.Number getBusNumber();
```

- *Type:* java.lang.Number

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerOutputReference.property.internalValue"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmController getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmController">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmController</a>

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList;

new DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.get"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference;

new DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.controllerKey">controllerKey</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.unitNumber">unitNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimms">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `controllerKey`<sup>Required</sup> <a name="controllerKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.controllerKey"></a>

```java
public java.lang.Number getControllerKey();
```

- *Type:* java.lang.Number

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `unitNumber`<sup>Required</sup> <a name="unitNumber" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.unitNumber"></a>

```java
public java.lang.Number getUnitNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsOutputReference.property.internalValue"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimms getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimms">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimms</a>

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference;

new DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.connectedNetworks">connectedNetworks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.coresCount">coresCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.cpuModel">cpuModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.disks">disks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.disksCount">disksCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.firmware">firmware</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.gpuDevices">gpuDevices</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.gpuDevicesCount">gpuDevicesCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.guestState">guestState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.hardwareVersion">hardwareVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.isPmemEnabled">isPmemEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.isTpmEnabled">isTpmEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.latencySensitivity">latencySensitivity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.memoryInMbs">memoryInMbs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.nics">nics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.nicsCount">nicsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.nvdimmController">nvdimmController</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.nvdimms">nvdimms</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.operatingSystem">operatingSystem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.operatingSystemVersion">operatingSystemVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.pmemInMbs">pmemInMbs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.powerState">powerState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.primaryIp">primaryIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.scsiController">scsiController</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.storageProvisionedInMbs">storageProvisionedInMbs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.threadsPerCoreCount">threadsPerCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsCompute">DataOciCloudBridgeAssetsAssetCollectionItemsCompute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectedNetworks`<sup>Required</sup> <a name="connectedNetworks" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.connectedNetworks"></a>

```java
public java.lang.Number getConnectedNetworks();
```

- *Type:* java.lang.Number

---

##### `coresCount`<sup>Required</sup> <a name="coresCount" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.coresCount"></a>

```java
public java.lang.Number getCoresCount();
```

- *Type:* java.lang.Number

---

##### `cpuModel`<sup>Required</sup> <a name="cpuModel" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.cpuModel"></a>

```java
public java.lang.String getCpuModel();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disks`<sup>Required</sup> <a name="disks" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.disks"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList getDisks();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeDisksList</a>

---

##### `disksCount`<sup>Required</sup> <a name="disksCount" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.disksCount"></a>

```java
public java.lang.Number getDisksCount();
```

- *Type:* java.lang.Number

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `firmware`<sup>Required</sup> <a name="firmware" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.firmware"></a>

```java
public java.lang.String getFirmware();
```

- *Type:* java.lang.String

---

##### `gpuDevices`<sup>Required</sup> <a name="gpuDevices" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.gpuDevices"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList getGpuDevices();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeGpuDevicesList</a>

---

##### `gpuDevicesCount`<sup>Required</sup> <a name="gpuDevicesCount" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.gpuDevicesCount"></a>

```java
public java.lang.Number getGpuDevicesCount();
```

- *Type:* java.lang.Number

---

##### `guestState`<sup>Required</sup> <a name="guestState" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.guestState"></a>

```java
public java.lang.String getGuestState();
```

- *Type:* java.lang.String

---

##### `hardwareVersion`<sup>Required</sup> <a name="hardwareVersion" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.hardwareVersion"></a>

```java
public java.lang.String getHardwareVersion();
```

- *Type:* java.lang.String

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `isPmemEnabled`<sup>Required</sup> <a name="isPmemEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.isPmemEnabled"></a>

```java
public IResolvable getIsPmemEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isTpmEnabled`<sup>Required</sup> <a name="isTpmEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.isTpmEnabled"></a>

```java
public IResolvable getIsTpmEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `latencySensitivity`<sup>Required</sup> <a name="latencySensitivity" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.latencySensitivity"></a>

```java
public java.lang.String getLatencySensitivity();
```

- *Type:* java.lang.String

---

##### `memoryInMbs`<sup>Required</sup> <a name="memoryInMbs" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.memoryInMbs"></a>

```java
public java.lang.String getMemoryInMbs();
```

- *Type:* java.lang.String

---

##### `nics`<sup>Required</sup> <a name="nics" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.nics"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList getNics();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNicsList</a>

---

##### `nicsCount`<sup>Required</sup> <a name="nicsCount" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.nicsCount"></a>

```java
public java.lang.Number getNicsCount();
```

- *Type:* java.lang.Number

---

##### `nvdimmController`<sup>Required</sup> <a name="nvdimmController" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.nvdimmController"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList getNvdimmController();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmControllerList</a>

---

##### `nvdimms`<sup>Required</sup> <a name="nvdimms" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.nvdimms"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList getNvdimms();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeNvdimmsList</a>

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.operatingSystem"></a>

```java
public java.lang.String getOperatingSystem();
```

- *Type:* java.lang.String

---

##### `operatingSystemVersion`<sup>Required</sup> <a name="operatingSystemVersion" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.operatingSystemVersion"></a>

```java
public java.lang.String getOperatingSystemVersion();
```

- *Type:* java.lang.String

---

##### `pmemInMbs`<sup>Required</sup> <a name="pmemInMbs" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.pmemInMbs"></a>

```java
public java.lang.String getPmemInMbs();
```

- *Type:* java.lang.String

---

##### `powerState`<sup>Required</sup> <a name="powerState" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.powerState"></a>

```java
public java.lang.String getPowerState();
```

- *Type:* java.lang.String

---

##### `primaryIp`<sup>Required</sup> <a name="primaryIp" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.primaryIp"></a>

```java
public java.lang.String getPrimaryIp();
```

- *Type:* java.lang.String

---

##### `scsiController`<sup>Required</sup> <a name="scsiController" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.scsiController"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList getScsiController();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList</a>

---

##### `storageProvisionedInMbs`<sup>Required</sup> <a name="storageProvisionedInMbs" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.storageProvisionedInMbs"></a>

```java
public java.lang.String getStorageProvisionedInMbs();
```

- *Type:* java.lang.String

---

##### `threadsPerCoreCount`<sup>Required</sup> <a name="threadsPerCoreCount" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.threadsPerCoreCount"></a>

```java
public java.lang.Number getThreadsPerCoreCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeOutputReference.property.internalValue"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsCompute getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsCompute">DataOciCloudBridgeAssetsAssetCollectionItemsCompute</a>

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList;

new DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.get"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference;

new DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.sharedBus">sharedBus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.unitNumber">unitNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiController">DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiController</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `sharedBus`<sup>Required</sup> <a name="sharedBus" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.sharedBus"></a>

```java
public java.lang.String getSharedBus();
```

- *Type:* java.lang.String

---

##### `unitNumber`<sup>Required</sup> <a name="unitNumber" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.unitNumber"></a>

```java
public java.lang.Number getUnitNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiControllerOutputReference.property.internalValue"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiController getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiController">DataOciCloudBridgeAssetsAssetCollectionItemsComputeScsiController</a>

---


### DataOciCloudBridgeAssetsAssetCollectionItemsList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsList;

new DataOciCloudBridgeAssetsAssetCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.get"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference;

new DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.assetSourceIds">assetSourceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.assetType">assetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.compute">compute</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.externalAssetKey">externalAssetKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.inventoryId">inventoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.sourceKey">sourceKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.vm">vm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList">DataOciCloudBridgeAssetsAssetCollectionItemsVmList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.vmwareVcenter">vmwareVcenter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.vmwareVm">vmwareVm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItems">DataOciCloudBridgeAssetsAssetCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assetSourceIds`<sup>Required</sup> <a name="assetSourceIds" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.assetSourceIds"></a>

```java
public java.util.List<java.lang.String> getAssetSourceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `assetType`<sup>Required</sup> <a name="assetType" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.assetType"></a>

```java
public java.lang.String getAssetType();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `compute`<sup>Required</sup> <a name="compute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.compute"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsComputeList getCompute();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsComputeList">DataOciCloudBridgeAssetsAssetCollectionItemsComputeList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `externalAssetKey`<sup>Required</sup> <a name="externalAssetKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.externalAssetKey"></a>

```java
public java.lang.String getExternalAssetKey();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inventoryId`<sup>Required</sup> <a name="inventoryId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.inventoryId"></a>

```java
public java.lang.String getInventoryId();
```

- *Type:* java.lang.String

---

##### `sourceKey`<sup>Required</sup> <a name="sourceKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.sourceKey"></a>

```java
public java.lang.String getSourceKey();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `vm`<sup>Required</sup> <a name="vm" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.vm"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsVmList getVm();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList">DataOciCloudBridgeAssetsAssetCollectionItemsVmList</a>

---

##### `vmwareVcenter`<sup>Required</sup> <a name="vmwareVcenter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.vmwareVcenter"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList getVmwareVcenter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList</a>

---

##### `vmwareVm`<sup>Required</sup> <a name="vmwareVm" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.vmwareVm"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList getVmwareVm();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItems">DataOciCloudBridgeAssetsAssetCollectionItems</a>

---


### DataOciCloudBridgeAssetsAssetCollectionItemsVmList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVmList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList;

new DataOciCloudBridgeAssetsAssetCollectionItemsVmList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.get"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference;

new DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.hypervisorHost">hypervisorHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.hypervisorVendor">hypervisorVendor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.hypervisorVersion">hypervisorVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVm">DataOciCloudBridgeAssetsAssetCollectionItemsVm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hypervisorHost`<sup>Required</sup> <a name="hypervisorHost" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.hypervisorHost"></a>

```java
public java.lang.String getHypervisorHost();
```

- *Type:* java.lang.String

---

##### `hypervisorVendor`<sup>Required</sup> <a name="hypervisorVendor" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.hypervisorVendor"></a>

```java
public java.lang.String getHypervisorVendor();
```

- *Type:* java.lang.String

---

##### `hypervisorVersion`<sup>Required</sup> <a name="hypervisorVersion" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.hypervisorVersion"></a>

```java
public java.lang.String getHypervisorVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmOutputReference.property.internalValue"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsVm getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVm">DataOciCloudBridgeAssetsAssetCollectionItemsVm</a>

---


### DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList;

new DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.get"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference;

new DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.dataCenter">dataCenter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.vcenterKey">vcenterKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.vcenterVersion">vcenterVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenter">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataCenter`<sup>Required</sup> <a name="dataCenter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.dataCenter"></a>

```java
public java.lang.String getDataCenter();
```

- *Type:* java.lang.String

---

##### `vcenterKey`<sup>Required</sup> <a name="vcenterKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.vcenterKey"></a>

```java
public java.lang.String getVcenterKey();
```

- *Type:* java.lang.String

---

##### `vcenterVersion`<sup>Required</sup> <a name="vcenterVersion" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.vcenterVersion"></a>

```java
public java.lang.String getVcenterVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenterOutputReference.property.internalValue"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenter getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenter">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVcenter</a>

---


### DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList;

new DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.get"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference;

new DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTags">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsOutputReference.property.internalValue"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTags getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTags">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTags</a>

---


### DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList;

new DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.get"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference;

new DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.customerFields">customerFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.customerTags">customerTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.faultToleranceBandwidth">faultToleranceBandwidth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.faultToleranceSecondaryLatency">faultToleranceSecondaryLatency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.faultToleranceState">faultToleranceState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.instanceUuid">instanceUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.isDisksCbtEnabled">isDisksCbtEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.isDisksUuidEnabled">isDisksUuidEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.vmwareToolsStatus">vmwareToolsStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVm">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `customerFields`<sup>Required</sup> <a name="customerFields" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.customerFields"></a>

```java
public java.util.List<java.lang.String> getCustomerFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customerTags`<sup>Required</sup> <a name="customerTags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.customerTags"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList getCustomerTags();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmCustomerTagsList</a>

---

##### `faultToleranceBandwidth`<sup>Required</sup> <a name="faultToleranceBandwidth" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.faultToleranceBandwidth"></a>

```java
public java.lang.Number getFaultToleranceBandwidth();
```

- *Type:* java.lang.Number

---

##### `faultToleranceSecondaryLatency`<sup>Required</sup> <a name="faultToleranceSecondaryLatency" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.faultToleranceSecondaryLatency"></a>

```java
public java.lang.Number getFaultToleranceSecondaryLatency();
```

- *Type:* java.lang.Number

---

##### `faultToleranceState`<sup>Required</sup> <a name="faultToleranceState" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.faultToleranceState"></a>

```java
public java.lang.String getFaultToleranceState();
```

- *Type:* java.lang.String

---

##### `instanceUuid`<sup>Required</sup> <a name="instanceUuid" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.instanceUuid"></a>

```java
public java.lang.String getInstanceUuid();
```

- *Type:* java.lang.String

---

##### `isDisksCbtEnabled`<sup>Required</sup> <a name="isDisksCbtEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.isDisksCbtEnabled"></a>

```java
public IResolvable getIsDisksCbtEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isDisksUuidEnabled`<sup>Required</sup> <a name="isDisksUuidEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.isDisksUuidEnabled"></a>

```java
public IResolvable getIsDisksUuidEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `vmwareToolsStatus`<sup>Required</sup> <a name="vmwareToolsStatus" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.vmwareToolsStatus"></a>

```java
public java.lang.String getVmwareToolsStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVmOutputReference.property.internalValue"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVm getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVm">DataOciCloudBridgeAssetsAssetCollectionItemsVmwareVm</a>

---


### DataOciCloudBridgeAssetsAssetCollectionList <a name="DataOciCloudBridgeAssetsAssetCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionList;

new DataOciCloudBridgeAssetsAssetCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.get"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudBridgeAssetsAssetCollectionOutputReference <a name="DataOciCloudBridgeAssetsAssetCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsAssetCollectionOutputReference;

new DataOciCloudBridgeAssetsAssetCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList">DataOciCloudBridgeAssetsAssetCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollection">DataOciCloudBridgeAssetsAssetCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.property.items"></a>

```java
public DataOciCloudBridgeAssetsAssetCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionItemsList">DataOciCloudBridgeAssetsAssetCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollectionOutputReference.property.internalValue"></a>

```java
public DataOciCloudBridgeAssetsAssetCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsAssetCollection">DataOciCloudBridgeAssetsAssetCollection</a>

---


### DataOciCloudBridgeAssetsFilterList <a name="DataOciCloudBridgeAssetsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsFilterList;

new DataOciCloudBridgeAssetsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.get"></a>

```java
public DataOciCloudBridgeAssetsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter">DataOciCloudBridgeAssetsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter">DataOciCloudBridgeAssetsFilter</a>>

---


### DataOciCloudBridgeAssetsFilterOutputReference <a name="DataOciCloudBridgeAssetsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_bridge_assets.DataOciCloudBridgeAssetsFilterOutputReference;

new DataOciCloudBridgeAssetsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter">DataOciCloudBridgeAssetsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssets.DataOciCloudBridgeAssetsFilter">DataOciCloudBridgeAssetsFilter</a>

---




# `aiAnomalyDetectionDataAsset` Submodule <a name="`aiAnomalyDetectionDataAsset` Submodule" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiAnomalyDetectionDataAsset <a name="AiAnomalyDetectionDataAsset" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset oci_ai_anomaly_detection_data_asset}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_data_asset.AiAnomalyDetectionDataAsset;

AiAnomalyDetectionDataAsset.Builder.create(Construct scope, java.lang.String id)
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
    .dataSourceDetails(AiAnomalyDetectionDataAssetDataSourceDetails)
    .projectId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .privateEndpointId(java.lang.String)
//  .timeouts(AiAnomalyDetectionDataAssetTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#compartment_id AiAnomalyDetectionDataAsset#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.dataSourceDetails">dataSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a></code> | data_source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#project_id AiAnomalyDetectionDataAsset#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#defined_tags AiAnomalyDetectionDataAsset#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#description AiAnomalyDetectionDataAsset#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#display_name AiAnomalyDetectionDataAsset#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#freeform_tags AiAnomalyDetectionDataAsset#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#id AiAnomalyDetectionDataAsset#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.privateEndpointId">privateEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#private_endpoint_id AiAnomalyDetectionDataAsset#private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts">AiAnomalyDetectionDataAssetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#compartment_id AiAnomalyDetectionDataAsset#compartment_id}.

---

##### `dataSourceDetails`<sup>Required</sup> <a name="dataSourceDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.dataSourceDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a>

data_source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#data_source_details AiAnomalyDetectionDataAsset#data_source_details}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#project_id AiAnomalyDetectionDataAsset#project_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#defined_tags AiAnomalyDetectionDataAsset#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#description AiAnomalyDetectionDataAsset#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#display_name AiAnomalyDetectionDataAsset#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#freeform_tags AiAnomalyDetectionDataAsset#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#id AiAnomalyDetectionDataAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privateEndpointId`<sup>Optional</sup> <a name="privateEndpointId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.privateEndpointId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#private_endpoint_id AiAnomalyDetectionDataAsset#private_endpoint_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts">AiAnomalyDetectionDataAssetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#timeouts AiAnomalyDetectionDataAsset#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putDataSourceDetails">putDataSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetPrivateEndpointId">resetPrivateEndpointId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataSourceDetails` <a name="putDataSourceDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putDataSourceDetails"></a>

```java
public void putDataSourceDetails(AiAnomalyDetectionDataAssetDataSourceDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putDataSourceDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putTimeouts"></a>

```java
public void putTimeouts(AiAnomalyDetectionDataAssetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts">AiAnomalyDetectionDataAssetTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetId"></a>

```java
public void resetId()
```

##### `resetPrivateEndpointId` <a name="resetPrivateEndpointId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetPrivateEndpointId"></a>

```java
public void resetPrivateEndpointId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AiAnomalyDetectionDataAsset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_data_asset.AiAnomalyDetectionDataAsset;

AiAnomalyDetectionDataAsset.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_data_asset.AiAnomalyDetectionDataAsset;

AiAnomalyDetectionDataAsset.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_data_asset.AiAnomalyDetectionDataAsset;

AiAnomalyDetectionDataAsset.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_data_asset.AiAnomalyDetectionDataAsset;

AiAnomalyDetectionDataAsset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AiAnomalyDetectionDataAsset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AiAnomalyDetectionDataAsset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AiAnomalyDetectionDataAsset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AiAnomalyDetectionDataAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AiAnomalyDetectionDataAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.dataSourceDetails">dataSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference">AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference">AiAnomalyDetectionDataAssetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.dataSourceDetailsInput">dataSourceDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.privateEndpointIdInput">privateEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts">AiAnomalyDetectionDataAssetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.privateEndpointId">privateEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataSourceDetails`<sup>Required</sup> <a name="dataSourceDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.dataSourceDetails"></a>

```java
public AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference getDataSourceDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference">AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeouts"></a>

```java
public AiAnomalyDetectionDataAssetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference">AiAnomalyDetectionDataAssetTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `dataSourceDetailsInput`<sup>Optional</sup> <a name="dataSourceDetailsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.dataSourceDetailsInput"></a>

```java
public AiAnomalyDetectionDataAssetDataSourceDetails getDataSourceDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `privateEndpointIdInput`<sup>Optional</sup> <a name="privateEndpointIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.privateEndpointIdInput"></a>

```java
public java.lang.String getPrivateEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts">AiAnomalyDetectionDataAssetTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `privateEndpointId`<sup>Required</sup> <a name="privateEndpointId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.privateEndpointId"></a>

```java
public java.lang.String getPrivateEndpointId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AiAnomalyDetectionDataAssetConfig <a name="AiAnomalyDetectionDataAssetConfig" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_data_asset.AiAnomalyDetectionDataAssetConfig;

AiAnomalyDetectionDataAssetConfig.builder()
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
    .dataSourceDetails(AiAnomalyDetectionDataAssetDataSourceDetails)
    .projectId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .privateEndpointId(java.lang.String)
//  .timeouts(AiAnomalyDetectionDataAssetTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#compartment_id AiAnomalyDetectionDataAsset#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.dataSourceDetails">dataSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a></code> | data_source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#project_id AiAnomalyDetectionDataAsset#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#defined_tags AiAnomalyDetectionDataAsset#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#description AiAnomalyDetectionDataAsset#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#display_name AiAnomalyDetectionDataAsset#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#freeform_tags AiAnomalyDetectionDataAsset#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#id AiAnomalyDetectionDataAsset#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.privateEndpointId">privateEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#private_endpoint_id AiAnomalyDetectionDataAsset#private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts">AiAnomalyDetectionDataAssetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#compartment_id AiAnomalyDetectionDataAsset#compartment_id}.

---

##### `dataSourceDetails`<sup>Required</sup> <a name="dataSourceDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.dataSourceDetails"></a>

```java
public AiAnomalyDetectionDataAssetDataSourceDetails getDataSourceDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a>

data_source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#data_source_details AiAnomalyDetectionDataAsset#data_source_details}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#project_id AiAnomalyDetectionDataAsset#project_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#defined_tags AiAnomalyDetectionDataAsset#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#description AiAnomalyDetectionDataAsset#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#display_name AiAnomalyDetectionDataAsset#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#freeform_tags AiAnomalyDetectionDataAsset#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#id AiAnomalyDetectionDataAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privateEndpointId`<sup>Optional</sup> <a name="privateEndpointId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.privateEndpointId"></a>

```java
public java.lang.String getPrivateEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#private_endpoint_id AiAnomalyDetectionDataAsset#private_endpoint_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.timeouts"></a>

```java
public AiAnomalyDetectionDataAssetTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts">AiAnomalyDetectionDataAssetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#timeouts AiAnomalyDetectionDataAsset#timeouts}

---

### AiAnomalyDetectionDataAssetDataSourceDetails <a name="AiAnomalyDetectionDataAssetDataSourceDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_data_asset.AiAnomalyDetectionDataAssetDataSourceDetails;

AiAnomalyDetectionDataAssetDataSourceDetails.builder()
    .dataSourceType(java.lang.String)
//  .atpPasswordSecretId(java.lang.String)
//  .atpUserName(java.lang.String)
//  .bucket(java.lang.String)
//  .cwalletFileSecretId(java.lang.String)
//  .databaseName(java.lang.String)
//  .ewalletFileSecretId(java.lang.String)
//  .keyStoreFileSecretId(java.lang.String)
//  .measurementName(java.lang.String)
//  .namespace(java.lang.String)
//  .object(java.lang.String)
//  .ojdbcFileSecretId(java.lang.String)
//  .passwordSecretId(java.lang.String)
//  .tableName(java.lang.String)
//  .tnsnamesFileSecretId(java.lang.String)
//  .truststoreFileSecretId(java.lang.String)
//  .url(java.lang.String)
//  .userName(java.lang.String)
//  .versionSpecificDetails(AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails)
//  .walletPasswordSecretId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.dataSourceType">dataSourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#data_source_type AiAnomalyDetectionDataAsset#data_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.atpPasswordSecretId">atpPasswordSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#atp_password_secret_id AiAnomalyDetectionDataAsset#atp_password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.atpUserName">atpUserName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#atp_user_name AiAnomalyDetectionDataAsset#atp_user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#bucket AiAnomalyDetectionDataAsset#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.cwalletFileSecretId">cwalletFileSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#cwallet_file_secret_id AiAnomalyDetectionDataAsset#cwallet_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#database_name AiAnomalyDetectionDataAsset#database_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.ewalletFileSecretId">ewalletFileSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#ewallet_file_secret_id AiAnomalyDetectionDataAsset#ewallet_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.keyStoreFileSecretId">keyStoreFileSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#key_store_file_secret_id AiAnomalyDetectionDataAsset#key_store_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.measurementName">measurementName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#measurement_name AiAnomalyDetectionDataAsset#measurement_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#namespace AiAnomalyDetectionDataAsset#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.object">object</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#object AiAnomalyDetectionDataAsset#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.ojdbcFileSecretId">ojdbcFileSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#ojdbc_file_secret_id AiAnomalyDetectionDataAsset#ojdbc_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.passwordSecretId">passwordSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#password_secret_id AiAnomalyDetectionDataAsset#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#table_name AiAnomalyDetectionDataAsset#table_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.tnsnamesFileSecretId">tnsnamesFileSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#tnsnames_file_secret_id AiAnomalyDetectionDataAsset#tnsnames_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.truststoreFileSecretId">truststoreFileSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#truststore_file_secret_id AiAnomalyDetectionDataAsset#truststore_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#url AiAnomalyDetectionDataAsset#url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#user_name AiAnomalyDetectionDataAsset#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.versionSpecificDetails">versionSpecificDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a></code> | version_specific_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.walletPasswordSecretId">walletPasswordSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#wallet_password_secret_id AiAnomalyDetectionDataAsset#wallet_password_secret_id}. |

---

##### `dataSourceType`<sup>Required</sup> <a name="dataSourceType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.dataSourceType"></a>

```java
public java.lang.String getDataSourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#data_source_type AiAnomalyDetectionDataAsset#data_source_type}.

---

##### `atpPasswordSecretId`<sup>Optional</sup> <a name="atpPasswordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.atpPasswordSecretId"></a>

```java
public java.lang.String getAtpPasswordSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#atp_password_secret_id AiAnomalyDetectionDataAsset#atp_password_secret_id}.

---

##### `atpUserName`<sup>Optional</sup> <a name="atpUserName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.atpUserName"></a>

```java
public java.lang.String getAtpUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#atp_user_name AiAnomalyDetectionDataAsset#atp_user_name}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#bucket AiAnomalyDetectionDataAsset#bucket}.

---

##### `cwalletFileSecretId`<sup>Optional</sup> <a name="cwalletFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.cwalletFileSecretId"></a>

```java
public java.lang.String getCwalletFileSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#cwallet_file_secret_id AiAnomalyDetectionDataAsset#cwallet_file_secret_id}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#database_name AiAnomalyDetectionDataAsset#database_name}.

---

##### `ewalletFileSecretId`<sup>Optional</sup> <a name="ewalletFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.ewalletFileSecretId"></a>

```java
public java.lang.String getEwalletFileSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#ewallet_file_secret_id AiAnomalyDetectionDataAsset#ewallet_file_secret_id}.

---

##### `keyStoreFileSecretId`<sup>Optional</sup> <a name="keyStoreFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.keyStoreFileSecretId"></a>

```java
public java.lang.String getKeyStoreFileSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#key_store_file_secret_id AiAnomalyDetectionDataAsset#key_store_file_secret_id}.

---

##### `measurementName`<sup>Optional</sup> <a name="measurementName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.measurementName"></a>

```java
public java.lang.String getMeasurementName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#measurement_name AiAnomalyDetectionDataAsset#measurement_name}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#namespace AiAnomalyDetectionDataAsset#namespace}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#object AiAnomalyDetectionDataAsset#object}.

---

##### `ojdbcFileSecretId`<sup>Optional</sup> <a name="ojdbcFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.ojdbcFileSecretId"></a>

```java
public java.lang.String getOjdbcFileSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#ojdbc_file_secret_id AiAnomalyDetectionDataAsset#ojdbc_file_secret_id}.

---

##### `passwordSecretId`<sup>Optional</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.passwordSecretId"></a>

```java
public java.lang.String getPasswordSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#password_secret_id AiAnomalyDetectionDataAsset#password_secret_id}.

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#table_name AiAnomalyDetectionDataAsset#table_name}.

---

##### `tnsnamesFileSecretId`<sup>Optional</sup> <a name="tnsnamesFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.tnsnamesFileSecretId"></a>

```java
public java.lang.String getTnsnamesFileSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#tnsnames_file_secret_id AiAnomalyDetectionDataAsset#tnsnames_file_secret_id}.

---

##### `truststoreFileSecretId`<sup>Optional</sup> <a name="truststoreFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.truststoreFileSecretId"></a>

```java
public java.lang.String getTruststoreFileSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#truststore_file_secret_id AiAnomalyDetectionDataAsset#truststore_file_secret_id}.

---

##### `url`<sup>Optional</sup> <a name="url" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#url AiAnomalyDetectionDataAsset#url}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#user_name AiAnomalyDetectionDataAsset#user_name}.

---

##### `versionSpecificDetails`<sup>Optional</sup> <a name="versionSpecificDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.versionSpecificDetails"></a>

```java
public AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails getVersionSpecificDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a>

version_specific_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#version_specific_details AiAnomalyDetectionDataAsset#version_specific_details}

---

##### `walletPasswordSecretId`<sup>Optional</sup> <a name="walletPasswordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.walletPasswordSecretId"></a>

```java
public java.lang.String getWalletPasswordSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#wallet_password_secret_id AiAnomalyDetectionDataAsset#wallet_password_secret_id}.

---

### AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails <a name="AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_data_asset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails;

AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.builder()
    .influxVersion(java.lang.String)
//  .bucket(java.lang.String)
//  .databaseName(java.lang.String)
//  .organizationName(java.lang.String)
//  .retentionPolicyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.influxVersion">influxVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#influx_version AiAnomalyDetectionDataAsset#influx_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#bucket AiAnomalyDetectionDataAsset#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#database_name AiAnomalyDetectionDataAsset#database_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.organizationName">organizationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#organization_name AiAnomalyDetectionDataAsset#organization_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.retentionPolicyName">retentionPolicyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#retention_policy_name AiAnomalyDetectionDataAsset#retention_policy_name}. |

---

##### `influxVersion`<sup>Required</sup> <a name="influxVersion" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.influxVersion"></a>

```java
public java.lang.String getInfluxVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#influx_version AiAnomalyDetectionDataAsset#influx_version}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#bucket AiAnomalyDetectionDataAsset#bucket}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#database_name AiAnomalyDetectionDataAsset#database_name}.

---

##### `organizationName`<sup>Optional</sup> <a name="organizationName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.organizationName"></a>

```java
public java.lang.String getOrganizationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#organization_name AiAnomalyDetectionDataAsset#organization_name}.

---

##### `retentionPolicyName`<sup>Optional</sup> <a name="retentionPolicyName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.retentionPolicyName"></a>

```java
public java.lang.String getRetentionPolicyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#retention_policy_name AiAnomalyDetectionDataAsset#retention_policy_name}.

---

### AiAnomalyDetectionDataAssetTimeouts <a name="AiAnomalyDetectionDataAssetTimeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_data_asset.AiAnomalyDetectionDataAssetTimeouts;

AiAnomalyDetectionDataAssetTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#create AiAnomalyDetectionDataAsset#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#delete AiAnomalyDetectionDataAsset#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#update AiAnomalyDetectionDataAsset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#create AiAnomalyDetectionDataAsset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#delete AiAnomalyDetectionDataAsset#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#update AiAnomalyDetectionDataAsset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference <a name="AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_data_asset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference;

new AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.putVersionSpecificDetails">putVersionSpecificDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetAtpPasswordSecretId">resetAtpPasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetAtpUserName">resetAtpUserName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetCwalletFileSecretId">resetCwalletFileSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetEwalletFileSecretId">resetEwalletFileSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetKeyStoreFileSecretId">resetKeyStoreFileSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetMeasurementName">resetMeasurementName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetObject">resetObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetOjdbcFileSecretId">resetOjdbcFileSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetPasswordSecretId">resetPasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetTableName">resetTableName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetTnsnamesFileSecretId">resetTnsnamesFileSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetTruststoreFileSecretId">resetTruststoreFileSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetUserName">resetUserName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetVersionSpecificDetails">resetVersionSpecificDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetWalletPasswordSecretId">resetWalletPasswordSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVersionSpecificDetails` <a name="putVersionSpecificDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.putVersionSpecificDetails"></a>

```java
public void putVersionSpecificDetails(AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.putVersionSpecificDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a>

---

##### `resetAtpPasswordSecretId` <a name="resetAtpPasswordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetAtpPasswordSecretId"></a>

```java
public void resetAtpPasswordSecretId()
```

##### `resetAtpUserName` <a name="resetAtpUserName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetAtpUserName"></a>

```java
public void resetAtpUserName()
```

##### `resetBucket` <a name="resetBucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetCwalletFileSecretId` <a name="resetCwalletFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetCwalletFileSecretId"></a>

```java
public void resetCwalletFileSecretId()
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetEwalletFileSecretId` <a name="resetEwalletFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetEwalletFileSecretId"></a>

```java
public void resetEwalletFileSecretId()
```

##### `resetKeyStoreFileSecretId` <a name="resetKeyStoreFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetKeyStoreFileSecretId"></a>

```java
public void resetKeyStoreFileSecretId()
```

##### `resetMeasurementName` <a name="resetMeasurementName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetMeasurementName"></a>

```java
public void resetMeasurementName()
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetObject` <a name="resetObject" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetObject"></a>

```java
public void resetObject()
```

##### `resetOjdbcFileSecretId` <a name="resetOjdbcFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetOjdbcFileSecretId"></a>

```java
public void resetOjdbcFileSecretId()
```

##### `resetPasswordSecretId` <a name="resetPasswordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetPasswordSecretId"></a>

```java
public void resetPasswordSecretId()
```

##### `resetTableName` <a name="resetTableName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetTableName"></a>

```java
public void resetTableName()
```

##### `resetTnsnamesFileSecretId` <a name="resetTnsnamesFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetTnsnamesFileSecretId"></a>

```java
public void resetTnsnamesFileSecretId()
```

##### `resetTruststoreFileSecretId` <a name="resetTruststoreFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetTruststoreFileSecretId"></a>

```java
public void resetTruststoreFileSecretId()
```

##### `resetUrl` <a name="resetUrl" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetUrl"></a>

```java
public void resetUrl()
```

##### `resetUserName` <a name="resetUserName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetUserName"></a>

```java
public void resetUserName()
```

##### `resetVersionSpecificDetails` <a name="resetVersionSpecificDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetVersionSpecificDetails"></a>

```java
public void resetVersionSpecificDetails()
```

##### `resetWalletPasswordSecretId` <a name="resetWalletPasswordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetWalletPasswordSecretId"></a>

```java
public void resetWalletPasswordSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.versionSpecificDetails">versionSpecificDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpPasswordSecretIdInput">atpPasswordSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpUserNameInput">atpUserNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.cwalletFileSecretIdInput">cwalletFileSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.dataSourceTypeInput">dataSourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ewalletFileSecretIdInput">ewalletFileSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.keyStoreFileSecretIdInput">keyStoreFileSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.measurementNameInput">measurementNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.objectInput">objectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ojdbcFileSecretIdInput">ojdbcFileSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.passwordSecretIdInput">passwordSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tnsnamesFileSecretIdInput">tnsnamesFileSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.truststoreFileSecretIdInput">truststoreFileSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.userNameInput">userNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.versionSpecificDetailsInput">versionSpecificDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.walletPasswordSecretIdInput">walletPasswordSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpPasswordSecretId">atpPasswordSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpUserName">atpUserName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.cwalletFileSecretId">cwalletFileSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.dataSourceType">dataSourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ewalletFileSecretId">ewalletFileSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.keyStoreFileSecretId">keyStoreFileSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.measurementName">measurementName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.object">object</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ojdbcFileSecretId">ojdbcFileSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tnsnamesFileSecretId">tnsnamesFileSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.truststoreFileSecretId">truststoreFileSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.walletPasswordSecretId">walletPasswordSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `versionSpecificDetails`<sup>Required</sup> <a name="versionSpecificDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.versionSpecificDetails"></a>

```java
public AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference getVersionSpecificDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference</a>

---

##### `atpPasswordSecretIdInput`<sup>Optional</sup> <a name="atpPasswordSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpPasswordSecretIdInput"></a>

```java
public java.lang.String getAtpPasswordSecretIdInput();
```

- *Type:* java.lang.String

---

##### `atpUserNameInput`<sup>Optional</sup> <a name="atpUserNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpUserNameInput"></a>

```java
public java.lang.String getAtpUserNameInput();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `cwalletFileSecretIdInput`<sup>Optional</sup> <a name="cwalletFileSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.cwalletFileSecretIdInput"></a>

```java
public java.lang.String getCwalletFileSecretIdInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `dataSourceTypeInput`<sup>Optional</sup> <a name="dataSourceTypeInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.dataSourceTypeInput"></a>

```java
public java.lang.String getDataSourceTypeInput();
```

- *Type:* java.lang.String

---

##### `ewalletFileSecretIdInput`<sup>Optional</sup> <a name="ewalletFileSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ewalletFileSecretIdInput"></a>

```java
public java.lang.String getEwalletFileSecretIdInput();
```

- *Type:* java.lang.String

---

##### `keyStoreFileSecretIdInput`<sup>Optional</sup> <a name="keyStoreFileSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.keyStoreFileSecretIdInput"></a>

```java
public java.lang.String getKeyStoreFileSecretIdInput();
```

- *Type:* java.lang.String

---

##### `measurementNameInput`<sup>Optional</sup> <a name="measurementNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.measurementNameInput"></a>

```java
public java.lang.String getMeasurementNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.objectInput"></a>

```java
public java.lang.String getObjectInput();
```

- *Type:* java.lang.String

---

##### `ojdbcFileSecretIdInput`<sup>Optional</sup> <a name="ojdbcFileSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ojdbcFileSecretIdInput"></a>

```java
public java.lang.String getOjdbcFileSecretIdInput();
```

- *Type:* java.lang.String

---

##### `passwordSecretIdInput`<sup>Optional</sup> <a name="passwordSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.passwordSecretIdInput"></a>

```java
public java.lang.String getPasswordSecretIdInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `tnsnamesFileSecretIdInput`<sup>Optional</sup> <a name="tnsnamesFileSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tnsnamesFileSecretIdInput"></a>

```java
public java.lang.String getTnsnamesFileSecretIdInput();
```

- *Type:* java.lang.String

---

##### `truststoreFileSecretIdInput`<sup>Optional</sup> <a name="truststoreFileSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.truststoreFileSecretIdInput"></a>

```java
public java.lang.String getTruststoreFileSecretIdInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.userNameInput"></a>

```java
public java.lang.String getUserNameInput();
```

- *Type:* java.lang.String

---

##### `versionSpecificDetailsInput`<sup>Optional</sup> <a name="versionSpecificDetailsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.versionSpecificDetailsInput"></a>

```java
public AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails getVersionSpecificDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a>

---

##### `walletPasswordSecretIdInput`<sup>Optional</sup> <a name="walletPasswordSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.walletPasswordSecretIdInput"></a>

```java
public java.lang.String getWalletPasswordSecretIdInput();
```

- *Type:* java.lang.String

---

##### `atpPasswordSecretId`<sup>Required</sup> <a name="atpPasswordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpPasswordSecretId"></a>

```java
public java.lang.String getAtpPasswordSecretId();
```

- *Type:* java.lang.String

---

##### `atpUserName`<sup>Required</sup> <a name="atpUserName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpUserName"></a>

```java
public java.lang.String getAtpUserName();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `cwalletFileSecretId`<sup>Required</sup> <a name="cwalletFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.cwalletFileSecretId"></a>

```java
public java.lang.String getCwalletFileSecretId();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `dataSourceType`<sup>Required</sup> <a name="dataSourceType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.dataSourceType"></a>

```java
public java.lang.String getDataSourceType();
```

- *Type:* java.lang.String

---

##### `ewalletFileSecretId`<sup>Required</sup> <a name="ewalletFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ewalletFileSecretId"></a>

```java
public java.lang.String getEwalletFileSecretId();
```

- *Type:* java.lang.String

---

##### `keyStoreFileSecretId`<sup>Required</sup> <a name="keyStoreFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.keyStoreFileSecretId"></a>

```java
public java.lang.String getKeyStoreFileSecretId();
```

- *Type:* java.lang.String

---

##### `measurementName`<sup>Required</sup> <a name="measurementName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.measurementName"></a>

```java
public java.lang.String getMeasurementName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

---

##### `ojdbcFileSecretId`<sup>Required</sup> <a name="ojdbcFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ojdbcFileSecretId"></a>

```java
public java.lang.String getOjdbcFileSecretId();
```

- *Type:* java.lang.String

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.passwordSecretId"></a>

```java
public java.lang.String getPasswordSecretId();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `tnsnamesFileSecretId`<sup>Required</sup> <a name="tnsnamesFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tnsnamesFileSecretId"></a>

```java
public java.lang.String getTnsnamesFileSecretId();
```

- *Type:* java.lang.String

---

##### `truststoreFileSecretId`<sup>Required</sup> <a name="truststoreFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.truststoreFileSecretId"></a>

```java
public java.lang.String getTruststoreFileSecretId();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `walletPasswordSecretId`<sup>Required</sup> <a name="walletPasswordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.walletPasswordSecretId"></a>

```java
public java.lang.String getWalletPasswordSecretId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.internalValue"></a>

```java
public AiAnomalyDetectionDataAssetDataSourceDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a>

---


### AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference <a name="AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_data_asset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference;

new AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetOrganizationName">resetOrganizationName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetRetentionPolicyName">resetRetentionPolicyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetOrganizationName` <a name="resetOrganizationName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetOrganizationName"></a>

```java
public void resetOrganizationName()
```

##### `resetRetentionPolicyName` <a name="resetRetentionPolicyName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetRetentionPolicyName"></a>

```java
public void resetRetentionPolicyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.influxVersionInput">influxVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.organizationNameInput">organizationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.retentionPolicyNameInput">retentionPolicyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.influxVersion">influxVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.organizationName">organizationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.retentionPolicyName">retentionPolicyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `influxVersionInput`<sup>Optional</sup> <a name="influxVersionInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.influxVersionInput"></a>

```java
public java.lang.String getInfluxVersionInput();
```

- *Type:* java.lang.String

---

##### `organizationNameInput`<sup>Optional</sup> <a name="organizationNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.organizationNameInput"></a>

```java
public java.lang.String getOrganizationNameInput();
```

- *Type:* java.lang.String

---

##### `retentionPolicyNameInput`<sup>Optional</sup> <a name="retentionPolicyNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.retentionPolicyNameInput"></a>

```java
public java.lang.String getRetentionPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `influxVersion`<sup>Required</sup> <a name="influxVersion" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.influxVersion"></a>

```java
public java.lang.String getInfluxVersion();
```

- *Type:* java.lang.String

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.organizationName"></a>

```java
public java.lang.String getOrganizationName();
```

- *Type:* java.lang.String

---

##### `retentionPolicyName`<sup>Required</sup> <a name="retentionPolicyName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.retentionPolicyName"></a>

```java
public java.lang.String getRetentionPolicyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.internalValue"></a>

```java
public AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a>

---


### AiAnomalyDetectionDataAssetTimeoutsOutputReference <a name="AiAnomalyDetectionDataAssetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_data_asset.AiAnomalyDetectionDataAssetTimeoutsOutputReference;

new AiAnomalyDetectionDataAssetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts">AiAnomalyDetectionDataAssetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts">AiAnomalyDetectionDataAssetTimeouts</a>

---




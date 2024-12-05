# `cloudBridgeAssetSource` Submodule <a name="`cloudBridgeAssetSource` Submodule" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudBridgeAssetSource <a name="CloudBridgeAssetSource" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source oci_cloud_bridge_asset_source}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset_source.CloudBridgeAssetSource;

CloudBridgeAssetSource.Builder.create(Construct scope, java.lang.String id)
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
    .assetsCompartmentId(java.lang.String)
    .compartmentId(java.lang.String)
    .discoveryCredentials(CloudBridgeAssetSourceDiscoveryCredentials)
    .environmentId(java.lang.String)
    .inventoryId(java.lang.String)
    .type(java.lang.String)
    .vcenterEndpoint(java.lang.String)
//  .areHistoricalMetricsCollected(java.lang.Boolean)
//  .areHistoricalMetricsCollected(IResolvable)
//  .areRealtimeMetricsCollected(java.lang.Boolean)
//  .areRealtimeMetricsCollected(IResolvable)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .discoveryScheduleId(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .replicationCredentials(CloudBridgeAssetSourceReplicationCredentials)
//  .systemTags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(CloudBridgeAssetSourceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.assetsCompartmentId">assetsCompartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#assets_compartment_id CloudBridgeAssetSource#assets_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#compartment_id CloudBridgeAssetSource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.discoveryCredentials">discoveryCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials">CloudBridgeAssetSourceDiscoveryCredentials</a></code> | discovery_credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.environmentId">environmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#environment_id CloudBridgeAssetSource#environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.inventoryId">inventoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#inventory_id CloudBridgeAssetSource#inventory_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#type CloudBridgeAssetSource#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.vcenterEndpoint">vcenterEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#vcenter_endpoint CloudBridgeAssetSource#vcenter_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.areHistoricalMetricsCollected">areHistoricalMetricsCollected</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#are_historical_metrics_collected CloudBridgeAssetSource#are_historical_metrics_collected}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.areRealtimeMetricsCollected">areRealtimeMetricsCollected</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#are_realtime_metrics_collected CloudBridgeAssetSource#are_realtime_metrics_collected}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#defined_tags CloudBridgeAssetSource#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.discoveryScheduleId">discoveryScheduleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#discovery_schedule_id CloudBridgeAssetSource#discovery_schedule_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#display_name CloudBridgeAssetSource#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#freeform_tags CloudBridgeAssetSource#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#id CloudBridgeAssetSource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.replicationCredentials">replicationCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials">CloudBridgeAssetSourceReplicationCredentials</a></code> | replication_credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.systemTags">systemTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#system_tags CloudBridgeAssetSource#system_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts">CloudBridgeAssetSourceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assetsCompartmentId`<sup>Required</sup> <a name="assetsCompartmentId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.assetsCompartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#assets_compartment_id CloudBridgeAssetSource#assets_compartment_id}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#compartment_id CloudBridgeAssetSource#compartment_id}.

---

##### `discoveryCredentials`<sup>Required</sup> <a name="discoveryCredentials" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.discoveryCredentials"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials">CloudBridgeAssetSourceDiscoveryCredentials</a>

discovery_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#discovery_credentials CloudBridgeAssetSource#discovery_credentials}

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.environmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#environment_id CloudBridgeAssetSource#environment_id}.

---

##### `inventoryId`<sup>Required</sup> <a name="inventoryId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.inventoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#inventory_id CloudBridgeAssetSource#inventory_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#type CloudBridgeAssetSource#type}.

---

##### `vcenterEndpoint`<sup>Required</sup> <a name="vcenterEndpoint" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.vcenterEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#vcenter_endpoint CloudBridgeAssetSource#vcenter_endpoint}.

---

##### `areHistoricalMetricsCollected`<sup>Optional</sup> <a name="areHistoricalMetricsCollected" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.areHistoricalMetricsCollected"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#are_historical_metrics_collected CloudBridgeAssetSource#are_historical_metrics_collected}.

---

##### `areRealtimeMetricsCollected`<sup>Optional</sup> <a name="areRealtimeMetricsCollected" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.areRealtimeMetricsCollected"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#are_realtime_metrics_collected CloudBridgeAssetSource#are_realtime_metrics_collected}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#defined_tags CloudBridgeAssetSource#defined_tags}.

---

##### `discoveryScheduleId`<sup>Optional</sup> <a name="discoveryScheduleId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.discoveryScheduleId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#discovery_schedule_id CloudBridgeAssetSource#discovery_schedule_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#display_name CloudBridgeAssetSource#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#freeform_tags CloudBridgeAssetSource#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#id CloudBridgeAssetSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `replicationCredentials`<sup>Optional</sup> <a name="replicationCredentials" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.replicationCredentials"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials">CloudBridgeAssetSourceReplicationCredentials</a>

replication_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#replication_credentials CloudBridgeAssetSource#replication_credentials}

---

##### `systemTags`<sup>Optional</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.systemTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#system_tags CloudBridgeAssetSource#system_tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts">CloudBridgeAssetSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#timeouts CloudBridgeAssetSource#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.putDiscoveryCredentials">putDiscoveryCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.putReplicationCredentials">putReplicationCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetAreHistoricalMetricsCollected">resetAreHistoricalMetricsCollected</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetAreRealtimeMetricsCollected">resetAreRealtimeMetricsCollected</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetDiscoveryScheduleId">resetDiscoveryScheduleId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetReplicationCredentials">resetReplicationCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetSystemTags">resetSystemTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDiscoveryCredentials` <a name="putDiscoveryCredentials" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.putDiscoveryCredentials"></a>

```java
public void putDiscoveryCredentials(CloudBridgeAssetSourceDiscoveryCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.putDiscoveryCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials">CloudBridgeAssetSourceDiscoveryCredentials</a>

---

##### `putReplicationCredentials` <a name="putReplicationCredentials" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.putReplicationCredentials"></a>

```java
public void putReplicationCredentials(CloudBridgeAssetSourceReplicationCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.putReplicationCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials">CloudBridgeAssetSourceReplicationCredentials</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.putTimeouts"></a>

```java
public void putTimeouts(CloudBridgeAssetSourceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts">CloudBridgeAssetSourceTimeouts</a>

---

##### `resetAreHistoricalMetricsCollected` <a name="resetAreHistoricalMetricsCollected" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetAreHistoricalMetricsCollected"></a>

```java
public void resetAreHistoricalMetricsCollected()
```

##### `resetAreRealtimeMetricsCollected` <a name="resetAreRealtimeMetricsCollected" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetAreRealtimeMetricsCollected"></a>

```java
public void resetAreRealtimeMetricsCollected()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDiscoveryScheduleId` <a name="resetDiscoveryScheduleId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetDiscoveryScheduleId"></a>

```java
public void resetDiscoveryScheduleId()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetId"></a>

```java
public void resetId()
```

##### `resetReplicationCredentials` <a name="resetReplicationCredentials" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetReplicationCredentials"></a>

```java
public void resetReplicationCredentials()
```

##### `resetSystemTags` <a name="resetSystemTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetSystemTags"></a>

```java
public void resetSystemTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudBridgeAssetSource resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset_source.CloudBridgeAssetSource;

CloudBridgeAssetSource.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset_source.CloudBridgeAssetSource;

CloudBridgeAssetSource.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset_source.CloudBridgeAssetSource;

CloudBridgeAssetSource.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset_source.CloudBridgeAssetSource;

CloudBridgeAssetSource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudBridgeAssetSource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CloudBridgeAssetSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudBridgeAssetSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudBridgeAssetSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CloudBridgeAssetSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.discoveryCredentials">discoveryCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference">CloudBridgeAssetSourceDiscoveryCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.replicationCredentials">replicationCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference">CloudBridgeAssetSourceReplicationCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference">CloudBridgeAssetSourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.areHistoricalMetricsCollectedInput">areHistoricalMetricsCollectedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.areRealtimeMetricsCollectedInput">areRealtimeMetricsCollectedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.assetsCompartmentIdInput">assetsCompartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.discoveryCredentialsInput">discoveryCredentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials">CloudBridgeAssetSourceDiscoveryCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.discoveryScheduleIdInput">discoveryScheduleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.environmentIdInput">environmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.inventoryIdInput">inventoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.replicationCredentialsInput">replicationCredentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials">CloudBridgeAssetSourceReplicationCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.systemTagsInput">systemTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts">CloudBridgeAssetSourceTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.vcenterEndpointInput">vcenterEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.areHistoricalMetricsCollected">areHistoricalMetricsCollected</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.areRealtimeMetricsCollected">areRealtimeMetricsCollected</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.assetsCompartmentId">assetsCompartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.discoveryScheduleId">discoveryScheduleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.inventoryId">inventoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.systemTags">systemTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.vcenterEndpoint">vcenterEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `discoveryCredentials`<sup>Required</sup> <a name="discoveryCredentials" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.discoveryCredentials"></a>

```java
public CloudBridgeAssetSourceDiscoveryCredentialsOutputReference getDiscoveryCredentials();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference">CloudBridgeAssetSourceDiscoveryCredentialsOutputReference</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `replicationCredentials`<sup>Required</sup> <a name="replicationCredentials" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.replicationCredentials"></a>

```java
public CloudBridgeAssetSourceReplicationCredentialsOutputReference getReplicationCredentials();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference">CloudBridgeAssetSourceReplicationCredentialsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.timeouts"></a>

```java
public CloudBridgeAssetSourceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference">CloudBridgeAssetSourceTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `areHistoricalMetricsCollectedInput`<sup>Optional</sup> <a name="areHistoricalMetricsCollectedInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.areHistoricalMetricsCollectedInput"></a>

```java
public java.lang.Object getAreHistoricalMetricsCollectedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `areRealtimeMetricsCollectedInput`<sup>Optional</sup> <a name="areRealtimeMetricsCollectedInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.areRealtimeMetricsCollectedInput"></a>

```java
public java.lang.Object getAreRealtimeMetricsCollectedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `assetsCompartmentIdInput`<sup>Optional</sup> <a name="assetsCompartmentIdInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.assetsCompartmentIdInput"></a>

```java
public java.lang.String getAssetsCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `discoveryCredentialsInput`<sup>Optional</sup> <a name="discoveryCredentialsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.discoveryCredentialsInput"></a>

```java
public CloudBridgeAssetSourceDiscoveryCredentials getDiscoveryCredentialsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials">CloudBridgeAssetSourceDiscoveryCredentials</a>

---

##### `discoveryScheduleIdInput`<sup>Optional</sup> <a name="discoveryScheduleIdInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.discoveryScheduleIdInput"></a>

```java
public java.lang.String getDiscoveryScheduleIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `environmentIdInput`<sup>Optional</sup> <a name="environmentIdInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.environmentIdInput"></a>

```java
public java.lang.String getEnvironmentIdInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inventoryIdInput`<sup>Optional</sup> <a name="inventoryIdInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.inventoryIdInput"></a>

```java
public java.lang.String getInventoryIdInput();
```

- *Type:* java.lang.String

---

##### `replicationCredentialsInput`<sup>Optional</sup> <a name="replicationCredentialsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.replicationCredentialsInput"></a>

```java
public CloudBridgeAssetSourceReplicationCredentials getReplicationCredentialsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials">CloudBridgeAssetSourceReplicationCredentials</a>

---

##### `systemTagsInput`<sup>Optional</sup> <a name="systemTagsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.systemTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSystemTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts">CloudBridgeAssetSourceTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `vcenterEndpointInput`<sup>Optional</sup> <a name="vcenterEndpointInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.vcenterEndpointInput"></a>

```java
public java.lang.String getVcenterEndpointInput();
```

- *Type:* java.lang.String

---

##### `areHistoricalMetricsCollected`<sup>Required</sup> <a name="areHistoricalMetricsCollected" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.areHistoricalMetricsCollected"></a>

```java
public java.lang.Object getAreHistoricalMetricsCollected();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `areRealtimeMetricsCollected`<sup>Required</sup> <a name="areRealtimeMetricsCollected" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.areRealtimeMetricsCollected"></a>

```java
public java.lang.Object getAreRealtimeMetricsCollected();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `assetsCompartmentId`<sup>Required</sup> <a name="assetsCompartmentId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.assetsCompartmentId"></a>

```java
public java.lang.String getAssetsCompartmentId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `discoveryScheduleId`<sup>Required</sup> <a name="discoveryScheduleId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.discoveryScheduleId"></a>

```java
public java.lang.String getDiscoveryScheduleId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inventoryId`<sup>Required</sup> <a name="inventoryId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.inventoryId"></a>

```java
public java.lang.String getInventoryId();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.systemTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSystemTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `vcenterEndpoint`<sup>Required</sup> <a name="vcenterEndpoint" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.vcenterEndpoint"></a>

```java
public java.lang.String getVcenterEndpoint();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudBridgeAssetSourceConfig <a name="CloudBridgeAssetSourceConfig" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset_source.CloudBridgeAssetSourceConfig;

CloudBridgeAssetSourceConfig.builder()
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
    .assetsCompartmentId(java.lang.String)
    .compartmentId(java.lang.String)
    .discoveryCredentials(CloudBridgeAssetSourceDiscoveryCredentials)
    .environmentId(java.lang.String)
    .inventoryId(java.lang.String)
    .type(java.lang.String)
    .vcenterEndpoint(java.lang.String)
//  .areHistoricalMetricsCollected(java.lang.Boolean)
//  .areHistoricalMetricsCollected(IResolvable)
//  .areRealtimeMetricsCollected(java.lang.Boolean)
//  .areRealtimeMetricsCollected(IResolvable)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .discoveryScheduleId(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .replicationCredentials(CloudBridgeAssetSourceReplicationCredentials)
//  .systemTags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(CloudBridgeAssetSourceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.assetsCompartmentId">assetsCompartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#assets_compartment_id CloudBridgeAssetSource#assets_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#compartment_id CloudBridgeAssetSource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.discoveryCredentials">discoveryCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials">CloudBridgeAssetSourceDiscoveryCredentials</a></code> | discovery_credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#environment_id CloudBridgeAssetSource#environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.inventoryId">inventoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#inventory_id CloudBridgeAssetSource#inventory_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#type CloudBridgeAssetSource#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.vcenterEndpoint">vcenterEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#vcenter_endpoint CloudBridgeAssetSource#vcenter_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.areHistoricalMetricsCollected">areHistoricalMetricsCollected</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#are_historical_metrics_collected CloudBridgeAssetSource#are_historical_metrics_collected}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.areRealtimeMetricsCollected">areRealtimeMetricsCollected</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#are_realtime_metrics_collected CloudBridgeAssetSource#are_realtime_metrics_collected}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#defined_tags CloudBridgeAssetSource#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.discoveryScheduleId">discoveryScheduleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#discovery_schedule_id CloudBridgeAssetSource#discovery_schedule_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#display_name CloudBridgeAssetSource#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#freeform_tags CloudBridgeAssetSource#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#id CloudBridgeAssetSource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.replicationCredentials">replicationCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials">CloudBridgeAssetSourceReplicationCredentials</a></code> | replication_credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.systemTags">systemTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#system_tags CloudBridgeAssetSource#system_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts">CloudBridgeAssetSourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assetsCompartmentId`<sup>Required</sup> <a name="assetsCompartmentId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.assetsCompartmentId"></a>

```java
public java.lang.String getAssetsCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#assets_compartment_id CloudBridgeAssetSource#assets_compartment_id}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#compartment_id CloudBridgeAssetSource#compartment_id}.

---

##### `discoveryCredentials`<sup>Required</sup> <a name="discoveryCredentials" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.discoveryCredentials"></a>

```java
public CloudBridgeAssetSourceDiscoveryCredentials getDiscoveryCredentials();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials">CloudBridgeAssetSourceDiscoveryCredentials</a>

discovery_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#discovery_credentials CloudBridgeAssetSource#discovery_credentials}

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#environment_id CloudBridgeAssetSource#environment_id}.

---

##### `inventoryId`<sup>Required</sup> <a name="inventoryId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.inventoryId"></a>

```java
public java.lang.String getInventoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#inventory_id CloudBridgeAssetSource#inventory_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#type CloudBridgeAssetSource#type}.

---

##### `vcenterEndpoint`<sup>Required</sup> <a name="vcenterEndpoint" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.vcenterEndpoint"></a>

```java
public java.lang.String getVcenterEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#vcenter_endpoint CloudBridgeAssetSource#vcenter_endpoint}.

---

##### `areHistoricalMetricsCollected`<sup>Optional</sup> <a name="areHistoricalMetricsCollected" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.areHistoricalMetricsCollected"></a>

```java
public java.lang.Object getAreHistoricalMetricsCollected();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#are_historical_metrics_collected CloudBridgeAssetSource#are_historical_metrics_collected}.

---

##### `areRealtimeMetricsCollected`<sup>Optional</sup> <a name="areRealtimeMetricsCollected" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.areRealtimeMetricsCollected"></a>

```java
public java.lang.Object getAreRealtimeMetricsCollected();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#are_realtime_metrics_collected CloudBridgeAssetSource#are_realtime_metrics_collected}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#defined_tags CloudBridgeAssetSource#defined_tags}.

---

##### `discoveryScheduleId`<sup>Optional</sup> <a name="discoveryScheduleId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.discoveryScheduleId"></a>

```java
public java.lang.String getDiscoveryScheduleId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#discovery_schedule_id CloudBridgeAssetSource#discovery_schedule_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#display_name CloudBridgeAssetSource#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#freeform_tags CloudBridgeAssetSource#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#id CloudBridgeAssetSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `replicationCredentials`<sup>Optional</sup> <a name="replicationCredentials" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.replicationCredentials"></a>

```java
public CloudBridgeAssetSourceReplicationCredentials getReplicationCredentials();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials">CloudBridgeAssetSourceReplicationCredentials</a>

replication_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#replication_credentials CloudBridgeAssetSource#replication_credentials}

---

##### `systemTags`<sup>Optional</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.systemTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSystemTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#system_tags CloudBridgeAssetSource#system_tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.timeouts"></a>

```java
public CloudBridgeAssetSourceTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts">CloudBridgeAssetSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#timeouts CloudBridgeAssetSource#timeouts}

---

### CloudBridgeAssetSourceDiscoveryCredentials <a name="CloudBridgeAssetSourceDiscoveryCredentials" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset_source.CloudBridgeAssetSourceDiscoveryCredentials;

CloudBridgeAssetSourceDiscoveryCredentials.builder()
    .secretId(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials.property.secretId">secretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#secret_id CloudBridgeAssetSource#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#type CloudBridgeAssetSource#type}. |

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#secret_id CloudBridgeAssetSource#secret_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#type CloudBridgeAssetSource#type}.

---

### CloudBridgeAssetSourceReplicationCredentials <a name="CloudBridgeAssetSourceReplicationCredentials" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset_source.CloudBridgeAssetSourceReplicationCredentials;

CloudBridgeAssetSourceReplicationCredentials.builder()
    .secretId(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials.property.secretId">secretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#secret_id CloudBridgeAssetSource#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#type CloudBridgeAssetSource#type}. |

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#secret_id CloudBridgeAssetSource#secret_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#type CloudBridgeAssetSource#type}.

---

### CloudBridgeAssetSourceTimeouts <a name="CloudBridgeAssetSourceTimeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset_source.CloudBridgeAssetSourceTimeouts;

CloudBridgeAssetSourceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#create CloudBridgeAssetSource#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#delete CloudBridgeAssetSource#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#update CloudBridgeAssetSource#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#create CloudBridgeAssetSource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#delete CloudBridgeAssetSource#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#update CloudBridgeAssetSource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudBridgeAssetSourceDiscoveryCredentialsOutputReference <a name="CloudBridgeAssetSourceDiscoveryCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset_source.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference;

new CloudBridgeAssetSourceDiscoveryCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.secretIdInput">secretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials">CloudBridgeAssetSourceDiscoveryCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.secretIdInput"></a>

```java
public java.lang.String getSecretIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.internalValue"></a>

```java
public CloudBridgeAssetSourceDiscoveryCredentials getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials">CloudBridgeAssetSourceDiscoveryCredentials</a>

---


### CloudBridgeAssetSourceReplicationCredentialsOutputReference <a name="CloudBridgeAssetSourceReplicationCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset_source.CloudBridgeAssetSourceReplicationCredentialsOutputReference;

new CloudBridgeAssetSourceReplicationCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.secretIdInput">secretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials">CloudBridgeAssetSourceReplicationCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.secretIdInput"></a>

```java
public java.lang.String getSecretIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.internalValue"></a>

```java
public CloudBridgeAssetSourceReplicationCredentials getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials">CloudBridgeAssetSourceReplicationCredentials</a>

---


### CloudBridgeAssetSourceTimeoutsOutputReference <a name="CloudBridgeAssetSourceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_bridge_asset_source.CloudBridgeAssetSourceTimeoutsOutputReference;

new CloudBridgeAssetSourceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts">CloudBridgeAssetSourceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts">CloudBridgeAssetSourceTimeouts</a>

---




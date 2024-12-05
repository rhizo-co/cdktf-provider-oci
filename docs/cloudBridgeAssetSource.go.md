# `cloudBridgeAssetSource` Submodule <a name="`cloudBridgeAssetSource` Submodule" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudBridgeAssetSource <a name="CloudBridgeAssetSource" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source oci_cloud_bridge_asset_source}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeassetsource"

cloudbridgeassetsource.NewCloudBridgeAssetSource(scope Construct, id *string, config CloudBridgeAssetSourceConfig) CloudBridgeAssetSource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig">CloudBridgeAssetSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig">CloudBridgeAssetSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.putDiscoveryCredentials">PutDiscoveryCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.putReplicationCredentials">PutReplicationCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetAreHistoricalMetricsCollected">ResetAreHistoricalMetricsCollected</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetAreRealtimeMetricsCollected">ResetAreRealtimeMetricsCollected</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetDiscoveryScheduleId">ResetDiscoveryScheduleId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetReplicationCredentials">ResetReplicationCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetSystemTags">ResetSystemTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDiscoveryCredentials` <a name="PutDiscoveryCredentials" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.putDiscoveryCredentials"></a>

```go
func PutDiscoveryCredentials(value CloudBridgeAssetSourceDiscoveryCredentials)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.putDiscoveryCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials">CloudBridgeAssetSourceDiscoveryCredentials</a>

---

##### `PutReplicationCredentials` <a name="PutReplicationCredentials" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.putReplicationCredentials"></a>

```go
func PutReplicationCredentials(value CloudBridgeAssetSourceReplicationCredentials)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.putReplicationCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials">CloudBridgeAssetSourceReplicationCredentials</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.putTimeouts"></a>

```go
func PutTimeouts(value CloudBridgeAssetSourceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts">CloudBridgeAssetSourceTimeouts</a>

---

##### `ResetAreHistoricalMetricsCollected` <a name="ResetAreHistoricalMetricsCollected" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetAreHistoricalMetricsCollected"></a>

```go
func ResetAreHistoricalMetricsCollected()
```

##### `ResetAreRealtimeMetricsCollected` <a name="ResetAreRealtimeMetricsCollected" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetAreRealtimeMetricsCollected"></a>

```go
func ResetAreRealtimeMetricsCollected()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDiscoveryScheduleId` <a name="ResetDiscoveryScheduleId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetDiscoveryScheduleId"></a>

```go
func ResetDiscoveryScheduleId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetId"></a>

```go
func ResetId()
```

##### `ResetReplicationCredentials` <a name="ResetReplicationCredentials" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetReplicationCredentials"></a>

```go
func ResetReplicationCredentials()
```

##### `ResetSystemTags` <a name="ResetSystemTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetSystemTags"></a>

```go
func ResetSystemTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudBridgeAssetSource resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeassetsource"

cloudbridgeassetsource.CloudBridgeAssetSource_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeassetsource"

cloudbridgeassetsource.CloudBridgeAssetSource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeassetsource"

cloudbridgeassetsource.CloudBridgeAssetSource_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeassetsource"

cloudbridgeassetsource.CloudBridgeAssetSource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CloudBridgeAssetSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudBridgeAssetSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudBridgeAssetSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CloudBridgeAssetSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.discoveryCredentials">DiscoveryCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference">CloudBridgeAssetSourceDiscoveryCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.replicationCredentials">ReplicationCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference">CloudBridgeAssetSourceReplicationCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference">CloudBridgeAssetSourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.areHistoricalMetricsCollectedInput">AreHistoricalMetricsCollectedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.areRealtimeMetricsCollectedInput">AreRealtimeMetricsCollectedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.assetsCompartmentIdInput">AssetsCompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.discoveryCredentialsInput">DiscoveryCredentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials">CloudBridgeAssetSourceDiscoveryCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.discoveryScheduleIdInput">DiscoveryScheduleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.environmentIdInput">EnvironmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.inventoryIdInput">InventoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.replicationCredentialsInput">ReplicationCredentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials">CloudBridgeAssetSourceReplicationCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.systemTagsInput">SystemTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.vcenterEndpointInput">VcenterEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.areHistoricalMetricsCollected">AreHistoricalMetricsCollected</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.areRealtimeMetricsCollected">AreRealtimeMetricsCollected</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.assetsCompartmentId">AssetsCompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.discoveryScheduleId">DiscoveryScheduleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.environmentId">EnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.inventoryId">InventoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.systemTags">SystemTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.vcenterEndpoint">VcenterEndpoint</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DiscoveryCredentials`<sup>Required</sup> <a name="DiscoveryCredentials" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.discoveryCredentials"></a>

```go
func DiscoveryCredentials() CloudBridgeAssetSourceDiscoveryCredentialsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference">CloudBridgeAssetSourceDiscoveryCredentialsOutputReference</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ReplicationCredentials`<sup>Required</sup> <a name="ReplicationCredentials" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.replicationCredentials"></a>

```go
func ReplicationCredentials() CloudBridgeAssetSourceReplicationCredentialsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference">CloudBridgeAssetSourceReplicationCredentialsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.timeouts"></a>

```go
func Timeouts() CloudBridgeAssetSourceTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference">CloudBridgeAssetSourceTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `AreHistoricalMetricsCollectedInput`<sup>Optional</sup> <a name="AreHistoricalMetricsCollectedInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.areHistoricalMetricsCollectedInput"></a>

```go
func AreHistoricalMetricsCollectedInput() interface{}
```

- *Type:* interface{}

---

##### `AreRealtimeMetricsCollectedInput`<sup>Optional</sup> <a name="AreRealtimeMetricsCollectedInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.areRealtimeMetricsCollectedInput"></a>

```go
func AreRealtimeMetricsCollectedInput() interface{}
```

- *Type:* interface{}

---

##### `AssetsCompartmentIdInput`<sup>Optional</sup> <a name="AssetsCompartmentIdInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.assetsCompartmentIdInput"></a>

```go
func AssetsCompartmentIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DiscoveryCredentialsInput`<sup>Optional</sup> <a name="DiscoveryCredentialsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.discoveryCredentialsInput"></a>

```go
func DiscoveryCredentialsInput() CloudBridgeAssetSourceDiscoveryCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials">CloudBridgeAssetSourceDiscoveryCredentials</a>

---

##### `DiscoveryScheduleIdInput`<sup>Optional</sup> <a name="DiscoveryScheduleIdInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.discoveryScheduleIdInput"></a>

```go
func DiscoveryScheduleIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnvironmentIdInput`<sup>Optional</sup> <a name="EnvironmentIdInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.environmentIdInput"></a>

```go
func EnvironmentIdInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InventoryIdInput`<sup>Optional</sup> <a name="InventoryIdInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.inventoryIdInput"></a>

```go
func InventoryIdInput() *string
```

- *Type:* *string

---

##### `ReplicationCredentialsInput`<sup>Optional</sup> <a name="ReplicationCredentialsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.replicationCredentialsInput"></a>

```go
func ReplicationCredentialsInput() CloudBridgeAssetSourceReplicationCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials">CloudBridgeAssetSourceReplicationCredentials</a>

---

##### `SystemTagsInput`<sup>Optional</sup> <a name="SystemTagsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.systemTagsInput"></a>

```go
func SystemTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VcenterEndpointInput`<sup>Optional</sup> <a name="VcenterEndpointInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.vcenterEndpointInput"></a>

```go
func VcenterEndpointInput() *string
```

- *Type:* *string

---

##### `AreHistoricalMetricsCollected`<sup>Required</sup> <a name="AreHistoricalMetricsCollected" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.areHistoricalMetricsCollected"></a>

```go
func AreHistoricalMetricsCollected() interface{}
```

- *Type:* interface{}

---

##### `AreRealtimeMetricsCollected`<sup>Required</sup> <a name="AreRealtimeMetricsCollected" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.areRealtimeMetricsCollected"></a>

```go
func AreRealtimeMetricsCollected() interface{}
```

- *Type:* interface{}

---

##### `AssetsCompartmentId`<sup>Required</sup> <a name="AssetsCompartmentId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.assetsCompartmentId"></a>

```go
func AssetsCompartmentId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DiscoveryScheduleId`<sup>Required</sup> <a name="DiscoveryScheduleId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.discoveryScheduleId"></a>

```go
func DiscoveryScheduleId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.environmentId"></a>

```go
func EnvironmentId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InventoryId`<sup>Required</sup> <a name="InventoryId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.inventoryId"></a>

```go
func InventoryId() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.systemTags"></a>

```go
func SystemTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VcenterEndpoint`<sup>Required</sup> <a name="VcenterEndpoint" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.vcenterEndpoint"></a>

```go
func VcenterEndpoint() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudBridgeAssetSourceConfig <a name="CloudBridgeAssetSourceConfig" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeassetsource"

&cloudbridgeassetsource.CloudBridgeAssetSourceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AssetsCompartmentId: *string,
	CompartmentId: *string,
	DiscoveryCredentials: github.com/rhizo-co/cdktf-provider-oci-go/oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials,
	EnvironmentId: *string,
	InventoryId: *string,
	Type: *string,
	VcenterEndpoint: *string,
	AreHistoricalMetricsCollected: interface{},
	AreRealtimeMetricsCollected: interface{},
	DefinedTags: *map[string]*string,
	DiscoveryScheduleId: *string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	ReplicationCredentials: github.com/rhizo-co/cdktf-provider-oci-go/oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials,
	SystemTags: *map[string]*string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.assetsCompartmentId">AssetsCompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#assets_compartment_id CloudBridgeAssetSource#assets_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#compartment_id CloudBridgeAssetSource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.discoveryCredentials">DiscoveryCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials">CloudBridgeAssetSourceDiscoveryCredentials</a></code> | discovery_credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.environmentId">EnvironmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#environment_id CloudBridgeAssetSource#environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.inventoryId">InventoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#inventory_id CloudBridgeAssetSource#inventory_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#type CloudBridgeAssetSource#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.vcenterEndpoint">VcenterEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#vcenter_endpoint CloudBridgeAssetSource#vcenter_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.areHistoricalMetricsCollected">AreHistoricalMetricsCollected</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#are_historical_metrics_collected CloudBridgeAssetSource#are_historical_metrics_collected}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.areRealtimeMetricsCollected">AreRealtimeMetricsCollected</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#are_realtime_metrics_collected CloudBridgeAssetSource#are_realtime_metrics_collected}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#defined_tags CloudBridgeAssetSource#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.discoveryScheduleId">DiscoveryScheduleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#discovery_schedule_id CloudBridgeAssetSource#discovery_schedule_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#display_name CloudBridgeAssetSource#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#freeform_tags CloudBridgeAssetSource#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#id CloudBridgeAssetSource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.replicationCredentials">ReplicationCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials">CloudBridgeAssetSourceReplicationCredentials</a></code> | replication_credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.systemTags">SystemTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#system_tags CloudBridgeAssetSource#system_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts">CloudBridgeAssetSourceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssetsCompartmentId`<sup>Required</sup> <a name="AssetsCompartmentId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.assetsCompartmentId"></a>

```go
AssetsCompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#assets_compartment_id CloudBridgeAssetSource#assets_compartment_id}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#compartment_id CloudBridgeAssetSource#compartment_id}.

---

##### `DiscoveryCredentials`<sup>Required</sup> <a name="DiscoveryCredentials" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.discoveryCredentials"></a>

```go
DiscoveryCredentials CloudBridgeAssetSourceDiscoveryCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials">CloudBridgeAssetSourceDiscoveryCredentials</a>

discovery_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#discovery_credentials CloudBridgeAssetSource#discovery_credentials}

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.environmentId"></a>

```go
EnvironmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#environment_id CloudBridgeAssetSource#environment_id}.

---

##### `InventoryId`<sup>Required</sup> <a name="InventoryId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.inventoryId"></a>

```go
InventoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#inventory_id CloudBridgeAssetSource#inventory_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#type CloudBridgeAssetSource#type}.

---

##### `VcenterEndpoint`<sup>Required</sup> <a name="VcenterEndpoint" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.vcenterEndpoint"></a>

```go
VcenterEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#vcenter_endpoint CloudBridgeAssetSource#vcenter_endpoint}.

---

##### `AreHistoricalMetricsCollected`<sup>Optional</sup> <a name="AreHistoricalMetricsCollected" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.areHistoricalMetricsCollected"></a>

```go
AreHistoricalMetricsCollected interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#are_historical_metrics_collected CloudBridgeAssetSource#are_historical_metrics_collected}.

---

##### `AreRealtimeMetricsCollected`<sup>Optional</sup> <a name="AreRealtimeMetricsCollected" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.areRealtimeMetricsCollected"></a>

```go
AreRealtimeMetricsCollected interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#are_realtime_metrics_collected CloudBridgeAssetSource#are_realtime_metrics_collected}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#defined_tags CloudBridgeAssetSource#defined_tags}.

---

##### `DiscoveryScheduleId`<sup>Optional</sup> <a name="DiscoveryScheduleId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.discoveryScheduleId"></a>

```go
DiscoveryScheduleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#discovery_schedule_id CloudBridgeAssetSource#discovery_schedule_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#display_name CloudBridgeAssetSource#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#freeform_tags CloudBridgeAssetSource#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#id CloudBridgeAssetSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ReplicationCredentials`<sup>Optional</sup> <a name="ReplicationCredentials" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.replicationCredentials"></a>

```go
ReplicationCredentials CloudBridgeAssetSourceReplicationCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials">CloudBridgeAssetSourceReplicationCredentials</a>

replication_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#replication_credentials CloudBridgeAssetSource#replication_credentials}

---

##### `SystemTags`<sup>Optional</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.systemTags"></a>

```go
SystemTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#system_tags CloudBridgeAssetSource#system_tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceConfig.property.timeouts"></a>

```go
Timeouts CloudBridgeAssetSourceTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts">CloudBridgeAssetSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#timeouts CloudBridgeAssetSource#timeouts}

---

### CloudBridgeAssetSourceDiscoveryCredentials <a name="CloudBridgeAssetSourceDiscoveryCredentials" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeassetsource"

&cloudbridgeassetsource.CloudBridgeAssetSourceDiscoveryCredentials {
	SecretId: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials.property.secretId">SecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#secret_id CloudBridgeAssetSource#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#type CloudBridgeAssetSource#type}. |

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials.property.secretId"></a>

```go
SecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#secret_id CloudBridgeAssetSource#secret_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#type CloudBridgeAssetSource#type}.

---

### CloudBridgeAssetSourceReplicationCredentials <a name="CloudBridgeAssetSourceReplicationCredentials" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeassetsource"

&cloudbridgeassetsource.CloudBridgeAssetSourceReplicationCredentials {
	SecretId: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials.property.secretId">SecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#secret_id CloudBridgeAssetSource#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#type CloudBridgeAssetSource#type}. |

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials.property.secretId"></a>

```go
SecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#secret_id CloudBridgeAssetSource#secret_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#type CloudBridgeAssetSource#type}.

---

### CloudBridgeAssetSourceTimeouts <a name="CloudBridgeAssetSourceTimeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeassetsource"

&cloudbridgeassetsource.CloudBridgeAssetSourceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#create CloudBridgeAssetSource#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#delete CloudBridgeAssetSource#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#update CloudBridgeAssetSource#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#create CloudBridgeAssetSource#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#delete CloudBridgeAssetSource#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset_source#update CloudBridgeAssetSource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudBridgeAssetSourceDiscoveryCredentialsOutputReference <a name="CloudBridgeAssetSourceDiscoveryCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeassetsource"

cloudbridgeassetsource.NewCloudBridgeAssetSourceDiscoveryCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudBridgeAssetSourceDiscoveryCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials">CloudBridgeAssetSourceDiscoveryCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.secretIdInput"></a>

```go
func SecretIdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudBridgeAssetSourceDiscoveryCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceDiscoveryCredentials">CloudBridgeAssetSourceDiscoveryCredentials</a>

---


### CloudBridgeAssetSourceReplicationCredentialsOutputReference <a name="CloudBridgeAssetSourceReplicationCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeassetsource"

cloudbridgeassetsource.NewCloudBridgeAssetSourceReplicationCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudBridgeAssetSourceReplicationCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials">CloudBridgeAssetSourceReplicationCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.secretIdInput"></a>

```go
func SecretIdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudBridgeAssetSourceReplicationCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceReplicationCredentials">CloudBridgeAssetSourceReplicationCredentials</a>

---


### CloudBridgeAssetSourceTimeoutsOutputReference <a name="CloudBridgeAssetSourceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeassetsource"

cloudbridgeassetsource.NewCloudBridgeAssetSourceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudBridgeAssetSourceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAssetSource.CloudBridgeAssetSourceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




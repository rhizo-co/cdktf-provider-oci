# `cloudBridgeAsset` Submodule <a name="`cloudBridgeAsset` Submodule" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudBridgeAsset <a name="CloudBridgeAsset" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset oci_cloud_bridge_asset}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

cloudbridgeasset.NewCloudBridgeAsset(scope Construct, id *string, config CloudBridgeAssetConfig) CloudBridgeAsset
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig">CloudBridgeAssetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig">CloudBridgeAssetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute">PutCompute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVm">PutVm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVcenter">PutVmwareVcenter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVm">PutVmwareVm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetAssetSourceIds">ResetAssetSourceIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetCompute">ResetCompute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetVm">ResetVm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetVmwareVcenter">ResetVmwareVcenter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetVmwareVm">ResetVmwareVm</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCompute` <a name="PutCompute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute"></a>

```go
func PutCompute(value CloudBridgeAssetCompute)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putTimeouts"></a>

```go
func PutTimeouts(value CloudBridgeAssetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts">CloudBridgeAssetTimeouts</a>

---

##### `PutVm` <a name="PutVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVm"></a>

```go
func PutVm(value CloudBridgeAssetVm)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVm.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a>

---

##### `PutVmwareVcenter` <a name="PutVmwareVcenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVcenter"></a>

```go
func PutVmwareVcenter(value CloudBridgeAssetVmwareVcenter)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVcenter.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a>

---

##### `PutVmwareVm` <a name="PutVmwareVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVm"></a>

```go
func PutVmwareVm(value CloudBridgeAssetVmwareVm)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVm.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a>

---

##### `ResetAssetSourceIds` <a name="ResetAssetSourceIds" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetAssetSourceIds"></a>

```go
func ResetAssetSourceIds()
```

##### `ResetCompute` <a name="ResetCompute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetCompute"></a>

```go
func ResetCompute()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVm` <a name="ResetVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetVm"></a>

```go
func ResetVm()
```

##### `ResetVmwareVcenter` <a name="ResetVmwareVcenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetVmwareVcenter"></a>

```go
func ResetVmwareVcenter()
```

##### `ResetVmwareVm` <a name="ResetVmwareVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetVmwareVm"></a>

```go
func ResetVmwareVm()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudBridgeAsset resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

cloudbridgeasset.CloudBridgeAsset_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

cloudbridgeasset.CloudBridgeAsset_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

cloudbridgeasset.CloudBridgeAsset_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

cloudbridgeasset.CloudBridgeAsset_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CloudBridgeAsset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudBridgeAsset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudBridgeAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CloudBridgeAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.compute">Compute</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference">CloudBridgeAssetComputeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference">CloudBridgeAssetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vm">Vm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference">CloudBridgeAssetVmOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVcenter">VmwareVcenter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference">CloudBridgeAssetVmwareVcenterOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVm">VmwareVm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference">CloudBridgeAssetVmwareVmOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetSourceIdsInput">AssetSourceIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetTypeInput">AssetTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.computeInput">ComputeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.externalAssetKeyInput">ExternalAssetKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.inventoryIdInput">InventoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.sourceKeyInput">SourceKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmInput">VmInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVcenterInput">VmwareVcenterInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVmInput">VmwareVmInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetSourceIds">AssetSourceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetType">AssetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.externalAssetKey">ExternalAssetKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.inventoryId">InventoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.sourceKey">SourceKey</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Compute`<sup>Required</sup> <a name="Compute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.compute"></a>

```go
func Compute() CloudBridgeAssetComputeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference">CloudBridgeAssetComputeOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeouts"></a>

```go
func Timeouts() CloudBridgeAssetTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference">CloudBridgeAssetTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Vm`<sup>Required</sup> <a name="Vm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vm"></a>

```go
func Vm() CloudBridgeAssetVmOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference">CloudBridgeAssetVmOutputReference</a>

---

##### `VmwareVcenter`<sup>Required</sup> <a name="VmwareVcenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVcenter"></a>

```go
func VmwareVcenter() CloudBridgeAssetVmwareVcenterOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference">CloudBridgeAssetVmwareVcenterOutputReference</a>

---

##### `VmwareVm`<sup>Required</sup> <a name="VmwareVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVm"></a>

```go
func VmwareVm() CloudBridgeAssetVmwareVmOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference">CloudBridgeAssetVmwareVmOutputReference</a>

---

##### `AssetSourceIdsInput`<sup>Optional</sup> <a name="AssetSourceIdsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetSourceIdsInput"></a>

```go
func AssetSourceIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AssetTypeInput`<sup>Optional</sup> <a name="AssetTypeInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetTypeInput"></a>

```go
func AssetTypeInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `ComputeInput`<sup>Optional</sup> <a name="ComputeInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.computeInput"></a>

```go
func ComputeInput() CloudBridgeAssetCompute
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a>

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExternalAssetKeyInput`<sup>Optional</sup> <a name="ExternalAssetKeyInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.externalAssetKeyInput"></a>

```go
func ExternalAssetKeyInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InventoryIdInput`<sup>Optional</sup> <a name="InventoryIdInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.inventoryIdInput"></a>

```go
func InventoryIdInput() *string
```

- *Type:* *string

---

##### `SourceKeyInput`<sup>Optional</sup> <a name="SourceKeyInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.sourceKeyInput"></a>

```go
func SourceKeyInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VmInput`<sup>Optional</sup> <a name="VmInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmInput"></a>

```go
func VmInput() CloudBridgeAssetVm
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a>

---

##### `VmwareVcenterInput`<sup>Optional</sup> <a name="VmwareVcenterInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVcenterInput"></a>

```go
func VmwareVcenterInput() CloudBridgeAssetVmwareVcenter
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a>

---

##### `VmwareVmInput`<sup>Optional</sup> <a name="VmwareVmInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVmInput"></a>

```go
func VmwareVmInput() CloudBridgeAssetVmwareVm
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a>

---

##### `AssetSourceIds`<sup>Required</sup> <a name="AssetSourceIds" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetSourceIds"></a>

```go
func AssetSourceIds() *[]*string
```

- *Type:* *[]*string

---

##### `AssetType`<sup>Required</sup> <a name="AssetType" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetType"></a>

```go
func AssetType() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExternalAssetKey`<sup>Required</sup> <a name="ExternalAssetKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.externalAssetKey"></a>

```go
func ExternalAssetKey() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InventoryId`<sup>Required</sup> <a name="InventoryId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.inventoryId"></a>

```go
func InventoryId() *string
```

- *Type:* *string

---

##### `SourceKey`<sup>Required</sup> <a name="SourceKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.sourceKey"></a>

```go
func SourceKey() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudBridgeAssetCompute <a name="CloudBridgeAssetCompute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

&cloudbridgeasset.CloudBridgeAssetCompute {
	ConnectedNetworks: *f64,
	CoresCount: *f64,
	CpuModel: *string,
	Description: *string,
	Disks: interface{},
	DisksCount: *f64,
	DnsName: *string,
	Firmware: *string,
	GpuDevices: interface{},
	GpuDevicesCount: *f64,
	GuestState: *string,
	HardwareVersion: *string,
	HostName: *string,
	IsPmemEnabled: interface{},
	IsTpmEnabled: interface{},
	LatencySensitivity: *string,
	MemoryInMbs: *string,
	Nics: interface{},
	NicsCount: *f64,
	NvdimmController: github.com/rhizo-co/cdktf-provider-oci-go/oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController,
	Nvdimms: interface{},
	OperatingSystem: *string,
	OperatingSystemVersion: *string,
	PmemInMbs: *string,
	PowerState: *string,
	PrimaryIp: *string,
	ScsiController: github.com/rhizo-co/cdktf-provider-oci-go/oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController,
	StorageProvisionedInMbs: *string,
	ThreadsPerCoreCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.connectedNetworks">ConnectedNetworks</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#connected_networks CloudBridgeAsset#connected_networks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.coresCount">CoresCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cores_count CloudBridgeAsset#cores_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.cpuModel">CpuModel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cpu_model CloudBridgeAsset#cpu_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#description CloudBridgeAsset#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.disks">Disks</a></code> | <code>interface{}</code> | disks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.disksCount">DisksCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#disks_count CloudBridgeAsset#disks_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.dnsName">DnsName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#dns_name CloudBridgeAsset#dns_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.firmware">Firmware</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#firmware CloudBridgeAsset#firmware}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.gpuDevices">GpuDevices</a></code> | <code>interface{}</code> | gpu_devices block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.gpuDevicesCount">GpuDevicesCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#gpu_devices_count CloudBridgeAsset#gpu_devices_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.guestState">GuestState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#guest_state CloudBridgeAsset#guest_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.hardwareVersion">HardwareVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hardware_version CloudBridgeAsset#hardware_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.hostName">HostName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#host_name CloudBridgeAsset#host_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.isPmemEnabled">IsPmemEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_pmem_enabled CloudBridgeAsset#is_pmem_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.isTpmEnabled">IsTpmEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_tpm_enabled CloudBridgeAsset#is_tpm_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.latencySensitivity">LatencySensitivity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#latency_sensitivity CloudBridgeAsset#latency_sensitivity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.memoryInMbs">MemoryInMbs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#memory_in_mbs CloudBridgeAsset#memory_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nics">Nics</a></code> | <code>interface{}</code> | nics block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nicsCount">NicsCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#nics_count CloudBridgeAsset#nics_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nvdimmController">NvdimmController</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a></code> | nvdimm_controller block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nvdimms">Nvdimms</a></code> | <code>interface{}</code> | nvdimms block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.operatingSystem">OperatingSystem</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#operating_system CloudBridgeAsset#operating_system}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.operatingSystemVersion">OperatingSystemVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#operating_system_version CloudBridgeAsset#operating_system_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.pmemInMbs">PmemInMbs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#pmem_in_mbs CloudBridgeAsset#pmem_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.powerState">PowerState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#power_state CloudBridgeAsset#power_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.primaryIp">PrimaryIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#primary_ip CloudBridgeAsset#primary_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.scsiController">ScsiController</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a></code> | scsi_controller block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.storageProvisionedInMbs">StorageProvisionedInMbs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#storage_provisioned_in_mbs CloudBridgeAsset#storage_provisioned_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.threadsPerCoreCount">ThreadsPerCoreCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#threads_per_core_count CloudBridgeAsset#threads_per_core_count}. |

---

##### `ConnectedNetworks`<sup>Optional</sup> <a name="ConnectedNetworks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.connectedNetworks"></a>

```go
ConnectedNetworks *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#connected_networks CloudBridgeAsset#connected_networks}.

---

##### `CoresCount`<sup>Optional</sup> <a name="CoresCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.coresCount"></a>

```go
CoresCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cores_count CloudBridgeAsset#cores_count}.

---

##### `CpuModel`<sup>Optional</sup> <a name="CpuModel" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.cpuModel"></a>

```go
CpuModel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cpu_model CloudBridgeAsset#cpu_model}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#description CloudBridgeAsset#description}.

---

##### `Disks`<sup>Optional</sup> <a name="Disks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.disks"></a>

```go
Disks interface{}
```

- *Type:* interface{}

disks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#disks CloudBridgeAsset#disks}

---

##### `DisksCount`<sup>Optional</sup> <a name="DisksCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.disksCount"></a>

```go
DisksCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#disks_count CloudBridgeAsset#disks_count}.

---

##### `DnsName`<sup>Optional</sup> <a name="DnsName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.dnsName"></a>

```go
DnsName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#dns_name CloudBridgeAsset#dns_name}.

---

##### `Firmware`<sup>Optional</sup> <a name="Firmware" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.firmware"></a>

```go
Firmware *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#firmware CloudBridgeAsset#firmware}.

---

##### `GpuDevices`<sup>Optional</sup> <a name="GpuDevices" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.gpuDevices"></a>

```go
GpuDevices interface{}
```

- *Type:* interface{}

gpu_devices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#gpu_devices CloudBridgeAsset#gpu_devices}

---

##### `GpuDevicesCount`<sup>Optional</sup> <a name="GpuDevicesCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.gpuDevicesCount"></a>

```go
GpuDevicesCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#gpu_devices_count CloudBridgeAsset#gpu_devices_count}.

---

##### `GuestState`<sup>Optional</sup> <a name="GuestState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.guestState"></a>

```go
GuestState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#guest_state CloudBridgeAsset#guest_state}.

---

##### `HardwareVersion`<sup>Optional</sup> <a name="HardwareVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.hardwareVersion"></a>

```go
HardwareVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hardware_version CloudBridgeAsset#hardware_version}.

---

##### `HostName`<sup>Optional</sup> <a name="HostName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.hostName"></a>

```go
HostName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#host_name CloudBridgeAsset#host_name}.

---

##### `IsPmemEnabled`<sup>Optional</sup> <a name="IsPmemEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.isPmemEnabled"></a>

```go
IsPmemEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_pmem_enabled CloudBridgeAsset#is_pmem_enabled}.

---

##### `IsTpmEnabled`<sup>Optional</sup> <a name="IsTpmEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.isTpmEnabled"></a>

```go
IsTpmEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_tpm_enabled CloudBridgeAsset#is_tpm_enabled}.

---

##### `LatencySensitivity`<sup>Optional</sup> <a name="LatencySensitivity" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.latencySensitivity"></a>

```go
LatencySensitivity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#latency_sensitivity CloudBridgeAsset#latency_sensitivity}.

---

##### `MemoryInMbs`<sup>Optional</sup> <a name="MemoryInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.memoryInMbs"></a>

```go
MemoryInMbs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#memory_in_mbs CloudBridgeAsset#memory_in_mbs}.

---

##### `Nics`<sup>Optional</sup> <a name="Nics" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nics"></a>

```go
Nics interface{}
```

- *Type:* interface{}

nics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#nics CloudBridgeAsset#nics}

---

##### `NicsCount`<sup>Optional</sup> <a name="NicsCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nicsCount"></a>

```go
NicsCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#nics_count CloudBridgeAsset#nics_count}.

---

##### `NvdimmController`<sup>Optional</sup> <a name="NvdimmController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nvdimmController"></a>

```go
NvdimmController CloudBridgeAssetComputeNvdimmController
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a>

nvdimm_controller block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#nvdimm_controller CloudBridgeAsset#nvdimm_controller}

---

##### `Nvdimms`<sup>Optional</sup> <a name="Nvdimms" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nvdimms"></a>

```go
Nvdimms interface{}
```

- *Type:* interface{}

nvdimms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#nvdimms CloudBridgeAsset#nvdimms}

---

##### `OperatingSystem`<sup>Optional</sup> <a name="OperatingSystem" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.operatingSystem"></a>

```go
OperatingSystem *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#operating_system CloudBridgeAsset#operating_system}.

---

##### `OperatingSystemVersion`<sup>Optional</sup> <a name="OperatingSystemVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.operatingSystemVersion"></a>

```go
OperatingSystemVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#operating_system_version CloudBridgeAsset#operating_system_version}.

---

##### `PmemInMbs`<sup>Optional</sup> <a name="PmemInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.pmemInMbs"></a>

```go
PmemInMbs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#pmem_in_mbs CloudBridgeAsset#pmem_in_mbs}.

---

##### `PowerState`<sup>Optional</sup> <a name="PowerState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.powerState"></a>

```go
PowerState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#power_state CloudBridgeAsset#power_state}.

---

##### `PrimaryIp`<sup>Optional</sup> <a name="PrimaryIp" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.primaryIp"></a>

```go
PrimaryIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#primary_ip CloudBridgeAsset#primary_ip}.

---

##### `ScsiController`<sup>Optional</sup> <a name="ScsiController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.scsiController"></a>

```go
ScsiController CloudBridgeAssetComputeScsiController
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a>

scsi_controller block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#scsi_controller CloudBridgeAsset#scsi_controller}

---

##### `StorageProvisionedInMbs`<sup>Optional</sup> <a name="StorageProvisionedInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.storageProvisionedInMbs"></a>

```go
StorageProvisionedInMbs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#storage_provisioned_in_mbs CloudBridgeAsset#storage_provisioned_in_mbs}.

---

##### `ThreadsPerCoreCount`<sup>Optional</sup> <a name="ThreadsPerCoreCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.threadsPerCoreCount"></a>

```go
ThreadsPerCoreCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#threads_per_core_count CloudBridgeAsset#threads_per_core_count}.

---

### CloudBridgeAssetComputeDisks <a name="CloudBridgeAssetComputeDisks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

&cloudbridgeasset.CloudBridgeAssetComputeDisks {
	BootOrder: *f64,
	Location: *string,
	Name: *string,
	PersistentMode: *string,
	SizeInMbs: *string,
	Uuid: *string,
	UuidLun: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.bootOrder">BootOrder</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#boot_order CloudBridgeAsset#boot_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#location CloudBridgeAsset#location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#name CloudBridgeAsset#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.persistentMode">PersistentMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#persistent_mode CloudBridgeAsset#persistent_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.sizeInMbs">SizeInMbs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#size_in_mbs CloudBridgeAsset#size_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.uuid">Uuid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#uuid CloudBridgeAsset#uuid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.uuidLun">UuidLun</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#uuid_lun CloudBridgeAsset#uuid_lun}. |

---

##### `BootOrder`<sup>Optional</sup> <a name="BootOrder" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.bootOrder"></a>

```go
BootOrder *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#boot_order CloudBridgeAsset#boot_order}.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#location CloudBridgeAsset#location}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#name CloudBridgeAsset#name}.

---

##### `PersistentMode`<sup>Optional</sup> <a name="PersistentMode" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.persistentMode"></a>

```go
PersistentMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#persistent_mode CloudBridgeAsset#persistent_mode}.

---

##### `SizeInMbs`<sup>Optional</sup> <a name="SizeInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.sizeInMbs"></a>

```go
SizeInMbs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#size_in_mbs CloudBridgeAsset#size_in_mbs}.

---

##### `Uuid`<sup>Optional</sup> <a name="Uuid" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.uuid"></a>

```go
Uuid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#uuid CloudBridgeAsset#uuid}.

---

##### `UuidLun`<sup>Optional</sup> <a name="UuidLun" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.uuidLun"></a>

```go
UuidLun *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#uuid_lun CloudBridgeAsset#uuid_lun}.

---

### CloudBridgeAssetComputeGpuDevices <a name="CloudBridgeAssetComputeGpuDevices" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

&cloudbridgeasset.CloudBridgeAssetComputeGpuDevices {
	CoresCount: *f64,
	Description: *string,
	Manufacturer: *string,
	MemoryInMbs: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.coresCount">CoresCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cores_count CloudBridgeAsset#cores_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#description CloudBridgeAsset#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.manufacturer">Manufacturer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#manufacturer CloudBridgeAsset#manufacturer}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.memoryInMbs">MemoryInMbs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#memory_in_mbs CloudBridgeAsset#memory_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#name CloudBridgeAsset#name}. |

---

##### `CoresCount`<sup>Optional</sup> <a name="CoresCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.coresCount"></a>

```go
CoresCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cores_count CloudBridgeAsset#cores_count}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#description CloudBridgeAsset#description}.

---

##### `Manufacturer`<sup>Optional</sup> <a name="Manufacturer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.manufacturer"></a>

```go
Manufacturer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#manufacturer CloudBridgeAsset#manufacturer}.

---

##### `MemoryInMbs`<sup>Optional</sup> <a name="MemoryInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.memoryInMbs"></a>

```go
MemoryInMbs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#memory_in_mbs CloudBridgeAsset#memory_in_mbs}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#name CloudBridgeAsset#name}.

---

### CloudBridgeAssetComputeNics <a name="CloudBridgeAssetComputeNics" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

&cloudbridgeasset.CloudBridgeAssetComputeNics {
	IpAddresses: *[]*string,
	Label: *string,
	MacAddress: *string,
	MacAddressType: *string,
	NetworkName: *string,
	SwitchName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#ip_addresses CloudBridgeAsset#ip_addresses}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.label">Label</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.macAddress">MacAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#mac_address CloudBridgeAsset#mac_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.macAddressType">MacAddressType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#mac_address_type CloudBridgeAsset#mac_address_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.networkName">NetworkName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#network_name CloudBridgeAsset#network_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.switchName">SwitchName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#switch_name CloudBridgeAsset#switch_name}. |

---

##### `IpAddresses`<sup>Optional</sup> <a name="IpAddresses" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.ipAddresses"></a>

```go
IpAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#ip_addresses CloudBridgeAsset#ip_addresses}.

---

##### `Label`<sup>Optional</sup> <a name="Label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.label"></a>

```go
Label *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}.

---

##### `MacAddress`<sup>Optional</sup> <a name="MacAddress" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.macAddress"></a>

```go
MacAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#mac_address CloudBridgeAsset#mac_address}.

---

##### `MacAddressType`<sup>Optional</sup> <a name="MacAddressType" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.macAddressType"></a>

```go
MacAddressType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#mac_address_type CloudBridgeAsset#mac_address_type}.

---

##### `NetworkName`<sup>Optional</sup> <a name="NetworkName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.networkName"></a>

```go
NetworkName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#network_name CloudBridgeAsset#network_name}.

---

##### `SwitchName`<sup>Optional</sup> <a name="SwitchName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.switchName"></a>

```go
SwitchName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#switch_name CloudBridgeAsset#switch_name}.

---

### CloudBridgeAssetComputeNvdimmController <a name="CloudBridgeAssetComputeNvdimmController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

&cloudbridgeasset.CloudBridgeAssetComputeNvdimmController {
	BusNumber: *f64,
	Label: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController.property.busNumber">BusNumber</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#bus_number CloudBridgeAsset#bus_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController.property.label">Label</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}. |

---

##### `BusNumber`<sup>Optional</sup> <a name="BusNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController.property.busNumber"></a>

```go
BusNumber *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#bus_number CloudBridgeAsset#bus_number}.

---

##### `Label`<sup>Optional</sup> <a name="Label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController.property.label"></a>

```go
Label *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}.

---

### CloudBridgeAssetComputeNvdimms <a name="CloudBridgeAssetComputeNvdimms" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

&cloudbridgeasset.CloudBridgeAssetComputeNvdimms {
	ControllerKey: *f64,
	Label: *string,
	UnitNumber: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.property.controllerKey">ControllerKey</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#controller_key CloudBridgeAsset#controller_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.property.label">Label</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.property.unitNumber">UnitNumber</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#unit_number CloudBridgeAsset#unit_number}. |

---

##### `ControllerKey`<sup>Optional</sup> <a name="ControllerKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.property.controllerKey"></a>

```go
ControllerKey *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#controller_key CloudBridgeAsset#controller_key}.

---

##### `Label`<sup>Optional</sup> <a name="Label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.property.label"></a>

```go
Label *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}.

---

##### `UnitNumber`<sup>Optional</sup> <a name="UnitNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.property.unitNumber"></a>

```go
UnitNumber *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#unit_number CloudBridgeAsset#unit_number}.

---

### CloudBridgeAssetComputeScsiController <a name="CloudBridgeAssetComputeScsiController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

&cloudbridgeasset.CloudBridgeAssetComputeScsiController {
	Label: *string,
	SharedBus: *string,
	UnitNumber: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.property.label">Label</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.property.sharedBus">SharedBus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#shared_bus CloudBridgeAsset#shared_bus}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.property.unitNumber">UnitNumber</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#unit_number CloudBridgeAsset#unit_number}. |

---

##### `Label`<sup>Optional</sup> <a name="Label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.property.label"></a>

```go
Label *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}.

---

##### `SharedBus`<sup>Optional</sup> <a name="SharedBus" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.property.sharedBus"></a>

```go
SharedBus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#shared_bus CloudBridgeAsset#shared_bus}.

---

##### `UnitNumber`<sup>Optional</sup> <a name="UnitNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.property.unitNumber"></a>

```go
UnitNumber *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#unit_number CloudBridgeAsset#unit_number}.

---

### CloudBridgeAssetConfig <a name="CloudBridgeAssetConfig" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

&cloudbridgeasset.CloudBridgeAssetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AssetType: *string,
	CompartmentId: *string,
	ExternalAssetKey: *string,
	InventoryId: *string,
	SourceKey: *string,
	AssetSourceIds: *[]*string,
	Compute: github.com/rhizo-co/cdktf-provider-oci-go/oci.cloudBridgeAsset.CloudBridgeAssetCompute,
	DefinedTags: *map[string]*string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.cloudBridgeAsset.CloudBridgeAssetTimeouts,
	Vm: github.com/rhizo-co/cdktf-provider-oci-go/oci.cloudBridgeAsset.CloudBridgeAssetVm,
	VmwareVcenter: github.com/rhizo-co/cdktf-provider-oci-go/oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter,
	VmwareVm: github.com/rhizo-co/cdktf-provider-oci-go/oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.assetType">AssetType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#asset_type CloudBridgeAsset#asset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#compartment_id CloudBridgeAsset#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.externalAssetKey">ExternalAssetKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#external_asset_key CloudBridgeAsset#external_asset_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.inventoryId">InventoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#inventory_id CloudBridgeAsset#inventory_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.sourceKey">SourceKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#source_key CloudBridgeAsset#source_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.assetSourceIds">AssetSourceIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#asset_source_ids CloudBridgeAsset#asset_source_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.compute">Compute</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a></code> | compute block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#defined_tags CloudBridgeAsset#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#display_name CloudBridgeAsset#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#freeform_tags CloudBridgeAsset#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#id CloudBridgeAsset#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts">CloudBridgeAssetTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.vm">Vm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a></code> | vm block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.vmwareVcenter">VmwareVcenter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a></code> | vmware_vcenter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.vmwareVm">VmwareVm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a></code> | vmware_vm block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssetType`<sup>Required</sup> <a name="AssetType" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.assetType"></a>

```go
AssetType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#asset_type CloudBridgeAsset#asset_type}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#compartment_id CloudBridgeAsset#compartment_id}.

---

##### `ExternalAssetKey`<sup>Required</sup> <a name="ExternalAssetKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.externalAssetKey"></a>

```go
ExternalAssetKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#external_asset_key CloudBridgeAsset#external_asset_key}.

---

##### `InventoryId`<sup>Required</sup> <a name="InventoryId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.inventoryId"></a>

```go
InventoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#inventory_id CloudBridgeAsset#inventory_id}.

---

##### `SourceKey`<sup>Required</sup> <a name="SourceKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.sourceKey"></a>

```go
SourceKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#source_key CloudBridgeAsset#source_key}.

---

##### `AssetSourceIds`<sup>Optional</sup> <a name="AssetSourceIds" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.assetSourceIds"></a>

```go
AssetSourceIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#asset_source_ids CloudBridgeAsset#asset_source_ids}.

---

##### `Compute`<sup>Optional</sup> <a name="Compute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.compute"></a>

```go
Compute CloudBridgeAssetCompute
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a>

compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#compute CloudBridgeAsset#compute}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#defined_tags CloudBridgeAsset#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#display_name CloudBridgeAsset#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#freeform_tags CloudBridgeAsset#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#id CloudBridgeAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.timeouts"></a>

```go
Timeouts CloudBridgeAssetTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts">CloudBridgeAssetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#timeouts CloudBridgeAsset#timeouts}

---

##### `Vm`<sup>Optional</sup> <a name="Vm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.vm"></a>

```go
Vm CloudBridgeAssetVm
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a>

vm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vm CloudBridgeAsset#vm}

---

##### `VmwareVcenter`<sup>Optional</sup> <a name="VmwareVcenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.vmwareVcenter"></a>

```go
VmwareVcenter CloudBridgeAssetVmwareVcenter
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a>

vmware_vcenter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vmware_vcenter CloudBridgeAsset#vmware_vcenter}

---

##### `VmwareVm`<sup>Optional</sup> <a name="VmwareVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.vmwareVm"></a>

```go
VmwareVm CloudBridgeAssetVmwareVm
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a>

vmware_vm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vmware_vm CloudBridgeAsset#vmware_vm}

---

### CloudBridgeAssetTimeouts <a name="CloudBridgeAssetTimeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

&cloudbridgeasset.CloudBridgeAssetTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#create CloudBridgeAsset#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#delete CloudBridgeAsset#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#update CloudBridgeAsset#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#create CloudBridgeAsset#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#delete CloudBridgeAsset#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#update CloudBridgeAsset#update}.

---

### CloudBridgeAssetVm <a name="CloudBridgeAssetVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

&cloudbridgeasset.CloudBridgeAssetVm {
	HypervisorHost: *string,
	HypervisorVendor: *string,
	HypervisorVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.property.hypervisorHost">HypervisorHost</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hypervisor_host CloudBridgeAsset#hypervisor_host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.property.hypervisorVendor">HypervisorVendor</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hypervisor_vendor CloudBridgeAsset#hypervisor_vendor}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.property.hypervisorVersion">HypervisorVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hypervisor_version CloudBridgeAsset#hypervisor_version}. |

---

##### `HypervisorHost`<sup>Optional</sup> <a name="HypervisorHost" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.property.hypervisorHost"></a>

```go
HypervisorHost *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hypervisor_host CloudBridgeAsset#hypervisor_host}.

---

##### `HypervisorVendor`<sup>Optional</sup> <a name="HypervisorVendor" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.property.hypervisorVendor"></a>

```go
HypervisorVendor *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hypervisor_vendor CloudBridgeAsset#hypervisor_vendor}.

---

##### `HypervisorVersion`<sup>Optional</sup> <a name="HypervisorVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.property.hypervisorVersion"></a>

```go
HypervisorVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hypervisor_version CloudBridgeAsset#hypervisor_version}.

---

### CloudBridgeAssetVmwareVcenter <a name="CloudBridgeAssetVmwareVcenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

&cloudbridgeasset.CloudBridgeAssetVmwareVcenter {
	DataCenter: *string,
	VcenterKey: *string,
	VcenterVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.property.dataCenter">DataCenter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#data_center CloudBridgeAsset#data_center}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.property.vcenterKey">VcenterKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vcenter_key CloudBridgeAsset#vcenter_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.property.vcenterVersion">VcenterVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vcenter_version CloudBridgeAsset#vcenter_version}. |

---

##### `DataCenter`<sup>Optional</sup> <a name="DataCenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.property.dataCenter"></a>

```go
DataCenter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#data_center CloudBridgeAsset#data_center}.

---

##### `VcenterKey`<sup>Optional</sup> <a name="VcenterKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.property.vcenterKey"></a>

```go
VcenterKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vcenter_key CloudBridgeAsset#vcenter_key}.

---

##### `VcenterVersion`<sup>Optional</sup> <a name="VcenterVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.property.vcenterVersion"></a>

```go
VcenterVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vcenter_version CloudBridgeAsset#vcenter_version}.

---

### CloudBridgeAssetVmwareVm <a name="CloudBridgeAssetVmwareVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

&cloudbridgeasset.CloudBridgeAssetVmwareVm {
	Cluster: *string,
	CustomerFields: *[]*string,
	CustomerTags: interface{},
	FaultToleranceBandwidth: *f64,
	FaultToleranceSecondaryLatency: *f64,
	FaultToleranceState: *string,
	InstanceUuid: *string,
	IsDisksCbtEnabled: interface{},
	IsDisksUuidEnabled: interface{},
	Path: *string,
	VmwareToolsStatus: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.cluster">Cluster</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cluster CloudBridgeAsset#cluster}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.customerFields">CustomerFields</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#customer_fields CloudBridgeAsset#customer_fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.customerTags">CustomerTags</a></code> | <code>interface{}</code> | customer_tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.faultToleranceBandwidth">FaultToleranceBandwidth</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#fault_tolerance_bandwidth CloudBridgeAsset#fault_tolerance_bandwidth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.faultToleranceSecondaryLatency">FaultToleranceSecondaryLatency</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#fault_tolerance_secondary_latency CloudBridgeAsset#fault_tolerance_secondary_latency}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.faultToleranceState">FaultToleranceState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#fault_tolerance_state CloudBridgeAsset#fault_tolerance_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.instanceUuid">InstanceUuid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#instance_uuid CloudBridgeAsset#instance_uuid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.isDisksCbtEnabled">IsDisksCbtEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_disks_cbt_enabled CloudBridgeAsset#is_disks_cbt_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.isDisksUuidEnabled">IsDisksUuidEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_disks_uuid_enabled CloudBridgeAsset#is_disks_uuid_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#path CloudBridgeAsset#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.vmwareToolsStatus">VmwareToolsStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vmware_tools_status CloudBridgeAsset#vmware_tools_status}. |

---

##### `Cluster`<sup>Optional</sup> <a name="Cluster" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.cluster"></a>

```go
Cluster *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cluster CloudBridgeAsset#cluster}.

---

##### `CustomerFields`<sup>Optional</sup> <a name="CustomerFields" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.customerFields"></a>

```go
CustomerFields *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#customer_fields CloudBridgeAsset#customer_fields}.

---

##### `CustomerTags`<sup>Optional</sup> <a name="CustomerTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.customerTags"></a>

```go
CustomerTags interface{}
```

- *Type:* interface{}

customer_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#customer_tags CloudBridgeAsset#customer_tags}

---

##### `FaultToleranceBandwidth`<sup>Optional</sup> <a name="FaultToleranceBandwidth" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.faultToleranceBandwidth"></a>

```go
FaultToleranceBandwidth *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#fault_tolerance_bandwidth CloudBridgeAsset#fault_tolerance_bandwidth}.

---

##### `FaultToleranceSecondaryLatency`<sup>Optional</sup> <a name="FaultToleranceSecondaryLatency" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.faultToleranceSecondaryLatency"></a>

```go
FaultToleranceSecondaryLatency *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#fault_tolerance_secondary_latency CloudBridgeAsset#fault_tolerance_secondary_latency}.

---

##### `FaultToleranceState`<sup>Optional</sup> <a name="FaultToleranceState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.faultToleranceState"></a>

```go
FaultToleranceState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#fault_tolerance_state CloudBridgeAsset#fault_tolerance_state}.

---

##### `InstanceUuid`<sup>Optional</sup> <a name="InstanceUuid" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.instanceUuid"></a>

```go
InstanceUuid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#instance_uuid CloudBridgeAsset#instance_uuid}.

---

##### `IsDisksCbtEnabled`<sup>Optional</sup> <a name="IsDisksCbtEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.isDisksCbtEnabled"></a>

```go
IsDisksCbtEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_disks_cbt_enabled CloudBridgeAsset#is_disks_cbt_enabled}.

---

##### `IsDisksUuidEnabled`<sup>Optional</sup> <a name="IsDisksUuidEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.isDisksUuidEnabled"></a>

```go
IsDisksUuidEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_disks_uuid_enabled CloudBridgeAsset#is_disks_uuid_enabled}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#path CloudBridgeAsset#path}.

---

##### `VmwareToolsStatus`<sup>Optional</sup> <a name="VmwareToolsStatus" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.vmwareToolsStatus"></a>

```go
VmwareToolsStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vmware_tools_status CloudBridgeAsset#vmware_tools_status}.

---

### CloudBridgeAssetVmwareVmCustomerTags <a name="CloudBridgeAssetVmwareVmCustomerTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

&cloudbridgeasset.CloudBridgeAssetVmwareVmCustomerTags {
	Description: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#description CloudBridgeAsset#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#name CloudBridgeAsset#name}. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#description CloudBridgeAsset#description}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#name CloudBridgeAsset#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudBridgeAssetComputeDisksList <a name="CloudBridgeAssetComputeDisksList" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

cloudbridgeasset.NewCloudBridgeAssetComputeDisksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudBridgeAssetComputeDisksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.get"></a>

```go
func Get(index *f64) CloudBridgeAssetComputeDisksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudBridgeAssetComputeDisksOutputReference <a name="CloudBridgeAssetComputeDisksOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

cloudbridgeasset.NewCloudBridgeAssetComputeDisksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudBridgeAssetComputeDisksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetBootOrder">ResetBootOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetPersistentMode">ResetPersistentMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetSizeInMbs">ResetSizeInMbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetUuid">ResetUuid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetUuidLun">ResetUuidLun</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBootOrder` <a name="ResetBootOrder" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetBootOrder"></a>

```go
func ResetBootOrder()
```

##### `ResetLocation` <a name="ResetLocation" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPersistentMode` <a name="ResetPersistentMode" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetPersistentMode"></a>

```go
func ResetPersistentMode()
```

##### `ResetSizeInMbs` <a name="ResetSizeInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetSizeInMbs"></a>

```go
func ResetSizeInMbs()
```

##### `ResetUuid` <a name="ResetUuid" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetUuid"></a>

```go
func ResetUuid()
```

##### `ResetUuidLun` <a name="ResetUuidLun" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetUuidLun"></a>

```go
func ResetUuidLun()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.bootOrderInput">BootOrderInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.persistentModeInput">PersistentModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.sizeInMbsInput">SizeInMbsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuidInput">UuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuidLunInput">UuidLunInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.bootOrder">BootOrder</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.persistentMode">PersistentMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.sizeInMbs">SizeInMbs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuidLun">UuidLun</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BootOrderInput`<sup>Optional</sup> <a name="BootOrderInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.bootOrderInput"></a>

```go
func BootOrderInput() *f64
```

- *Type:* *f64

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PersistentModeInput`<sup>Optional</sup> <a name="PersistentModeInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.persistentModeInput"></a>

```go
func PersistentModeInput() *string
```

- *Type:* *string

---

##### `SizeInMbsInput`<sup>Optional</sup> <a name="SizeInMbsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.sizeInMbsInput"></a>

```go
func SizeInMbsInput() *string
```

- *Type:* *string

---

##### `UuidInput`<sup>Optional</sup> <a name="UuidInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuidInput"></a>

```go
func UuidInput() *string
```

- *Type:* *string

---

##### `UuidLunInput`<sup>Optional</sup> <a name="UuidLunInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuidLunInput"></a>

```go
func UuidLunInput() *string
```

- *Type:* *string

---

##### `BootOrder`<sup>Required</sup> <a name="BootOrder" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.bootOrder"></a>

```go
func BootOrder() *f64
```

- *Type:* *f64

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PersistentMode`<sup>Required</sup> <a name="PersistentMode" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.persistentMode"></a>

```go
func PersistentMode() *string
```

- *Type:* *string

---

##### `SizeInMbs`<sup>Required</sup> <a name="SizeInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.sizeInMbs"></a>

```go
func SizeInMbs() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `UuidLun`<sup>Required</sup> <a name="UuidLun" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuidLun"></a>

```go
func UuidLun() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudBridgeAssetComputeGpuDevicesList <a name="CloudBridgeAssetComputeGpuDevicesList" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

cloudbridgeasset.NewCloudBridgeAssetComputeGpuDevicesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudBridgeAssetComputeGpuDevicesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.get"></a>

```go
func Get(index *f64) CloudBridgeAssetComputeGpuDevicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudBridgeAssetComputeGpuDevicesOutputReference <a name="CloudBridgeAssetComputeGpuDevicesOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

cloudbridgeasset.NewCloudBridgeAssetComputeGpuDevicesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudBridgeAssetComputeGpuDevicesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetCoresCount">ResetCoresCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetManufacturer">ResetManufacturer</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetMemoryInMbs">ResetMemoryInMbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCoresCount` <a name="ResetCoresCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetCoresCount"></a>

```go
func ResetCoresCount()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetManufacturer` <a name="ResetManufacturer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetManufacturer"></a>

```go
func ResetManufacturer()
```

##### `ResetMemoryInMbs` <a name="ResetMemoryInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetMemoryInMbs"></a>

```go
func ResetMemoryInMbs()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.coresCountInput">CoresCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.manufacturerInput">ManufacturerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.memoryInMbsInput">MemoryInMbsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.coresCount">CoresCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.manufacturer">Manufacturer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.memoryInMbs">MemoryInMbs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CoresCountInput`<sup>Optional</sup> <a name="CoresCountInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.coresCountInput"></a>

```go
func CoresCountInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ManufacturerInput`<sup>Optional</sup> <a name="ManufacturerInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.manufacturerInput"></a>

```go
func ManufacturerInput() *string
```

- *Type:* *string

---

##### `MemoryInMbsInput`<sup>Optional</sup> <a name="MemoryInMbsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.memoryInMbsInput"></a>

```go
func MemoryInMbsInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `CoresCount`<sup>Required</sup> <a name="CoresCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.coresCount"></a>

```go
func CoresCount() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Manufacturer`<sup>Required</sup> <a name="Manufacturer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.manufacturer"></a>

```go
func Manufacturer() *string
```

- *Type:* *string

---

##### `MemoryInMbs`<sup>Required</sup> <a name="MemoryInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.memoryInMbs"></a>

```go
func MemoryInMbs() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudBridgeAssetComputeNicsList <a name="CloudBridgeAssetComputeNicsList" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

cloudbridgeasset.NewCloudBridgeAssetComputeNicsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudBridgeAssetComputeNicsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.get"></a>

```go
func Get(index *f64) CloudBridgeAssetComputeNicsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudBridgeAssetComputeNicsOutputReference <a name="CloudBridgeAssetComputeNicsOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

cloudbridgeasset.NewCloudBridgeAssetComputeNicsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudBridgeAssetComputeNicsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetIpAddresses">ResetIpAddresses</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetLabel">ResetLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetMacAddress">ResetMacAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetMacAddressType">ResetMacAddressType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetNetworkName">ResetNetworkName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetSwitchName">ResetSwitchName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddresses` <a name="ResetIpAddresses" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetIpAddresses"></a>

```go
func ResetIpAddresses()
```

##### `ResetLabel` <a name="ResetLabel" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetLabel"></a>

```go
func ResetLabel()
```

##### `ResetMacAddress` <a name="ResetMacAddress" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetMacAddress"></a>

```go
func ResetMacAddress()
```

##### `ResetMacAddressType` <a name="ResetMacAddressType" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetMacAddressType"></a>

```go
func ResetMacAddressType()
```

##### `ResetNetworkName` <a name="ResetNetworkName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetNetworkName"></a>

```go
func ResetNetworkName()
```

##### `ResetSwitchName` <a name="ResetSwitchName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetSwitchName"></a>

```go
func ResetSwitchName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.ipAddressesInput">IpAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddressInput">MacAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddressTypeInput">MacAddressTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.networkNameInput">NetworkNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.switchNameInput">SwitchNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddress">MacAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddressType">MacAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.networkName">NetworkName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.switchName">SwitchName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddressesInput`<sup>Optional</sup> <a name="IpAddressesInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.ipAddressesInput"></a>

```go
func IpAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `MacAddressInput`<sup>Optional</sup> <a name="MacAddressInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddressInput"></a>

```go
func MacAddressInput() *string
```

- *Type:* *string

---

##### `MacAddressTypeInput`<sup>Optional</sup> <a name="MacAddressTypeInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddressTypeInput"></a>

```go
func MacAddressTypeInput() *string
```

- *Type:* *string

---

##### `NetworkNameInput`<sup>Optional</sup> <a name="NetworkNameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.networkNameInput"></a>

```go
func NetworkNameInput() *string
```

- *Type:* *string

---

##### `SwitchNameInput`<sup>Optional</sup> <a name="SwitchNameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.switchNameInput"></a>

```go
func SwitchNameInput() *string
```

- *Type:* *string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.ipAddresses"></a>

```go
func IpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Label`<sup>Required</sup> <a name="Label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `MacAddress`<sup>Required</sup> <a name="MacAddress" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddress"></a>

```go
func MacAddress() *string
```

- *Type:* *string

---

##### `MacAddressType`<sup>Required</sup> <a name="MacAddressType" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddressType"></a>

```go
func MacAddressType() *string
```

- *Type:* *string

---

##### `NetworkName`<sup>Required</sup> <a name="NetworkName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.networkName"></a>

```go
func NetworkName() *string
```

- *Type:* *string

---

##### `SwitchName`<sup>Required</sup> <a name="SwitchName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.switchName"></a>

```go
func SwitchName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudBridgeAssetComputeNvdimmControllerOutputReference <a name="CloudBridgeAssetComputeNvdimmControllerOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

cloudbridgeasset.NewCloudBridgeAssetComputeNvdimmControllerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudBridgeAssetComputeNvdimmControllerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resetBusNumber">ResetBusNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resetLabel">ResetLabel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBusNumber` <a name="ResetBusNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resetBusNumber"></a>

```go
func ResetBusNumber()
```

##### `ResetLabel` <a name="ResetLabel" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resetLabel"></a>

```go
func ResetLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.busNumberInput">BusNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.busNumber">BusNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BusNumberInput`<sup>Optional</sup> <a name="BusNumberInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.busNumberInput"></a>

```go
func BusNumberInput() *f64
```

- *Type:* *f64

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `BusNumber`<sup>Required</sup> <a name="BusNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.busNumber"></a>

```go
func BusNumber() *f64
```

- *Type:* *f64

---

##### `Label`<sup>Required</sup> <a name="Label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudBridgeAssetComputeNvdimmController
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a>

---


### CloudBridgeAssetComputeNvdimmsList <a name="CloudBridgeAssetComputeNvdimmsList" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

cloudbridgeasset.NewCloudBridgeAssetComputeNvdimmsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudBridgeAssetComputeNvdimmsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.get"></a>

```go
func Get(index *f64) CloudBridgeAssetComputeNvdimmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudBridgeAssetComputeNvdimmsOutputReference <a name="CloudBridgeAssetComputeNvdimmsOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

cloudbridgeasset.NewCloudBridgeAssetComputeNvdimmsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudBridgeAssetComputeNvdimmsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resetControllerKey">ResetControllerKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resetLabel">ResetLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resetUnitNumber">ResetUnitNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetControllerKey` <a name="ResetControllerKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resetControllerKey"></a>

```go
func ResetControllerKey()
```

##### `ResetLabel` <a name="ResetLabel" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resetLabel"></a>

```go
func ResetLabel()
```

##### `ResetUnitNumber` <a name="ResetUnitNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resetUnitNumber"></a>

```go
func ResetUnitNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.controllerKeyInput">ControllerKeyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.unitNumberInput">UnitNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.controllerKey">ControllerKey</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.unitNumber">UnitNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ControllerKeyInput`<sup>Optional</sup> <a name="ControllerKeyInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.controllerKeyInput"></a>

```go
func ControllerKeyInput() *f64
```

- *Type:* *f64

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `UnitNumberInput`<sup>Optional</sup> <a name="UnitNumberInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.unitNumberInput"></a>

```go
func UnitNumberInput() *f64
```

- *Type:* *f64

---

##### `ControllerKey`<sup>Required</sup> <a name="ControllerKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.controllerKey"></a>

```go
func ControllerKey() *f64
```

- *Type:* *f64

---

##### `Label`<sup>Required</sup> <a name="Label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `UnitNumber`<sup>Required</sup> <a name="UnitNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.unitNumber"></a>

```go
func UnitNumber() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudBridgeAssetComputeOutputReference <a name="CloudBridgeAssetComputeOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

cloudbridgeasset.NewCloudBridgeAssetComputeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudBridgeAssetComputeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putDisks">PutDisks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putGpuDevices">PutGpuDevices</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNics">PutNics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNvdimmController">PutNvdimmController</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNvdimms">PutNvdimms</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putScsiController">PutScsiController</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetConnectedNetworks">ResetConnectedNetworks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetCoresCount">ResetCoresCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetCpuModel">ResetCpuModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDisks">ResetDisks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDisksCount">ResetDisksCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDnsName">ResetDnsName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetFirmware">ResetFirmware</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetGpuDevices">ResetGpuDevices</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetGpuDevicesCount">ResetGpuDevicesCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetGuestState">ResetGuestState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetHardwareVersion">ResetHardwareVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetHostName">ResetHostName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetIsPmemEnabled">ResetIsPmemEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetIsTpmEnabled">ResetIsTpmEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetLatencySensitivity">ResetLatencySensitivity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetMemoryInMbs">ResetMemoryInMbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNics">ResetNics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNicsCount">ResetNicsCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNvdimmController">ResetNvdimmController</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNvdimms">ResetNvdimms</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetOperatingSystem">ResetOperatingSystem</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetOperatingSystemVersion">ResetOperatingSystemVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetPmemInMbs">ResetPmemInMbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetPowerState">ResetPowerState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetPrimaryIp">ResetPrimaryIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetScsiController">ResetScsiController</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetStorageProvisionedInMbs">ResetStorageProvisionedInMbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetThreadsPerCoreCount">ResetThreadsPerCoreCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDisks` <a name="PutDisks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putDisks"></a>

```go
func PutDisks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putDisks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGpuDevices` <a name="PutGpuDevices" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putGpuDevices"></a>

```go
func PutGpuDevices(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putGpuDevices.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNics` <a name="PutNics" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNics"></a>

```go
func PutNics(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNics.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNvdimmController` <a name="PutNvdimmController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNvdimmController"></a>

```go
func PutNvdimmController(value CloudBridgeAssetComputeNvdimmController)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNvdimmController.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a>

---

##### `PutNvdimms` <a name="PutNvdimms" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNvdimms"></a>

```go
func PutNvdimms(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNvdimms.parameter.value"></a>

- *Type:* interface{}

---

##### `PutScsiController` <a name="PutScsiController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putScsiController"></a>

```go
func PutScsiController(value CloudBridgeAssetComputeScsiController)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putScsiController.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a>

---

##### `ResetConnectedNetworks` <a name="ResetConnectedNetworks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetConnectedNetworks"></a>

```go
func ResetConnectedNetworks()
```

##### `ResetCoresCount` <a name="ResetCoresCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetCoresCount"></a>

```go
func ResetCoresCount()
```

##### `ResetCpuModel` <a name="ResetCpuModel" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetCpuModel"></a>

```go
func ResetCpuModel()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisks` <a name="ResetDisks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDisks"></a>

```go
func ResetDisks()
```

##### `ResetDisksCount` <a name="ResetDisksCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDisksCount"></a>

```go
func ResetDisksCount()
```

##### `ResetDnsName` <a name="ResetDnsName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDnsName"></a>

```go
func ResetDnsName()
```

##### `ResetFirmware` <a name="ResetFirmware" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetFirmware"></a>

```go
func ResetFirmware()
```

##### `ResetGpuDevices` <a name="ResetGpuDevices" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetGpuDevices"></a>

```go
func ResetGpuDevices()
```

##### `ResetGpuDevicesCount` <a name="ResetGpuDevicesCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetGpuDevicesCount"></a>

```go
func ResetGpuDevicesCount()
```

##### `ResetGuestState` <a name="ResetGuestState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetGuestState"></a>

```go
func ResetGuestState()
```

##### `ResetHardwareVersion` <a name="ResetHardwareVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetHardwareVersion"></a>

```go
func ResetHardwareVersion()
```

##### `ResetHostName` <a name="ResetHostName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetHostName"></a>

```go
func ResetHostName()
```

##### `ResetIsPmemEnabled` <a name="ResetIsPmemEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetIsPmemEnabled"></a>

```go
func ResetIsPmemEnabled()
```

##### `ResetIsTpmEnabled` <a name="ResetIsTpmEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetIsTpmEnabled"></a>

```go
func ResetIsTpmEnabled()
```

##### `ResetLatencySensitivity` <a name="ResetLatencySensitivity" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetLatencySensitivity"></a>

```go
func ResetLatencySensitivity()
```

##### `ResetMemoryInMbs` <a name="ResetMemoryInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetMemoryInMbs"></a>

```go
func ResetMemoryInMbs()
```

##### `ResetNics` <a name="ResetNics" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNics"></a>

```go
func ResetNics()
```

##### `ResetNicsCount` <a name="ResetNicsCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNicsCount"></a>

```go
func ResetNicsCount()
```

##### `ResetNvdimmController` <a name="ResetNvdimmController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNvdimmController"></a>

```go
func ResetNvdimmController()
```

##### `ResetNvdimms` <a name="ResetNvdimms" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNvdimms"></a>

```go
func ResetNvdimms()
```

##### `ResetOperatingSystem` <a name="ResetOperatingSystem" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetOperatingSystem"></a>

```go
func ResetOperatingSystem()
```

##### `ResetOperatingSystemVersion` <a name="ResetOperatingSystemVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetOperatingSystemVersion"></a>

```go
func ResetOperatingSystemVersion()
```

##### `ResetPmemInMbs` <a name="ResetPmemInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetPmemInMbs"></a>

```go
func ResetPmemInMbs()
```

##### `ResetPowerState` <a name="ResetPowerState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetPowerState"></a>

```go
func ResetPowerState()
```

##### `ResetPrimaryIp` <a name="ResetPrimaryIp" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetPrimaryIp"></a>

```go
func ResetPrimaryIp()
```

##### `ResetScsiController` <a name="ResetScsiController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetScsiController"></a>

```go
func ResetScsiController()
```

##### `ResetStorageProvisionedInMbs` <a name="ResetStorageProvisionedInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetStorageProvisionedInMbs"></a>

```go
func ResetStorageProvisionedInMbs()
```

##### `ResetThreadsPerCoreCount` <a name="ResetThreadsPerCoreCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetThreadsPerCoreCount"></a>

```go
func ResetThreadsPerCoreCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disks">Disks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList">CloudBridgeAssetComputeDisksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevices">GpuDevices</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList">CloudBridgeAssetComputeGpuDevicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nics">Nics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList">CloudBridgeAssetComputeNicsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimmController">NvdimmController</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference">CloudBridgeAssetComputeNvdimmControllerOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimms">Nvdimms</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList">CloudBridgeAssetComputeNvdimmsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.scsiController">ScsiController</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference">CloudBridgeAssetComputeScsiControllerOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.connectedNetworksInput">ConnectedNetworksInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.coresCountInput">CoresCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.cpuModelInput">CpuModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disksCountInput">DisksCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disksInput">DisksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.dnsNameInput">DnsNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.firmwareInput">FirmwareInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevicesCountInput">GpuDevicesCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevicesInput">GpuDevicesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.guestStateInput">GuestStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hardwareVersionInput">HardwareVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isPmemEnabledInput">IsPmemEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isTpmEnabledInput">IsTpmEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.latencySensitivityInput">LatencySensitivityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.memoryInMbsInput">MemoryInMbsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nicsCountInput">NicsCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nicsInput">NicsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimmControllerInput">NvdimmControllerInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimmsInput">NvdimmsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystemInput">OperatingSystemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystemVersionInput">OperatingSystemVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.pmemInMbsInput">PmemInMbsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.powerStateInput">PowerStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.primaryIpInput">PrimaryIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.scsiControllerInput">ScsiControllerInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.storageProvisionedInMbsInput">StorageProvisionedInMbsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.threadsPerCoreCountInput">ThreadsPerCoreCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.connectedNetworks">ConnectedNetworks</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.coresCount">CoresCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.cpuModel">CpuModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disksCount">DisksCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.firmware">Firmware</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevicesCount">GpuDevicesCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.guestState">GuestState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hardwareVersion">HardwareVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isPmemEnabled">IsPmemEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isTpmEnabled">IsTpmEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.latencySensitivity">LatencySensitivity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.memoryInMbs">MemoryInMbs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nicsCount">NicsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystem">OperatingSystem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystemVersion">OperatingSystemVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.pmemInMbs">PmemInMbs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.powerState">PowerState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.primaryIp">PrimaryIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.storageProvisionedInMbs">StorageProvisionedInMbs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.threadsPerCoreCount">ThreadsPerCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Disks`<sup>Required</sup> <a name="Disks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disks"></a>

```go
func Disks() CloudBridgeAssetComputeDisksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList">CloudBridgeAssetComputeDisksList</a>

---

##### `GpuDevices`<sup>Required</sup> <a name="GpuDevices" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevices"></a>

```go
func GpuDevices() CloudBridgeAssetComputeGpuDevicesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList">CloudBridgeAssetComputeGpuDevicesList</a>

---

##### `Nics`<sup>Required</sup> <a name="Nics" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nics"></a>

```go
func Nics() CloudBridgeAssetComputeNicsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList">CloudBridgeAssetComputeNicsList</a>

---

##### `NvdimmController`<sup>Required</sup> <a name="NvdimmController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimmController"></a>

```go
func NvdimmController() CloudBridgeAssetComputeNvdimmControllerOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference">CloudBridgeAssetComputeNvdimmControllerOutputReference</a>

---

##### `Nvdimms`<sup>Required</sup> <a name="Nvdimms" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimms"></a>

```go
func Nvdimms() CloudBridgeAssetComputeNvdimmsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList">CloudBridgeAssetComputeNvdimmsList</a>

---

##### `ScsiController`<sup>Required</sup> <a name="ScsiController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.scsiController"></a>

```go
func ScsiController() CloudBridgeAssetComputeScsiControllerOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference">CloudBridgeAssetComputeScsiControllerOutputReference</a>

---

##### `ConnectedNetworksInput`<sup>Optional</sup> <a name="ConnectedNetworksInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.connectedNetworksInput"></a>

```go
func ConnectedNetworksInput() *f64
```

- *Type:* *f64

---

##### `CoresCountInput`<sup>Optional</sup> <a name="CoresCountInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.coresCountInput"></a>

```go
func CoresCountInput() *f64
```

- *Type:* *f64

---

##### `CpuModelInput`<sup>Optional</sup> <a name="CpuModelInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.cpuModelInput"></a>

```go
func CpuModelInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisksCountInput`<sup>Optional</sup> <a name="DisksCountInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disksCountInput"></a>

```go
func DisksCountInput() *f64
```

- *Type:* *f64

---

##### `DisksInput`<sup>Optional</sup> <a name="DisksInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disksInput"></a>

```go
func DisksInput() interface{}
```

- *Type:* interface{}

---

##### `DnsNameInput`<sup>Optional</sup> <a name="DnsNameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.dnsNameInput"></a>

```go
func DnsNameInput() *string
```

- *Type:* *string

---

##### `FirmwareInput`<sup>Optional</sup> <a name="FirmwareInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.firmwareInput"></a>

```go
func FirmwareInput() *string
```

- *Type:* *string

---

##### `GpuDevicesCountInput`<sup>Optional</sup> <a name="GpuDevicesCountInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevicesCountInput"></a>

```go
func GpuDevicesCountInput() *f64
```

- *Type:* *f64

---

##### `GpuDevicesInput`<sup>Optional</sup> <a name="GpuDevicesInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevicesInput"></a>

```go
func GpuDevicesInput() interface{}
```

- *Type:* interface{}

---

##### `GuestStateInput`<sup>Optional</sup> <a name="GuestStateInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.guestStateInput"></a>

```go
func GuestStateInput() *string
```

- *Type:* *string

---

##### `HardwareVersionInput`<sup>Optional</sup> <a name="HardwareVersionInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hardwareVersionInput"></a>

```go
func HardwareVersionInput() *string
```

- *Type:* *string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hostNameInput"></a>

```go
func HostNameInput() *string
```

- *Type:* *string

---

##### `IsPmemEnabledInput`<sup>Optional</sup> <a name="IsPmemEnabledInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isPmemEnabledInput"></a>

```go
func IsPmemEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsTpmEnabledInput`<sup>Optional</sup> <a name="IsTpmEnabledInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isTpmEnabledInput"></a>

```go
func IsTpmEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LatencySensitivityInput`<sup>Optional</sup> <a name="LatencySensitivityInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.latencySensitivityInput"></a>

```go
func LatencySensitivityInput() *string
```

- *Type:* *string

---

##### `MemoryInMbsInput`<sup>Optional</sup> <a name="MemoryInMbsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.memoryInMbsInput"></a>

```go
func MemoryInMbsInput() *string
```

- *Type:* *string

---

##### `NicsCountInput`<sup>Optional</sup> <a name="NicsCountInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nicsCountInput"></a>

```go
func NicsCountInput() *f64
```

- *Type:* *f64

---

##### `NicsInput`<sup>Optional</sup> <a name="NicsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nicsInput"></a>

```go
func NicsInput() interface{}
```

- *Type:* interface{}

---

##### `NvdimmControllerInput`<sup>Optional</sup> <a name="NvdimmControllerInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimmControllerInput"></a>

```go
func NvdimmControllerInput() CloudBridgeAssetComputeNvdimmController
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a>

---

##### `NvdimmsInput`<sup>Optional</sup> <a name="NvdimmsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimmsInput"></a>

```go
func NvdimmsInput() interface{}
```

- *Type:* interface{}

---

##### `OperatingSystemInput`<sup>Optional</sup> <a name="OperatingSystemInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystemInput"></a>

```go
func OperatingSystemInput() *string
```

- *Type:* *string

---

##### `OperatingSystemVersionInput`<sup>Optional</sup> <a name="OperatingSystemVersionInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystemVersionInput"></a>

```go
func OperatingSystemVersionInput() *string
```

- *Type:* *string

---

##### `PmemInMbsInput`<sup>Optional</sup> <a name="PmemInMbsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.pmemInMbsInput"></a>

```go
func PmemInMbsInput() *string
```

- *Type:* *string

---

##### `PowerStateInput`<sup>Optional</sup> <a name="PowerStateInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.powerStateInput"></a>

```go
func PowerStateInput() *string
```

- *Type:* *string

---

##### `PrimaryIpInput`<sup>Optional</sup> <a name="PrimaryIpInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.primaryIpInput"></a>

```go
func PrimaryIpInput() *string
```

- *Type:* *string

---

##### `ScsiControllerInput`<sup>Optional</sup> <a name="ScsiControllerInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.scsiControllerInput"></a>

```go
func ScsiControllerInput() CloudBridgeAssetComputeScsiController
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a>

---

##### `StorageProvisionedInMbsInput`<sup>Optional</sup> <a name="StorageProvisionedInMbsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.storageProvisionedInMbsInput"></a>

```go
func StorageProvisionedInMbsInput() *string
```

- *Type:* *string

---

##### `ThreadsPerCoreCountInput`<sup>Optional</sup> <a name="ThreadsPerCoreCountInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.threadsPerCoreCountInput"></a>

```go
func ThreadsPerCoreCountInput() *f64
```

- *Type:* *f64

---

##### `ConnectedNetworks`<sup>Required</sup> <a name="ConnectedNetworks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.connectedNetworks"></a>

```go
func ConnectedNetworks() *f64
```

- *Type:* *f64

---

##### `CoresCount`<sup>Required</sup> <a name="CoresCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.coresCount"></a>

```go
func CoresCount() *f64
```

- *Type:* *f64

---

##### `CpuModel`<sup>Required</sup> <a name="CpuModel" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.cpuModel"></a>

```go
func CpuModel() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisksCount`<sup>Required</sup> <a name="DisksCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disksCount"></a>

```go
func DisksCount() *f64
```

- *Type:* *f64

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `Firmware`<sup>Required</sup> <a name="Firmware" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.firmware"></a>

```go
func Firmware() *string
```

- *Type:* *string

---

##### `GpuDevicesCount`<sup>Required</sup> <a name="GpuDevicesCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevicesCount"></a>

```go
func GpuDevicesCount() *f64
```

- *Type:* *f64

---

##### `GuestState`<sup>Required</sup> <a name="GuestState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.guestState"></a>

```go
func GuestState() *string
```

- *Type:* *string

---

##### `HardwareVersion`<sup>Required</sup> <a name="HardwareVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hardwareVersion"></a>

```go
func HardwareVersion() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `IsPmemEnabled`<sup>Required</sup> <a name="IsPmemEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isPmemEnabled"></a>

```go
func IsPmemEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsTpmEnabled`<sup>Required</sup> <a name="IsTpmEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isTpmEnabled"></a>

```go
func IsTpmEnabled() interface{}
```

- *Type:* interface{}

---

##### `LatencySensitivity`<sup>Required</sup> <a name="LatencySensitivity" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.latencySensitivity"></a>

```go
func LatencySensitivity() *string
```

- *Type:* *string

---

##### `MemoryInMbs`<sup>Required</sup> <a name="MemoryInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.memoryInMbs"></a>

```go
func MemoryInMbs() *string
```

- *Type:* *string

---

##### `NicsCount`<sup>Required</sup> <a name="NicsCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nicsCount"></a>

```go
func NicsCount() *f64
```

- *Type:* *f64

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystem"></a>

```go
func OperatingSystem() *string
```

- *Type:* *string

---

##### `OperatingSystemVersion`<sup>Required</sup> <a name="OperatingSystemVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystemVersion"></a>

```go
func OperatingSystemVersion() *string
```

- *Type:* *string

---

##### `PmemInMbs`<sup>Required</sup> <a name="PmemInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.pmemInMbs"></a>

```go
func PmemInMbs() *string
```

- *Type:* *string

---

##### `PowerState`<sup>Required</sup> <a name="PowerState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.powerState"></a>

```go
func PowerState() *string
```

- *Type:* *string

---

##### `PrimaryIp`<sup>Required</sup> <a name="PrimaryIp" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.primaryIp"></a>

```go
func PrimaryIp() *string
```

- *Type:* *string

---

##### `StorageProvisionedInMbs`<sup>Required</sup> <a name="StorageProvisionedInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.storageProvisionedInMbs"></a>

```go
func StorageProvisionedInMbs() *string
```

- *Type:* *string

---

##### `ThreadsPerCoreCount`<sup>Required</sup> <a name="ThreadsPerCoreCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.threadsPerCoreCount"></a>

```go
func ThreadsPerCoreCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudBridgeAssetCompute
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a>

---


### CloudBridgeAssetComputeScsiControllerOutputReference <a name="CloudBridgeAssetComputeScsiControllerOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

cloudbridgeasset.NewCloudBridgeAssetComputeScsiControllerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudBridgeAssetComputeScsiControllerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resetLabel">ResetLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resetSharedBus">ResetSharedBus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resetUnitNumber">ResetUnitNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabel` <a name="ResetLabel" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resetLabel"></a>

```go
func ResetLabel()
```

##### `ResetSharedBus` <a name="ResetSharedBus" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resetSharedBus"></a>

```go
func ResetSharedBus()
```

##### `ResetUnitNumber` <a name="ResetUnitNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resetUnitNumber"></a>

```go
func ResetUnitNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.sharedBusInput">SharedBusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.unitNumberInput">UnitNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.sharedBus">SharedBus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.unitNumber">UnitNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `SharedBusInput`<sup>Optional</sup> <a name="SharedBusInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.sharedBusInput"></a>

```go
func SharedBusInput() *string
```

- *Type:* *string

---

##### `UnitNumberInput`<sup>Optional</sup> <a name="UnitNumberInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.unitNumberInput"></a>

```go
func UnitNumberInput() *f64
```

- *Type:* *f64

---

##### `Label`<sup>Required</sup> <a name="Label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `SharedBus`<sup>Required</sup> <a name="SharedBus" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.sharedBus"></a>

```go
func SharedBus() *string
```

- *Type:* *string

---

##### `UnitNumber`<sup>Required</sup> <a name="UnitNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.unitNumber"></a>

```go
func UnitNumber() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudBridgeAssetComputeScsiController
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a>

---


### CloudBridgeAssetTimeoutsOutputReference <a name="CloudBridgeAssetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

cloudbridgeasset.NewCloudBridgeAssetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudBridgeAssetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudBridgeAssetVmOutputReference <a name="CloudBridgeAssetVmOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

cloudbridgeasset.NewCloudBridgeAssetVmOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudBridgeAssetVmOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resetHypervisorHost">ResetHypervisorHost</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resetHypervisorVendor">ResetHypervisorVendor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resetHypervisorVersion">ResetHypervisorVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHypervisorHost` <a name="ResetHypervisorHost" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resetHypervisorHost"></a>

```go
func ResetHypervisorHost()
```

##### `ResetHypervisorVendor` <a name="ResetHypervisorVendor" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resetHypervisorVendor"></a>

```go
func ResetHypervisorVendor()
```

##### `ResetHypervisorVersion` <a name="ResetHypervisorVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resetHypervisorVersion"></a>

```go
func ResetHypervisorVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorHostInput">HypervisorHostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVendorInput">HypervisorVendorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVersionInput">HypervisorVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorHost">HypervisorHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVendor">HypervisorVendor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVersion">HypervisorVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HypervisorHostInput`<sup>Optional</sup> <a name="HypervisorHostInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorHostInput"></a>

```go
func HypervisorHostInput() *string
```

- *Type:* *string

---

##### `HypervisorVendorInput`<sup>Optional</sup> <a name="HypervisorVendorInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVendorInput"></a>

```go
func HypervisorVendorInput() *string
```

- *Type:* *string

---

##### `HypervisorVersionInput`<sup>Optional</sup> <a name="HypervisorVersionInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVersionInput"></a>

```go
func HypervisorVersionInput() *string
```

- *Type:* *string

---

##### `HypervisorHost`<sup>Required</sup> <a name="HypervisorHost" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorHost"></a>

```go
func HypervisorHost() *string
```

- *Type:* *string

---

##### `HypervisorVendor`<sup>Required</sup> <a name="HypervisorVendor" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVendor"></a>

```go
func HypervisorVendor() *string
```

- *Type:* *string

---

##### `HypervisorVersion`<sup>Required</sup> <a name="HypervisorVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVersion"></a>

```go
func HypervisorVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudBridgeAssetVm
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a>

---


### CloudBridgeAssetVmwareVcenterOutputReference <a name="CloudBridgeAssetVmwareVcenterOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

cloudbridgeasset.NewCloudBridgeAssetVmwareVcenterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudBridgeAssetVmwareVcenterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resetDataCenter">ResetDataCenter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resetVcenterKey">ResetVcenterKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resetVcenterVersion">ResetVcenterVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataCenter` <a name="ResetDataCenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resetDataCenter"></a>

```go
func ResetDataCenter()
```

##### `ResetVcenterKey` <a name="ResetVcenterKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resetVcenterKey"></a>

```go
func ResetVcenterKey()
```

##### `ResetVcenterVersion` <a name="ResetVcenterVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resetVcenterVersion"></a>

```go
func ResetVcenterVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.dataCenterInput">DataCenterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterKeyInput">VcenterKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterVersionInput">VcenterVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.dataCenter">DataCenter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterKey">VcenterKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterVersion">VcenterVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataCenterInput`<sup>Optional</sup> <a name="DataCenterInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.dataCenterInput"></a>

```go
func DataCenterInput() *string
```

- *Type:* *string

---

##### `VcenterKeyInput`<sup>Optional</sup> <a name="VcenterKeyInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterKeyInput"></a>

```go
func VcenterKeyInput() *string
```

- *Type:* *string

---

##### `VcenterVersionInput`<sup>Optional</sup> <a name="VcenterVersionInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterVersionInput"></a>

```go
func VcenterVersionInput() *string
```

- *Type:* *string

---

##### `DataCenter`<sup>Required</sup> <a name="DataCenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.dataCenter"></a>

```go
func DataCenter() *string
```

- *Type:* *string

---

##### `VcenterKey`<sup>Required</sup> <a name="VcenterKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterKey"></a>

```go
func VcenterKey() *string
```

- *Type:* *string

---

##### `VcenterVersion`<sup>Required</sup> <a name="VcenterVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterVersion"></a>

```go
func VcenterVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudBridgeAssetVmwareVcenter
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a>

---


### CloudBridgeAssetVmwareVmCustomerTagsList <a name="CloudBridgeAssetVmwareVmCustomerTagsList" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

cloudbridgeasset.NewCloudBridgeAssetVmwareVmCustomerTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudBridgeAssetVmwareVmCustomerTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.get"></a>

```go
func Get(index *f64) CloudBridgeAssetVmwareVmCustomerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudBridgeAssetVmwareVmCustomerTagsOutputReference <a name="CloudBridgeAssetVmwareVmCustomerTagsOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

cloudbridgeasset.NewCloudBridgeAssetVmwareVmCustomerTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudBridgeAssetVmwareVmCustomerTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudBridgeAssetVmwareVmOutputReference <a name="CloudBridgeAssetVmwareVmOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudbridgeasset"

cloudbridgeasset.NewCloudBridgeAssetVmwareVmOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudBridgeAssetVmwareVmOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.putCustomerTags">PutCustomerTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetCluster">ResetCluster</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetCustomerFields">ResetCustomerFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetCustomerTags">ResetCustomerTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetFaultToleranceBandwidth">ResetFaultToleranceBandwidth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetFaultToleranceSecondaryLatency">ResetFaultToleranceSecondaryLatency</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetFaultToleranceState">ResetFaultToleranceState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetInstanceUuid">ResetInstanceUuid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetIsDisksCbtEnabled">ResetIsDisksCbtEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetIsDisksUuidEnabled">ResetIsDisksUuidEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetVmwareToolsStatus">ResetVmwareToolsStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomerTags` <a name="PutCustomerTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.putCustomerTags"></a>

```go
func PutCustomerTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.putCustomerTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCluster` <a name="ResetCluster" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetCluster"></a>

```go
func ResetCluster()
```

##### `ResetCustomerFields` <a name="ResetCustomerFields" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetCustomerFields"></a>

```go
func ResetCustomerFields()
```

##### `ResetCustomerTags` <a name="ResetCustomerTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetCustomerTags"></a>

```go
func ResetCustomerTags()
```

##### `ResetFaultToleranceBandwidth` <a name="ResetFaultToleranceBandwidth" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetFaultToleranceBandwidth"></a>

```go
func ResetFaultToleranceBandwidth()
```

##### `ResetFaultToleranceSecondaryLatency` <a name="ResetFaultToleranceSecondaryLatency" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetFaultToleranceSecondaryLatency"></a>

```go
func ResetFaultToleranceSecondaryLatency()
```

##### `ResetFaultToleranceState` <a name="ResetFaultToleranceState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetFaultToleranceState"></a>

```go
func ResetFaultToleranceState()
```

##### `ResetInstanceUuid` <a name="ResetInstanceUuid" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetInstanceUuid"></a>

```go
func ResetInstanceUuid()
```

##### `ResetIsDisksCbtEnabled` <a name="ResetIsDisksCbtEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetIsDisksCbtEnabled"></a>

```go
func ResetIsDisksCbtEnabled()
```

##### `ResetIsDisksUuidEnabled` <a name="ResetIsDisksUuidEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetIsDisksUuidEnabled"></a>

```go
func ResetIsDisksUuidEnabled()
```

##### `ResetPath` <a name="ResetPath" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetVmwareToolsStatus` <a name="ResetVmwareToolsStatus" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetVmwareToolsStatus"></a>

```go
func ResetVmwareToolsStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerTags">CustomerTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList">CloudBridgeAssetVmwareVmCustomerTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.clusterInput">ClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerFieldsInput">CustomerFieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerTagsInput">CustomerTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceBandwidthInput">FaultToleranceBandwidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceSecondaryLatencyInput">FaultToleranceSecondaryLatencyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceStateInput">FaultToleranceStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.instanceUuidInput">InstanceUuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksCbtEnabledInput">IsDisksCbtEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksUuidEnabledInput">IsDisksUuidEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.vmwareToolsStatusInput">VmwareToolsStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.cluster">Cluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerFields">CustomerFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceBandwidth">FaultToleranceBandwidth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceSecondaryLatency">FaultToleranceSecondaryLatency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceState">FaultToleranceState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.instanceUuid">InstanceUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksCbtEnabled">IsDisksCbtEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksUuidEnabled">IsDisksUuidEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.vmwareToolsStatus">VmwareToolsStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerTags`<sup>Required</sup> <a name="CustomerTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerTags"></a>

```go
func CustomerTags() CloudBridgeAssetVmwareVmCustomerTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList">CloudBridgeAssetVmwareVmCustomerTagsList</a>

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.clusterInput"></a>

```go
func ClusterInput() *string
```

- *Type:* *string

---

##### `CustomerFieldsInput`<sup>Optional</sup> <a name="CustomerFieldsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerFieldsInput"></a>

```go
func CustomerFieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomerTagsInput`<sup>Optional</sup> <a name="CustomerTagsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerTagsInput"></a>

```go
func CustomerTagsInput() interface{}
```

- *Type:* interface{}

---

##### `FaultToleranceBandwidthInput`<sup>Optional</sup> <a name="FaultToleranceBandwidthInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceBandwidthInput"></a>

```go
func FaultToleranceBandwidthInput() *f64
```

- *Type:* *f64

---

##### `FaultToleranceSecondaryLatencyInput`<sup>Optional</sup> <a name="FaultToleranceSecondaryLatencyInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceSecondaryLatencyInput"></a>

```go
func FaultToleranceSecondaryLatencyInput() *f64
```

- *Type:* *f64

---

##### `FaultToleranceStateInput`<sup>Optional</sup> <a name="FaultToleranceStateInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceStateInput"></a>

```go
func FaultToleranceStateInput() *string
```

- *Type:* *string

---

##### `InstanceUuidInput`<sup>Optional</sup> <a name="InstanceUuidInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.instanceUuidInput"></a>

```go
func InstanceUuidInput() *string
```

- *Type:* *string

---

##### `IsDisksCbtEnabledInput`<sup>Optional</sup> <a name="IsDisksCbtEnabledInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksCbtEnabledInput"></a>

```go
func IsDisksCbtEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsDisksUuidEnabledInput`<sup>Optional</sup> <a name="IsDisksUuidEnabledInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksUuidEnabledInput"></a>

```go
func IsDisksUuidEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `VmwareToolsStatusInput`<sup>Optional</sup> <a name="VmwareToolsStatusInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.vmwareToolsStatusInput"></a>

```go
func VmwareToolsStatusInput() *string
```

- *Type:* *string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.cluster"></a>

```go
func Cluster() *string
```

- *Type:* *string

---

##### `CustomerFields`<sup>Required</sup> <a name="CustomerFields" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerFields"></a>

```go
func CustomerFields() *[]*string
```

- *Type:* *[]*string

---

##### `FaultToleranceBandwidth`<sup>Required</sup> <a name="FaultToleranceBandwidth" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceBandwidth"></a>

```go
func FaultToleranceBandwidth() *f64
```

- *Type:* *f64

---

##### `FaultToleranceSecondaryLatency`<sup>Required</sup> <a name="FaultToleranceSecondaryLatency" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceSecondaryLatency"></a>

```go
func FaultToleranceSecondaryLatency() *f64
```

- *Type:* *f64

---

##### `FaultToleranceState`<sup>Required</sup> <a name="FaultToleranceState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceState"></a>

```go
func FaultToleranceState() *string
```

- *Type:* *string

---

##### `InstanceUuid`<sup>Required</sup> <a name="InstanceUuid" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.instanceUuid"></a>

```go
func InstanceUuid() *string
```

- *Type:* *string

---

##### `IsDisksCbtEnabled`<sup>Required</sup> <a name="IsDisksCbtEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksCbtEnabled"></a>

```go
func IsDisksCbtEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsDisksUuidEnabled`<sup>Required</sup> <a name="IsDisksUuidEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksUuidEnabled"></a>

```go
func IsDisksUuidEnabled() interface{}
```

- *Type:* interface{}

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `VmwareToolsStatus`<sup>Required</sup> <a name="VmwareToolsStatus" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.vmwareToolsStatus"></a>

```go
func VmwareToolsStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudBridgeAssetVmwareVm
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a>

---




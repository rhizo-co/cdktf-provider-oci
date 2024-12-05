# `mediaServicesMediaAsset` Submodule <a name="`mediaServicesMediaAsset` Submodule" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaServicesMediaAsset <a name="MediaServicesMediaAsset" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset oci_media_services_media_asset}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesmediaasset"

mediaservicesmediaasset.NewMediaServicesMediaAsset(scope Construct, id *string, config MediaServicesMediaAssetConfig) MediaServicesMediaAsset
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig">MediaServicesMediaAssetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig">MediaServicesMediaAssetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.putLocks">PutLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.putMediaAssetTags">PutMediaAssetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetIsLockOverride">ResetIsLockOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetLocks">ResetLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetMasterMediaAssetId">ResetMasterMediaAssetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetMediaAssetTags">ResetMediaAssetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetMediaWorkflowJobId">ResetMediaWorkflowJobId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetObject">ResetObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetObjectEtag">ResetObjectEtag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetParentMediaAssetId">ResetParentMediaAssetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetSegmentRangeEndIndex">ResetSegmentRangeEndIndex</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetSegmentRangeStartIndex">ResetSegmentRangeStartIndex</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetSourceMediaWorkflowId">ResetSourceMediaWorkflowId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetSourceMediaWorkflowVersion">ResetSourceMediaWorkflowVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLocks` <a name="PutLocks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.putLocks"></a>

```go
func PutLocks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.putLocks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMediaAssetTags` <a name="PutMediaAssetTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.putMediaAssetTags"></a>

```go
func PutMediaAssetTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.putMediaAssetTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMetadata` <a name="PutMetadata" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.putMetadata"></a>

```go
func PutMetadata(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.putMetadata.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.putTimeouts"></a>

```go
func PutTimeouts(value MediaServicesMediaAssetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeouts">MediaServicesMediaAssetTimeouts</a>

---

##### `ResetBucket` <a name="ResetBucket" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetId"></a>

```go
func ResetId()
```

##### `ResetIsLockOverride` <a name="ResetIsLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetIsLockOverride"></a>

```go
func ResetIsLockOverride()
```

##### `ResetLocks` <a name="ResetLocks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetLocks"></a>

```go
func ResetLocks()
```

##### `ResetMasterMediaAssetId` <a name="ResetMasterMediaAssetId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetMasterMediaAssetId"></a>

```go
func ResetMasterMediaAssetId()
```

##### `ResetMediaAssetTags` <a name="ResetMediaAssetTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetMediaAssetTags"></a>

```go
func ResetMediaAssetTags()
```

##### `ResetMediaWorkflowJobId` <a name="ResetMediaWorkflowJobId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetMediaWorkflowJobId"></a>

```go
func ResetMediaWorkflowJobId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetNamespace` <a name="ResetNamespace" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetObject` <a name="ResetObject" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetObject"></a>

```go
func ResetObject()
```

##### `ResetObjectEtag` <a name="ResetObjectEtag" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetObjectEtag"></a>

```go
func ResetObjectEtag()
```

##### `ResetParentMediaAssetId` <a name="ResetParentMediaAssetId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetParentMediaAssetId"></a>

```go
func ResetParentMediaAssetId()
```

##### `ResetSegmentRangeEndIndex` <a name="ResetSegmentRangeEndIndex" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetSegmentRangeEndIndex"></a>

```go
func ResetSegmentRangeEndIndex()
```

##### `ResetSegmentRangeStartIndex` <a name="ResetSegmentRangeStartIndex" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetSegmentRangeStartIndex"></a>

```go
func ResetSegmentRangeStartIndex()
```

##### `ResetSourceMediaWorkflowId` <a name="ResetSourceMediaWorkflowId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetSourceMediaWorkflowId"></a>

```go
func ResetSourceMediaWorkflowId()
```

##### `ResetSourceMediaWorkflowVersion` <a name="ResetSourceMediaWorkflowVersion" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetSourceMediaWorkflowVersion"></a>

```go
func ResetSourceMediaWorkflowVersion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MediaServicesMediaAsset resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesmediaasset"

mediaservicesmediaasset.MediaServicesMediaAsset_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesmediaasset"

mediaservicesmediaasset.MediaServicesMediaAsset_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesmediaasset"

mediaservicesmediaasset.MediaServicesMediaAsset_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesmediaasset"

mediaservicesmediaasset.MediaServicesMediaAsset_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MediaServicesMediaAsset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MediaServicesMediaAsset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MediaServicesMediaAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MediaServicesMediaAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksList">MediaServicesMediaAssetLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.mediaAssetTags">MediaAssetTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsList">MediaServicesMediaAssetMediaAssetTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.metadata">Metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataList">MediaServicesMediaAssetMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference">MediaServicesMediaAssetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.isLockOverrideInput">IsLockOverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.locksInput">LocksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.masterMediaAssetIdInput">MasterMediaAssetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.mediaAssetTagsInput">MediaAssetTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.mediaWorkflowJobIdInput">MediaWorkflowJobIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.metadataInput">MetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.objectEtagInput">ObjectEtagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.objectInput">ObjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.parentMediaAssetIdInput">ParentMediaAssetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.segmentRangeEndIndexInput">SegmentRangeEndIndexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.segmentRangeStartIndexInput">SegmentRangeStartIndexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.sourceMediaWorkflowIdInput">SourceMediaWorkflowIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.sourceMediaWorkflowVersionInput">SourceMediaWorkflowVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.isLockOverride">IsLockOverride</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.masterMediaAssetId">MasterMediaAssetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.mediaWorkflowJobId">MediaWorkflowJobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.objectEtag">ObjectEtag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.parentMediaAssetId">ParentMediaAssetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.segmentRangeEndIndex">SegmentRangeEndIndex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.segmentRangeStartIndex">SegmentRangeStartIndex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.sourceMediaWorkflowId">SourceMediaWorkflowId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.sourceMediaWorkflowVersion">SourceMediaWorkflowVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.locks"></a>

```go
func Locks() MediaServicesMediaAssetLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksList">MediaServicesMediaAssetLocksList</a>

---

##### `MediaAssetTags`<sup>Required</sup> <a name="MediaAssetTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.mediaAssetTags"></a>

```go
func MediaAssetTags() MediaServicesMediaAssetMediaAssetTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsList">MediaServicesMediaAssetMediaAssetTagsList</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.metadata"></a>

```go
func Metadata() MediaServicesMediaAssetMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataList">MediaServicesMediaAssetMetadataList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.timeouts"></a>

```go
func Timeouts() MediaServicesMediaAssetTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference">MediaServicesMediaAssetTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsLockOverrideInput`<sup>Optional</sup> <a name="IsLockOverrideInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.isLockOverrideInput"></a>

```go
func IsLockOverrideInput() interface{}
```

- *Type:* interface{}

---

##### `LocksInput`<sup>Optional</sup> <a name="LocksInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.locksInput"></a>

```go
func LocksInput() interface{}
```

- *Type:* interface{}

---

##### `MasterMediaAssetIdInput`<sup>Optional</sup> <a name="MasterMediaAssetIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.masterMediaAssetIdInput"></a>

```go
func MasterMediaAssetIdInput() *string
```

- *Type:* *string

---

##### `MediaAssetTagsInput`<sup>Optional</sup> <a name="MediaAssetTagsInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.mediaAssetTagsInput"></a>

```go
func MediaAssetTagsInput() interface{}
```

- *Type:* interface{}

---

##### `MediaWorkflowJobIdInput`<sup>Optional</sup> <a name="MediaWorkflowJobIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.mediaWorkflowJobIdInput"></a>

```go
func MediaWorkflowJobIdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.metadataInput"></a>

```go
func MetadataInput() interface{}
```

- *Type:* interface{}

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ObjectEtagInput`<sup>Optional</sup> <a name="ObjectEtagInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.objectEtagInput"></a>

```go
func ObjectEtagInput() *string
```

- *Type:* *string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.objectInput"></a>

```go
func ObjectInput() *string
```

- *Type:* *string

---

##### `ParentMediaAssetIdInput`<sup>Optional</sup> <a name="ParentMediaAssetIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.parentMediaAssetIdInput"></a>

```go
func ParentMediaAssetIdInput() *string
```

- *Type:* *string

---

##### `SegmentRangeEndIndexInput`<sup>Optional</sup> <a name="SegmentRangeEndIndexInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.segmentRangeEndIndexInput"></a>

```go
func SegmentRangeEndIndexInput() *string
```

- *Type:* *string

---

##### `SegmentRangeStartIndexInput`<sup>Optional</sup> <a name="SegmentRangeStartIndexInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.segmentRangeStartIndexInput"></a>

```go
func SegmentRangeStartIndexInput() *string
```

- *Type:* *string

---

##### `SourceMediaWorkflowIdInput`<sup>Optional</sup> <a name="SourceMediaWorkflowIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.sourceMediaWorkflowIdInput"></a>

```go
func SourceMediaWorkflowIdInput() *string
```

- *Type:* *string

---

##### `SourceMediaWorkflowVersionInput`<sup>Optional</sup> <a name="SourceMediaWorkflowVersionInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.sourceMediaWorkflowVersionInput"></a>

```go
func SourceMediaWorkflowVersionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsLockOverride`<sup>Required</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.isLockOverride"></a>

```go
func IsLockOverride() interface{}
```

- *Type:* interface{}

---

##### `MasterMediaAssetId`<sup>Required</sup> <a name="MasterMediaAssetId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.masterMediaAssetId"></a>

```go
func MasterMediaAssetId() *string
```

- *Type:* *string

---

##### `MediaWorkflowJobId`<sup>Required</sup> <a name="MediaWorkflowJobId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.mediaWorkflowJobId"></a>

```go
func MediaWorkflowJobId() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `ObjectEtag`<sup>Required</sup> <a name="ObjectEtag" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.objectEtag"></a>

```go
func ObjectEtag() *string
```

- *Type:* *string

---

##### `ParentMediaAssetId`<sup>Required</sup> <a name="ParentMediaAssetId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.parentMediaAssetId"></a>

```go
func ParentMediaAssetId() *string
```

- *Type:* *string

---

##### `SegmentRangeEndIndex`<sup>Required</sup> <a name="SegmentRangeEndIndex" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.segmentRangeEndIndex"></a>

```go
func SegmentRangeEndIndex() *string
```

- *Type:* *string

---

##### `SegmentRangeStartIndex`<sup>Required</sup> <a name="SegmentRangeStartIndex" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.segmentRangeStartIndex"></a>

```go
func SegmentRangeStartIndex() *string
```

- *Type:* *string

---

##### `SourceMediaWorkflowId`<sup>Required</sup> <a name="SourceMediaWorkflowId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.sourceMediaWorkflowId"></a>

```go
func SourceMediaWorkflowId() *string
```

- *Type:* *string

---

##### `SourceMediaWorkflowVersion`<sup>Required</sup> <a name="SourceMediaWorkflowVersion" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.sourceMediaWorkflowVersion"></a>

```go
func SourceMediaWorkflowVersion() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAsset.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaServicesMediaAssetConfig <a name="MediaServicesMediaAssetConfig" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesmediaasset"

&mediaservicesmediaasset.MediaServicesMediaAssetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Type: *string,
	Bucket: *string,
	DefinedTags: *map[string]*string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	IsLockOverride: interface{},
	Locks: interface{},
	MasterMediaAssetId: *string,
	MediaAssetTags: interface{},
	MediaWorkflowJobId: *string,
	Metadata: interface{},
	Namespace: *string,
	Object: *string,
	ObjectEtag: *string,
	ParentMediaAssetId: *string,
	SegmentRangeEndIndex: *string,
	SegmentRangeStartIndex: *string,
	SourceMediaWorkflowId: *string,
	SourceMediaWorkflowVersion: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#compartment_id MediaServicesMediaAsset#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#type MediaServicesMediaAsset#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#bucket MediaServicesMediaAsset#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#defined_tags MediaServicesMediaAsset#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#display_name MediaServicesMediaAsset#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#freeform_tags MediaServicesMediaAsset#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#id MediaServicesMediaAsset#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.isLockOverride">IsLockOverride</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#is_lock_override MediaServicesMediaAsset#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.locks">Locks</a></code> | <code>interface{}</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.masterMediaAssetId">MasterMediaAssetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#master_media_asset_id MediaServicesMediaAsset#master_media_asset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.mediaAssetTags">MediaAssetTags</a></code> | <code>interface{}</code> | media_asset_tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.mediaWorkflowJobId">MediaWorkflowJobId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#media_workflow_job_id MediaServicesMediaAsset#media_workflow_job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.metadata">Metadata</a></code> | <code>interface{}</code> | metadata block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#namespace MediaServicesMediaAsset#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.object">Object</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#object MediaServicesMediaAsset#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.objectEtag">ObjectEtag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#object_etag MediaServicesMediaAsset#object_etag}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.parentMediaAssetId">ParentMediaAssetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#parent_media_asset_id MediaServicesMediaAsset#parent_media_asset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.segmentRangeEndIndex">SegmentRangeEndIndex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#segment_range_end_index MediaServicesMediaAsset#segment_range_end_index}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.segmentRangeStartIndex">SegmentRangeStartIndex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#segment_range_start_index MediaServicesMediaAsset#segment_range_start_index}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.sourceMediaWorkflowId">SourceMediaWorkflowId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#source_media_workflow_id MediaServicesMediaAsset#source_media_workflow_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.sourceMediaWorkflowVersion">SourceMediaWorkflowVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#source_media_workflow_version MediaServicesMediaAsset#source_media_workflow_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeouts">MediaServicesMediaAssetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#compartment_id MediaServicesMediaAsset#compartment_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#type MediaServicesMediaAsset#type}.

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#bucket MediaServicesMediaAsset#bucket}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#defined_tags MediaServicesMediaAsset#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#display_name MediaServicesMediaAsset#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#freeform_tags MediaServicesMediaAsset#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#id MediaServicesMediaAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsLockOverride`<sup>Optional</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.isLockOverride"></a>

```go
IsLockOverride interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#is_lock_override MediaServicesMediaAsset#is_lock_override}.

---

##### `Locks`<sup>Optional</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.locks"></a>

```go
Locks interface{}
```

- *Type:* interface{}

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#locks MediaServicesMediaAsset#locks}

---

##### `MasterMediaAssetId`<sup>Optional</sup> <a name="MasterMediaAssetId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.masterMediaAssetId"></a>

```go
MasterMediaAssetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#master_media_asset_id MediaServicesMediaAsset#master_media_asset_id}.

---

##### `MediaAssetTags`<sup>Optional</sup> <a name="MediaAssetTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.mediaAssetTags"></a>

```go
MediaAssetTags interface{}
```

- *Type:* interface{}

media_asset_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#media_asset_tags MediaServicesMediaAsset#media_asset_tags}

---

##### `MediaWorkflowJobId`<sup>Optional</sup> <a name="MediaWorkflowJobId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.mediaWorkflowJobId"></a>

```go
MediaWorkflowJobId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#media_workflow_job_id MediaServicesMediaAsset#media_workflow_job_id}.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.metadata"></a>

```go
Metadata interface{}
```

- *Type:* interface{}

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#metadata MediaServicesMediaAsset#metadata}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#namespace MediaServicesMediaAsset#namespace}.

---

##### `Object`<sup>Optional</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.object"></a>

```go
Object *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#object MediaServicesMediaAsset#object}.

---

##### `ObjectEtag`<sup>Optional</sup> <a name="ObjectEtag" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.objectEtag"></a>

```go
ObjectEtag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#object_etag MediaServicesMediaAsset#object_etag}.

---

##### `ParentMediaAssetId`<sup>Optional</sup> <a name="ParentMediaAssetId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.parentMediaAssetId"></a>

```go
ParentMediaAssetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#parent_media_asset_id MediaServicesMediaAsset#parent_media_asset_id}.

---

##### `SegmentRangeEndIndex`<sup>Optional</sup> <a name="SegmentRangeEndIndex" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.segmentRangeEndIndex"></a>

```go
SegmentRangeEndIndex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#segment_range_end_index MediaServicesMediaAsset#segment_range_end_index}.

---

##### `SegmentRangeStartIndex`<sup>Optional</sup> <a name="SegmentRangeStartIndex" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.segmentRangeStartIndex"></a>

```go
SegmentRangeStartIndex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#segment_range_start_index MediaServicesMediaAsset#segment_range_start_index}.

---

##### `SourceMediaWorkflowId`<sup>Optional</sup> <a name="SourceMediaWorkflowId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.sourceMediaWorkflowId"></a>

```go
SourceMediaWorkflowId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#source_media_workflow_id MediaServicesMediaAsset#source_media_workflow_id}.

---

##### `SourceMediaWorkflowVersion`<sup>Optional</sup> <a name="SourceMediaWorkflowVersion" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.sourceMediaWorkflowVersion"></a>

```go
SourceMediaWorkflowVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#source_media_workflow_version MediaServicesMediaAsset#source_media_workflow_version}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetConfig.property.timeouts"></a>

```go
Timeouts MediaServicesMediaAssetTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeouts">MediaServicesMediaAssetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#timeouts MediaServicesMediaAsset#timeouts}

---

### MediaServicesMediaAssetLocks <a name="MediaServicesMediaAssetLocks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesmediaasset"

&mediaservicesmediaasset.MediaServicesMediaAssetLocks {
	CompartmentId: *string,
	Type: *string,
	Message: *string,
	RelatedResourceId: *string,
	TimeCreated: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocks.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#compartment_id MediaServicesMediaAsset#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocks.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#type MediaServicesMediaAsset#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocks.property.message">Message</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#message MediaServicesMediaAsset#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocks.property.relatedResourceId">RelatedResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#related_resource_id MediaServicesMediaAsset#related_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocks.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#time_created MediaServicesMediaAsset#time_created}. |

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocks.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#compartment_id MediaServicesMediaAsset#compartment_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocks.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#type MediaServicesMediaAsset#type}.

---

##### `Message`<sup>Optional</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocks.property.message"></a>

```go
Message *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#message MediaServicesMediaAsset#message}.

---

##### `RelatedResourceId`<sup>Optional</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocks.property.relatedResourceId"></a>

```go
RelatedResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#related_resource_id MediaServicesMediaAsset#related_resource_id}.

---

##### `TimeCreated`<sup>Optional</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocks.property.timeCreated"></a>

```go
TimeCreated *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#time_created MediaServicesMediaAsset#time_created}.

---

### MediaServicesMediaAssetMediaAssetTags <a name="MediaServicesMediaAssetMediaAssetTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesmediaasset"

&mediaservicesmediaasset.MediaServicesMediaAssetMediaAssetTags {
	Value: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#value MediaServicesMediaAsset#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTags.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#type MediaServicesMediaAsset#type}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#value MediaServicesMediaAsset#value}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTags.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#type MediaServicesMediaAsset#type}.

---

### MediaServicesMediaAssetMetadata <a name="MediaServicesMediaAssetMetadata" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadata.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesmediaasset"

&mediaservicesmediaasset.MediaServicesMediaAssetMetadata {
	Metadata: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadata.property.metadata">Metadata</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#metadata MediaServicesMediaAsset#metadata}. |

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadata.property.metadata"></a>

```go
Metadata *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#metadata MediaServicesMediaAsset#metadata}.

---

### MediaServicesMediaAssetTimeouts <a name="MediaServicesMediaAssetTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesmediaasset"

&mediaservicesmediaasset.MediaServicesMediaAssetTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#create MediaServicesMediaAsset#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#delete MediaServicesMediaAsset#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#update MediaServicesMediaAsset#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#create MediaServicesMediaAsset#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#delete MediaServicesMediaAsset#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_asset#update MediaServicesMediaAsset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaServicesMediaAssetLocksList <a name="MediaServicesMediaAssetLocksList" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesmediaasset"

mediaservicesmediaasset.NewMediaServicesMediaAssetLocksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediaServicesMediaAssetLocksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksList.get"></a>

```go
func Get(index *f64) MediaServicesMediaAssetLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaServicesMediaAssetLocksOutputReference <a name="MediaServicesMediaAssetLocksOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesmediaasset"

mediaservicesmediaasset.NewMediaServicesMediaAssetLocksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediaServicesMediaAssetLocksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.resetRelatedResourceId">ResetRelatedResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.resetTimeCreated">ResetTimeCreated</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessage` <a name="ResetMessage" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.resetMessage"></a>

```go
func ResetMessage()
```

##### `ResetRelatedResourceId` <a name="ResetRelatedResourceId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.resetRelatedResourceId"></a>

```go
func ResetRelatedResourceId()
```

##### `ResetTimeCreated` <a name="ResetTimeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.resetTimeCreated"></a>

```go
func ResetTimeCreated()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.property.messageInput">MessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.property.relatedResourceIdInput">RelatedResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.property.timeCreatedInput">TimeCreatedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.property.messageInput"></a>

```go
func MessageInput() *string
```

- *Type:* *string

---

##### `RelatedResourceIdInput`<sup>Optional</sup> <a name="RelatedResourceIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.property.relatedResourceIdInput"></a>

```go
func RelatedResourceIdInput() *string
```

- *Type:* *string

---

##### `TimeCreatedInput`<sup>Optional</sup> <a name="TimeCreatedInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.property.timeCreatedInput"></a>

```go
func TimeCreatedInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.property.relatedResourceId"></a>

```go
func RelatedResourceId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetLocksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaServicesMediaAssetMediaAssetTagsList <a name="MediaServicesMediaAssetMediaAssetTagsList" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesmediaasset"

mediaservicesmediaasset.NewMediaServicesMediaAssetMediaAssetTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediaServicesMediaAssetMediaAssetTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsList.get"></a>

```go
func Get(index *f64) MediaServicesMediaAssetMediaAssetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaServicesMediaAssetMediaAssetTagsOutputReference <a name="MediaServicesMediaAssetMediaAssetTagsOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesmediaasset"

mediaservicesmediaasset.NewMediaServicesMediaAssetMediaAssetTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediaServicesMediaAssetMediaAssetTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMediaAssetTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaServicesMediaAssetMetadataList <a name="MediaServicesMediaAssetMetadataList" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesmediaasset"

mediaservicesmediaasset.NewMediaServicesMediaAssetMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediaServicesMediaAssetMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataList.get"></a>

```go
func Get(index *f64) MediaServicesMediaAssetMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaServicesMediaAssetMetadataOutputReference <a name="MediaServicesMediaAssetMetadataOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesmediaasset"

mediaservicesmediaasset.NewMediaServicesMediaAssetMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediaServicesMediaAssetMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.property.metadataInput">MetadataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.property.metadata">Metadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.property.metadataInput"></a>

```go
func MetadataInput() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.property.metadata"></a>

```go
func Metadata() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaServicesMediaAssetTimeoutsOutputReference <a name="MediaServicesMediaAssetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesmediaasset"

mediaservicesmediaasset.NewMediaServicesMediaAssetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaServicesMediaAssetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mediaServicesMediaAsset.MediaServicesMediaAssetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




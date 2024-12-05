# `blockchainBlockchainPlatform` Submodule <a name="`blockchainBlockchainPlatform` Submodule" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BlockchainBlockchainPlatform <a name="BlockchainBlockchainPlatform" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform oci_blockchain_blockchain_platform}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/blockchainblockchainplatform"

blockchainblockchainplatform.NewBlockchainBlockchainPlatform(scope Construct, id *string, config BlockchainBlockchainPlatformConfig) BlockchainBlockchainPlatform
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig">BlockchainBlockchainPlatformConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig">BlockchainBlockchainPlatformConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.putReplicas">PutReplicas</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetCaCertArchiveText">ResetCaCertArchiveText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetFederatedUserId">ResetFederatedUserId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetIsByol">ResetIsByol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetLoadBalancerShape">ResetLoadBalancerShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetPlatformVersion">ResetPlatformVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetReplicas">ResetReplicas</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetStorageSizeInTbs">ResetStorageSizeInTbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetTotalOcpuCapacity">ResetTotalOcpuCapacity</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutReplicas` <a name="PutReplicas" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.putReplicas"></a>

```go
func PutReplicas(value BlockchainBlockchainPlatformReplicas)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.putReplicas.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.putTimeouts"></a>

```go
func PutTimeouts(value BlockchainBlockchainPlatformTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts">BlockchainBlockchainPlatformTimeouts</a>

---

##### `ResetCaCertArchiveText` <a name="ResetCaCertArchiveText" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetCaCertArchiveText"></a>

```go
func ResetCaCertArchiveText()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFederatedUserId` <a name="ResetFederatedUserId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetFederatedUserId"></a>

```go
func ResetFederatedUserId()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetId"></a>

```go
func ResetId()
```

##### `ResetIsByol` <a name="ResetIsByol" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetIsByol"></a>

```go
func ResetIsByol()
```

##### `ResetLoadBalancerShape` <a name="ResetLoadBalancerShape" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetLoadBalancerShape"></a>

```go
func ResetLoadBalancerShape()
```

##### `ResetPlatformVersion` <a name="ResetPlatformVersion" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetPlatformVersion"></a>

```go
func ResetPlatformVersion()
```

##### `ResetReplicas` <a name="ResetReplicas" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetReplicas"></a>

```go
func ResetReplicas()
```

##### `ResetStorageSizeInTbs` <a name="ResetStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetStorageSizeInTbs"></a>

```go
func ResetStorageSizeInTbs()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTotalOcpuCapacity` <a name="ResetTotalOcpuCapacity" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetTotalOcpuCapacity"></a>

```go
func ResetTotalOcpuCapacity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BlockchainBlockchainPlatform resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/blockchainblockchainplatform"

blockchainblockchainplatform.BlockchainBlockchainPlatform_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/blockchainblockchainplatform"

blockchainblockchainplatform.BlockchainBlockchainPlatform_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/blockchainblockchainplatform"

blockchainblockchainplatform.BlockchainBlockchainPlatform_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/blockchainblockchainplatform"

blockchainblockchainplatform.BlockchainBlockchainPlatform_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BlockchainBlockchainPlatform resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BlockchainBlockchainPlatform to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BlockchainBlockchainPlatform that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BlockchainBlockchainPlatform to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.componentDetails">ComponentDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList">BlockchainBlockchainPlatformComponentDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.hostOcpuUtilizationInfo">HostOcpuUtilizationInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList">BlockchainBlockchainPlatformHostOcpuUtilizationInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.isMultiAd">IsMultiAd</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformShapeType">PlatformShapeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.replicas">Replicas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference">BlockchainBlockchainPlatformReplicasOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.serviceEndpoint">ServiceEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.serviceVersion">ServiceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.storageUsedInTbs">StorageUsedInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference">BlockchainBlockchainPlatformTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.caCertArchiveTextInput">CaCertArchiveTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.computeShapeInput">ComputeShapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.federatedUserIdInput">FederatedUserIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.idcsAccessTokenInput">IdcsAccessTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.isByolInput">IsByolInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.loadBalancerShapeInput">LoadBalancerShapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformRoleInput">PlatformRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformVersionInput">PlatformVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.replicasInput">ReplicasInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.storageSizeInTbsInput">StorageSizeInTbsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.totalOcpuCapacityInput">TotalOcpuCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.caCertArchiveText">CaCertArchiveText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.computeShape">ComputeShape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.federatedUserId">FederatedUserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.idcsAccessToken">IdcsAccessToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.isByol">IsByol</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.loadBalancerShape">LoadBalancerShape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformRole">PlatformRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformVersion">PlatformVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.storageSizeInTbs">StorageSizeInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.totalOcpuCapacity">TotalOcpuCapacity</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ComponentDetails`<sup>Required</sup> <a name="ComponentDetails" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.componentDetails"></a>

```go
func ComponentDetails() BlockchainBlockchainPlatformComponentDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList">BlockchainBlockchainPlatformComponentDetailsList</a>

---

##### `HostOcpuUtilizationInfo`<sup>Required</sup> <a name="HostOcpuUtilizationInfo" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.hostOcpuUtilizationInfo"></a>

```go
func HostOcpuUtilizationInfo() BlockchainBlockchainPlatformHostOcpuUtilizationInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList">BlockchainBlockchainPlatformHostOcpuUtilizationInfoList</a>

---

##### `IsMultiAd`<sup>Required</sup> <a name="IsMultiAd" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.isMultiAd"></a>

```go
func IsMultiAd() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `PlatformShapeType`<sup>Required</sup> <a name="PlatformShapeType" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformShapeType"></a>

```go
func PlatformShapeType() *string
```

- *Type:* *string

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.replicas"></a>

```go
func Replicas() BlockchainBlockchainPlatformReplicasOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference">BlockchainBlockchainPlatformReplicasOutputReference</a>

---

##### `ServiceEndpoint`<sup>Required</sup> <a name="ServiceEndpoint" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.serviceEndpoint"></a>

```go
func ServiceEndpoint() *string
```

- *Type:* *string

---

##### `ServiceVersion`<sup>Required</sup> <a name="ServiceVersion" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.serviceVersion"></a>

```go
func ServiceVersion() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StorageUsedInTbs`<sup>Required</sup> <a name="StorageUsedInTbs" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.storageUsedInTbs"></a>

```go
func StorageUsedInTbs() *f64
```

- *Type:* *f64

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeouts"></a>

```go
func Timeouts() BlockchainBlockchainPlatformTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference">BlockchainBlockchainPlatformTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `CaCertArchiveTextInput`<sup>Optional</sup> <a name="CaCertArchiveTextInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.caCertArchiveTextInput"></a>

```go
func CaCertArchiveTextInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `ComputeShapeInput`<sup>Optional</sup> <a name="ComputeShapeInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.computeShapeInput"></a>

```go
func ComputeShapeInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FederatedUserIdInput`<sup>Optional</sup> <a name="FederatedUserIdInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.federatedUserIdInput"></a>

```go
func FederatedUserIdInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdcsAccessTokenInput`<sup>Optional</sup> <a name="IdcsAccessTokenInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.idcsAccessTokenInput"></a>

```go
func IdcsAccessTokenInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsByolInput`<sup>Optional</sup> <a name="IsByolInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.isByolInput"></a>

```go
func IsByolInput() interface{}
```

- *Type:* interface{}

---

##### `LoadBalancerShapeInput`<sup>Optional</sup> <a name="LoadBalancerShapeInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.loadBalancerShapeInput"></a>

```go
func LoadBalancerShapeInput() *string
```

- *Type:* *string

---

##### `PlatformRoleInput`<sup>Optional</sup> <a name="PlatformRoleInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformRoleInput"></a>

```go
func PlatformRoleInput() *string
```

- *Type:* *string

---

##### `PlatformVersionInput`<sup>Optional</sup> <a name="PlatformVersionInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformVersionInput"></a>

```go
func PlatformVersionInput() *string
```

- *Type:* *string

---

##### `ReplicasInput`<sup>Optional</sup> <a name="ReplicasInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.replicasInput"></a>

```go
func ReplicasInput() BlockchainBlockchainPlatformReplicas
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a>

---

##### `StorageSizeInTbsInput`<sup>Optional</sup> <a name="StorageSizeInTbsInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.storageSizeInTbsInput"></a>

```go
func StorageSizeInTbsInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TotalOcpuCapacityInput`<sup>Optional</sup> <a name="TotalOcpuCapacityInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.totalOcpuCapacityInput"></a>

```go
func TotalOcpuCapacityInput() *f64
```

- *Type:* *f64

---

##### `CaCertArchiveText`<sup>Required</sup> <a name="CaCertArchiveText" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.caCertArchiveText"></a>

```go
func CaCertArchiveText() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ComputeShape`<sup>Required</sup> <a name="ComputeShape" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.computeShape"></a>

```go
func ComputeShape() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FederatedUserId`<sup>Required</sup> <a name="FederatedUserId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.federatedUserId"></a>

```go
func FederatedUserId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsAccessToken`<sup>Required</sup> <a name="IdcsAccessToken" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.idcsAccessToken"></a>

```go
func IdcsAccessToken() *string
```

- *Type:* *string

---

##### `IsByol`<sup>Required</sup> <a name="IsByol" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.isByol"></a>

```go
func IsByol() interface{}
```

- *Type:* interface{}

---

##### `LoadBalancerShape`<sup>Required</sup> <a name="LoadBalancerShape" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.loadBalancerShape"></a>

```go
func LoadBalancerShape() *string
```

- *Type:* *string

---

##### `PlatformRole`<sup>Required</sup> <a name="PlatformRole" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformRole"></a>

```go
func PlatformRole() *string
```

- *Type:* *string

---

##### `PlatformVersion`<sup>Required</sup> <a name="PlatformVersion" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformVersion"></a>

```go
func PlatformVersion() *string
```

- *Type:* *string

---

##### `StorageSizeInTbs`<sup>Required</sup> <a name="StorageSizeInTbs" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.storageSizeInTbs"></a>

```go
func StorageSizeInTbs() *f64
```

- *Type:* *f64

---

##### `TotalOcpuCapacity`<sup>Required</sup> <a name="TotalOcpuCapacity" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.totalOcpuCapacity"></a>

```go
func TotalOcpuCapacity() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BlockchainBlockchainPlatformComponentDetails <a name="BlockchainBlockchainPlatformComponentDetails" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/blockchainblockchainplatform"

&blockchainblockchainplatform.BlockchainBlockchainPlatformComponentDetails {

}
```


### BlockchainBlockchainPlatformComponentDetailsOsns <a name="BlockchainBlockchainPlatformComponentDetailsOsns" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsns.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/blockchainblockchainplatform"

&blockchainblockchainplatform.BlockchainBlockchainPlatformComponentDetailsOsns {

}
```


### BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam <a name="BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/blockchainblockchainplatform"

&blockchainblockchainplatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam {

}
```


### BlockchainBlockchainPlatformComponentDetailsPeers <a name="BlockchainBlockchainPlatformComponentDetailsPeers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeers.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/blockchainblockchainplatform"

&blockchainblockchainplatform.BlockchainBlockchainPlatformComponentDetailsPeers {

}
```


### BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam <a name="BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/blockchainblockchainplatform"

&blockchainblockchainplatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam {

}
```


### BlockchainBlockchainPlatformConfig <a name="BlockchainBlockchainPlatformConfig" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/blockchainblockchainplatform"

&blockchainblockchainplatform.BlockchainBlockchainPlatformConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	ComputeShape: *string,
	DisplayName: *string,
	IdcsAccessToken: *string,
	PlatformRole: *string,
	CaCertArchiveText: *string,
	DefinedTags: *map[string]*string,
	Description: *string,
	FederatedUserId: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	IsByol: interface{},
	LoadBalancerShape: *string,
	PlatformVersion: *string,
	Replicas: github.com/rhizo-co/cdktf-provider-oci-go/oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas,
	StorageSizeInTbs: *f64,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts,
	TotalOcpuCapacity: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#compartment_id BlockchainBlockchainPlatform#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.computeShape">ComputeShape</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#compute_shape BlockchainBlockchainPlatform#compute_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#display_name BlockchainBlockchainPlatform#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.idcsAccessToken">IdcsAccessToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#idcs_access_token BlockchainBlockchainPlatform#idcs_access_token}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.platformRole">PlatformRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#platform_role BlockchainBlockchainPlatform#platform_role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.caCertArchiveText">CaCertArchiveText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#ca_cert_archive_text BlockchainBlockchainPlatform#ca_cert_archive_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#defined_tags BlockchainBlockchainPlatform#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#description BlockchainBlockchainPlatform#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.federatedUserId">FederatedUserId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#federated_user_id BlockchainBlockchainPlatform#federated_user_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#freeform_tags BlockchainBlockchainPlatform#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#id BlockchainBlockchainPlatform#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.isByol">IsByol</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#is_byol BlockchainBlockchainPlatform#is_byol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.loadBalancerShape">LoadBalancerShape</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#load_balancer_shape BlockchainBlockchainPlatform#load_balancer_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.platformVersion">PlatformVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#platform_version BlockchainBlockchainPlatform#platform_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.replicas">Replicas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a></code> | replicas block. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.storageSizeInTbs">StorageSizeInTbs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#storage_size_in_tbs BlockchainBlockchainPlatform#storage_size_in_tbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts">BlockchainBlockchainPlatformTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.totalOcpuCapacity">TotalOcpuCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#total_ocpu_capacity BlockchainBlockchainPlatform#total_ocpu_capacity}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#compartment_id BlockchainBlockchainPlatform#compartment_id}.

---

##### `ComputeShape`<sup>Required</sup> <a name="ComputeShape" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.computeShape"></a>

```go
ComputeShape *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#compute_shape BlockchainBlockchainPlatform#compute_shape}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#display_name BlockchainBlockchainPlatform#display_name}.

---

##### `IdcsAccessToken`<sup>Required</sup> <a name="IdcsAccessToken" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.idcsAccessToken"></a>

```go
IdcsAccessToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#idcs_access_token BlockchainBlockchainPlatform#idcs_access_token}.

---

##### `PlatformRole`<sup>Required</sup> <a name="PlatformRole" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.platformRole"></a>

```go
PlatformRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#platform_role BlockchainBlockchainPlatform#platform_role}.

---

##### `CaCertArchiveText`<sup>Optional</sup> <a name="CaCertArchiveText" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.caCertArchiveText"></a>

```go
CaCertArchiveText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#ca_cert_archive_text BlockchainBlockchainPlatform#ca_cert_archive_text}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#defined_tags BlockchainBlockchainPlatform#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#description BlockchainBlockchainPlatform#description}.

---

##### `FederatedUserId`<sup>Optional</sup> <a name="FederatedUserId" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.federatedUserId"></a>

```go
FederatedUserId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#federated_user_id BlockchainBlockchainPlatform#federated_user_id}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#freeform_tags BlockchainBlockchainPlatform#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#id BlockchainBlockchainPlatform#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsByol`<sup>Optional</sup> <a name="IsByol" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.isByol"></a>

```go
IsByol interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#is_byol BlockchainBlockchainPlatform#is_byol}.

---

##### `LoadBalancerShape`<sup>Optional</sup> <a name="LoadBalancerShape" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.loadBalancerShape"></a>

```go
LoadBalancerShape *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#load_balancer_shape BlockchainBlockchainPlatform#load_balancer_shape}.

---

##### `PlatformVersion`<sup>Optional</sup> <a name="PlatformVersion" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.platformVersion"></a>

```go
PlatformVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#platform_version BlockchainBlockchainPlatform#platform_version}.

---

##### `Replicas`<sup>Optional</sup> <a name="Replicas" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.replicas"></a>

```go
Replicas BlockchainBlockchainPlatformReplicas
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a>

replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#replicas BlockchainBlockchainPlatform#replicas}

---

##### `StorageSizeInTbs`<sup>Optional</sup> <a name="StorageSizeInTbs" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.storageSizeInTbs"></a>

```go
StorageSizeInTbs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#storage_size_in_tbs BlockchainBlockchainPlatform#storage_size_in_tbs}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.timeouts"></a>

```go
Timeouts BlockchainBlockchainPlatformTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts">BlockchainBlockchainPlatformTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#timeouts BlockchainBlockchainPlatform#timeouts}

---

##### `TotalOcpuCapacity`<sup>Optional</sup> <a name="TotalOcpuCapacity" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.totalOcpuCapacity"></a>

```go
TotalOcpuCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#total_ocpu_capacity BlockchainBlockchainPlatform#total_ocpu_capacity}.

---

### BlockchainBlockchainPlatformHostOcpuUtilizationInfo <a name="BlockchainBlockchainPlatformHostOcpuUtilizationInfo" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfo.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/blockchainblockchainplatform"

&blockchainblockchainplatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfo {

}
```


### BlockchainBlockchainPlatformReplicas <a name="BlockchainBlockchainPlatformReplicas" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/blockchainblockchainplatform"

&blockchainblockchainplatform.BlockchainBlockchainPlatformReplicas {
	CaCount: *f64,
	ConsoleCount: *f64,
	ProxyCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.property.caCount">CaCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#ca_count BlockchainBlockchainPlatform#ca_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.property.consoleCount">ConsoleCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#console_count BlockchainBlockchainPlatform#console_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.property.proxyCount">ProxyCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#proxy_count BlockchainBlockchainPlatform#proxy_count}. |

---

##### `CaCount`<sup>Optional</sup> <a name="CaCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.property.caCount"></a>

```go
CaCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#ca_count BlockchainBlockchainPlatform#ca_count}.

---

##### `ConsoleCount`<sup>Optional</sup> <a name="ConsoleCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.property.consoleCount"></a>

```go
ConsoleCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#console_count BlockchainBlockchainPlatform#console_count}.

---

##### `ProxyCount`<sup>Optional</sup> <a name="ProxyCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.property.proxyCount"></a>

```go
ProxyCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#proxy_count BlockchainBlockchainPlatform#proxy_count}.

---

### BlockchainBlockchainPlatformTimeouts <a name="BlockchainBlockchainPlatformTimeouts" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/blockchainblockchainplatform"

&blockchainblockchainplatform.BlockchainBlockchainPlatformTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#create BlockchainBlockchainPlatform#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#delete BlockchainBlockchainPlatform#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#update BlockchainBlockchainPlatform#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#create BlockchainBlockchainPlatform#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#delete BlockchainBlockchainPlatform#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#update BlockchainBlockchainPlatform#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BlockchainBlockchainPlatformComponentDetailsList <a name="BlockchainBlockchainPlatformComponentDetailsList" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/blockchainblockchainplatform"

blockchainblockchainplatform.NewBlockchainBlockchainPlatformComponentDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BlockchainBlockchainPlatformComponentDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.get"></a>

```go
func Get(index *f64) BlockchainBlockchainPlatformComponentDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### BlockchainBlockchainPlatformComponentDetailsOsnsList <a name="BlockchainBlockchainPlatformComponentDetailsOsnsList" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/blockchainblockchainplatform"

blockchainblockchainplatform.NewBlockchainBlockchainPlatformComponentDetailsOsnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BlockchainBlockchainPlatformComponentDetailsOsnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.get"></a>

```go
func Get(index *f64) BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList <a name="BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/blockchainblockchainplatform"

blockchainblockchainplatform.NewBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.get"></a>

```go
func Get(index *f64) BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference <a name="BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/blockchainblockchainplatform"

blockchainblockchainplatform.NewBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.ocpuAllocationNumber">OcpuAllocationNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam">BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OcpuAllocationNumber`<sup>Required</sup> <a name="OcpuAllocationNumber" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.ocpuAllocationNumber"></a>

```go
func OcpuAllocationNumber() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.internalValue"></a>

```go
func InternalValue() BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam">BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam</a>

---


### BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference <a name="BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/blockchainblockchainplatform"

blockchainblockchainplatform.NewBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.ad">Ad</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.ocpuAllocationParam">OcpuAllocationParam</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList">BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.osnKey">OsnKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsns">BlockchainBlockchainPlatformComponentDetailsOsns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ad`<sup>Required</sup> <a name="Ad" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.ad"></a>

```go
func Ad() *string
```

- *Type:* *string

---

##### `OcpuAllocationParam`<sup>Required</sup> <a name="OcpuAllocationParam" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.ocpuAllocationParam"></a>

```go
func OcpuAllocationParam() BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList">BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList</a>

---

##### `OsnKey`<sup>Required</sup> <a name="OsnKey" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.osnKey"></a>

```go
func OsnKey() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.internalValue"></a>

```go
func InternalValue() BlockchainBlockchainPlatformComponentDetailsOsns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsns">BlockchainBlockchainPlatformComponentDetailsOsns</a>

---


### BlockchainBlockchainPlatformComponentDetailsOutputReference <a name="BlockchainBlockchainPlatformComponentDetailsOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/blockchainblockchainplatform"

blockchainblockchainplatform.NewBlockchainBlockchainPlatformComponentDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BlockchainBlockchainPlatformComponentDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.osns">Osns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList">BlockchainBlockchainPlatformComponentDetailsOsnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.peers">Peers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList">BlockchainBlockchainPlatformComponentDetailsPeersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetails">BlockchainBlockchainPlatformComponentDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Osns`<sup>Required</sup> <a name="Osns" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.osns"></a>

```go
func Osns() BlockchainBlockchainPlatformComponentDetailsOsnsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList">BlockchainBlockchainPlatformComponentDetailsOsnsList</a>

---

##### `Peers`<sup>Required</sup> <a name="Peers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.peers"></a>

```go
func Peers() BlockchainBlockchainPlatformComponentDetailsPeersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList">BlockchainBlockchainPlatformComponentDetailsPeersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() BlockchainBlockchainPlatformComponentDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetails">BlockchainBlockchainPlatformComponentDetails</a>

---


### BlockchainBlockchainPlatformComponentDetailsPeersList <a name="BlockchainBlockchainPlatformComponentDetailsPeersList" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/blockchainblockchainplatform"

blockchainblockchainplatform.NewBlockchainBlockchainPlatformComponentDetailsPeersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BlockchainBlockchainPlatformComponentDetailsPeersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.get"></a>

```go
func Get(index *f64) BlockchainBlockchainPlatformComponentDetailsPeersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList <a name="BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/blockchainblockchainplatform"

blockchainblockchainplatform.NewBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.get"></a>

```go
func Get(index *f64) BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference <a name="BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/blockchainblockchainplatform"

blockchainblockchainplatform.NewBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.ocpuAllocationNumber">OcpuAllocationNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam">BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OcpuAllocationNumber`<sup>Required</sup> <a name="OcpuAllocationNumber" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.ocpuAllocationNumber"></a>

```go
func OcpuAllocationNumber() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.internalValue"></a>

```go
func InternalValue() BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam">BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam</a>

---


### BlockchainBlockchainPlatformComponentDetailsPeersOutputReference <a name="BlockchainBlockchainPlatformComponentDetailsPeersOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/blockchainblockchainplatform"

blockchainblockchainplatform.NewBlockchainBlockchainPlatformComponentDetailsPeersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BlockchainBlockchainPlatformComponentDetailsPeersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.ad">Ad</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.ocpuAllocationParam">OcpuAllocationParam</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList">BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.peerKey">PeerKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeers">BlockchainBlockchainPlatformComponentDetailsPeers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ad`<sup>Required</sup> <a name="Ad" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.ad"></a>

```go
func Ad() *string
```

- *Type:* *string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `OcpuAllocationParam`<sup>Required</sup> <a name="OcpuAllocationParam" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.ocpuAllocationParam"></a>

```go
func OcpuAllocationParam() BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList">BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList</a>

---

##### `PeerKey`<sup>Required</sup> <a name="PeerKey" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.peerKey"></a>

```go
func PeerKey() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.internalValue"></a>

```go
func InternalValue() BlockchainBlockchainPlatformComponentDetailsPeers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeers">BlockchainBlockchainPlatformComponentDetailsPeers</a>

---


### BlockchainBlockchainPlatformHostOcpuUtilizationInfoList <a name="BlockchainBlockchainPlatformHostOcpuUtilizationInfoList" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/blockchainblockchainplatform"

blockchainblockchainplatform.NewBlockchainBlockchainPlatformHostOcpuUtilizationInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BlockchainBlockchainPlatformHostOcpuUtilizationInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.get"></a>

```go
func Get(index *f64) BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference <a name="BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/blockchainblockchainplatform"

blockchainblockchainplatform.NewBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.ocpuCapacityNumber">OcpuCapacityNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.ocpuUtilizationNumber">OcpuUtilizationNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfo">BlockchainBlockchainPlatformHostOcpuUtilizationInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `OcpuCapacityNumber`<sup>Required</sup> <a name="OcpuCapacityNumber" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.ocpuCapacityNumber"></a>

```go
func OcpuCapacityNumber() *f64
```

- *Type:* *f64

---

##### `OcpuUtilizationNumber`<sup>Required</sup> <a name="OcpuUtilizationNumber" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.ocpuUtilizationNumber"></a>

```go
func OcpuUtilizationNumber() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() BlockchainBlockchainPlatformHostOcpuUtilizationInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfo">BlockchainBlockchainPlatformHostOcpuUtilizationInfo</a>

---


### BlockchainBlockchainPlatformReplicasOutputReference <a name="BlockchainBlockchainPlatformReplicasOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/blockchainblockchainplatform"

blockchainblockchainplatform.NewBlockchainBlockchainPlatformReplicasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BlockchainBlockchainPlatformReplicasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resetCaCount">ResetCaCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resetConsoleCount">ResetConsoleCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resetProxyCount">ResetProxyCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaCount` <a name="ResetCaCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resetCaCount"></a>

```go
func ResetCaCount()
```

##### `ResetConsoleCount` <a name="ResetConsoleCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resetConsoleCount"></a>

```go
func ResetConsoleCount()
```

##### `ResetProxyCount` <a name="ResetProxyCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resetProxyCount"></a>

```go
func ResetProxyCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.caCountInput">CaCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.consoleCountInput">ConsoleCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.proxyCountInput">ProxyCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.caCount">CaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.consoleCount">ConsoleCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.proxyCount">ProxyCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaCountInput`<sup>Optional</sup> <a name="CaCountInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.caCountInput"></a>

```go
func CaCountInput() *f64
```

- *Type:* *f64

---

##### `ConsoleCountInput`<sup>Optional</sup> <a name="ConsoleCountInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.consoleCountInput"></a>

```go
func ConsoleCountInput() *f64
```

- *Type:* *f64

---

##### `ProxyCountInput`<sup>Optional</sup> <a name="ProxyCountInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.proxyCountInput"></a>

```go
func ProxyCountInput() *f64
```

- *Type:* *f64

---

##### `CaCount`<sup>Required</sup> <a name="CaCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.caCount"></a>

```go
func CaCount() *f64
```

- *Type:* *f64

---

##### `ConsoleCount`<sup>Required</sup> <a name="ConsoleCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.consoleCount"></a>

```go
func ConsoleCount() *f64
```

- *Type:* *f64

---

##### `ProxyCount`<sup>Required</sup> <a name="ProxyCount" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.proxyCount"></a>

```go
func ProxyCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.internalValue"></a>

```go
func InternalValue() BlockchainBlockchainPlatformReplicas
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a>

---


### BlockchainBlockchainPlatformTimeoutsOutputReference <a name="BlockchainBlockchainPlatformTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/blockchainblockchainplatform"

blockchainblockchainplatform.NewBlockchainBlockchainPlatformTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BlockchainBlockchainPlatformTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




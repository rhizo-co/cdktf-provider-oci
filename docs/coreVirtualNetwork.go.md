# `coreVirtualNetwork` Submodule <a name="`coreVirtualNetwork` Submodule" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreVirtualNetwork <a name="CoreVirtualNetwork" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network oci_core_virtual_network}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corevirtualnetwork"

corevirtualnetwork.NewCoreVirtualNetwork(scope Construct, id *string, config CoreVirtualNetworkConfig) CoreVirtualNetwork
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig">CoreVirtualNetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig">CoreVirtualNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.putByoipv6CidrDetails">PutByoipv6CidrDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetByoipv6CidrDetails">ResetByoipv6CidrDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetCidrBlock">ResetCidrBlock</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetCidrBlocks">ResetCidrBlocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetDnsLabel">ResetDnsLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetIpv6PrivateCidrBlocks">ResetIpv6PrivateCidrBlocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetIsIpv6Enabled">ResetIsIpv6Enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetIsOracleGuaAllocationEnabled">ResetIsOracleGuaAllocationEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetSecurityAttributes">ResetSecurityAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutByoipv6CidrDetails` <a name="PutByoipv6CidrDetails" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.putByoipv6CidrDetails"></a>

```go
func PutByoipv6CidrDetails(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.putByoipv6CidrDetails.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.putTimeouts"></a>

```go
func PutTimeouts(value CoreVirtualNetworkTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts">CoreVirtualNetworkTimeouts</a>

---

##### `ResetByoipv6CidrDetails` <a name="ResetByoipv6CidrDetails" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetByoipv6CidrDetails"></a>

```go
func ResetByoipv6CidrDetails()
```

##### `ResetCidrBlock` <a name="ResetCidrBlock" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetCidrBlock"></a>

```go
func ResetCidrBlock()
```

##### `ResetCidrBlocks` <a name="ResetCidrBlocks" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetCidrBlocks"></a>

```go
func ResetCidrBlocks()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetDnsLabel` <a name="ResetDnsLabel" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetDnsLabel"></a>

```go
func ResetDnsLabel()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetId"></a>

```go
func ResetId()
```

##### `ResetIpv6PrivateCidrBlocks` <a name="ResetIpv6PrivateCidrBlocks" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetIpv6PrivateCidrBlocks"></a>

```go
func ResetIpv6PrivateCidrBlocks()
```

##### `ResetIsIpv6Enabled` <a name="ResetIsIpv6Enabled" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetIsIpv6Enabled"></a>

```go
func ResetIsIpv6Enabled()
```

##### `ResetIsOracleGuaAllocationEnabled` <a name="ResetIsOracleGuaAllocationEnabled" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetIsOracleGuaAllocationEnabled"></a>

```go
func ResetIsOracleGuaAllocationEnabled()
```

##### `ResetSecurityAttributes` <a name="ResetSecurityAttributes" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetSecurityAttributes"></a>

```go
func ResetSecurityAttributes()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CoreVirtualNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corevirtualnetwork"

corevirtualnetwork.CoreVirtualNetwork_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corevirtualnetwork"

corevirtualnetwork.CoreVirtualNetwork_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corevirtualnetwork"

corevirtualnetwork.CoreVirtualNetwork_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corevirtualnetwork"

corevirtualnetwork.CoreVirtualNetwork_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CoreVirtualNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CoreVirtualNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CoreVirtualNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CoreVirtualNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.byoipv6CidrBlocks">Byoipv6CidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.byoipv6CidrDetails">Byoipv6CidrDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList">CoreVirtualNetworkByoipv6CidrDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.defaultDhcpOptionsId">DefaultDhcpOptionsId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.defaultRouteTableId">DefaultRouteTableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.defaultSecurityListId">DefaultSecurityListId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.ipv6CidrBlocks">Ipv6CidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference">CoreVirtualNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.vcnDomainName">VcnDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.byoipv6CidrDetailsInput">Byoipv6CidrDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cidrBlockInput">CidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cidrBlocksInput">CidrBlocksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.dnsLabelInput">DnsLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.ipv6PrivateCidrBlocksInput">Ipv6PrivateCidrBlocksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.isIpv6EnabledInput">IsIpv6EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.isOracleGuaAllocationEnabledInput">IsOracleGuaAllocationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.securityAttributesInput">SecurityAttributesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cidrBlock">CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cidrBlocks">CidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.dnsLabel">DnsLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.ipv6PrivateCidrBlocks">Ipv6PrivateCidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.isIpv6Enabled">IsIpv6Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.isOracleGuaAllocationEnabled">IsOracleGuaAllocationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.securityAttributes">SecurityAttributes</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Byoipv6CidrBlocks`<sup>Required</sup> <a name="Byoipv6CidrBlocks" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.byoipv6CidrBlocks"></a>

```go
func Byoipv6CidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `Byoipv6CidrDetails`<sup>Required</sup> <a name="Byoipv6CidrDetails" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.byoipv6CidrDetails"></a>

```go
func Byoipv6CidrDetails() CoreVirtualNetworkByoipv6CidrDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList">CoreVirtualNetworkByoipv6CidrDetailsList</a>

---

##### `DefaultDhcpOptionsId`<sup>Required</sup> <a name="DefaultDhcpOptionsId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.defaultDhcpOptionsId"></a>

```go
func DefaultDhcpOptionsId() *string
```

- *Type:* *string

---

##### `DefaultRouteTableId`<sup>Required</sup> <a name="DefaultRouteTableId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.defaultRouteTableId"></a>

```go
func DefaultRouteTableId() *string
```

- *Type:* *string

---

##### `DefaultSecurityListId`<sup>Required</sup> <a name="DefaultSecurityListId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.defaultSecurityListId"></a>

```go
func DefaultSecurityListId() *string
```

- *Type:* *string

---

##### `Ipv6CidrBlocks`<sup>Required</sup> <a name="Ipv6CidrBlocks" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.ipv6CidrBlocks"></a>

```go
func Ipv6CidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.timeouts"></a>

```go
func Timeouts() CoreVirtualNetworkTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference">CoreVirtualNetworkTimeoutsOutputReference</a>

---

##### `VcnDomainName`<sup>Required</sup> <a name="VcnDomainName" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.vcnDomainName"></a>

```go
func VcnDomainName() *string
```

- *Type:* *string

---

##### `Byoipv6CidrDetailsInput`<sup>Optional</sup> <a name="Byoipv6CidrDetailsInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.byoipv6CidrDetailsInput"></a>

```go
func Byoipv6CidrDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `CidrBlockInput`<sup>Optional</sup> <a name="CidrBlockInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cidrBlockInput"></a>

```go
func CidrBlockInput() *string
```

- *Type:* *string

---

##### `CidrBlocksInput`<sup>Optional</sup> <a name="CidrBlocksInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cidrBlocksInput"></a>

```go
func CidrBlocksInput() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DnsLabelInput`<sup>Optional</sup> <a name="DnsLabelInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.dnsLabelInput"></a>

```go
func DnsLabelInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Ipv6PrivateCidrBlocksInput`<sup>Optional</sup> <a name="Ipv6PrivateCidrBlocksInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.ipv6PrivateCidrBlocksInput"></a>

```go
func Ipv6PrivateCidrBlocksInput() *[]*string
```

- *Type:* *[]*string

---

##### `IsIpv6EnabledInput`<sup>Optional</sup> <a name="IsIpv6EnabledInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.isIpv6EnabledInput"></a>

```go
func IsIpv6EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsOracleGuaAllocationEnabledInput`<sup>Optional</sup> <a name="IsOracleGuaAllocationEnabledInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.isOracleGuaAllocationEnabledInput"></a>

```go
func IsOracleGuaAllocationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityAttributesInput`<sup>Optional</sup> <a name="SecurityAttributesInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.securityAttributesInput"></a>

```go
func SecurityAttributesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cidrBlock"></a>

```go
func CidrBlock() *string
```

- *Type:* *string

---

##### `CidrBlocks`<sup>Required</sup> <a name="CidrBlocks" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cidrBlocks"></a>

```go
func CidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DnsLabel`<sup>Required</sup> <a name="DnsLabel" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.dnsLabel"></a>

```go
func DnsLabel() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Ipv6PrivateCidrBlocks`<sup>Required</sup> <a name="Ipv6PrivateCidrBlocks" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.ipv6PrivateCidrBlocks"></a>

```go
func Ipv6PrivateCidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `IsIpv6Enabled`<sup>Required</sup> <a name="IsIpv6Enabled" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.isIpv6Enabled"></a>

```go
func IsIpv6Enabled() interface{}
```

- *Type:* interface{}

---

##### `IsOracleGuaAllocationEnabled`<sup>Required</sup> <a name="IsOracleGuaAllocationEnabled" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.isOracleGuaAllocationEnabled"></a>

```go
func IsOracleGuaAllocationEnabled() interface{}
```

- *Type:* interface{}

---

##### `SecurityAttributes`<sup>Required</sup> <a name="SecurityAttributes" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.securityAttributes"></a>

```go
func SecurityAttributes() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreVirtualNetworkByoipv6CidrDetails <a name="CoreVirtualNetworkByoipv6CidrDetails" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corevirtualnetwork"

&corevirtualnetwork.CoreVirtualNetworkByoipv6CidrDetails {
	Byoipv6RangeId: *string,
	Ipv6CidrBlock: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails.property.byoipv6RangeId">Byoipv6RangeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#byoipv6range_id CoreVirtualNetwork#byoipv6range_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#ipv6cidr_block CoreVirtualNetwork#ipv6cidr_block}. |

---

##### `Byoipv6RangeId`<sup>Required</sup> <a name="Byoipv6RangeId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails.property.byoipv6RangeId"></a>

```go
Byoipv6RangeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#byoipv6range_id CoreVirtualNetwork#byoipv6range_id}.

---

##### `Ipv6CidrBlock`<sup>Required</sup> <a name="Ipv6CidrBlock" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails.property.ipv6CidrBlock"></a>

```go
Ipv6CidrBlock *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#ipv6cidr_block CoreVirtualNetwork#ipv6cidr_block}.

---

### CoreVirtualNetworkConfig <a name="CoreVirtualNetworkConfig" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corevirtualnetwork"

&corevirtualnetwork.CoreVirtualNetworkConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Byoipv6CidrDetails: interface{},
	CidrBlock: *string,
	CidrBlocks: *[]*string,
	DefinedTags: *map[string]*string,
	DisplayName: *string,
	DnsLabel: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	Ipv6PrivateCidrBlocks: *[]*string,
	IsIpv6Enabled: interface{},
	IsOracleGuaAllocationEnabled: interface{},
	SecurityAttributes: *map[string]*string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#compartment_id CoreVirtualNetwork#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.byoipv6CidrDetails">Byoipv6CidrDetails</a></code> | <code>interface{}</code> | byoipv6cidr_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.cidrBlock">CidrBlock</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#cidr_block CoreVirtualNetwork#cidr_block}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.cidrBlocks">CidrBlocks</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#cidr_blocks CoreVirtualNetwork#cidr_blocks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#defined_tags CoreVirtualNetwork#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#display_name CoreVirtualNetwork#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.dnsLabel">DnsLabel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#dns_label CoreVirtualNetwork#dns_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#freeform_tags CoreVirtualNetwork#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#id CoreVirtualNetwork#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.ipv6PrivateCidrBlocks">Ipv6PrivateCidrBlocks</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#ipv6private_cidr_blocks CoreVirtualNetwork#ipv6private_cidr_blocks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.isIpv6Enabled">IsIpv6Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#is_ipv6enabled CoreVirtualNetwork#is_ipv6enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.isOracleGuaAllocationEnabled">IsOracleGuaAllocationEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#is_oracle_gua_allocation_enabled CoreVirtualNetwork#is_oracle_gua_allocation_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.securityAttributes">SecurityAttributes</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#security_attributes CoreVirtualNetwork#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts">CoreVirtualNetworkTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#compartment_id CoreVirtualNetwork#compartment_id}.

---

##### `Byoipv6CidrDetails`<sup>Optional</sup> <a name="Byoipv6CidrDetails" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.byoipv6CidrDetails"></a>

```go
Byoipv6CidrDetails interface{}
```

- *Type:* interface{}

byoipv6cidr_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#byoipv6cidr_details CoreVirtualNetwork#byoipv6cidr_details}

---

##### `CidrBlock`<sup>Optional</sup> <a name="CidrBlock" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.cidrBlock"></a>

```go
CidrBlock *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#cidr_block CoreVirtualNetwork#cidr_block}.

---

##### `CidrBlocks`<sup>Optional</sup> <a name="CidrBlocks" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.cidrBlocks"></a>

```go
CidrBlocks *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#cidr_blocks CoreVirtualNetwork#cidr_blocks}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#defined_tags CoreVirtualNetwork#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#display_name CoreVirtualNetwork#display_name}.

---

##### `DnsLabel`<sup>Optional</sup> <a name="DnsLabel" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.dnsLabel"></a>

```go
DnsLabel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#dns_label CoreVirtualNetwork#dns_label}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#freeform_tags CoreVirtualNetwork#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#id CoreVirtualNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ipv6PrivateCidrBlocks`<sup>Optional</sup> <a name="Ipv6PrivateCidrBlocks" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.ipv6PrivateCidrBlocks"></a>

```go
Ipv6PrivateCidrBlocks *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#ipv6private_cidr_blocks CoreVirtualNetwork#ipv6private_cidr_blocks}.

---

##### `IsIpv6Enabled`<sup>Optional</sup> <a name="IsIpv6Enabled" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.isIpv6Enabled"></a>

```go
IsIpv6Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#is_ipv6enabled CoreVirtualNetwork#is_ipv6enabled}.

---

##### `IsOracleGuaAllocationEnabled`<sup>Optional</sup> <a name="IsOracleGuaAllocationEnabled" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.isOracleGuaAllocationEnabled"></a>

```go
IsOracleGuaAllocationEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#is_oracle_gua_allocation_enabled CoreVirtualNetwork#is_oracle_gua_allocation_enabled}.

---

##### `SecurityAttributes`<sup>Optional</sup> <a name="SecurityAttributes" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.securityAttributes"></a>

```go
SecurityAttributes *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#security_attributes CoreVirtualNetwork#security_attributes}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.timeouts"></a>

```go
Timeouts CoreVirtualNetworkTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts">CoreVirtualNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#timeouts CoreVirtualNetwork#timeouts}

---

### CoreVirtualNetworkTimeouts <a name="CoreVirtualNetworkTimeouts" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corevirtualnetwork"

&corevirtualnetwork.CoreVirtualNetworkTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#create CoreVirtualNetwork#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#delete CoreVirtualNetwork#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#update CoreVirtualNetwork#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#create CoreVirtualNetwork#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#delete CoreVirtualNetwork#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#update CoreVirtualNetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreVirtualNetworkByoipv6CidrDetailsList <a name="CoreVirtualNetworkByoipv6CidrDetailsList" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corevirtualnetwork"

corevirtualnetwork.NewCoreVirtualNetworkByoipv6CidrDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CoreVirtualNetworkByoipv6CidrDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.get"></a>

```go
func Get(index *f64) CoreVirtualNetworkByoipv6CidrDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CoreVirtualNetworkByoipv6CidrDetailsOutputReference <a name="CoreVirtualNetworkByoipv6CidrDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corevirtualnetwork"

corevirtualnetwork.NewCoreVirtualNetworkByoipv6CidrDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CoreVirtualNetworkByoipv6CidrDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.byoipv6RangeIdInput">Byoipv6RangeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.ipv6CidrBlockInput">Ipv6CidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.byoipv6RangeId">Byoipv6RangeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Byoipv6RangeIdInput`<sup>Optional</sup> <a name="Byoipv6RangeIdInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.byoipv6RangeIdInput"></a>

```go
func Byoipv6RangeIdInput() *string
```

- *Type:* *string

---

##### `Ipv6CidrBlockInput`<sup>Optional</sup> <a name="Ipv6CidrBlockInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.ipv6CidrBlockInput"></a>

```go
func Ipv6CidrBlockInput() *string
```

- *Type:* *string

---

##### `Byoipv6RangeId`<sup>Required</sup> <a name="Byoipv6RangeId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.byoipv6RangeId"></a>

```go
func Byoipv6RangeId() *string
```

- *Type:* *string

---

##### `Ipv6CidrBlock`<sup>Required</sup> <a name="Ipv6CidrBlock" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.ipv6CidrBlock"></a>

```go
func Ipv6CidrBlock() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CoreVirtualNetworkTimeoutsOutputReference <a name="CoreVirtualNetworkTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corevirtualnetwork"

corevirtualnetwork.NewCoreVirtualNetworkTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreVirtualNetworkTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




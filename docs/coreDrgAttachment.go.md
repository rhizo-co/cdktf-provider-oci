# `coreDrgAttachment` Submodule <a name="`coreDrgAttachment` Submodule" id="rhizo-co-terraform-provider-oci.coreDrgAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreDrgAttachment <a name="CoreDrgAttachment" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment oci_core_drg_attachment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredrgattachment"

coredrgattachment.NewCoreDrgAttachment(scope Construct, id *string, config CoreDrgAttachmentConfig) CoreDrgAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig">CoreDrgAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig">CoreDrgAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.putNetworkDetails">PutNetworkDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetDrgRouteTableId">ResetDrgRouteTableId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetExportDrgRouteDistributionId">ResetExportDrgRouteDistributionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetNetworkDetails">ResetNetworkDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetRemoveExportDrgRouteDistributionTrigger">ResetRemoveExportDrgRouteDistributionTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetRouteTableId">ResetRouteTableId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetVcnId">ResetVcnId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNetworkDetails` <a name="PutNetworkDetails" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.putNetworkDetails"></a>

```go
func PutNetworkDetails(value CoreDrgAttachmentNetworkDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.putNetworkDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails">CoreDrgAttachmentNetworkDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.putTimeouts"></a>

```go
func PutTimeouts(value CoreDrgAttachmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeouts">CoreDrgAttachmentTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetDrgRouteTableId` <a name="ResetDrgRouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetDrgRouteTableId"></a>

```go
func ResetDrgRouteTableId()
```

##### `ResetExportDrgRouteDistributionId` <a name="ResetExportDrgRouteDistributionId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetExportDrgRouteDistributionId"></a>

```go
func ResetExportDrgRouteDistributionId()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetId"></a>

```go
func ResetId()
```

##### `ResetNetworkDetails` <a name="ResetNetworkDetails" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetNetworkDetails"></a>

```go
func ResetNetworkDetails()
```

##### `ResetRemoveExportDrgRouteDistributionTrigger` <a name="ResetRemoveExportDrgRouteDistributionTrigger" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetRemoveExportDrgRouteDistributionTrigger"></a>

```go
func ResetRemoveExportDrgRouteDistributionTrigger()
```

##### `ResetRouteTableId` <a name="ResetRouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetRouteTableId"></a>

```go
func ResetRouteTableId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVcnId` <a name="ResetVcnId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.resetVcnId"></a>

```go
func ResetVcnId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CoreDrgAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredrgattachment"

coredrgattachment.CoreDrgAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredrgattachment"

coredrgattachment.CoreDrgAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredrgattachment"

coredrgattachment.CoreDrgAttachment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredrgattachment"

coredrgattachment.CoreDrgAttachment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CoreDrgAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CoreDrgAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CoreDrgAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CoreDrgAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.isCrossTenancy">IsCrossTenancy</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.networkDetails">NetworkDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference">CoreDrgAttachmentNetworkDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference">CoreDrgAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.drgIdInput">DrgIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.drgRouteTableIdInput">DrgRouteTableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.exportDrgRouteDistributionIdInput">ExportDrgRouteDistributionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.networkDetailsInput">NetworkDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails">CoreDrgAttachmentNetworkDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.removeExportDrgRouteDistributionTriggerInput">RemoveExportDrgRouteDistributionTriggerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.routeTableIdInput">RouteTableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.vcnIdInput">VcnIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.drgId">DrgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.drgRouteTableId">DrgRouteTableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.exportDrgRouteDistributionId">ExportDrgRouteDistributionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.removeExportDrgRouteDistributionTrigger">RemoveExportDrgRouteDistributionTrigger</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.routeTableId">RouteTableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.vcnId">VcnId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `IsCrossTenancy`<sup>Required</sup> <a name="IsCrossTenancy" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.isCrossTenancy"></a>

```go
func IsCrossTenancy() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NetworkDetails`<sup>Required</sup> <a name="NetworkDetails" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.networkDetails"></a>

```go
func NetworkDetails() CoreDrgAttachmentNetworkDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference">CoreDrgAttachmentNetworkDetailsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.timeouts"></a>

```go
func Timeouts() CoreDrgAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference">CoreDrgAttachmentTimeoutsOutputReference</a>

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DrgIdInput`<sup>Optional</sup> <a name="DrgIdInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.drgIdInput"></a>

```go
func DrgIdInput() *string
```

- *Type:* *string

---

##### `DrgRouteTableIdInput`<sup>Optional</sup> <a name="DrgRouteTableIdInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.drgRouteTableIdInput"></a>

```go
func DrgRouteTableIdInput() *string
```

- *Type:* *string

---

##### `ExportDrgRouteDistributionIdInput`<sup>Optional</sup> <a name="ExportDrgRouteDistributionIdInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.exportDrgRouteDistributionIdInput"></a>

```go
func ExportDrgRouteDistributionIdInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NetworkDetailsInput`<sup>Optional</sup> <a name="NetworkDetailsInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.networkDetailsInput"></a>

```go
func NetworkDetailsInput() CoreDrgAttachmentNetworkDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails">CoreDrgAttachmentNetworkDetails</a>

---

##### `RemoveExportDrgRouteDistributionTriggerInput`<sup>Optional</sup> <a name="RemoveExportDrgRouteDistributionTriggerInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.removeExportDrgRouteDistributionTriggerInput"></a>

```go
func RemoveExportDrgRouteDistributionTriggerInput() interface{}
```

- *Type:* interface{}

---

##### `RouteTableIdInput`<sup>Optional</sup> <a name="RouteTableIdInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.routeTableIdInput"></a>

```go
func RouteTableIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VcnIdInput`<sup>Optional</sup> <a name="VcnIdInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.vcnIdInput"></a>

```go
func VcnIdInput() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DrgId`<sup>Required</sup> <a name="DrgId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.drgId"></a>

```go
func DrgId() *string
```

- *Type:* *string

---

##### `DrgRouteTableId`<sup>Required</sup> <a name="DrgRouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.drgRouteTableId"></a>

```go
func DrgRouteTableId() *string
```

- *Type:* *string

---

##### `ExportDrgRouteDistributionId`<sup>Required</sup> <a name="ExportDrgRouteDistributionId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.exportDrgRouteDistributionId"></a>

```go
func ExportDrgRouteDistributionId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RemoveExportDrgRouteDistributionTrigger`<sup>Required</sup> <a name="RemoveExportDrgRouteDistributionTrigger" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.removeExportDrgRouteDistributionTrigger"></a>

```go
func RemoveExportDrgRouteDistributionTrigger() interface{}
```

- *Type:* interface{}

---

##### `RouteTableId`<sup>Required</sup> <a name="RouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.routeTableId"></a>

```go
func RouteTableId() *string
```

- *Type:* *string

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.vcnId"></a>

```go
func VcnId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreDrgAttachmentConfig <a name="CoreDrgAttachmentConfig" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredrgattachment"

&coredrgattachment.CoreDrgAttachmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DrgId: *string,
	DefinedTags: *map[string]*string,
	DisplayName: *string,
	DrgRouteTableId: *string,
	ExportDrgRouteDistributionId: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	NetworkDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails,
	RemoveExportDrgRouteDistributionTrigger: interface{},
	RouteTableId: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreDrgAttachment.CoreDrgAttachmentTimeouts,
	VcnId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.drgId">DrgId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#drg_id CoreDrgAttachment#drg_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#defined_tags CoreDrgAttachment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#display_name CoreDrgAttachment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.drgRouteTableId">DrgRouteTableId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#drg_route_table_id CoreDrgAttachment#drg_route_table_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.exportDrgRouteDistributionId">ExportDrgRouteDistributionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#export_drg_route_distribution_id CoreDrgAttachment#export_drg_route_distribution_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#freeform_tags CoreDrgAttachment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#id CoreDrgAttachment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.networkDetails">NetworkDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails">CoreDrgAttachmentNetworkDetails</a></code> | network_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.removeExportDrgRouteDistributionTrigger">RemoveExportDrgRouteDistributionTrigger</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#remove_export_drg_route_distribution_trigger CoreDrgAttachment#remove_export_drg_route_distribution_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.routeTableId">RouteTableId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#route_table_id CoreDrgAttachment#route_table_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeouts">CoreDrgAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.vcnId">VcnId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#vcn_id CoreDrgAttachment#vcn_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DrgId`<sup>Required</sup> <a name="DrgId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.drgId"></a>

```go
DrgId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#drg_id CoreDrgAttachment#drg_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#defined_tags CoreDrgAttachment#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#display_name CoreDrgAttachment#display_name}.

---

##### `DrgRouteTableId`<sup>Optional</sup> <a name="DrgRouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.drgRouteTableId"></a>

```go
DrgRouteTableId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#drg_route_table_id CoreDrgAttachment#drg_route_table_id}.

---

##### `ExportDrgRouteDistributionId`<sup>Optional</sup> <a name="ExportDrgRouteDistributionId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.exportDrgRouteDistributionId"></a>

```go
ExportDrgRouteDistributionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#export_drg_route_distribution_id CoreDrgAttachment#export_drg_route_distribution_id}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#freeform_tags CoreDrgAttachment#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#id CoreDrgAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NetworkDetails`<sup>Optional</sup> <a name="NetworkDetails" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.networkDetails"></a>

```go
NetworkDetails CoreDrgAttachmentNetworkDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails">CoreDrgAttachmentNetworkDetails</a>

network_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#network_details CoreDrgAttachment#network_details}

---

##### `RemoveExportDrgRouteDistributionTrigger`<sup>Optional</sup> <a name="RemoveExportDrgRouteDistributionTrigger" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.removeExportDrgRouteDistributionTrigger"></a>

```go
RemoveExportDrgRouteDistributionTrigger interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#remove_export_drg_route_distribution_trigger CoreDrgAttachment#remove_export_drg_route_distribution_trigger}.

---

##### `RouteTableId`<sup>Optional</sup> <a name="RouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.routeTableId"></a>

```go
RouteTableId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#route_table_id CoreDrgAttachment#route_table_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.timeouts"></a>

```go
Timeouts CoreDrgAttachmentTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeouts">CoreDrgAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#timeouts CoreDrgAttachment#timeouts}

---

##### `VcnId`<sup>Optional</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentConfig.property.vcnId"></a>

```go
VcnId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#vcn_id CoreDrgAttachment#vcn_id}.

---

### CoreDrgAttachmentNetworkDetails <a name="CoreDrgAttachmentNetworkDetails" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredrgattachment"

&coredrgattachment.CoreDrgAttachmentNetworkDetails {
	Type: *string,
	Id: *string,
	RouteTableId: *string,
	VcnRouteType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#type CoreDrgAttachment#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#id CoreDrgAttachment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails.property.routeTableId">RouteTableId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#route_table_id CoreDrgAttachment#route_table_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails.property.vcnRouteType">VcnRouteType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#vcn_route_type CoreDrgAttachment#vcn_route_type}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#type CoreDrgAttachment#type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#id CoreDrgAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RouteTableId`<sup>Optional</sup> <a name="RouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails.property.routeTableId"></a>

```go
RouteTableId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#route_table_id CoreDrgAttachment#route_table_id}.

---

##### `VcnRouteType`<sup>Optional</sup> <a name="VcnRouteType" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails.property.vcnRouteType"></a>

```go
VcnRouteType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#vcn_route_type CoreDrgAttachment#vcn_route_type}.

---

### CoreDrgAttachmentTimeouts <a name="CoreDrgAttachmentTimeouts" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredrgattachment"

&coredrgattachment.CoreDrgAttachmentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#create CoreDrgAttachment#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#delete CoreDrgAttachment#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#update CoreDrgAttachment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#create CoreDrgAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#delete CoreDrgAttachment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment#update CoreDrgAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreDrgAttachmentNetworkDetailsOutputReference <a name="CoreDrgAttachmentNetworkDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredrgattachment"

coredrgattachment.NewCoreDrgAttachmentNetworkDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreDrgAttachmentNetworkDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.resetRouteTableId">ResetRouteTableId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.resetVcnRouteType">ResetVcnRouteType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetRouteTableId` <a name="ResetRouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.resetRouteTableId"></a>

```go
func ResetRouteTableId()
```

##### `ResetVcnRouteType` <a name="ResetVcnRouteType" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.resetVcnRouteType"></a>

```go
func ResetVcnRouteType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.ids">Ids</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.ipsecConnectionId">IpsecConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.transportAttachmentId">TransportAttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.transportOnlyMode">TransportOnlyMode</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.routeTableIdInput">RouteTableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.vcnRouteTypeInput">VcnRouteTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.routeTableId">RouteTableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.vcnRouteType">VcnRouteType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails">CoreDrgAttachmentNetworkDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.ids"></a>

```go
func Ids() *[]*string
```

- *Type:* *[]*string

---

##### `IpsecConnectionId`<sup>Required</sup> <a name="IpsecConnectionId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.ipsecConnectionId"></a>

```go
func IpsecConnectionId() *string
```

- *Type:* *string

---

##### `TransportAttachmentId`<sup>Required</sup> <a name="TransportAttachmentId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.transportAttachmentId"></a>

```go
func TransportAttachmentId() *string
```

- *Type:* *string

---

##### `TransportOnlyMode`<sup>Required</sup> <a name="TransportOnlyMode" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.transportOnlyMode"></a>

```go
func TransportOnlyMode() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RouteTableIdInput`<sup>Optional</sup> <a name="RouteTableIdInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.routeTableIdInput"></a>

```go
func RouteTableIdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VcnRouteTypeInput`<sup>Optional</sup> <a name="VcnRouteTypeInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.vcnRouteTypeInput"></a>

```go
func VcnRouteTypeInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RouteTableId`<sup>Required</sup> <a name="RouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.routeTableId"></a>

```go
func RouteTableId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VcnRouteType`<sup>Required</sup> <a name="VcnRouteType" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.vcnRouteType"></a>

```go
func VcnRouteType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreDrgAttachmentNetworkDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentNetworkDetails">CoreDrgAttachmentNetworkDetails</a>

---


### CoreDrgAttachmentTimeoutsOutputReference <a name="CoreDrgAttachmentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredrgattachment"

coredrgattachment.NewCoreDrgAttachmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreDrgAttachmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreDrgAttachment.CoreDrgAttachmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




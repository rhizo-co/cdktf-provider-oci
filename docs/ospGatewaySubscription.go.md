# `ospGatewaySubscription` Submodule <a name="`ospGatewaySubscription` Submodule" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OspGatewaySubscription <a name="OspGatewaySubscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription oci_osp_gateway_subscription}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

ospgatewaysubscription.NewOspGatewaySubscription(scope Construct, id *string, config OspGatewaySubscriptionConfig) OspGatewaySubscription
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig">OspGatewaySubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig">OspGatewaySubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription">PutSubscription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSubscription` <a name="PutSubscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription"></a>

```go
func PutSubscription(value OspGatewaySubscriptionSubscription)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putTimeouts"></a>

```go
func PutTimeouts(value OspGatewaySubscriptionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts">OspGatewaySubscriptionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OspGatewaySubscription resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

ospgatewaysubscription.OspGatewaySubscription_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

ospgatewaysubscription.OspGatewaySubscription_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

ospgatewaysubscription.OspGatewaySubscription_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

ospgatewaysubscription.OspGatewaySubscription_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OspGatewaySubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OspGatewaySubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OspGatewaySubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OspGatewaySubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.accountType">AccountType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.billingAddress">BillingAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList">OspGatewaySubscriptionBillingAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.billToCustAccountId">BillToCustAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.currencyCode">CurrencyCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.gsiOrgCode">GsiOrgCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.isIntentToPay">IsIntentToPay</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.languageCode">LanguageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.paymentGateway">PaymentGateway</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList">OspGatewaySubscriptionPaymentGatewayList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.paymentOptions">PaymentOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList">OspGatewaySubscriptionPaymentOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.planType">PlanType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.shipToCustAcctRoleId">ShipToCustAcctRoleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.shipToCustAcctSiteId">ShipToCustAcctSiteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscription">Subscription</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference">OspGatewaySubscriptionSubscriptionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionPlanNumber">SubscriptionPlanNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.taxInfo">TaxInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList">OspGatewaySubscriptionTaxInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference">OspGatewaySubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timePersonalToCorporateConv">TimePersonalToCorporateConv</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timePlanUpgrade">TimePlanUpgrade</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timeStart">TimeStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.upgradeState">UpgradeState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.upgradeStateDetails">UpgradeStateDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.ospHomeRegionInput">OspHomeRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionInput">SubscriptionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.ospHomeRegion">OspHomeRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountType`<sup>Required</sup> <a name="AccountType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.accountType"></a>

```go
func AccountType() *string
```

- *Type:* *string

---

##### `BillingAddress`<sup>Required</sup> <a name="BillingAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.billingAddress"></a>

```go
func BillingAddress() OspGatewaySubscriptionBillingAddressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList">OspGatewaySubscriptionBillingAddressList</a>

---

##### `BillToCustAccountId`<sup>Required</sup> <a name="BillToCustAccountId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.billToCustAccountId"></a>

```go
func BillToCustAccountId() *string
```

- *Type:* *string

---

##### `CurrencyCode`<sup>Required</sup> <a name="CurrencyCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.currencyCode"></a>

```go
func CurrencyCode() *string
```

- *Type:* *string

---

##### `GsiOrgCode`<sup>Required</sup> <a name="GsiOrgCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.gsiOrgCode"></a>

```go
func GsiOrgCode() *string
```

- *Type:* *string

---

##### `IsIntentToPay`<sup>Required</sup> <a name="IsIntentToPay" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.isIntentToPay"></a>

```go
func IsIntentToPay() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.languageCode"></a>

```go
func LanguageCode() *string
```

- *Type:* *string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

##### `PaymentGateway`<sup>Required</sup> <a name="PaymentGateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.paymentGateway"></a>

```go
func PaymentGateway() OspGatewaySubscriptionPaymentGatewayList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList">OspGatewaySubscriptionPaymentGatewayList</a>

---

##### `PaymentOptions`<sup>Required</sup> <a name="PaymentOptions" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.paymentOptions"></a>

```go
func PaymentOptions() OspGatewaySubscriptionPaymentOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList">OspGatewaySubscriptionPaymentOptionsList</a>

---

##### `PlanType`<sup>Required</sup> <a name="PlanType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.planType"></a>

```go
func PlanType() *string
```

- *Type:* *string

---

##### `ShipToCustAcctRoleId`<sup>Required</sup> <a name="ShipToCustAcctRoleId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.shipToCustAcctRoleId"></a>

```go
func ShipToCustAcctRoleId() *string
```

- *Type:* *string

---

##### `ShipToCustAcctSiteId`<sup>Required</sup> <a name="ShipToCustAcctSiteId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.shipToCustAcctSiteId"></a>

```go
func ShipToCustAcctSiteId() *string
```

- *Type:* *string

---

##### `Subscription`<sup>Required</sup> <a name="Subscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscription"></a>

```go
func Subscription() OspGatewaySubscriptionSubscriptionOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference">OspGatewaySubscriptionSubscriptionOutputReference</a>

---

##### `SubscriptionPlanNumber`<sup>Required</sup> <a name="SubscriptionPlanNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionPlanNumber"></a>

```go
func SubscriptionPlanNumber() *string
```

- *Type:* *string

---

##### `TaxInfo`<sup>Required</sup> <a name="TaxInfo" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.taxInfo"></a>

```go
func TaxInfo() OspGatewaySubscriptionTaxInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList">OspGatewaySubscriptionTaxInfoList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timeouts"></a>

```go
func Timeouts() OspGatewaySubscriptionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference">OspGatewaySubscriptionTimeoutsOutputReference</a>

---

##### `TimePersonalToCorporateConv`<sup>Required</sup> <a name="TimePersonalToCorporateConv" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timePersonalToCorporateConv"></a>

```go
func TimePersonalToCorporateConv() *string
```

- *Type:* *string

---

##### `TimePlanUpgrade`<sup>Required</sup> <a name="TimePlanUpgrade" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timePlanUpgrade"></a>

```go
func TimePlanUpgrade() *string
```

- *Type:* *string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timeStart"></a>

```go
func TimeStart() *string
```

- *Type:* *string

---

##### `UpgradeState`<sup>Required</sup> <a name="UpgradeState" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.upgradeState"></a>

```go
func UpgradeState() *string
```

- *Type:* *string

---

##### `UpgradeStateDetails`<sup>Required</sup> <a name="UpgradeStateDetails" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.upgradeStateDetails"></a>

```go
func UpgradeStateDetails() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OspHomeRegionInput`<sup>Optional</sup> <a name="OspHomeRegionInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.ospHomeRegionInput"></a>

```go
func OspHomeRegionInput() *string
```

- *Type:* *string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `SubscriptionInput`<sup>Optional</sup> <a name="SubscriptionInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionInput"></a>

```go
func SubscriptionInput() OspGatewaySubscriptionSubscription
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OspHomeRegion`<sup>Required</sup> <a name="OspHomeRegion" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.ospHomeRegion"></a>

```go
func OspHomeRegion() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OspGatewaySubscriptionBillingAddress <a name="OspGatewaySubscriptionBillingAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddress.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

&ospgatewaysubscription.OspGatewaySubscriptionBillingAddress {

}
```


### OspGatewaySubscriptionConfig <a name="OspGatewaySubscriptionConfig" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

&ospgatewaysubscription.OspGatewaySubscriptionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Email: *string,
	OspHomeRegion: *string,
	Subscription: github.com/rhizo-co/cdktf-provider-oci-go/oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription,
	SubscriptionId: *string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#compartment_id OspGatewaySubscription#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#email OspGatewaySubscription#email}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.ospHomeRegion">OspHomeRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#osp_home_region OspGatewaySubscription#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.subscription">Subscription</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a></code> | subscription block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#subscription_id OspGatewaySubscription#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#id OspGatewaySubscription#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts">OspGatewaySubscriptionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#compartment_id OspGatewaySubscription#compartment_id}.

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#email OspGatewaySubscription#email}.

---

##### `OspHomeRegion`<sup>Required</sup> <a name="OspHomeRegion" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.ospHomeRegion"></a>

```go
OspHomeRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#osp_home_region OspGatewaySubscription#osp_home_region}.

---

##### `Subscription`<sup>Required</sup> <a name="Subscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.subscription"></a>

```go
Subscription OspGatewaySubscriptionSubscription
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a>

subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#subscription OspGatewaySubscription#subscription}

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#subscription_id OspGatewaySubscription#subscription_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#id OspGatewaySubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.timeouts"></a>

```go
Timeouts OspGatewaySubscriptionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts">OspGatewaySubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#timeouts OspGatewaySubscription#timeouts}

---

### OspGatewaySubscriptionPaymentGateway <a name="OspGatewaySubscriptionPaymentGateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGateway"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGateway.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

&ospgatewaysubscription.OspGatewaySubscriptionPaymentGateway {

}
```


### OspGatewaySubscriptionPaymentGatewayMerchantDefinedData <a name="OspGatewaySubscriptionPaymentGatewayMerchantDefinedData" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedData.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

&ospgatewaysubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedData {

}
```


### OspGatewaySubscriptionPaymentOptions <a name="OspGatewaySubscriptionPaymentOptions" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

&ospgatewaysubscription.OspGatewaySubscriptionPaymentOptions {

}
```


### OspGatewaySubscriptionSubscription <a name="OspGatewaySubscriptionSubscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

&ospgatewaysubscription.OspGatewaySubscriptionSubscription {
	SubscriptionPlanNumber: *string,
	AccountType: *string,
	BillingAddress: interface{},
	BillToCustAccountId: *string,
	CurrencyCode: *string,
	GsiOrgCode: *string,
	Id: *string,
	IsIntentToPay: interface{},
	LanguageCode: *string,
	OrganizationId: *string,
	PaymentGateway: github.com/rhizo-co/cdktf-provider-oci-go/oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway,
	PaymentOptions: interface{},
	PlanType: *string,
	ShipToCustAcctRoleId: *string,
	ShipToCustAcctSiteId: *string,
	TaxInfo: github.com/rhizo-co/cdktf-provider-oci-go/oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo,
	TimePersonalToCorporateConv: *string,
	TimePlanUpgrade: *string,
	TimeStart: *string,
	UpgradeState: *string,
	UpgradeStateDetails: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.subscriptionPlanNumber">SubscriptionPlanNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#subscription_plan_number OspGatewaySubscription#subscription_plan_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.accountType">AccountType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#account_type OspGatewaySubscription#account_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.billingAddress">BillingAddress</a></code> | <code>interface{}</code> | billing_address block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.billToCustAccountId">BillToCustAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#bill_to_cust_account_id OspGatewaySubscription#bill_to_cust_account_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.currencyCode">CurrencyCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#currency_code OspGatewaySubscription#currency_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.gsiOrgCode">GsiOrgCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#gsi_org_code OspGatewaySubscription#gsi_org_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#id OspGatewaySubscription#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.isIntentToPay">IsIntentToPay</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#is_intent_to_pay OspGatewaySubscription#is_intent_to_pay}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.languageCode">LanguageCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#language_code OspGatewaySubscription#language_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.organizationId">OrganizationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#organization_id OspGatewaySubscription#organization_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.paymentGateway">PaymentGateway</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a></code> | payment_gateway block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.paymentOptions">PaymentOptions</a></code> | <code>interface{}</code> | payment_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.planType">PlanType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#plan_type OspGatewaySubscription#plan_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.shipToCustAcctRoleId">ShipToCustAcctRoleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#ship_to_cust_acct_role_id OspGatewaySubscription#ship_to_cust_acct_role_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.shipToCustAcctSiteId">ShipToCustAcctSiteId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#ship_to_cust_acct_site_id OspGatewaySubscription#ship_to_cust_acct_site_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.taxInfo">TaxInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a></code> | tax_info block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.timePersonalToCorporateConv">TimePersonalToCorporateConv</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_personal_to_corporate_conv OspGatewaySubscription#time_personal_to_corporate_conv}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.timePlanUpgrade">TimePlanUpgrade</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_plan_upgrade OspGatewaySubscription#time_plan_upgrade}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.timeStart">TimeStart</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_start OspGatewaySubscription#time_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.upgradeState">UpgradeState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#upgrade_state OspGatewaySubscription#upgrade_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.upgradeStateDetails">UpgradeStateDetails</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#upgrade_state_details OspGatewaySubscription#upgrade_state_details}. |

---

##### `SubscriptionPlanNumber`<sup>Required</sup> <a name="SubscriptionPlanNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.subscriptionPlanNumber"></a>

```go
SubscriptionPlanNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#subscription_plan_number OspGatewaySubscription#subscription_plan_number}.

---

##### `AccountType`<sup>Optional</sup> <a name="AccountType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.accountType"></a>

```go
AccountType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#account_type OspGatewaySubscription#account_type}.

---

##### `BillingAddress`<sup>Optional</sup> <a name="BillingAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.billingAddress"></a>

```go
BillingAddress interface{}
```

- *Type:* interface{}

billing_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#billing_address OspGatewaySubscription#billing_address}

---

##### `BillToCustAccountId`<sup>Optional</sup> <a name="BillToCustAccountId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.billToCustAccountId"></a>

```go
BillToCustAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#bill_to_cust_account_id OspGatewaySubscription#bill_to_cust_account_id}.

---

##### `CurrencyCode`<sup>Optional</sup> <a name="CurrencyCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.currencyCode"></a>

```go
CurrencyCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#currency_code OspGatewaySubscription#currency_code}.

---

##### `GsiOrgCode`<sup>Optional</sup> <a name="GsiOrgCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.gsiOrgCode"></a>

```go
GsiOrgCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#gsi_org_code OspGatewaySubscription#gsi_org_code}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#id OspGatewaySubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsIntentToPay`<sup>Optional</sup> <a name="IsIntentToPay" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.isIntentToPay"></a>

```go
IsIntentToPay interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#is_intent_to_pay OspGatewaySubscription#is_intent_to_pay}.

---

##### `LanguageCode`<sup>Optional</sup> <a name="LanguageCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.languageCode"></a>

```go
LanguageCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#language_code OspGatewaySubscription#language_code}.

---

##### `OrganizationId`<sup>Optional</sup> <a name="OrganizationId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.organizationId"></a>

```go
OrganizationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#organization_id OspGatewaySubscription#organization_id}.

---

##### `PaymentGateway`<sup>Optional</sup> <a name="PaymentGateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.paymentGateway"></a>

```go
PaymentGateway OspGatewaySubscriptionSubscriptionPaymentGateway
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a>

payment_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#payment_gateway OspGatewaySubscription#payment_gateway}

---

##### `PaymentOptions`<sup>Optional</sup> <a name="PaymentOptions" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.paymentOptions"></a>

```go
PaymentOptions interface{}
```

- *Type:* interface{}

payment_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#payment_options OspGatewaySubscription#payment_options}

---

##### `PlanType`<sup>Optional</sup> <a name="PlanType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.planType"></a>

```go
PlanType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#plan_type OspGatewaySubscription#plan_type}.

---

##### `ShipToCustAcctRoleId`<sup>Optional</sup> <a name="ShipToCustAcctRoleId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.shipToCustAcctRoleId"></a>

```go
ShipToCustAcctRoleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#ship_to_cust_acct_role_id OspGatewaySubscription#ship_to_cust_acct_role_id}.

---

##### `ShipToCustAcctSiteId`<sup>Optional</sup> <a name="ShipToCustAcctSiteId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.shipToCustAcctSiteId"></a>

```go
ShipToCustAcctSiteId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#ship_to_cust_acct_site_id OspGatewaySubscription#ship_to_cust_acct_site_id}.

---

##### `TaxInfo`<sup>Optional</sup> <a name="TaxInfo" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.taxInfo"></a>

```go
TaxInfo OspGatewaySubscriptionSubscriptionTaxInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a>

tax_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_info OspGatewaySubscription#tax_info}

---

##### `TimePersonalToCorporateConv`<sup>Optional</sup> <a name="TimePersonalToCorporateConv" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.timePersonalToCorporateConv"></a>

```go
TimePersonalToCorporateConv *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_personal_to_corporate_conv OspGatewaySubscription#time_personal_to_corporate_conv}.

---

##### `TimePlanUpgrade`<sup>Optional</sup> <a name="TimePlanUpgrade" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.timePlanUpgrade"></a>

```go
TimePlanUpgrade *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_plan_upgrade OspGatewaySubscription#time_plan_upgrade}.

---

##### `TimeStart`<sup>Optional</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.timeStart"></a>

```go
TimeStart *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_start OspGatewaySubscription#time_start}.

---

##### `UpgradeState`<sup>Optional</sup> <a name="UpgradeState" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.upgradeState"></a>

```go
UpgradeState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#upgrade_state OspGatewaySubscription#upgrade_state}.

---

##### `UpgradeStateDetails`<sup>Optional</sup> <a name="UpgradeStateDetails" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.upgradeStateDetails"></a>

```go
UpgradeStateDetails *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#upgrade_state_details OspGatewaySubscription#upgrade_state_details}.

---

### OspGatewaySubscriptionSubscriptionBillingAddress <a name="OspGatewaySubscriptionSubscriptionBillingAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

&ospgatewaysubscription.OspGatewaySubscriptionSubscriptionBillingAddress {
	AddressKey: *string,
	City: *string,
	CompanyName: *string,
	ContributorClass: *string,
	Country: *string,
	County: *string,
	DepartmentName: *string,
	EmailAddress: *string,
	FirstName: *string,
	InternalNumber: *string,
	JobTitle: *string,
	LastName: *string,
	Line1: *string,
	Line2: *string,
	Line3: *string,
	Line4: *string,
	MiddleName: *string,
	MunicipalInscription: *string,
	PhoneCountryCode: *string,
	PhoneNumber: *string,
	PostalCode: *string,
	Province: *string,
	State: *string,
	StateInscription: *string,
	StreetName: *string,
	StreetNumber: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.addressKey">AddressKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#address_key OspGatewaySubscription#address_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.city">City</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#city OspGatewaySubscription#city}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.companyName">CompanyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#company_name OspGatewaySubscription#company_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.contributorClass">ContributorClass</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#contributor_class OspGatewaySubscription#contributor_class}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.country">Country</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#country OspGatewaySubscription#country}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.county">County</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#county OspGatewaySubscription#county}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.departmentName">DepartmentName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#department_name OspGatewaySubscription#department_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#email_address OspGatewaySubscription#email_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.firstName">FirstName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#first_name OspGatewaySubscription#first_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.internalNumber">InternalNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#internal_number OspGatewaySubscription#internal_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.jobTitle">JobTitle</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#job_title OspGatewaySubscription#job_title}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.lastName">LastName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#last_name OspGatewaySubscription#last_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line1">Line1</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line1 OspGatewaySubscription#line1}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line2">Line2</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line2 OspGatewaySubscription#line2}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line3">Line3</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line3 OspGatewaySubscription#line3}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line4">Line4</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line4 OspGatewaySubscription#line4}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.middleName">MiddleName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#middle_name OspGatewaySubscription#middle_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.municipalInscription">MunicipalInscription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#municipal_inscription OspGatewaySubscription#municipal_inscription}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.phoneCountryCode">PhoneCountryCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#phone_country_code OspGatewaySubscription#phone_country_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#phone_number OspGatewaySubscription#phone_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.postalCode">PostalCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#postal_code OspGatewaySubscription#postal_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.province">Province</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#province OspGatewaySubscription#province}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#state OspGatewaySubscription#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.stateInscription">StateInscription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#state_inscription OspGatewaySubscription#state_inscription}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.streetName">StreetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#street_name OspGatewaySubscription#street_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.streetNumber">StreetNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#street_number OspGatewaySubscription#street_number}. |

---

##### `AddressKey`<sup>Optional</sup> <a name="AddressKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.addressKey"></a>

```go
AddressKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#address_key OspGatewaySubscription#address_key}.

---

##### `City`<sup>Optional</sup> <a name="City" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.city"></a>

```go
City *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#city OspGatewaySubscription#city}.

---

##### `CompanyName`<sup>Optional</sup> <a name="CompanyName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.companyName"></a>

```go
CompanyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#company_name OspGatewaySubscription#company_name}.

---

##### `ContributorClass`<sup>Optional</sup> <a name="ContributorClass" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.contributorClass"></a>

```go
ContributorClass *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#contributor_class OspGatewaySubscription#contributor_class}.

---

##### `Country`<sup>Optional</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.country"></a>

```go
Country *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#country OspGatewaySubscription#country}.

---

##### `County`<sup>Optional</sup> <a name="County" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.county"></a>

```go
County *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#county OspGatewaySubscription#county}.

---

##### `DepartmentName`<sup>Optional</sup> <a name="DepartmentName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.departmentName"></a>

```go
DepartmentName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#department_name OspGatewaySubscription#department_name}.

---

##### `EmailAddress`<sup>Optional</sup> <a name="EmailAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.emailAddress"></a>

```go
EmailAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#email_address OspGatewaySubscription#email_address}.

---

##### `FirstName`<sup>Optional</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.firstName"></a>

```go
FirstName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#first_name OspGatewaySubscription#first_name}.

---

##### `InternalNumber`<sup>Optional</sup> <a name="InternalNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.internalNumber"></a>

```go
InternalNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#internal_number OspGatewaySubscription#internal_number}.

---

##### `JobTitle`<sup>Optional</sup> <a name="JobTitle" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.jobTitle"></a>

```go
JobTitle *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#job_title OspGatewaySubscription#job_title}.

---

##### `LastName`<sup>Optional</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.lastName"></a>

```go
LastName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#last_name OspGatewaySubscription#last_name}.

---

##### `Line1`<sup>Optional</sup> <a name="Line1" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line1"></a>

```go
Line1 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line1 OspGatewaySubscription#line1}.

---

##### `Line2`<sup>Optional</sup> <a name="Line2" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line2"></a>

```go
Line2 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line2 OspGatewaySubscription#line2}.

---

##### `Line3`<sup>Optional</sup> <a name="Line3" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line3"></a>

```go
Line3 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line3 OspGatewaySubscription#line3}.

---

##### `Line4`<sup>Optional</sup> <a name="Line4" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line4"></a>

```go
Line4 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line4 OspGatewaySubscription#line4}.

---

##### `MiddleName`<sup>Optional</sup> <a name="MiddleName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.middleName"></a>

```go
MiddleName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#middle_name OspGatewaySubscription#middle_name}.

---

##### `MunicipalInscription`<sup>Optional</sup> <a name="MunicipalInscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.municipalInscription"></a>

```go
MunicipalInscription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#municipal_inscription OspGatewaySubscription#municipal_inscription}.

---

##### `PhoneCountryCode`<sup>Optional</sup> <a name="PhoneCountryCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.phoneCountryCode"></a>

```go
PhoneCountryCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#phone_country_code OspGatewaySubscription#phone_country_code}.

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.phoneNumber"></a>

```go
PhoneNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#phone_number OspGatewaySubscription#phone_number}.

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.postalCode"></a>

```go
PostalCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#postal_code OspGatewaySubscription#postal_code}.

---

##### `Province`<sup>Optional</sup> <a name="Province" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.province"></a>

```go
Province *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#province OspGatewaySubscription#province}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#state OspGatewaySubscription#state}.

---

##### `StateInscription`<sup>Optional</sup> <a name="StateInscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.stateInscription"></a>

```go
StateInscription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#state_inscription OspGatewaySubscription#state_inscription}.

---

##### `StreetName`<sup>Optional</sup> <a name="StreetName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.streetName"></a>

```go
StreetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#street_name OspGatewaySubscription#street_name}.

---

##### `StreetNumber`<sup>Optional</sup> <a name="StreetNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.streetNumber"></a>

```go
StreetNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#street_number OspGatewaySubscription#street_number}.

---

### OspGatewaySubscriptionSubscriptionPaymentGateway <a name="OspGatewaySubscriptionSubscriptionPaymentGateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

&ospgatewaysubscription.OspGatewaySubscriptionSubscriptionPaymentGateway {
	MerchantDefinedData: github.com/rhizo-co/cdktf-provider-oci-go/oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway.property.merchantDefinedData">MerchantDefinedData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a></code> | merchant_defined_data block. |

---

##### `MerchantDefinedData`<sup>Optional</sup> <a name="MerchantDefinedData" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway.property.merchantDefinedData"></a>

```go
MerchantDefinedData OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a>

merchant_defined_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#merchant_defined_data OspGatewaySubscription#merchant_defined_data}

---

### OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData <a name="OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

&ospgatewaysubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData {
	CloudAccountName: *string,
	PromoType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData.property.cloudAccountName">CloudAccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#cloud_account_name OspGatewaySubscription#cloud_account_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData.property.promoType">PromoType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#promo_type OspGatewaySubscription#promo_type}. |

---

##### `CloudAccountName`<sup>Optional</sup> <a name="CloudAccountName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData.property.cloudAccountName"></a>

```go
CloudAccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#cloud_account_name OspGatewaySubscription#cloud_account_name}.

---

##### `PromoType`<sup>Optional</sup> <a name="PromoType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData.property.promoType"></a>

```go
PromoType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#promo_type OspGatewaySubscription#promo_type}.

---

### OspGatewaySubscriptionSubscriptionPaymentOptions <a name="OspGatewaySubscriptionSubscriptionPaymentOptions" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

&ospgatewaysubscription.OspGatewaySubscriptionSubscriptionPaymentOptions {
	PaymentMethod: *string,
	CreditCardType: *string,
	EmailAddress: *string,
	ExtBillingAgreementId: *string,
	FirstName: *string,
	LastDigits: *string,
	LastName: *string,
	NameOnCard: *string,
	TimeExpiration: *string,
	WalletInstrumentId: *string,
	WalletTransactionId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.paymentMethod">PaymentMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#payment_method OspGatewaySubscription#payment_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.creditCardType">CreditCardType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#credit_card_type OspGatewaySubscription#credit_card_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#email_address OspGatewaySubscription#email_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.extBillingAgreementId">ExtBillingAgreementId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#ext_billing_agreement_id OspGatewaySubscription#ext_billing_agreement_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.firstName">FirstName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#first_name OspGatewaySubscription#first_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.lastDigits">LastDigits</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#last_digits OspGatewaySubscription#last_digits}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.lastName">LastName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#last_name OspGatewaySubscription#last_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.nameOnCard">NameOnCard</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#name_on_card OspGatewaySubscription#name_on_card}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.timeExpiration">TimeExpiration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_expiration OspGatewaySubscription#time_expiration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.walletInstrumentId">WalletInstrumentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#wallet_instrument_id OspGatewaySubscription#wallet_instrument_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.walletTransactionId">WalletTransactionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#wallet_transaction_id OspGatewaySubscription#wallet_transaction_id}. |

---

##### `PaymentMethod`<sup>Required</sup> <a name="PaymentMethod" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.paymentMethod"></a>

```go
PaymentMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#payment_method OspGatewaySubscription#payment_method}.

---

##### `CreditCardType`<sup>Optional</sup> <a name="CreditCardType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.creditCardType"></a>

```go
CreditCardType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#credit_card_type OspGatewaySubscription#credit_card_type}.

---

##### `EmailAddress`<sup>Optional</sup> <a name="EmailAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.emailAddress"></a>

```go
EmailAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#email_address OspGatewaySubscription#email_address}.

---

##### `ExtBillingAgreementId`<sup>Optional</sup> <a name="ExtBillingAgreementId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.extBillingAgreementId"></a>

```go
ExtBillingAgreementId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#ext_billing_agreement_id OspGatewaySubscription#ext_billing_agreement_id}.

---

##### `FirstName`<sup>Optional</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.firstName"></a>

```go
FirstName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#first_name OspGatewaySubscription#first_name}.

---

##### `LastDigits`<sup>Optional</sup> <a name="LastDigits" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.lastDigits"></a>

```go
LastDigits *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#last_digits OspGatewaySubscription#last_digits}.

---

##### `LastName`<sup>Optional</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.lastName"></a>

```go
LastName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#last_name OspGatewaySubscription#last_name}.

---

##### `NameOnCard`<sup>Optional</sup> <a name="NameOnCard" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.nameOnCard"></a>

```go
NameOnCard *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#name_on_card OspGatewaySubscription#name_on_card}.

---

##### `TimeExpiration`<sup>Optional</sup> <a name="TimeExpiration" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.timeExpiration"></a>

```go
TimeExpiration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_expiration OspGatewaySubscription#time_expiration}.

---

##### `WalletInstrumentId`<sup>Optional</sup> <a name="WalletInstrumentId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.walletInstrumentId"></a>

```go
WalletInstrumentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#wallet_instrument_id OspGatewaySubscription#wallet_instrument_id}.

---

##### `WalletTransactionId`<sup>Optional</sup> <a name="WalletTransactionId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.walletTransactionId"></a>

```go
WalletTransactionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#wallet_transaction_id OspGatewaySubscription#wallet_transaction_id}.

---

### OspGatewaySubscriptionSubscriptionTaxInfo <a name="OspGatewaySubscriptionSubscriptionTaxInfo" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

&ospgatewaysubscription.OspGatewaySubscriptionSubscriptionTaxInfo {
	NoTaxReasonCode: *string,
	NoTaxReasonCodeDetails: *string,
	TaxCnpj: *string,
	TaxPayerId: *string,
	TaxRegNumber: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.noTaxReasonCode">NoTaxReasonCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#no_tax_reason_code OspGatewaySubscription#no_tax_reason_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.noTaxReasonCodeDetails">NoTaxReasonCodeDetails</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#no_tax_reason_code_details OspGatewaySubscription#no_tax_reason_code_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.taxCnpj">TaxCnpj</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_cnpj OspGatewaySubscription#tax_cnpj}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.taxPayerId">TaxPayerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_payer_id OspGatewaySubscription#tax_payer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.taxRegNumber">TaxRegNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_reg_number OspGatewaySubscription#tax_reg_number}. |

---

##### `NoTaxReasonCode`<sup>Optional</sup> <a name="NoTaxReasonCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.noTaxReasonCode"></a>

```go
NoTaxReasonCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#no_tax_reason_code OspGatewaySubscription#no_tax_reason_code}.

---

##### `NoTaxReasonCodeDetails`<sup>Optional</sup> <a name="NoTaxReasonCodeDetails" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.noTaxReasonCodeDetails"></a>

```go
NoTaxReasonCodeDetails *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#no_tax_reason_code_details OspGatewaySubscription#no_tax_reason_code_details}.

---

##### `TaxCnpj`<sup>Optional</sup> <a name="TaxCnpj" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.taxCnpj"></a>

```go
TaxCnpj *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_cnpj OspGatewaySubscription#tax_cnpj}.

---

##### `TaxPayerId`<sup>Optional</sup> <a name="TaxPayerId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.taxPayerId"></a>

```go
TaxPayerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_payer_id OspGatewaySubscription#tax_payer_id}.

---

##### `TaxRegNumber`<sup>Optional</sup> <a name="TaxRegNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.taxRegNumber"></a>

```go
TaxRegNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_reg_number OspGatewaySubscription#tax_reg_number}.

---

### OspGatewaySubscriptionTaxInfo <a name="OspGatewaySubscriptionTaxInfo" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfo.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

&ospgatewaysubscription.OspGatewaySubscriptionTaxInfo {

}
```


### OspGatewaySubscriptionTimeouts <a name="OspGatewaySubscriptionTimeouts" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

&ospgatewaysubscription.OspGatewaySubscriptionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#create OspGatewaySubscription#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#delete OspGatewaySubscription#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#update OspGatewaySubscription#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#create OspGatewaySubscription#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#delete OspGatewaySubscription#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#update OspGatewaySubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OspGatewaySubscriptionBillingAddressList <a name="OspGatewaySubscriptionBillingAddressList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

ospgatewaysubscription.NewOspGatewaySubscriptionBillingAddressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OspGatewaySubscriptionBillingAddressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.get"></a>

```go
func Get(index *f64) OspGatewaySubscriptionBillingAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OspGatewaySubscriptionBillingAddressOutputReference <a name="OspGatewaySubscriptionBillingAddressOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

ospgatewaysubscription.NewOspGatewaySubscriptionBillingAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OspGatewaySubscriptionBillingAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.addressKey">AddressKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.companyName">CompanyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.contributorClass">ContributorClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.county">County</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.departmentName">DepartmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.internalNumber">InternalNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.jobTitle">JobTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line1">Line1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line2">Line2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line3">Line3</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line4">Line4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.middleName">MiddleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.municipalInscription">MunicipalInscription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.phoneCountryCode">PhoneCountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.province">Province</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.stateInscription">StateInscription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.streetName">StreetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.streetNumber">StreetNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddress">OspGatewaySubscriptionBillingAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressKey`<sup>Required</sup> <a name="AddressKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.addressKey"></a>

```go
func AddressKey() *string
```

- *Type:* *string

---

##### `City`<sup>Required</sup> <a name="City" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `CompanyName`<sup>Required</sup> <a name="CompanyName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.companyName"></a>

```go
func CompanyName() *string
```

- *Type:* *string

---

##### `ContributorClass`<sup>Required</sup> <a name="ContributorClass" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.contributorClass"></a>

```go
func ContributorClass() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `County`<sup>Required</sup> <a name="County" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.county"></a>

```go
func County() *string
```

- *Type:* *string

---

##### `DepartmentName`<sup>Required</sup> <a name="DepartmentName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.departmentName"></a>

```go
func DepartmentName() *string
```

- *Type:* *string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `InternalNumber`<sup>Required</sup> <a name="InternalNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.internalNumber"></a>

```go
func InternalNumber() *string
```

- *Type:* *string

---

##### `JobTitle`<sup>Required</sup> <a name="JobTitle" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.jobTitle"></a>

```go
func JobTitle() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `Line1`<sup>Required</sup> <a name="Line1" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line1"></a>

```go
func Line1() *string
```

- *Type:* *string

---

##### `Line2`<sup>Required</sup> <a name="Line2" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line2"></a>

```go
func Line2() *string
```

- *Type:* *string

---

##### `Line3`<sup>Required</sup> <a name="Line3" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line3"></a>

```go
func Line3() *string
```

- *Type:* *string

---

##### `Line4`<sup>Required</sup> <a name="Line4" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line4"></a>

```go
func Line4() *string
```

- *Type:* *string

---

##### `MiddleName`<sup>Required</sup> <a name="MiddleName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.middleName"></a>

```go
func MiddleName() *string
```

- *Type:* *string

---

##### `MunicipalInscription`<sup>Required</sup> <a name="MunicipalInscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.municipalInscription"></a>

```go
func MunicipalInscription() *string
```

- *Type:* *string

---

##### `PhoneCountryCode`<sup>Required</sup> <a name="PhoneCountryCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.phoneCountryCode"></a>

```go
func PhoneCountryCode() *string
```

- *Type:* *string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.phoneNumber"></a>

```go
func PhoneNumber() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `Province`<sup>Required</sup> <a name="Province" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.province"></a>

```go
func Province() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateInscription`<sup>Required</sup> <a name="StateInscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.stateInscription"></a>

```go
func StateInscription() *string
```

- *Type:* *string

---

##### `StreetName`<sup>Required</sup> <a name="StreetName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.streetName"></a>

```go
func StreetName() *string
```

- *Type:* *string

---

##### `StreetNumber`<sup>Required</sup> <a name="StreetNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.streetNumber"></a>

```go
func StreetNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() OspGatewaySubscriptionBillingAddress
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddress">OspGatewaySubscriptionBillingAddress</a>

---


### OspGatewaySubscriptionPaymentGatewayList <a name="OspGatewaySubscriptionPaymentGatewayList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

ospgatewaysubscription.NewOspGatewaySubscriptionPaymentGatewayList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OspGatewaySubscriptionPaymentGatewayList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.get"></a>

```go
func Get(index *f64) OspGatewaySubscriptionPaymentGatewayOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList <a name="OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

ospgatewaysubscription.NewOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.get"></a>

```go
func Get(index *f64) OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference <a name="OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

ospgatewaysubscription.NewOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName">CloudAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType">PromoType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionPaymentGatewayMerchantDefinedData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudAccountName`<sup>Required</sup> <a name="CloudAccountName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName"></a>

```go
func CloudAccountName() *string
```

- *Type:* *string

---

##### `PromoType`<sup>Required</sup> <a name="PromoType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType"></a>

```go
func PromoType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue"></a>

```go
func InternalValue() OspGatewaySubscriptionPaymentGatewayMerchantDefinedData
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionPaymentGatewayMerchantDefinedData</a>

---


### OspGatewaySubscriptionPaymentGatewayOutputReference <a name="OspGatewaySubscriptionPaymentGatewayOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

ospgatewaysubscription.NewOspGatewaySubscriptionPaymentGatewayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OspGatewaySubscriptionPaymentGatewayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.merchantDefinedData">MerchantDefinedData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList">OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGateway">OspGatewaySubscriptionPaymentGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MerchantDefinedData`<sup>Required</sup> <a name="MerchantDefinedData" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.merchantDefinedData"></a>

```go
func MerchantDefinedData() OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList">OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.internalValue"></a>

```go
func InternalValue() OspGatewaySubscriptionPaymentGateway
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGateway">OspGatewaySubscriptionPaymentGateway</a>

---


### OspGatewaySubscriptionPaymentOptionsList <a name="OspGatewaySubscriptionPaymentOptionsList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

ospgatewaysubscription.NewOspGatewaySubscriptionPaymentOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OspGatewaySubscriptionPaymentOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.get"></a>

```go
func Get(index *f64) OspGatewaySubscriptionPaymentOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OspGatewaySubscriptionPaymentOptionsOutputReference <a name="OspGatewaySubscriptionPaymentOptionsOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

ospgatewaysubscription.NewOspGatewaySubscriptionPaymentOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OspGatewaySubscriptionPaymentOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.creditCardType">CreditCardType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId">ExtBillingAgreementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.lastDigits">LastDigits</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.nameOnCard">NameOnCard</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.paymentMethod">PaymentMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.timeExpiration">TimeExpiration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.walletInstrumentId">WalletInstrumentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.walletTransactionId">WalletTransactionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptions">OspGatewaySubscriptionPaymentOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreditCardType`<sup>Required</sup> <a name="CreditCardType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.creditCardType"></a>

```go
func CreditCardType() *string
```

- *Type:* *string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `ExtBillingAgreementId`<sup>Required</sup> <a name="ExtBillingAgreementId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId"></a>

```go
func ExtBillingAgreementId() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastDigits`<sup>Required</sup> <a name="LastDigits" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.lastDigits"></a>

```go
func LastDigits() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `NameOnCard`<sup>Required</sup> <a name="NameOnCard" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.nameOnCard"></a>

```go
func NameOnCard() *string
```

- *Type:* *string

---

##### `PaymentMethod`<sup>Required</sup> <a name="PaymentMethod" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.paymentMethod"></a>

```go
func PaymentMethod() *string
```

- *Type:* *string

---

##### `TimeExpiration`<sup>Required</sup> <a name="TimeExpiration" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.timeExpiration"></a>

```go
func TimeExpiration() *string
```

- *Type:* *string

---

##### `WalletInstrumentId`<sup>Required</sup> <a name="WalletInstrumentId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.walletInstrumentId"></a>

```go
func WalletInstrumentId() *string
```

- *Type:* *string

---

##### `WalletTransactionId`<sup>Required</sup> <a name="WalletTransactionId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.walletTransactionId"></a>

```go
func WalletTransactionId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() OspGatewaySubscriptionPaymentOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptions">OspGatewaySubscriptionPaymentOptions</a>

---


### OspGatewaySubscriptionSubscriptionBillingAddressList <a name="OspGatewaySubscriptionSubscriptionBillingAddressList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

ospgatewaysubscription.NewOspGatewaySubscriptionSubscriptionBillingAddressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OspGatewaySubscriptionSubscriptionBillingAddressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.get"></a>

```go
func Get(index *f64) OspGatewaySubscriptionSubscriptionBillingAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OspGatewaySubscriptionSubscriptionBillingAddressOutputReference <a name="OspGatewaySubscriptionSubscriptionBillingAddressOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

ospgatewaysubscription.NewOspGatewaySubscriptionSubscriptionBillingAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OspGatewaySubscriptionSubscriptionBillingAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetAddressKey">ResetAddressKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCompanyName">ResetCompanyName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetContributorClass">ResetContributorClass</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCounty">ResetCounty</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetDepartmentName">ResetDepartmentName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetEmailAddress">ResetEmailAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetFirstName">ResetFirstName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetInternalNumber">ResetInternalNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetJobTitle">ResetJobTitle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLastName">ResetLastName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine1">ResetLine1</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine2">ResetLine2</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine3">ResetLine3</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine4">ResetLine4</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetMiddleName">ResetMiddleName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetMunicipalInscription">ResetMunicipalInscription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetPhoneCountryCode">ResetPhoneCountryCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetProvince">ResetProvince</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetStateInscription">ResetStateInscription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetStreetName">ResetStreetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetStreetNumber">ResetStreetNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddressKey` <a name="ResetAddressKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetAddressKey"></a>

```go
func ResetAddressKey()
```

##### `ResetCity` <a name="ResetCity" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCity"></a>

```go
func ResetCity()
```

##### `ResetCompanyName` <a name="ResetCompanyName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCompanyName"></a>

```go
func ResetCompanyName()
```

##### `ResetContributorClass` <a name="ResetContributorClass" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetContributorClass"></a>

```go
func ResetContributorClass()
```

##### `ResetCountry` <a name="ResetCountry" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCountry"></a>

```go
func ResetCountry()
```

##### `ResetCounty` <a name="ResetCounty" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCounty"></a>

```go
func ResetCounty()
```

##### `ResetDepartmentName` <a name="ResetDepartmentName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetDepartmentName"></a>

```go
func ResetDepartmentName()
```

##### `ResetEmailAddress` <a name="ResetEmailAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetEmailAddress"></a>

```go
func ResetEmailAddress()
```

##### `ResetFirstName` <a name="ResetFirstName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetFirstName"></a>

```go
func ResetFirstName()
```

##### `ResetInternalNumber` <a name="ResetInternalNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetInternalNumber"></a>

```go
func ResetInternalNumber()
```

##### `ResetJobTitle` <a name="ResetJobTitle" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetJobTitle"></a>

```go
func ResetJobTitle()
```

##### `ResetLastName` <a name="ResetLastName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLastName"></a>

```go
func ResetLastName()
```

##### `ResetLine1` <a name="ResetLine1" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine1"></a>

```go
func ResetLine1()
```

##### `ResetLine2` <a name="ResetLine2" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine2"></a>

```go
func ResetLine2()
```

##### `ResetLine3` <a name="ResetLine3" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine3"></a>

```go
func ResetLine3()
```

##### `ResetLine4` <a name="ResetLine4" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine4"></a>

```go
func ResetLine4()
```

##### `ResetMiddleName` <a name="ResetMiddleName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetMiddleName"></a>

```go
func ResetMiddleName()
```

##### `ResetMunicipalInscription` <a name="ResetMunicipalInscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetMunicipalInscription"></a>

```go
func ResetMunicipalInscription()
```

##### `ResetPhoneCountryCode` <a name="ResetPhoneCountryCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetPhoneCountryCode"></a>

```go
func ResetPhoneCountryCode()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetPhoneNumber"></a>

```go
func ResetPhoneNumber()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetPostalCode"></a>

```go
func ResetPostalCode()
```

##### `ResetProvince` <a name="ResetProvince" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetProvince"></a>

```go
func ResetProvince()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetState"></a>

```go
func ResetState()
```

##### `ResetStateInscription` <a name="ResetStateInscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetStateInscription"></a>

```go
func ResetStateInscription()
```

##### `ResetStreetName` <a name="ResetStreetName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetStreetName"></a>

```go
func ResetStreetName()
```

##### `ResetStreetNumber` <a name="ResetStreetNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetStreetNumber"></a>

```go
func ResetStreetNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.addressKeyInput">AddressKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.cityInput">CityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.companyNameInput">CompanyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.contributorClassInput">ContributorClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.countryInput">CountryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.countyInput">CountyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.departmentNameInput">DepartmentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.emailAddressInput">EmailAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.firstNameInput">FirstNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalNumberInput">InternalNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.jobTitleInput">JobTitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.lastNameInput">LastNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line1Input">Line1Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line2Input">Line2Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line3Input">Line3Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line4Input">Line4Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.middleNameInput">MiddleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.municipalInscriptionInput">MunicipalInscriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneCountryCodeInput">PhoneCountryCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.postalCodeInput">PostalCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.provinceInput">ProvinceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.stateInscriptionInput">StateInscriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetNameInput">StreetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetNumberInput">StreetNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.addressKey">AddressKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.companyName">CompanyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.contributorClass">ContributorClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.county">County</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.departmentName">DepartmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalNumber">InternalNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.jobTitle">JobTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line1">Line1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line2">Line2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line3">Line3</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line4">Line4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.middleName">MiddleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.municipalInscription">MunicipalInscription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneCountryCode">PhoneCountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.province">Province</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.stateInscription">StateInscription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetName">StreetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetNumber">StreetNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressKeyInput`<sup>Optional</sup> <a name="AddressKeyInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.addressKeyInput"></a>

```go
func AddressKeyInput() *string
```

- *Type:* *string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.cityInput"></a>

```go
func CityInput() *string
```

- *Type:* *string

---

##### `CompanyNameInput`<sup>Optional</sup> <a name="CompanyNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.companyNameInput"></a>

```go
func CompanyNameInput() *string
```

- *Type:* *string

---

##### `ContributorClassInput`<sup>Optional</sup> <a name="ContributorClassInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.contributorClassInput"></a>

```go
func ContributorClassInput() *string
```

- *Type:* *string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.countryInput"></a>

```go
func CountryInput() *string
```

- *Type:* *string

---

##### `CountyInput`<sup>Optional</sup> <a name="CountyInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.countyInput"></a>

```go
func CountyInput() *string
```

- *Type:* *string

---

##### `DepartmentNameInput`<sup>Optional</sup> <a name="DepartmentNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.departmentNameInput"></a>

```go
func DepartmentNameInput() *string
```

- *Type:* *string

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.emailAddressInput"></a>

```go
func EmailAddressInput() *string
```

- *Type:* *string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.firstNameInput"></a>

```go
func FirstNameInput() *string
```

- *Type:* *string

---

##### `InternalNumberInput`<sup>Optional</sup> <a name="InternalNumberInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalNumberInput"></a>

```go
func InternalNumberInput() *string
```

- *Type:* *string

---

##### `JobTitleInput`<sup>Optional</sup> <a name="JobTitleInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.jobTitleInput"></a>

```go
func JobTitleInput() *string
```

- *Type:* *string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.lastNameInput"></a>

```go
func LastNameInput() *string
```

- *Type:* *string

---

##### `Line1Input`<sup>Optional</sup> <a name="Line1Input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line1Input"></a>

```go
func Line1Input() *string
```

- *Type:* *string

---

##### `Line2Input`<sup>Optional</sup> <a name="Line2Input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line2Input"></a>

```go
func Line2Input() *string
```

- *Type:* *string

---

##### `Line3Input`<sup>Optional</sup> <a name="Line3Input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line3Input"></a>

```go
func Line3Input() *string
```

- *Type:* *string

---

##### `Line4Input`<sup>Optional</sup> <a name="Line4Input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line4Input"></a>

```go
func Line4Input() *string
```

- *Type:* *string

---

##### `MiddleNameInput`<sup>Optional</sup> <a name="MiddleNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.middleNameInput"></a>

```go
func MiddleNameInput() *string
```

- *Type:* *string

---

##### `MunicipalInscriptionInput`<sup>Optional</sup> <a name="MunicipalInscriptionInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.municipalInscriptionInput"></a>

```go
func MunicipalInscriptionInput() *string
```

- *Type:* *string

---

##### `PhoneCountryCodeInput`<sup>Optional</sup> <a name="PhoneCountryCodeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneCountryCodeInput"></a>

```go
func PhoneCountryCodeInput() *string
```

- *Type:* *string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneNumberInput"></a>

```go
func PhoneNumberInput() *string
```

- *Type:* *string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.postalCodeInput"></a>

```go
func PostalCodeInput() *string
```

- *Type:* *string

---

##### `ProvinceInput`<sup>Optional</sup> <a name="ProvinceInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.provinceInput"></a>

```go
func ProvinceInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `StateInscriptionInput`<sup>Optional</sup> <a name="StateInscriptionInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.stateInscriptionInput"></a>

```go
func StateInscriptionInput() *string
```

- *Type:* *string

---

##### `StreetNameInput`<sup>Optional</sup> <a name="StreetNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetNameInput"></a>

```go
func StreetNameInput() *string
```

- *Type:* *string

---

##### `StreetNumberInput`<sup>Optional</sup> <a name="StreetNumberInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetNumberInput"></a>

```go
func StreetNumberInput() *string
```

- *Type:* *string

---

##### `AddressKey`<sup>Required</sup> <a name="AddressKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.addressKey"></a>

```go
func AddressKey() *string
```

- *Type:* *string

---

##### `City`<sup>Required</sup> <a name="City" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `CompanyName`<sup>Required</sup> <a name="CompanyName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.companyName"></a>

```go
func CompanyName() *string
```

- *Type:* *string

---

##### `ContributorClass`<sup>Required</sup> <a name="ContributorClass" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.contributorClass"></a>

```go
func ContributorClass() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `County`<sup>Required</sup> <a name="County" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.county"></a>

```go
func County() *string
```

- *Type:* *string

---

##### `DepartmentName`<sup>Required</sup> <a name="DepartmentName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.departmentName"></a>

```go
func DepartmentName() *string
```

- *Type:* *string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `InternalNumber`<sup>Required</sup> <a name="InternalNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalNumber"></a>

```go
func InternalNumber() *string
```

- *Type:* *string

---

##### `JobTitle`<sup>Required</sup> <a name="JobTitle" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.jobTitle"></a>

```go
func JobTitle() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `Line1`<sup>Required</sup> <a name="Line1" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line1"></a>

```go
func Line1() *string
```

- *Type:* *string

---

##### `Line2`<sup>Required</sup> <a name="Line2" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line2"></a>

```go
func Line2() *string
```

- *Type:* *string

---

##### `Line3`<sup>Required</sup> <a name="Line3" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line3"></a>

```go
func Line3() *string
```

- *Type:* *string

---

##### `Line4`<sup>Required</sup> <a name="Line4" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line4"></a>

```go
func Line4() *string
```

- *Type:* *string

---

##### `MiddleName`<sup>Required</sup> <a name="MiddleName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.middleName"></a>

```go
func MiddleName() *string
```

- *Type:* *string

---

##### `MunicipalInscription`<sup>Required</sup> <a name="MunicipalInscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.municipalInscription"></a>

```go
func MunicipalInscription() *string
```

- *Type:* *string

---

##### `PhoneCountryCode`<sup>Required</sup> <a name="PhoneCountryCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneCountryCode"></a>

```go
func PhoneCountryCode() *string
```

- *Type:* *string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneNumber"></a>

```go
func PhoneNumber() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `Province`<sup>Required</sup> <a name="Province" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.province"></a>

```go
func Province() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateInscription`<sup>Required</sup> <a name="StateInscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.stateInscription"></a>

```go
func StateInscription() *string
```

- *Type:* *string

---

##### `StreetName`<sup>Required</sup> <a name="StreetName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetName"></a>

```go
func StreetName() *string
```

- *Type:* *string

---

##### `StreetNumber`<sup>Required</sup> <a name="StreetNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetNumber"></a>

```go
func StreetNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OspGatewaySubscriptionSubscriptionOutputReference <a name="OspGatewaySubscriptionSubscriptionOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

ospgatewaysubscription.NewOspGatewaySubscriptionSubscriptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OspGatewaySubscriptionSubscriptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putBillingAddress">PutBillingAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putPaymentGateway">PutPaymentGateway</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putPaymentOptions">PutPaymentOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putTaxInfo">PutTaxInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetAccountType">ResetAccountType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetBillingAddress">ResetBillingAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetBillToCustAccountId">ResetBillToCustAccountId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetCurrencyCode">ResetCurrencyCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetGsiOrgCode">ResetGsiOrgCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetIsIntentToPay">ResetIsIntentToPay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetLanguageCode">ResetLanguageCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetOrganizationId">ResetOrganizationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetPaymentGateway">ResetPaymentGateway</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetPaymentOptions">ResetPaymentOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetPlanType">ResetPlanType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetShipToCustAcctRoleId">ResetShipToCustAcctRoleId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetShipToCustAcctSiteId">ResetShipToCustAcctSiteId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTaxInfo">ResetTaxInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTimePersonalToCorporateConv">ResetTimePersonalToCorporateConv</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTimePlanUpgrade">ResetTimePlanUpgrade</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTimeStart">ResetTimeStart</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetUpgradeState">ResetUpgradeState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetUpgradeStateDetails">ResetUpgradeStateDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBillingAddress` <a name="PutBillingAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putBillingAddress"></a>

```go
func PutBillingAddress(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putBillingAddress.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPaymentGateway` <a name="PutPaymentGateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putPaymentGateway"></a>

```go
func PutPaymentGateway(value OspGatewaySubscriptionSubscriptionPaymentGateway)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putPaymentGateway.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a>

---

##### `PutPaymentOptions` <a name="PutPaymentOptions" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putPaymentOptions"></a>

```go
func PutPaymentOptions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putPaymentOptions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTaxInfo` <a name="PutTaxInfo" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putTaxInfo"></a>

```go
func PutTaxInfo(value OspGatewaySubscriptionSubscriptionTaxInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putTaxInfo.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a>

---

##### `ResetAccountType` <a name="ResetAccountType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetAccountType"></a>

```go
func ResetAccountType()
```

##### `ResetBillingAddress` <a name="ResetBillingAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetBillingAddress"></a>

```go
func ResetBillingAddress()
```

##### `ResetBillToCustAccountId` <a name="ResetBillToCustAccountId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetBillToCustAccountId"></a>

```go
func ResetBillToCustAccountId()
```

##### `ResetCurrencyCode` <a name="ResetCurrencyCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetCurrencyCode"></a>

```go
func ResetCurrencyCode()
```

##### `ResetGsiOrgCode` <a name="ResetGsiOrgCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetGsiOrgCode"></a>

```go
func ResetGsiOrgCode()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetIsIntentToPay` <a name="ResetIsIntentToPay" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetIsIntentToPay"></a>

```go
func ResetIsIntentToPay()
```

##### `ResetLanguageCode` <a name="ResetLanguageCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetLanguageCode"></a>

```go
func ResetLanguageCode()
```

##### `ResetOrganizationId` <a name="ResetOrganizationId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetOrganizationId"></a>

```go
func ResetOrganizationId()
```

##### `ResetPaymentGateway` <a name="ResetPaymentGateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetPaymentGateway"></a>

```go
func ResetPaymentGateway()
```

##### `ResetPaymentOptions` <a name="ResetPaymentOptions" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetPaymentOptions"></a>

```go
func ResetPaymentOptions()
```

##### `ResetPlanType` <a name="ResetPlanType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetPlanType"></a>

```go
func ResetPlanType()
```

##### `ResetShipToCustAcctRoleId` <a name="ResetShipToCustAcctRoleId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetShipToCustAcctRoleId"></a>

```go
func ResetShipToCustAcctRoleId()
```

##### `ResetShipToCustAcctSiteId` <a name="ResetShipToCustAcctSiteId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetShipToCustAcctSiteId"></a>

```go
func ResetShipToCustAcctSiteId()
```

##### `ResetTaxInfo` <a name="ResetTaxInfo" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTaxInfo"></a>

```go
func ResetTaxInfo()
```

##### `ResetTimePersonalToCorporateConv` <a name="ResetTimePersonalToCorporateConv" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTimePersonalToCorporateConv"></a>

```go
func ResetTimePersonalToCorporateConv()
```

##### `ResetTimePlanUpgrade` <a name="ResetTimePlanUpgrade" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTimePlanUpgrade"></a>

```go
func ResetTimePlanUpgrade()
```

##### `ResetTimeStart` <a name="ResetTimeStart" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTimeStart"></a>

```go
func ResetTimeStart()
```

##### `ResetUpgradeState` <a name="ResetUpgradeState" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetUpgradeState"></a>

```go
func ResetUpgradeState()
```

##### `ResetUpgradeStateDetails` <a name="ResetUpgradeStateDetails" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetUpgradeStateDetails"></a>

```go
func ResetUpgradeStateDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billingAddress">BillingAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList">OspGatewaySubscriptionSubscriptionBillingAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentGateway">PaymentGateway</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference">OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentOptions">PaymentOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList">OspGatewaySubscriptionSubscriptionPaymentOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.taxInfo">TaxInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference">OspGatewaySubscriptionSubscriptionTaxInfoOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.accountTypeInput">AccountTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billingAddressInput">BillingAddressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billToCustAccountIdInput">BillToCustAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.currencyCodeInput">CurrencyCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.gsiOrgCodeInput">GsiOrgCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.isIntentToPayInput">IsIntentToPayInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.languageCodeInput">LanguageCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.organizationIdInput">OrganizationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentGatewayInput">PaymentGatewayInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentOptionsInput">PaymentOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.planTypeInput">PlanTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctRoleIdInput">ShipToCustAcctRoleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctSiteIdInput">ShipToCustAcctSiteIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.subscriptionPlanNumberInput">SubscriptionPlanNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.taxInfoInput">TaxInfoInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePersonalToCorporateConvInput">TimePersonalToCorporateConvInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePlanUpgradeInput">TimePlanUpgradeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timeStartInput">TimeStartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeStateDetailsInput">UpgradeStateDetailsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeStateInput">UpgradeStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.accountType">AccountType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billToCustAccountId">BillToCustAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.currencyCode">CurrencyCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.gsiOrgCode">GsiOrgCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.isIntentToPay">IsIntentToPay</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.languageCode">LanguageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.planType">PlanType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctRoleId">ShipToCustAcctRoleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctSiteId">ShipToCustAcctSiteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.subscriptionPlanNumber">SubscriptionPlanNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePersonalToCorporateConv">TimePersonalToCorporateConv</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePlanUpgrade">TimePlanUpgrade</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timeStart">TimeStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeState">UpgradeState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeStateDetails">UpgradeStateDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BillingAddress`<sup>Required</sup> <a name="BillingAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billingAddress"></a>

```go
func BillingAddress() OspGatewaySubscriptionSubscriptionBillingAddressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList">OspGatewaySubscriptionSubscriptionBillingAddressList</a>

---

##### `PaymentGateway`<sup>Required</sup> <a name="PaymentGateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentGateway"></a>

```go
func PaymentGateway() OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference">OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference</a>

---

##### `PaymentOptions`<sup>Required</sup> <a name="PaymentOptions" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentOptions"></a>

```go
func PaymentOptions() OspGatewaySubscriptionSubscriptionPaymentOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList">OspGatewaySubscriptionSubscriptionPaymentOptionsList</a>

---

##### `TaxInfo`<sup>Required</sup> <a name="TaxInfo" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.taxInfo"></a>

```go
func TaxInfo() OspGatewaySubscriptionSubscriptionTaxInfoOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference">OspGatewaySubscriptionSubscriptionTaxInfoOutputReference</a>

---

##### `AccountTypeInput`<sup>Optional</sup> <a name="AccountTypeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.accountTypeInput"></a>

```go
func AccountTypeInput() *string
```

- *Type:* *string

---

##### `BillingAddressInput`<sup>Optional</sup> <a name="BillingAddressInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billingAddressInput"></a>

```go
func BillingAddressInput() interface{}
```

- *Type:* interface{}

---

##### `BillToCustAccountIdInput`<sup>Optional</sup> <a name="BillToCustAccountIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billToCustAccountIdInput"></a>

```go
func BillToCustAccountIdInput() *string
```

- *Type:* *string

---

##### `CurrencyCodeInput`<sup>Optional</sup> <a name="CurrencyCodeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.currencyCodeInput"></a>

```go
func CurrencyCodeInput() *string
```

- *Type:* *string

---

##### `GsiOrgCodeInput`<sup>Optional</sup> <a name="GsiOrgCodeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.gsiOrgCodeInput"></a>

```go
func GsiOrgCodeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsIntentToPayInput`<sup>Optional</sup> <a name="IsIntentToPayInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.isIntentToPayInput"></a>

```go
func IsIntentToPayInput() interface{}
```

- *Type:* interface{}

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.languageCodeInput"></a>

```go
func LanguageCodeInput() *string
```

- *Type:* *string

---

##### `OrganizationIdInput`<sup>Optional</sup> <a name="OrganizationIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.organizationIdInput"></a>

```go
func OrganizationIdInput() *string
```

- *Type:* *string

---

##### `PaymentGatewayInput`<sup>Optional</sup> <a name="PaymentGatewayInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentGatewayInput"></a>

```go
func PaymentGatewayInput() OspGatewaySubscriptionSubscriptionPaymentGateway
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a>

---

##### `PaymentOptionsInput`<sup>Optional</sup> <a name="PaymentOptionsInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentOptionsInput"></a>

```go
func PaymentOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `PlanTypeInput`<sup>Optional</sup> <a name="PlanTypeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.planTypeInput"></a>

```go
func PlanTypeInput() *string
```

- *Type:* *string

---

##### `ShipToCustAcctRoleIdInput`<sup>Optional</sup> <a name="ShipToCustAcctRoleIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctRoleIdInput"></a>

```go
func ShipToCustAcctRoleIdInput() *string
```

- *Type:* *string

---

##### `ShipToCustAcctSiteIdInput`<sup>Optional</sup> <a name="ShipToCustAcctSiteIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctSiteIdInput"></a>

```go
func ShipToCustAcctSiteIdInput() *string
```

- *Type:* *string

---

##### `SubscriptionPlanNumberInput`<sup>Optional</sup> <a name="SubscriptionPlanNumberInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.subscriptionPlanNumberInput"></a>

```go
func SubscriptionPlanNumberInput() *string
```

- *Type:* *string

---

##### `TaxInfoInput`<sup>Optional</sup> <a name="TaxInfoInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.taxInfoInput"></a>

```go
func TaxInfoInput() OspGatewaySubscriptionSubscriptionTaxInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a>

---

##### `TimePersonalToCorporateConvInput`<sup>Optional</sup> <a name="TimePersonalToCorporateConvInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePersonalToCorporateConvInput"></a>

```go
func TimePersonalToCorporateConvInput() *string
```

- *Type:* *string

---

##### `TimePlanUpgradeInput`<sup>Optional</sup> <a name="TimePlanUpgradeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePlanUpgradeInput"></a>

```go
func TimePlanUpgradeInput() *string
```

- *Type:* *string

---

##### `TimeStartInput`<sup>Optional</sup> <a name="TimeStartInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timeStartInput"></a>

```go
func TimeStartInput() *string
```

- *Type:* *string

---

##### `UpgradeStateDetailsInput`<sup>Optional</sup> <a name="UpgradeStateDetailsInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeStateDetailsInput"></a>

```go
func UpgradeStateDetailsInput() *string
```

- *Type:* *string

---

##### `UpgradeStateInput`<sup>Optional</sup> <a name="UpgradeStateInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeStateInput"></a>

```go
func UpgradeStateInput() *string
```

- *Type:* *string

---

##### `AccountType`<sup>Required</sup> <a name="AccountType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.accountType"></a>

```go
func AccountType() *string
```

- *Type:* *string

---

##### `BillToCustAccountId`<sup>Required</sup> <a name="BillToCustAccountId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billToCustAccountId"></a>

```go
func BillToCustAccountId() *string
```

- *Type:* *string

---

##### `CurrencyCode`<sup>Required</sup> <a name="CurrencyCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.currencyCode"></a>

```go
func CurrencyCode() *string
```

- *Type:* *string

---

##### `GsiOrgCode`<sup>Required</sup> <a name="GsiOrgCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.gsiOrgCode"></a>

```go
func GsiOrgCode() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsIntentToPay`<sup>Required</sup> <a name="IsIntentToPay" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.isIntentToPay"></a>

```go
func IsIntentToPay() interface{}
```

- *Type:* interface{}

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.languageCode"></a>

```go
func LanguageCode() *string
```

- *Type:* *string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

##### `PlanType`<sup>Required</sup> <a name="PlanType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.planType"></a>

```go
func PlanType() *string
```

- *Type:* *string

---

##### `ShipToCustAcctRoleId`<sup>Required</sup> <a name="ShipToCustAcctRoleId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctRoleId"></a>

```go
func ShipToCustAcctRoleId() *string
```

- *Type:* *string

---

##### `ShipToCustAcctSiteId`<sup>Required</sup> <a name="ShipToCustAcctSiteId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctSiteId"></a>

```go
func ShipToCustAcctSiteId() *string
```

- *Type:* *string

---

##### `SubscriptionPlanNumber`<sup>Required</sup> <a name="SubscriptionPlanNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.subscriptionPlanNumber"></a>

```go
func SubscriptionPlanNumber() *string
```

- *Type:* *string

---

##### `TimePersonalToCorporateConv`<sup>Required</sup> <a name="TimePersonalToCorporateConv" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePersonalToCorporateConv"></a>

```go
func TimePersonalToCorporateConv() *string
```

- *Type:* *string

---

##### `TimePlanUpgrade`<sup>Required</sup> <a name="TimePlanUpgrade" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePlanUpgrade"></a>

```go
func TimePlanUpgrade() *string
```

- *Type:* *string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timeStart"></a>

```go
func TimeStart() *string
```

- *Type:* *string

---

##### `UpgradeState`<sup>Required</sup> <a name="UpgradeState" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeState"></a>

```go
func UpgradeState() *string
```

- *Type:* *string

---

##### `UpgradeStateDetails`<sup>Required</sup> <a name="UpgradeStateDetails" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeStateDetails"></a>

```go
func UpgradeStateDetails() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.internalValue"></a>

```go
func InternalValue() OspGatewaySubscriptionSubscription
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a>

---


### OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference <a name="OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

ospgatewaysubscription.NewOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resetCloudAccountName">ResetCloudAccountName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resetPromoType">ResetPromoType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudAccountName` <a name="ResetCloudAccountName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resetCloudAccountName"></a>

```go
func ResetCloudAccountName()
```

##### `ResetPromoType` <a name="ResetPromoType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resetPromoType"></a>

```go
func ResetPromoType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountNameInput">CloudAccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoTypeInput">PromoTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName">CloudAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType">PromoType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudAccountNameInput`<sup>Optional</sup> <a name="CloudAccountNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountNameInput"></a>

```go
func CloudAccountNameInput() *string
```

- *Type:* *string

---

##### `PromoTypeInput`<sup>Optional</sup> <a name="PromoTypeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoTypeInput"></a>

```go
func PromoTypeInput() *string
```

- *Type:* *string

---

##### `CloudAccountName`<sup>Required</sup> <a name="CloudAccountName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName"></a>

```go
func CloudAccountName() *string
```

- *Type:* *string

---

##### `PromoType`<sup>Required</sup> <a name="PromoType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType"></a>

```go
func PromoType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue"></a>

```go
func InternalValue() OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a>

---


### OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference <a name="OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

ospgatewaysubscription.NewOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.putMerchantDefinedData">PutMerchantDefinedData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.resetMerchantDefinedData">ResetMerchantDefinedData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMerchantDefinedData` <a name="PutMerchantDefinedData" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.putMerchantDefinedData"></a>

```go
func PutMerchantDefinedData(value OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.putMerchantDefinedData.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a>

---

##### `ResetMerchantDefinedData` <a name="ResetMerchantDefinedData" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.resetMerchantDefinedData"></a>

```go
func ResetMerchantDefinedData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.merchantDefinedData">MerchantDefinedData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.merchantDefinedDataInput">MerchantDefinedDataInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MerchantDefinedData`<sup>Required</sup> <a name="MerchantDefinedData" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.merchantDefinedData"></a>

```go
func MerchantDefinedData() OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference</a>

---

##### `MerchantDefinedDataInput`<sup>Optional</sup> <a name="MerchantDefinedDataInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.merchantDefinedDataInput"></a>

```go
func MerchantDefinedDataInput() OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.internalValue"></a>

```go
func InternalValue() OspGatewaySubscriptionSubscriptionPaymentGateway
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a>

---


### OspGatewaySubscriptionSubscriptionPaymentOptionsList <a name="OspGatewaySubscriptionSubscriptionPaymentOptionsList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

ospgatewaysubscription.NewOspGatewaySubscriptionSubscriptionPaymentOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OspGatewaySubscriptionSubscriptionPaymentOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.get"></a>

```go
func Get(index *f64) OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference <a name="OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

ospgatewaysubscription.NewOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetCreditCardType">ResetCreditCardType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetEmailAddress">ResetEmailAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetExtBillingAgreementId">ResetExtBillingAgreementId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetFirstName">ResetFirstName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetLastDigits">ResetLastDigits</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetLastName">ResetLastName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetNameOnCard">ResetNameOnCard</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetTimeExpiration">ResetTimeExpiration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetWalletInstrumentId">ResetWalletInstrumentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetWalletTransactionId">ResetWalletTransactionId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreditCardType` <a name="ResetCreditCardType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetCreditCardType"></a>

```go
func ResetCreditCardType()
```

##### `ResetEmailAddress` <a name="ResetEmailAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetEmailAddress"></a>

```go
func ResetEmailAddress()
```

##### `ResetExtBillingAgreementId` <a name="ResetExtBillingAgreementId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetExtBillingAgreementId"></a>

```go
func ResetExtBillingAgreementId()
```

##### `ResetFirstName` <a name="ResetFirstName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetFirstName"></a>

```go
func ResetFirstName()
```

##### `ResetLastDigits` <a name="ResetLastDigits" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetLastDigits"></a>

```go
func ResetLastDigits()
```

##### `ResetLastName` <a name="ResetLastName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetLastName"></a>

```go
func ResetLastName()
```

##### `ResetNameOnCard` <a name="ResetNameOnCard" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetNameOnCard"></a>

```go
func ResetNameOnCard()
```

##### `ResetTimeExpiration` <a name="ResetTimeExpiration" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetTimeExpiration"></a>

```go
func ResetTimeExpiration()
```

##### `ResetWalletInstrumentId` <a name="ResetWalletInstrumentId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetWalletInstrumentId"></a>

```go
func ResetWalletInstrumentId()
```

##### `ResetWalletTransactionId` <a name="ResetWalletTransactionId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetWalletTransactionId"></a>

```go
func ResetWalletTransactionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creditCardTypeInput">CreditCardTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.emailAddressInput">EmailAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.extBillingAgreementIdInput">ExtBillingAgreementIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.firstNameInput">FirstNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastDigitsInput">LastDigitsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastNameInput">LastNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.nameOnCardInput">NameOnCardInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.paymentMethodInput">PaymentMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.timeExpirationInput">TimeExpirationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletInstrumentIdInput">WalletInstrumentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletTransactionIdInput">WalletTransactionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creditCardType">CreditCardType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId">ExtBillingAgreementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastDigits">LastDigits</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.nameOnCard">NameOnCard</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.paymentMethod">PaymentMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.timeExpiration">TimeExpiration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletInstrumentId">WalletInstrumentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletTransactionId">WalletTransactionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreditCardTypeInput`<sup>Optional</sup> <a name="CreditCardTypeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creditCardTypeInput"></a>

```go
func CreditCardTypeInput() *string
```

- *Type:* *string

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.emailAddressInput"></a>

```go
func EmailAddressInput() *string
```

- *Type:* *string

---

##### `ExtBillingAgreementIdInput`<sup>Optional</sup> <a name="ExtBillingAgreementIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.extBillingAgreementIdInput"></a>

```go
func ExtBillingAgreementIdInput() *string
```

- *Type:* *string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.firstNameInput"></a>

```go
func FirstNameInput() *string
```

- *Type:* *string

---

##### `LastDigitsInput`<sup>Optional</sup> <a name="LastDigitsInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastDigitsInput"></a>

```go
func LastDigitsInput() *string
```

- *Type:* *string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastNameInput"></a>

```go
func LastNameInput() *string
```

- *Type:* *string

---

##### `NameOnCardInput`<sup>Optional</sup> <a name="NameOnCardInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.nameOnCardInput"></a>

```go
func NameOnCardInput() *string
```

- *Type:* *string

---

##### `PaymentMethodInput`<sup>Optional</sup> <a name="PaymentMethodInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.paymentMethodInput"></a>

```go
func PaymentMethodInput() *string
```

- *Type:* *string

---

##### `TimeExpirationInput`<sup>Optional</sup> <a name="TimeExpirationInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.timeExpirationInput"></a>

```go
func TimeExpirationInput() *string
```

- *Type:* *string

---

##### `WalletInstrumentIdInput`<sup>Optional</sup> <a name="WalletInstrumentIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletInstrumentIdInput"></a>

```go
func WalletInstrumentIdInput() *string
```

- *Type:* *string

---

##### `WalletTransactionIdInput`<sup>Optional</sup> <a name="WalletTransactionIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletTransactionIdInput"></a>

```go
func WalletTransactionIdInput() *string
```

- *Type:* *string

---

##### `CreditCardType`<sup>Required</sup> <a name="CreditCardType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creditCardType"></a>

```go
func CreditCardType() *string
```

- *Type:* *string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `ExtBillingAgreementId`<sup>Required</sup> <a name="ExtBillingAgreementId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId"></a>

```go
func ExtBillingAgreementId() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastDigits`<sup>Required</sup> <a name="LastDigits" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastDigits"></a>

```go
func LastDigits() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `NameOnCard`<sup>Required</sup> <a name="NameOnCard" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.nameOnCard"></a>

```go
func NameOnCard() *string
```

- *Type:* *string

---

##### `PaymentMethod`<sup>Required</sup> <a name="PaymentMethod" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.paymentMethod"></a>

```go
func PaymentMethod() *string
```

- *Type:* *string

---

##### `TimeExpiration`<sup>Required</sup> <a name="TimeExpiration" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.timeExpiration"></a>

```go
func TimeExpiration() *string
```

- *Type:* *string

---

##### `WalletInstrumentId`<sup>Required</sup> <a name="WalletInstrumentId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletInstrumentId"></a>

```go
func WalletInstrumentId() *string
```

- *Type:* *string

---

##### `WalletTransactionId`<sup>Required</sup> <a name="WalletTransactionId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletTransactionId"></a>

```go
func WalletTransactionId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OspGatewaySubscriptionSubscriptionTaxInfoOutputReference <a name="OspGatewaySubscriptionSubscriptionTaxInfoOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

ospgatewaysubscription.NewOspGatewaySubscriptionSubscriptionTaxInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OspGatewaySubscriptionSubscriptionTaxInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetNoTaxReasonCode">ResetNoTaxReasonCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetNoTaxReasonCodeDetails">ResetNoTaxReasonCodeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetTaxCnpj">ResetTaxCnpj</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetTaxPayerId">ResetTaxPayerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetTaxRegNumber">ResetTaxRegNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNoTaxReasonCode` <a name="ResetNoTaxReasonCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetNoTaxReasonCode"></a>

```go
func ResetNoTaxReasonCode()
```

##### `ResetNoTaxReasonCodeDetails` <a name="ResetNoTaxReasonCodeDetails" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetNoTaxReasonCodeDetails"></a>

```go
func ResetNoTaxReasonCodeDetails()
```

##### `ResetTaxCnpj` <a name="ResetTaxCnpj" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetTaxCnpj"></a>

```go
func ResetTaxCnpj()
```

##### `ResetTaxPayerId` <a name="ResetTaxPayerId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetTaxPayerId"></a>

```go
func ResetTaxPayerId()
```

##### `ResetTaxRegNumber` <a name="ResetTaxRegNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetTaxRegNumber"></a>

```go
func ResetTaxRegNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetailsInput">NoTaxReasonCodeDetailsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeInput">NoTaxReasonCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxCnpjInput">TaxCnpjInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxPayerIdInput">TaxPayerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxRegNumberInput">TaxRegNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCode">NoTaxReasonCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails">NoTaxReasonCodeDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxCnpj">TaxCnpj</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxPayerId">TaxPayerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxRegNumber">TaxRegNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NoTaxReasonCodeDetailsInput`<sup>Optional</sup> <a name="NoTaxReasonCodeDetailsInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetailsInput"></a>

```go
func NoTaxReasonCodeDetailsInput() *string
```

- *Type:* *string

---

##### `NoTaxReasonCodeInput`<sup>Optional</sup> <a name="NoTaxReasonCodeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeInput"></a>

```go
func NoTaxReasonCodeInput() *string
```

- *Type:* *string

---

##### `TaxCnpjInput`<sup>Optional</sup> <a name="TaxCnpjInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxCnpjInput"></a>

```go
func TaxCnpjInput() *string
```

- *Type:* *string

---

##### `TaxPayerIdInput`<sup>Optional</sup> <a name="TaxPayerIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxPayerIdInput"></a>

```go
func TaxPayerIdInput() *string
```

- *Type:* *string

---

##### `TaxRegNumberInput`<sup>Optional</sup> <a name="TaxRegNumberInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxRegNumberInput"></a>

```go
func TaxRegNumberInput() *string
```

- *Type:* *string

---

##### `NoTaxReasonCode`<sup>Required</sup> <a name="NoTaxReasonCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCode"></a>

```go
func NoTaxReasonCode() *string
```

- *Type:* *string

---

##### `NoTaxReasonCodeDetails`<sup>Required</sup> <a name="NoTaxReasonCodeDetails" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails"></a>

```go
func NoTaxReasonCodeDetails() *string
```

- *Type:* *string

---

##### `TaxCnpj`<sup>Required</sup> <a name="TaxCnpj" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxCnpj"></a>

```go
func TaxCnpj() *string
```

- *Type:* *string

---

##### `TaxPayerId`<sup>Required</sup> <a name="TaxPayerId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxPayerId"></a>

```go
func TaxPayerId() *string
```

- *Type:* *string

---

##### `TaxRegNumber`<sup>Required</sup> <a name="TaxRegNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxRegNumber"></a>

```go
func TaxRegNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() OspGatewaySubscriptionSubscriptionTaxInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a>

---


### OspGatewaySubscriptionTaxInfoList <a name="OspGatewaySubscriptionTaxInfoList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

ospgatewaysubscription.NewOspGatewaySubscriptionTaxInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OspGatewaySubscriptionTaxInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.get"></a>

```go
func Get(index *f64) OspGatewaySubscriptionTaxInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OspGatewaySubscriptionTaxInfoOutputReference <a name="OspGatewaySubscriptionTaxInfoOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

ospgatewaysubscription.NewOspGatewaySubscriptionTaxInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OspGatewaySubscriptionTaxInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.giro">Giro</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.noTaxReasonCode">NoTaxReasonCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails">NoTaxReasonCodeDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.taxCnpj">TaxCnpj</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.taxPayerId">TaxPayerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.taxRegNumber">TaxRegNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfo">OspGatewaySubscriptionTaxInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Giro`<sup>Required</sup> <a name="Giro" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.giro"></a>

```go
func Giro() *string
```

- *Type:* *string

---

##### `NoTaxReasonCode`<sup>Required</sup> <a name="NoTaxReasonCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.noTaxReasonCode"></a>

```go
func NoTaxReasonCode() *string
```

- *Type:* *string

---

##### `NoTaxReasonCodeDetails`<sup>Required</sup> <a name="NoTaxReasonCodeDetails" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails"></a>

```go
func NoTaxReasonCodeDetails() *string
```

- *Type:* *string

---

##### `TaxCnpj`<sup>Required</sup> <a name="TaxCnpj" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.taxCnpj"></a>

```go
func TaxCnpj() *string
```

- *Type:* *string

---

##### `TaxPayerId`<sup>Required</sup> <a name="TaxPayerId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.taxPayerId"></a>

```go
func TaxPayerId() *string
```

- *Type:* *string

---

##### `TaxRegNumber`<sup>Required</sup> <a name="TaxRegNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.taxRegNumber"></a>

```go
func TaxRegNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() OspGatewaySubscriptionTaxInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfo">OspGatewaySubscriptionTaxInfo</a>

---


### OspGatewaySubscriptionTimeoutsOutputReference <a name="OspGatewaySubscriptionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewaysubscription"

ospgatewaysubscription.NewOspGatewaySubscriptionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OspGatewaySubscriptionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




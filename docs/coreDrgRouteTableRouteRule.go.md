# `coreDrgRouteTableRouteRule` Submodule <a name="`coreDrgRouteTableRouteRule` Submodule" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreDrgRouteTableRouteRule <a name="CoreDrgRouteTableRouteRule" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule oci_core_drg_route_table_route_rule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredrgroutetablerouterule"

coredrgroutetablerouterule.NewCoreDrgRouteTableRouteRule(scope Construct, id *string, config CoreDrgRouteTableRouteRuleConfig) CoreDrgRouteTableRouteRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig">CoreDrgRouteTableRouteRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig">CoreDrgRouteTableRouteRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.putTimeouts"></a>

```go
func PutTimeouts(value CoreDrgRouteTableRouteRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts">CoreDrgRouteTableRouteRuleTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CoreDrgRouteTableRouteRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredrgroutetablerouterule"

coredrgroutetablerouterule.CoreDrgRouteTableRouteRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredrgroutetablerouterule"

coredrgroutetablerouterule.CoreDrgRouteTableRouteRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredrgroutetablerouterule"

coredrgroutetablerouterule.CoreDrgRouteTableRouteRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredrgroutetablerouterule"

coredrgroutetablerouterule.CoreDrgRouteTableRouteRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CoreDrgRouteTableRouteRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CoreDrgRouteTableRouteRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CoreDrgRouteTableRouteRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CoreDrgRouteTableRouteRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.attributes">Attributes</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.isBlackhole">IsBlackhole</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.isConflict">IsConflict</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.routeProvenance">RouteProvenance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.routeType">RouteType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference">CoreDrgRouteTableRouteRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.destinationTypeInput">DestinationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.drgRouteTableIdInput">DrgRouteTableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.nextHopDrgAttachmentIdInput">NextHopDrgAttachmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.destinationType">DestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.drgRouteTableId">DrgRouteTableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.nextHopDrgAttachmentId">NextHopDrgAttachmentId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.attributes"></a>

```go
func Attributes() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `IsBlackhole`<sup>Required</sup> <a name="IsBlackhole" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.isBlackhole"></a>

```go
func IsBlackhole() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsConflict`<sup>Required</sup> <a name="IsConflict" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.isConflict"></a>

```go
func IsConflict() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RouteProvenance`<sup>Required</sup> <a name="RouteProvenance" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.routeProvenance"></a>

```go
func RouteProvenance() *string
```

- *Type:* *string

---

##### `RouteType`<sup>Required</sup> <a name="RouteType" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.routeType"></a>

```go
func RouteType() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.timeouts"></a>

```go
func Timeouts() CoreDrgRouteTableRouteRuleTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference">CoreDrgRouteTableRouteRuleTimeoutsOutputReference</a>

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `DestinationTypeInput`<sup>Optional</sup> <a name="DestinationTypeInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.destinationTypeInput"></a>

```go
func DestinationTypeInput() *string
```

- *Type:* *string

---

##### `DrgRouteTableIdInput`<sup>Optional</sup> <a name="DrgRouteTableIdInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.drgRouteTableIdInput"></a>

```go
func DrgRouteTableIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NextHopDrgAttachmentIdInput`<sup>Optional</sup> <a name="NextHopDrgAttachmentIdInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.nextHopDrgAttachmentIdInput"></a>

```go
func NextHopDrgAttachmentIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.destinationType"></a>

```go
func DestinationType() *string
```

- *Type:* *string

---

##### `DrgRouteTableId`<sup>Required</sup> <a name="DrgRouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.drgRouteTableId"></a>

```go
func DrgRouteTableId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NextHopDrgAttachmentId`<sup>Required</sup> <a name="NextHopDrgAttachmentId" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.nextHopDrgAttachmentId"></a>

```go
func NextHopDrgAttachmentId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreDrgRouteTableRouteRuleConfig <a name="CoreDrgRouteTableRouteRuleConfig" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredrgroutetablerouterule"

&coredrgroutetablerouterule.CoreDrgRouteTableRouteRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Destination: *string,
	DestinationType: *string,
	DrgRouteTableId: *string,
	NextHopDrgAttachmentId: *string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#destination CoreDrgRouteTableRouteRule#destination}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.destinationType">DestinationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#destination_type CoreDrgRouteTableRouteRule#destination_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.drgRouteTableId">DrgRouteTableId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#drg_route_table_id CoreDrgRouteTableRouteRule#drg_route_table_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.nextHopDrgAttachmentId">NextHopDrgAttachmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#next_hop_drg_attachment_id CoreDrgRouteTableRouteRule#next_hop_drg_attachment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#id CoreDrgRouteTableRouteRule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts">CoreDrgRouteTableRouteRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#destination CoreDrgRouteTableRouteRule#destination}.

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.destinationType"></a>

```go
DestinationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#destination_type CoreDrgRouteTableRouteRule#destination_type}.

---

##### `DrgRouteTableId`<sup>Required</sup> <a name="DrgRouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.drgRouteTableId"></a>

```go
DrgRouteTableId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#drg_route_table_id CoreDrgRouteTableRouteRule#drg_route_table_id}.

---

##### `NextHopDrgAttachmentId`<sup>Required</sup> <a name="NextHopDrgAttachmentId" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.nextHopDrgAttachmentId"></a>

```go
NextHopDrgAttachmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#next_hop_drg_attachment_id CoreDrgRouteTableRouteRule#next_hop_drg_attachment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#id CoreDrgRouteTableRouteRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleConfig.property.timeouts"></a>

```go
Timeouts CoreDrgRouteTableRouteRuleTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts">CoreDrgRouteTableRouteRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#timeouts CoreDrgRouteTableRouteRule#timeouts}

---

### CoreDrgRouteTableRouteRuleTimeouts <a name="CoreDrgRouteTableRouteRuleTimeouts" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredrgroutetablerouterule"

&coredrgroutetablerouterule.CoreDrgRouteTableRouteRuleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#create CoreDrgRouteTableRouteRule#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#delete CoreDrgRouteTableRouteRule#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#update CoreDrgRouteTableRouteRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#create CoreDrgRouteTableRouteRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#delete CoreDrgRouteTableRouteRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_route_table_route_rule#update CoreDrgRouteTableRouteRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreDrgRouteTableRouteRuleTimeoutsOutputReference <a name="CoreDrgRouteTableRouteRuleTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredrgroutetablerouterule"

coredrgroutetablerouterule.NewCoreDrgRouteTableRouteRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreDrgRouteTableRouteRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreDrgRouteTableRouteRule.CoreDrgRouteTableRouteRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




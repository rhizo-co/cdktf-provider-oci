# `opsiEnterpriseManagerBridge` Submodule <a name="`opsiEnterpriseManagerBridge` Submodule" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsiEnterpriseManagerBridge <a name="OpsiEnterpriseManagerBridge" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge oci_opsi_enterprise_manager_bridge}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsienterprisemanagerbridge"

opsienterprisemanagerbridge.NewOpsiEnterpriseManagerBridge(scope Construct, id *string, config OpsiEnterpriseManagerBridgeConfig) OpsiEnterpriseManagerBridge
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig">OpsiEnterpriseManagerBridgeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig">OpsiEnterpriseManagerBridgeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.putTimeouts"></a>

```go
func PutTimeouts(value OpsiEnterpriseManagerBridgeTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeouts">OpsiEnterpriseManagerBridgeTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OpsiEnterpriseManagerBridge resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsienterprisemanagerbridge"

opsienterprisemanagerbridge.OpsiEnterpriseManagerBridge_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsienterprisemanagerbridge"

opsienterprisemanagerbridge.OpsiEnterpriseManagerBridge_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsienterprisemanagerbridge"

opsienterprisemanagerbridge.OpsiEnterpriseManagerBridge_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsienterprisemanagerbridge"

opsienterprisemanagerbridge.OpsiEnterpriseManagerBridge_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OpsiEnterpriseManagerBridge resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OpsiEnterpriseManagerBridge to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OpsiEnterpriseManagerBridge that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OpsiEnterpriseManagerBridge to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.objectStorageBucketStatusDetails">ObjectStorageBucketStatusDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.objectStorageNamespaceName">ObjectStorageNamespaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference">OpsiEnterpriseManagerBridgeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.objectStorageBucketNameInput">ObjectStorageBucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.objectStorageBucketName">ObjectStorageBucketName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ObjectStorageBucketStatusDetails`<sup>Required</sup> <a name="ObjectStorageBucketStatusDetails" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.objectStorageBucketStatusDetails"></a>

```go
func ObjectStorageBucketStatusDetails() *string
```

- *Type:* *string

---

##### `ObjectStorageNamespaceName`<sup>Required</sup> <a name="ObjectStorageNamespaceName" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.objectStorageNamespaceName"></a>

```go
func ObjectStorageNamespaceName() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.timeouts"></a>

```go
func Timeouts() OpsiEnterpriseManagerBridgeTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference">OpsiEnterpriseManagerBridgeTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ObjectStorageBucketNameInput`<sup>Optional</sup> <a name="ObjectStorageBucketNameInput" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.objectStorageBucketNameInput"></a>

```go
func ObjectStorageBucketNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ObjectStorageBucketName`<sup>Required</sup> <a name="ObjectStorageBucketName" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.objectStorageBucketName"></a>

```go
func ObjectStorageBucketName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridge.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsiEnterpriseManagerBridgeConfig <a name="OpsiEnterpriseManagerBridgeConfig" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsienterprisemanagerbridge"

&opsienterprisemanagerbridge.OpsiEnterpriseManagerBridgeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	ObjectStorageBucketName: *string,
	DefinedTags: *map[string]*string,
	Description: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#compartment_id OpsiEnterpriseManagerBridge#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#display_name OpsiEnterpriseManagerBridge#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.objectStorageBucketName">ObjectStorageBucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#object_storage_bucket_name OpsiEnterpriseManagerBridge#object_storage_bucket_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#defined_tags OpsiEnterpriseManagerBridge#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#description OpsiEnterpriseManagerBridge#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#freeform_tags OpsiEnterpriseManagerBridge#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#id OpsiEnterpriseManagerBridge#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeouts">OpsiEnterpriseManagerBridgeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#compartment_id OpsiEnterpriseManagerBridge#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#display_name OpsiEnterpriseManagerBridge#display_name}.

---

##### `ObjectStorageBucketName`<sup>Required</sup> <a name="ObjectStorageBucketName" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.objectStorageBucketName"></a>

```go
ObjectStorageBucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#object_storage_bucket_name OpsiEnterpriseManagerBridge#object_storage_bucket_name}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#defined_tags OpsiEnterpriseManagerBridge#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#description OpsiEnterpriseManagerBridge#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#freeform_tags OpsiEnterpriseManagerBridge#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#id OpsiEnterpriseManagerBridge#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeConfig.property.timeouts"></a>

```go
Timeouts OpsiEnterpriseManagerBridgeTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeouts">OpsiEnterpriseManagerBridgeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#timeouts OpsiEnterpriseManagerBridge#timeouts}

---

### OpsiEnterpriseManagerBridgeTimeouts <a name="OpsiEnterpriseManagerBridgeTimeouts" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsienterprisemanagerbridge"

&opsienterprisemanagerbridge.OpsiEnterpriseManagerBridgeTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#create OpsiEnterpriseManagerBridge#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#delete OpsiEnterpriseManagerBridge#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#update OpsiEnterpriseManagerBridge#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#create OpsiEnterpriseManagerBridge#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#delete OpsiEnterpriseManagerBridge#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_enterprise_manager_bridge#update OpsiEnterpriseManagerBridge#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsiEnterpriseManagerBridgeTimeoutsOutputReference <a name="OpsiEnterpriseManagerBridgeTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsienterprisemanagerbridge"

opsienterprisemanagerbridge.NewOpsiEnterpriseManagerBridgeTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpsiEnterpriseManagerBridgeTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.opsiEnterpriseManagerBridge.OpsiEnterpriseManagerBridgeTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




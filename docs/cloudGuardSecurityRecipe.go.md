# `cloudGuardSecurityRecipe` Submodule <a name="`cloudGuardSecurityRecipe` Submodule" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudGuardSecurityRecipe <a name="CloudGuardSecurityRecipe" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe oci_cloud_guard_security_recipe}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguardsecurityrecipe"

cloudguardsecurityrecipe.NewCloudGuardSecurityRecipe(scope Construct, id *string, config CloudGuardSecurityRecipeConfig) CloudGuardSecurityRecipe
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig">CloudGuardSecurityRecipeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig">CloudGuardSecurityRecipeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.putTimeouts"></a>

```go
func PutTimeouts(value CloudGuardSecurityRecipeTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeouts">CloudGuardSecurityRecipeTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudGuardSecurityRecipe resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguardsecurityrecipe"

cloudguardsecurityrecipe.CloudGuardSecurityRecipe_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguardsecurityrecipe"

cloudguardsecurityrecipe.CloudGuardSecurityRecipe_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguardsecurityrecipe"

cloudguardsecurityrecipe.CloudGuardSecurityRecipe_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguardsecurityrecipe"

cloudguardsecurityrecipe.CloudGuardSecurityRecipe_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CloudGuardSecurityRecipe resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudGuardSecurityRecipe to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudGuardSecurityRecipe that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CloudGuardSecurityRecipe to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference">CloudGuardSecurityRecipeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.securityPoliciesInput">SecurityPoliciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.securityPolicies">SecurityPolicies</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.timeouts"></a>

```go
func Timeouts() CloudGuardSecurityRecipeTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference">CloudGuardSecurityRecipeTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SecurityPoliciesInput`<sup>Optional</sup> <a name="SecurityPoliciesInput" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.securityPoliciesInput"></a>

```go
func SecurityPoliciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SecurityPolicies`<sup>Required</sup> <a name="SecurityPolicies" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.securityPolicies"></a>

```go
func SecurityPolicies() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipe.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudGuardSecurityRecipeConfig <a name="CloudGuardSecurityRecipeConfig" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguardsecurityrecipe"

&cloudguardsecurityrecipe.CloudGuardSecurityRecipeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	SecurityPolicies: *[]*string,
	DefinedTags: *map[string]*string,
	Description: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#compartment_id CloudGuardSecurityRecipe#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#display_name CloudGuardSecurityRecipe#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.securityPolicies">SecurityPolicies</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#security_policies CloudGuardSecurityRecipe#security_policies}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#defined_tags CloudGuardSecurityRecipe#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#description CloudGuardSecurityRecipe#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#freeform_tags CloudGuardSecurityRecipe#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#id CloudGuardSecurityRecipe#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeouts">CloudGuardSecurityRecipeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#compartment_id CloudGuardSecurityRecipe#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#display_name CloudGuardSecurityRecipe#display_name}.

---

##### `SecurityPolicies`<sup>Required</sup> <a name="SecurityPolicies" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.securityPolicies"></a>

```go
SecurityPolicies *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#security_policies CloudGuardSecurityRecipe#security_policies}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#defined_tags CloudGuardSecurityRecipe#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#description CloudGuardSecurityRecipe#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#freeform_tags CloudGuardSecurityRecipe#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#id CloudGuardSecurityRecipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeConfig.property.timeouts"></a>

```go
Timeouts CloudGuardSecurityRecipeTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeouts">CloudGuardSecurityRecipeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#timeouts CloudGuardSecurityRecipe#timeouts}

---

### CloudGuardSecurityRecipeTimeouts <a name="CloudGuardSecurityRecipeTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguardsecurityrecipe"

&cloudguardsecurityrecipe.CloudGuardSecurityRecipeTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#create CloudGuardSecurityRecipe#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#delete CloudGuardSecurityRecipe#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#update CloudGuardSecurityRecipe#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#create CloudGuardSecurityRecipe#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#delete CloudGuardSecurityRecipe#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_security_recipe#update CloudGuardSecurityRecipe#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudGuardSecurityRecipeTimeoutsOutputReference <a name="CloudGuardSecurityRecipeTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguardsecurityrecipe"

cloudguardsecurityrecipe.NewCloudGuardSecurityRecipeTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGuardSecurityRecipeTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardSecurityRecipe.CloudGuardSecurityRecipeTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




# `osmanagementManagedInstance` Submodule <a name="`osmanagementManagedInstance` Submodule" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsmanagementManagedInstance <a name="OsmanagementManagedInstance" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance oci_osmanagement_managed_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementmanagedinstance"

osmanagementmanagedinstance.NewOsmanagementManagedInstance(scope Construct, id *string, config OsmanagementManagedInstanceConfig) OsmanagementManagedInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig">OsmanagementManagedInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig">OsmanagementManagedInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetIsDataCollectionAuthorized">ResetIsDataCollectionAuthorized</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetNotificationTopicId">ResetNotificationTopicId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.putTimeouts"></a>

```go
func PutTimeouts(value OsmanagementManagedInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts">OsmanagementManagedInstanceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetIsDataCollectionAuthorized` <a name="ResetIsDataCollectionAuthorized" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetIsDataCollectionAuthorized"></a>

```go
func ResetIsDataCollectionAuthorized()
```

##### `ResetNotificationTopicId` <a name="ResetNotificationTopicId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetNotificationTopicId"></a>

```go
func ResetNotificationTopicId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OsmanagementManagedInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementmanagedinstance"

osmanagementmanagedinstance.OsmanagementManagedInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementmanagedinstance"

osmanagementmanagedinstance.OsmanagementManagedInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementmanagedinstance"

osmanagementmanagedinstance.OsmanagementManagedInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementmanagedinstance"

osmanagementmanagedinstance.OsmanagementManagedInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OsmanagementManagedInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OsmanagementManagedInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OsmanagementManagedInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OsmanagementManagedInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.autonomous">Autonomous</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList">OsmanagementManagedInstanceAutonomousList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.bugUpdatesAvailable">BugUpdatesAvailable</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.childSoftwareSources">ChildSoftwareSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList">OsmanagementManagedInstanceChildSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.enhancementUpdatesAvailable">EnhancementUpdatesAvailable</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.isRebootRequired">IsRebootRequired</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.kspliceEffectiveKernelVersion">KspliceEffectiveKernelVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.lastBoot">LastBoot</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.lastCheckin">LastCheckin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.managedInstanceGroups">ManagedInstanceGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList">OsmanagementManagedInstanceManagedInstanceGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.osFamily">OsFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.osKernelVersion">OsKernelVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.osName">OsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.osVersion">OsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.otherUpdatesAvailable">OtherUpdatesAvailable</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.parentSoftwareSource">ParentSoftwareSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList">OsmanagementManagedInstanceParentSoftwareSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.scheduledJobCount">ScheduledJobCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.securityUpdatesAvailable">SecurityUpdatesAvailable</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference">OsmanagementManagedInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.updatesAvailable">UpdatesAvailable</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.workRequestCount">WorkRequestCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.isDataCollectionAuthorizedInput">IsDataCollectionAuthorizedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.managedInstanceIdInput">ManagedInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.notificationTopicIdInput">NotificationTopicIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.isDataCollectionAuthorized">IsDataCollectionAuthorized</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.managedInstanceId">ManagedInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.notificationTopicId">NotificationTopicId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Autonomous`<sup>Required</sup> <a name="Autonomous" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.autonomous"></a>

```go
func Autonomous() OsmanagementManagedInstanceAutonomousList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList">OsmanagementManagedInstanceAutonomousList</a>

---

##### `BugUpdatesAvailable`<sup>Required</sup> <a name="BugUpdatesAvailable" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.bugUpdatesAvailable"></a>

```go
func BugUpdatesAvailable() *f64
```

- *Type:* *f64

---

##### `ChildSoftwareSources`<sup>Required</sup> <a name="ChildSoftwareSources" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.childSoftwareSources"></a>

```go
func ChildSoftwareSources() OsmanagementManagedInstanceChildSoftwareSourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList">OsmanagementManagedInstanceChildSoftwareSourcesList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnhancementUpdatesAvailable`<sup>Required</sup> <a name="EnhancementUpdatesAvailable" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.enhancementUpdatesAvailable"></a>

```go
func EnhancementUpdatesAvailable() *f64
```

- *Type:* *f64

---

##### `IsRebootRequired`<sup>Required</sup> <a name="IsRebootRequired" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.isRebootRequired"></a>

```go
func IsRebootRequired() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `KspliceEffectiveKernelVersion`<sup>Required</sup> <a name="KspliceEffectiveKernelVersion" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.kspliceEffectiveKernelVersion"></a>

```go
func KspliceEffectiveKernelVersion() *string
```

- *Type:* *string

---

##### `LastBoot`<sup>Required</sup> <a name="LastBoot" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.lastBoot"></a>

```go
func LastBoot() *string
```

- *Type:* *string

---

##### `LastCheckin`<sup>Required</sup> <a name="LastCheckin" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.lastCheckin"></a>

```go
func LastCheckin() *string
```

- *Type:* *string

---

##### `ManagedInstanceGroups`<sup>Required</sup> <a name="ManagedInstanceGroups" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.managedInstanceGroups"></a>

```go
func ManagedInstanceGroups() OsmanagementManagedInstanceManagedInstanceGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList">OsmanagementManagedInstanceManagedInstanceGroupsList</a>

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.osFamily"></a>

```go
func OsFamily() *string
```

- *Type:* *string

---

##### `OsKernelVersion`<sup>Required</sup> <a name="OsKernelVersion" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.osKernelVersion"></a>

```go
func OsKernelVersion() *string
```

- *Type:* *string

---

##### `OsName`<sup>Required</sup> <a name="OsName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.osName"></a>

```go
func OsName() *string
```

- *Type:* *string

---

##### `OsVersion`<sup>Required</sup> <a name="OsVersion" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.osVersion"></a>

```go
func OsVersion() *string
```

- *Type:* *string

---

##### `OtherUpdatesAvailable`<sup>Required</sup> <a name="OtherUpdatesAvailable" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.otherUpdatesAvailable"></a>

```go
func OtherUpdatesAvailable() *f64
```

- *Type:* *f64

---

##### `ParentSoftwareSource`<sup>Required</sup> <a name="ParentSoftwareSource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.parentSoftwareSource"></a>

```go
func ParentSoftwareSource() OsmanagementManagedInstanceParentSoftwareSourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList">OsmanagementManagedInstanceParentSoftwareSourceList</a>

---

##### `ScheduledJobCount`<sup>Required</sup> <a name="ScheduledJobCount" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.scheduledJobCount"></a>

```go
func ScheduledJobCount() *f64
```

- *Type:* *f64

---

##### `SecurityUpdatesAvailable`<sup>Required</sup> <a name="SecurityUpdatesAvailable" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.securityUpdatesAvailable"></a>

```go
func SecurityUpdatesAvailable() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.timeouts"></a>

```go
func Timeouts() OsmanagementManagedInstanceTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference">OsmanagementManagedInstanceTimeoutsOutputReference</a>

---

##### `UpdatesAvailable`<sup>Required</sup> <a name="UpdatesAvailable" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.updatesAvailable"></a>

```go
func UpdatesAvailable() *f64
```

- *Type:* *f64

---

##### `WorkRequestCount`<sup>Required</sup> <a name="WorkRequestCount" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.workRequestCount"></a>

```go
func WorkRequestCount() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsDataCollectionAuthorizedInput`<sup>Optional</sup> <a name="IsDataCollectionAuthorizedInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.isDataCollectionAuthorizedInput"></a>

```go
func IsDataCollectionAuthorizedInput() interface{}
```

- *Type:* interface{}

---

##### `ManagedInstanceIdInput`<sup>Optional</sup> <a name="ManagedInstanceIdInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.managedInstanceIdInput"></a>

```go
func ManagedInstanceIdInput() *string
```

- *Type:* *string

---

##### `NotificationTopicIdInput`<sup>Optional</sup> <a name="NotificationTopicIdInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.notificationTopicIdInput"></a>

```go
func NotificationTopicIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsDataCollectionAuthorized`<sup>Required</sup> <a name="IsDataCollectionAuthorized" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.isDataCollectionAuthorized"></a>

```go
func IsDataCollectionAuthorized() interface{}
```

- *Type:* interface{}

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.managedInstanceId"></a>

```go
func ManagedInstanceId() *string
```

- *Type:* *string

---

##### `NotificationTopicId`<sup>Required</sup> <a name="NotificationTopicId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.notificationTopicId"></a>

```go
func NotificationTopicId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OsmanagementManagedInstanceAutonomous <a name="OsmanagementManagedInstanceAutonomous" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomous"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomous.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementmanagedinstance"

&osmanagementmanagedinstance.OsmanagementManagedInstanceAutonomous {

}
```


### OsmanagementManagedInstanceChildSoftwareSources <a name="OsmanagementManagedInstanceChildSoftwareSources" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSources.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementmanagedinstance"

&osmanagementmanagedinstance.OsmanagementManagedInstanceChildSoftwareSources {

}
```


### OsmanagementManagedInstanceConfig <a name="OsmanagementManagedInstanceConfig" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementmanagedinstance"

&osmanagementmanagedinstance.OsmanagementManagedInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManagedInstanceId: *string,
	Id: *string,
	IsDataCollectionAuthorized: interface{},
	NotificationTopicId: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.managedInstanceId">ManagedInstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#managed_instance_id OsmanagementManagedInstance#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#id OsmanagementManagedInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.isDataCollectionAuthorized">IsDataCollectionAuthorized</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#is_data_collection_authorized OsmanagementManagedInstance#is_data_collection_authorized}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.notificationTopicId">NotificationTopicId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#notification_topic_id OsmanagementManagedInstance#notification_topic_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts">OsmanagementManagedInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.managedInstanceId"></a>

```go
ManagedInstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#managed_instance_id OsmanagementManagedInstance#managed_instance_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#id OsmanagementManagedInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsDataCollectionAuthorized`<sup>Optional</sup> <a name="IsDataCollectionAuthorized" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.isDataCollectionAuthorized"></a>

```go
IsDataCollectionAuthorized interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#is_data_collection_authorized OsmanagementManagedInstance#is_data_collection_authorized}.

---

##### `NotificationTopicId`<sup>Optional</sup> <a name="NotificationTopicId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.notificationTopicId"></a>

```go
NotificationTopicId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#notification_topic_id OsmanagementManagedInstance#notification_topic_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.timeouts"></a>

```go
Timeouts OsmanagementManagedInstanceTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts">OsmanagementManagedInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#timeouts OsmanagementManagedInstance#timeouts}

---

### OsmanagementManagedInstanceManagedInstanceGroups <a name="OsmanagementManagedInstanceManagedInstanceGroups" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroups.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementmanagedinstance"

&osmanagementmanagedinstance.OsmanagementManagedInstanceManagedInstanceGroups {

}
```


### OsmanagementManagedInstanceParentSoftwareSource <a name="OsmanagementManagedInstanceParentSoftwareSource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSource.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementmanagedinstance"

&osmanagementmanagedinstance.OsmanagementManagedInstanceParentSoftwareSource {

}
```


### OsmanagementManagedInstanceTimeouts <a name="OsmanagementManagedInstanceTimeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementmanagedinstance"

&osmanagementmanagedinstance.OsmanagementManagedInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#create OsmanagementManagedInstance#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#delete OsmanagementManagedInstance#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#update OsmanagementManagedInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#create OsmanagementManagedInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#delete OsmanagementManagedInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#update OsmanagementManagedInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsmanagementManagedInstanceAutonomousList <a name="OsmanagementManagedInstanceAutonomousList" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementmanagedinstance"

osmanagementmanagedinstance.NewOsmanagementManagedInstanceAutonomousList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OsmanagementManagedInstanceAutonomousList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.get"></a>

```go
func Get(index *f64) OsmanagementManagedInstanceAutonomousOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OsmanagementManagedInstanceAutonomousOutputReference <a name="OsmanagementManagedInstanceAutonomousOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementmanagedinstance"

osmanagementmanagedinstance.NewOsmanagementManagedInstanceAutonomousOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OsmanagementManagedInstanceAutonomousOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.property.isAutoUpdateEnabled">IsAutoUpdateEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomous">OsmanagementManagedInstanceAutonomous</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsAutoUpdateEnabled`<sup>Required</sup> <a name="IsAutoUpdateEnabled" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.property.isAutoUpdateEnabled"></a>

```go
func IsAutoUpdateEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.property.internalValue"></a>

```go
func InternalValue() OsmanagementManagedInstanceAutonomous
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomous">OsmanagementManagedInstanceAutonomous</a>

---


### OsmanagementManagedInstanceChildSoftwareSourcesList <a name="OsmanagementManagedInstanceChildSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementmanagedinstance"

osmanagementmanagedinstance.NewOsmanagementManagedInstanceChildSoftwareSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OsmanagementManagedInstanceChildSoftwareSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.get"></a>

```go
func Get(index *f64) OsmanagementManagedInstanceChildSoftwareSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OsmanagementManagedInstanceChildSoftwareSourcesOutputReference <a name="OsmanagementManagedInstanceChildSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementmanagedinstance"

osmanagementmanagedinstance.NewOsmanagementManagedInstanceChildSoftwareSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OsmanagementManagedInstanceChildSoftwareSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSources">OsmanagementManagedInstanceChildSoftwareSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() OsmanagementManagedInstanceChildSoftwareSources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSources">OsmanagementManagedInstanceChildSoftwareSources</a>

---


### OsmanagementManagedInstanceManagedInstanceGroupsList <a name="OsmanagementManagedInstanceManagedInstanceGroupsList" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementmanagedinstance"

osmanagementmanagedinstance.NewOsmanagementManagedInstanceManagedInstanceGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OsmanagementManagedInstanceManagedInstanceGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.get"></a>

```go
func Get(index *f64) OsmanagementManagedInstanceManagedInstanceGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OsmanagementManagedInstanceManagedInstanceGroupsOutputReference <a name="OsmanagementManagedInstanceManagedInstanceGroupsOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementmanagedinstance"

osmanagementmanagedinstance.NewOsmanagementManagedInstanceManagedInstanceGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OsmanagementManagedInstanceManagedInstanceGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroups">OsmanagementManagedInstanceManagedInstanceGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() OsmanagementManagedInstanceManagedInstanceGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroups">OsmanagementManagedInstanceManagedInstanceGroups</a>

---


### OsmanagementManagedInstanceParentSoftwareSourceList <a name="OsmanagementManagedInstanceParentSoftwareSourceList" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementmanagedinstance"

osmanagementmanagedinstance.NewOsmanagementManagedInstanceParentSoftwareSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OsmanagementManagedInstanceParentSoftwareSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.get"></a>

```go
func Get(index *f64) OsmanagementManagedInstanceParentSoftwareSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OsmanagementManagedInstanceParentSoftwareSourceOutputReference <a name="OsmanagementManagedInstanceParentSoftwareSourceOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementmanagedinstance"

osmanagementmanagedinstance.NewOsmanagementManagedInstanceParentSoftwareSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OsmanagementManagedInstanceParentSoftwareSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSource">OsmanagementManagedInstanceParentSoftwareSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() OsmanagementManagedInstanceParentSoftwareSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSource">OsmanagementManagedInstanceParentSoftwareSource</a>

---


### OsmanagementManagedInstanceTimeoutsOutputReference <a name="OsmanagementManagedInstanceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementmanagedinstance"

osmanagementmanagedinstance.NewOsmanagementManagedInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsmanagementManagedInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




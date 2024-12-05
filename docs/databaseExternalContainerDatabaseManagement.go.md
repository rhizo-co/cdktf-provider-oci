# `databaseExternalContainerDatabaseManagement` Submodule <a name="`databaseExternalContainerDatabaseManagement` Submodule" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExternalContainerDatabaseManagement <a name="DatabaseExternalContainerDatabaseManagement" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database_management oci_database_external_container_database_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalcontainerdatabasemanagement"

databaseexternalcontainerdatabasemanagement.NewDatabaseExternalContainerDatabaseManagement(scope Construct, id *string, config DatabaseExternalContainerDatabaseManagementConfig) DatabaseExternalContainerDatabaseManagement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementConfig">DatabaseExternalContainerDatabaseManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementConfig">DatabaseExternalContainerDatabaseManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.resetLicenseModel">ResetLicenseModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.putTimeouts"></a>

```go
func PutTimeouts(value DatabaseExternalContainerDatabaseManagementTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeouts">DatabaseExternalContainerDatabaseManagementTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.resetId"></a>

```go
func ResetId()
```

##### `ResetLicenseModel` <a name="ResetLicenseModel" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.resetLicenseModel"></a>

```go
func ResetLicenseModel()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseExternalContainerDatabaseManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalcontainerdatabasemanagement"

databaseexternalcontainerdatabasemanagement.DatabaseExternalContainerDatabaseManagement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalcontainerdatabasemanagement"

databaseexternalcontainerdatabasemanagement.DatabaseExternalContainerDatabaseManagement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalcontainerdatabasemanagement"

databaseexternalcontainerdatabasemanagement.DatabaseExternalContainerDatabaseManagement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalcontainerdatabasemanagement"

databaseexternalcontainerdatabasemanagement.DatabaseExternalContainerDatabaseManagement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseExternalContainerDatabaseManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseExternalContainerDatabaseManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseExternalContainerDatabaseManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExternalContainerDatabaseManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference">DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.enableManagementInput">EnableManagementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.externalContainerDatabaseIdInput">ExternalContainerDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.externalDatabaseConnectorIdInput">ExternalDatabaseConnectorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.licenseModelInput">LicenseModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.enableManagement">EnableManagement</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.externalContainerDatabaseId">ExternalContainerDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.externalDatabaseConnectorId">ExternalDatabaseConnectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.timeouts"></a>

```go
func Timeouts() DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference">DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference</a>

---

##### `EnableManagementInput`<sup>Optional</sup> <a name="EnableManagementInput" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.enableManagementInput"></a>

```go
func EnableManagementInput() interface{}
```

- *Type:* interface{}

---

##### `ExternalContainerDatabaseIdInput`<sup>Optional</sup> <a name="ExternalContainerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.externalContainerDatabaseIdInput"></a>

```go
func ExternalContainerDatabaseIdInput() *string
```

- *Type:* *string

---

##### `ExternalDatabaseConnectorIdInput`<sup>Optional</sup> <a name="ExternalDatabaseConnectorIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.externalDatabaseConnectorIdInput"></a>

```go
func ExternalDatabaseConnectorIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LicenseModelInput`<sup>Optional</sup> <a name="LicenseModelInput" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.licenseModelInput"></a>

```go
func LicenseModelInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `EnableManagement`<sup>Required</sup> <a name="EnableManagement" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.enableManagement"></a>

```go
func EnableManagement() interface{}
```

- *Type:* interface{}

---

##### `ExternalContainerDatabaseId`<sup>Required</sup> <a name="ExternalContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.externalContainerDatabaseId"></a>

```go
func ExternalContainerDatabaseId() *string
```

- *Type:* *string

---

##### `ExternalDatabaseConnectorId`<sup>Required</sup> <a name="ExternalDatabaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.externalDatabaseConnectorId"></a>

```go
func ExternalDatabaseConnectorId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.licenseModel"></a>

```go
func LicenseModel() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExternalContainerDatabaseManagementConfig <a name="DatabaseExternalContainerDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalcontainerdatabasemanagement"

&databaseexternalcontainerdatabasemanagement.DatabaseExternalContainerDatabaseManagementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EnableManagement: interface{},
	ExternalContainerDatabaseId: *string,
	ExternalDatabaseConnectorId: *string,
	Id: *string,
	LicenseModel: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementConfig.property.enableManagement">EnableManagement</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database_management#enable_management DatabaseExternalContainerDatabaseManagement#enable_management}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementConfig.property.externalContainerDatabaseId">ExternalContainerDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database_management#external_container_database_id DatabaseExternalContainerDatabaseManagement#external_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementConfig.property.externalDatabaseConnectorId">ExternalDatabaseConnectorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database_management#external_database_connector_id DatabaseExternalContainerDatabaseManagement#external_database_connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database_management#id DatabaseExternalContainerDatabaseManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementConfig.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database_management#license_model DatabaseExternalContainerDatabaseManagement#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeouts">DatabaseExternalContainerDatabaseManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnableManagement`<sup>Required</sup> <a name="EnableManagement" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementConfig.property.enableManagement"></a>

```go
EnableManagement interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database_management#enable_management DatabaseExternalContainerDatabaseManagement#enable_management}.

---

##### `ExternalContainerDatabaseId`<sup>Required</sup> <a name="ExternalContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementConfig.property.externalContainerDatabaseId"></a>

```go
ExternalContainerDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database_management#external_container_database_id DatabaseExternalContainerDatabaseManagement#external_container_database_id}.

---

##### `ExternalDatabaseConnectorId`<sup>Required</sup> <a name="ExternalDatabaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementConfig.property.externalDatabaseConnectorId"></a>

```go
ExternalDatabaseConnectorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database_management#external_database_connector_id DatabaseExternalContainerDatabaseManagement#external_database_connector_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database_management#id DatabaseExternalContainerDatabaseManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LicenseModel`<sup>Optional</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementConfig.property.licenseModel"></a>

```go
LicenseModel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database_management#license_model DatabaseExternalContainerDatabaseManagement#license_model}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementConfig.property.timeouts"></a>

```go
Timeouts DatabaseExternalContainerDatabaseManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeouts">DatabaseExternalContainerDatabaseManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database_management#timeouts DatabaseExternalContainerDatabaseManagement#timeouts}

---

### DatabaseExternalContainerDatabaseManagementTimeouts <a name="DatabaseExternalContainerDatabaseManagementTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalcontainerdatabasemanagement"

&databaseexternalcontainerdatabasemanagement.DatabaseExternalContainerDatabaseManagementTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database_management#create DatabaseExternalContainerDatabaseManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database_management#delete DatabaseExternalContainerDatabaseManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database_management#update DatabaseExternalContainerDatabaseManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database_management#create DatabaseExternalContainerDatabaseManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database_management#delete DatabaseExternalContainerDatabaseManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database_management#update DatabaseExternalContainerDatabaseManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference <a name="DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalcontainerdatabasemanagement"

databaseexternalcontainerdatabasemanagement.NewDatabaseExternalContainerDatabaseManagementTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabaseManagement.DatabaseExternalContainerDatabaseManagementTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




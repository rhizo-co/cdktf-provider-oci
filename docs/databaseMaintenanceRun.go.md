# `databaseMaintenanceRun` Submodule <a name="`databaseMaintenanceRun` Submodule" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseMaintenanceRun <a name="DatabaseMaintenanceRun" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run oci_database_maintenance_run}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemaintenancerun"

databasemaintenancerun.NewDatabaseMaintenanceRun(scope Construct, id *string, config DatabaseMaintenanceRunConfig) DatabaseMaintenanceRun
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig">DatabaseMaintenanceRunConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig">DatabaseMaintenanceRunConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetDatabaseSoftwareImageId">ResetDatabaseSoftwareImageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetIsDstFileUpdateEnabled">ResetIsDstFileUpdateEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetPatchingMode">ResetPatchingMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.putTimeouts"></a>

```go
func PutTimeouts(value DatabaseMaintenanceRunTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts">DatabaseMaintenanceRunTimeouts</a>

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDatabaseSoftwareImageId` <a name="ResetDatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetDatabaseSoftwareImageId"></a>

```go
func ResetDatabaseSoftwareImageId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetId"></a>

```go
func ResetId()
```

##### `ResetIsDstFileUpdateEnabled` <a name="ResetIsDstFileUpdateEnabled" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetIsDstFileUpdateEnabled"></a>

```go
func ResetIsDstFileUpdateEnabled()
```

##### `ResetPatchingMode` <a name="ResetPatchingMode" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetPatchingMode"></a>

```go
func ResetPatchingMode()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseMaintenanceRun resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemaintenancerun"

databasemaintenancerun.DatabaseMaintenanceRun_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemaintenancerun"

databasemaintenancerun.DatabaseMaintenanceRun_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemaintenancerun"

databasemaintenancerun.DatabaseMaintenanceRun_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemaintenancerun"

databasemaintenancerun.DatabaseMaintenanceRun_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseMaintenanceRun resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseMaintenanceRun to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseMaintenanceRun that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseMaintenanceRun to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.currentCustomActionTimeoutInMins">CurrentCustomActionTimeoutInMins</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.currentPatchingComponent">CurrentPatchingComponent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.customActionTimeoutInMins">CustomActionTimeoutInMins</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.estimatedComponentPatchingStartTime">EstimatedComponentPatchingStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.estimatedPatchingTime">EstimatedPatchingTime</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList">DatabaseMaintenanceRunEstimatedPatchingTimeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.maintenanceSubtype">MaintenanceSubtype</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.maintenanceType">MaintenanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchFailureCount">PatchFailureCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchId">PatchId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchingEndTime">PatchingEndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchingStartTime">PatchingStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchingStatus">PatchingStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.peerMaintenanceRunId">PeerMaintenanceRunId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.targetDbServerVersion">TargetDbServerVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.targetResourceType">TargetResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.targetStorageServerVersion">TargetStorageServerVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeEnded">TimeEnded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference">DatabaseMaintenanceRunTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.databaseSoftwareImageIdInput">DatabaseSoftwareImageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.isDstFileUpdateEnabledInput">IsDstFileUpdateEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchingModeInput">PatchingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchTypeInput">PatchTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.targetResourceIdInput">TargetResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeScheduledInput">TimeScheduledInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.databaseSoftwareImageId">DatabaseSoftwareImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.isDstFileUpdateEnabled">IsDstFileUpdateEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchingMode">PatchingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchType">PatchType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.targetResourceId">TargetResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeScheduled">TimeScheduled</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CurrentCustomActionTimeoutInMins`<sup>Required</sup> <a name="CurrentCustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.currentCustomActionTimeoutInMins"></a>

```go
func CurrentCustomActionTimeoutInMins() *f64
```

- *Type:* *f64

---

##### `CurrentPatchingComponent`<sup>Required</sup> <a name="CurrentPatchingComponent" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.currentPatchingComponent"></a>

```go
func CurrentPatchingComponent() *string
```

- *Type:* *string

---

##### `CustomActionTimeoutInMins`<sup>Required</sup> <a name="CustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.customActionTimeoutInMins"></a>

```go
func CustomActionTimeoutInMins() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EstimatedComponentPatchingStartTime`<sup>Required</sup> <a name="EstimatedComponentPatchingStartTime" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.estimatedComponentPatchingStartTime"></a>

```go
func EstimatedComponentPatchingStartTime() *string
```

- *Type:* *string

---

##### `EstimatedPatchingTime`<sup>Required</sup> <a name="EstimatedPatchingTime" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.estimatedPatchingTime"></a>

```go
func EstimatedPatchingTime() DatabaseMaintenanceRunEstimatedPatchingTimeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList">DatabaseMaintenanceRunEstimatedPatchingTimeList</a>

---

##### `IsCustomActionTimeoutEnabled`<sup>Required</sup> <a name="IsCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.isCustomActionTimeoutEnabled"></a>

```go
func IsCustomActionTimeoutEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `MaintenanceSubtype`<sup>Required</sup> <a name="MaintenanceSubtype" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.maintenanceSubtype"></a>

```go
func MaintenanceSubtype() *string
```

- *Type:* *string

---

##### `MaintenanceType`<sup>Required</sup> <a name="MaintenanceType" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.maintenanceType"></a>

```go
func MaintenanceType() *string
```

- *Type:* *string

---

##### `PatchFailureCount`<sup>Required</sup> <a name="PatchFailureCount" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchFailureCount"></a>

```go
func PatchFailureCount() *f64
```

- *Type:* *f64

---

##### `PatchId`<sup>Required</sup> <a name="PatchId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchId"></a>

```go
func PatchId() *string
```

- *Type:* *string

---

##### `PatchingEndTime`<sup>Required</sup> <a name="PatchingEndTime" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchingEndTime"></a>

```go
func PatchingEndTime() *string
```

- *Type:* *string

---

##### `PatchingStartTime`<sup>Required</sup> <a name="PatchingStartTime" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchingStartTime"></a>

```go
func PatchingStartTime() *string
```

- *Type:* *string

---

##### `PatchingStatus`<sup>Required</sup> <a name="PatchingStatus" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchingStatus"></a>

```go
func PatchingStatus() *string
```

- *Type:* *string

---

##### `PeerMaintenanceRunId`<sup>Required</sup> <a name="PeerMaintenanceRunId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.peerMaintenanceRunId"></a>

```go
func PeerMaintenanceRunId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TargetDbServerVersion`<sup>Required</sup> <a name="TargetDbServerVersion" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.targetDbServerVersion"></a>

```go
func TargetDbServerVersion() *string
```

- *Type:* *string

---

##### `TargetResourceType`<sup>Required</sup> <a name="TargetResourceType" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.targetResourceType"></a>

```go
func TargetResourceType() *string
```

- *Type:* *string

---

##### `TargetStorageServerVersion`<sup>Required</sup> <a name="TargetStorageServerVersion" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.targetStorageServerVersion"></a>

```go
func TargetStorageServerVersion() *string
```

- *Type:* *string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeEnded"></a>

```go
func TimeEnded() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeouts"></a>

```go
func Timeouts() DatabaseMaintenanceRunTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference">DatabaseMaintenanceRunTimeoutsOutputReference</a>

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DatabaseSoftwareImageIdInput`<sup>Optional</sup> <a name="DatabaseSoftwareImageIdInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.databaseSoftwareImageIdInput"></a>

```go
func DatabaseSoftwareImageIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsDstFileUpdateEnabledInput`<sup>Optional</sup> <a name="IsDstFileUpdateEnabledInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.isDstFileUpdateEnabledInput"></a>

```go
func IsDstFileUpdateEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PatchingModeInput`<sup>Optional</sup> <a name="PatchingModeInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchingModeInput"></a>

```go
func PatchingModeInput() *string
```

- *Type:* *string

---

##### `PatchTypeInput`<sup>Optional</sup> <a name="PatchTypeInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchTypeInput"></a>

```go
func PatchTypeInput() *string
```

- *Type:* *string

---

##### `TargetResourceIdInput`<sup>Optional</sup> <a name="TargetResourceIdInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.targetResourceIdInput"></a>

```go
func TargetResourceIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeScheduledInput`<sup>Optional</sup> <a name="TimeScheduledInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeScheduledInput"></a>

```go
func TimeScheduledInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DatabaseSoftwareImageId`<sup>Required</sup> <a name="DatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.databaseSoftwareImageId"></a>

```go
func DatabaseSoftwareImageId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsDstFileUpdateEnabled`<sup>Required</sup> <a name="IsDstFileUpdateEnabled" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.isDstFileUpdateEnabled"></a>

```go
func IsDstFileUpdateEnabled() interface{}
```

- *Type:* interface{}

---

##### `PatchingMode`<sup>Required</sup> <a name="PatchingMode" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchingMode"></a>

```go
func PatchingMode() *string
```

- *Type:* *string

---

##### `PatchType`<sup>Required</sup> <a name="PatchType" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchType"></a>

```go
func PatchType() *string
```

- *Type:* *string

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.targetResourceId"></a>

```go
func TargetResourceId() *string
```

- *Type:* *string

---

##### `TimeScheduled`<sup>Required</sup> <a name="TimeScheduled" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeScheduled"></a>

```go
func TimeScheduled() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseMaintenanceRunConfig <a name="DatabaseMaintenanceRunConfig" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemaintenancerun"

&databasemaintenancerun.DatabaseMaintenanceRunConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PatchType: *string,
	TargetResourceId: *string,
	TimeScheduled: *string,
	CompartmentId: *string,
	DatabaseSoftwareImageId: *string,
	Id: *string,
	IsDstFileUpdateEnabled: interface{},
	PatchingMode: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.patchType">PatchType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#patch_type DatabaseMaintenanceRun#patch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.targetResourceId">TargetResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#target_resource_id DatabaseMaintenanceRun#target_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.timeScheduled">TimeScheduled</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#time_scheduled DatabaseMaintenanceRun#time_scheduled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#compartment_id DatabaseMaintenanceRun#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.databaseSoftwareImageId">DatabaseSoftwareImageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#database_software_image_id DatabaseMaintenanceRun#database_software_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#id DatabaseMaintenanceRun#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.isDstFileUpdateEnabled">IsDstFileUpdateEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#is_dst_file_update_enabled DatabaseMaintenanceRun#is_dst_file_update_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.patchingMode">PatchingMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#patching_mode DatabaseMaintenanceRun#patching_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts">DatabaseMaintenanceRunTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PatchType`<sup>Required</sup> <a name="PatchType" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.patchType"></a>

```go
PatchType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#patch_type DatabaseMaintenanceRun#patch_type}.

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.targetResourceId"></a>

```go
TargetResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#target_resource_id DatabaseMaintenanceRun#target_resource_id}.

---

##### `TimeScheduled`<sup>Required</sup> <a name="TimeScheduled" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.timeScheduled"></a>

```go
TimeScheduled *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#time_scheduled DatabaseMaintenanceRun#time_scheduled}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#compartment_id DatabaseMaintenanceRun#compartment_id}.

---

##### `DatabaseSoftwareImageId`<sup>Optional</sup> <a name="DatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.databaseSoftwareImageId"></a>

```go
DatabaseSoftwareImageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#database_software_image_id DatabaseMaintenanceRun#database_software_image_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#id DatabaseMaintenanceRun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsDstFileUpdateEnabled`<sup>Optional</sup> <a name="IsDstFileUpdateEnabled" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.isDstFileUpdateEnabled"></a>

```go
IsDstFileUpdateEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#is_dst_file_update_enabled DatabaseMaintenanceRun#is_dst_file_update_enabled}.

---

##### `PatchingMode`<sup>Optional</sup> <a name="PatchingMode" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.patchingMode"></a>

```go
PatchingMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#patching_mode DatabaseMaintenanceRun#patching_mode}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.timeouts"></a>

```go
Timeouts DatabaseMaintenanceRunTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts">DatabaseMaintenanceRunTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#timeouts DatabaseMaintenanceRun#timeouts}

---

### DatabaseMaintenanceRunEstimatedPatchingTime <a name="DatabaseMaintenanceRunEstimatedPatchingTime" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTime"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTime.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemaintenancerun"

&databasemaintenancerun.DatabaseMaintenanceRunEstimatedPatchingTime {

}
```


### DatabaseMaintenanceRunTimeouts <a name="DatabaseMaintenanceRunTimeouts" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemaintenancerun"

&databasemaintenancerun.DatabaseMaintenanceRunTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#create DatabaseMaintenanceRun#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#delete DatabaseMaintenanceRun#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#update DatabaseMaintenanceRun#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#create DatabaseMaintenanceRun#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#delete DatabaseMaintenanceRun#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#update DatabaseMaintenanceRun#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseMaintenanceRunEstimatedPatchingTimeList <a name="DatabaseMaintenanceRunEstimatedPatchingTimeList" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemaintenancerun"

databasemaintenancerun.NewDatabaseMaintenanceRunEstimatedPatchingTimeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseMaintenanceRunEstimatedPatchingTimeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.get"></a>

```go
func Get(index *f64) DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference <a name="DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemaintenancerun"

databasemaintenancerun.NewDatabaseMaintenanceRunEstimatedPatchingTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.estimatedDbServerPatchingTime">EstimatedDbServerPatchingTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.estimatedNetworkSwitchesPatchingTime">EstimatedNetworkSwitchesPatchingTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.estimatedStorageServerPatchingTime">EstimatedStorageServerPatchingTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.totalEstimatedPatchingTime">TotalEstimatedPatchingTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTime">DatabaseMaintenanceRunEstimatedPatchingTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EstimatedDbServerPatchingTime`<sup>Required</sup> <a name="EstimatedDbServerPatchingTime" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.estimatedDbServerPatchingTime"></a>

```go
func EstimatedDbServerPatchingTime() *f64
```

- *Type:* *f64

---

##### `EstimatedNetworkSwitchesPatchingTime`<sup>Required</sup> <a name="EstimatedNetworkSwitchesPatchingTime" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.estimatedNetworkSwitchesPatchingTime"></a>

```go
func EstimatedNetworkSwitchesPatchingTime() *f64
```

- *Type:* *f64

---

##### `EstimatedStorageServerPatchingTime`<sup>Required</sup> <a name="EstimatedStorageServerPatchingTime" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.estimatedStorageServerPatchingTime"></a>

```go
func EstimatedStorageServerPatchingTime() *f64
```

- *Type:* *f64

---

##### `TotalEstimatedPatchingTime`<sup>Required</sup> <a name="TotalEstimatedPatchingTime" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.totalEstimatedPatchingTime"></a>

```go
func TotalEstimatedPatchingTime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseMaintenanceRunEstimatedPatchingTime
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTime">DatabaseMaintenanceRunEstimatedPatchingTime</a>

---


### DatabaseMaintenanceRunTimeoutsOutputReference <a name="DatabaseMaintenanceRunTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasemaintenancerun"

databasemaintenancerun.NewDatabaseMaintenanceRunTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseMaintenanceRunTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




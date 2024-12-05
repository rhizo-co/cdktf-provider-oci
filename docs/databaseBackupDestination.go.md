# `databaseBackupDestination` Submodule <a name="`databaseBackupDestination` Submodule" id="rhizo-co-terraform-provider-oci.databaseBackupDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseBackupDestination <a name="DatabaseBackupDestination" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination oci_database_backup_destination}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasebackupdestination"

databasebackupdestination.NewDatabaseBackupDestination(scope Construct, id *string, config DatabaseBackupDestinationConfig) DatabaseBackupDestination
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig">DatabaseBackupDestinationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig">DatabaseBackupDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.putMountTypeDetails">PutMountTypeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetConnectionString">ResetConnectionString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetLocalMountPointPath">ResetLocalMountPointPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetMountTypeDetails">ResetMountTypeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetVpcUsers">ResetVpcUsers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMountTypeDetails` <a name="PutMountTypeDetails" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.putMountTypeDetails"></a>

```go
func PutMountTypeDetails(value DatabaseBackupDestinationMountTypeDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.putMountTypeDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails">DatabaseBackupDestinationMountTypeDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.putTimeouts"></a>

```go
func PutTimeouts(value DatabaseBackupDestinationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeouts">DatabaseBackupDestinationTimeouts</a>

---

##### `ResetConnectionString` <a name="ResetConnectionString" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetConnectionString"></a>

```go
func ResetConnectionString()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetId"></a>

```go
func ResetId()
```

##### `ResetLocalMountPointPath` <a name="ResetLocalMountPointPath" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetLocalMountPointPath"></a>

```go
func ResetLocalMountPointPath()
```

##### `ResetMountTypeDetails` <a name="ResetMountTypeDetails" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetMountTypeDetails"></a>

```go
func ResetMountTypeDetails()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVpcUsers` <a name="ResetVpcUsers" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetVpcUsers"></a>

```go
func ResetVpcUsers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseBackupDestination resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasebackupdestination"

databasebackupdestination.DatabaseBackupDestination_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasebackupdestination"

databasebackupdestination.DatabaseBackupDestination_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasebackupdestination"

databasebackupdestination.DatabaseBackupDestination_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasebackupdestination"

databasebackupdestination.DatabaseBackupDestination_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseBackupDestination resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseBackupDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseBackupDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseBackupDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.associatedDatabases">AssociatedDatabases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList">DatabaseBackupDestinationAssociatedDatabasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.mountTypeDetails">MountTypeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference">DatabaseBackupDestinationMountTypeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.nfsMountType">NfsMountType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.nfsServer">NfsServer</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.nfsServerExport">NfsServerExport</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference">DatabaseBackupDestinationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.connectionStringInput">ConnectionStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.localMountPointPathInput">LocalMountPointPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.mountTypeDetailsInput">MountTypeDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails">DatabaseBackupDestinationMountTypeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.vpcUsersInput">VpcUsersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.connectionString">ConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.localMountPointPath">LocalMountPointPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.vpcUsers">VpcUsers</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssociatedDatabases`<sup>Required</sup> <a name="AssociatedDatabases" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.associatedDatabases"></a>

```go
func AssociatedDatabases() DatabaseBackupDestinationAssociatedDatabasesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList">DatabaseBackupDestinationAssociatedDatabasesList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `MountTypeDetails`<sup>Required</sup> <a name="MountTypeDetails" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.mountTypeDetails"></a>

```go
func MountTypeDetails() DatabaseBackupDestinationMountTypeDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference">DatabaseBackupDestinationMountTypeDetailsOutputReference</a>

---

##### `NfsMountType`<sup>Required</sup> <a name="NfsMountType" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.nfsMountType"></a>

```go
func NfsMountType() *string
```

- *Type:* *string

---

##### `NfsServer`<sup>Required</sup> <a name="NfsServer" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.nfsServer"></a>

```go
func NfsServer() *[]*string
```

- *Type:* *[]*string

---

##### `NfsServerExport`<sup>Required</sup> <a name="NfsServerExport" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.nfsServerExport"></a>

```go
func NfsServerExport() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.timeouts"></a>

```go
func Timeouts() DatabaseBackupDestinationTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference">DatabaseBackupDestinationTimeoutsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.connectionStringInput"></a>

```go
func ConnectionStringInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocalMountPointPathInput`<sup>Optional</sup> <a name="LocalMountPointPathInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.localMountPointPathInput"></a>

```go
func LocalMountPointPathInput() *string
```

- *Type:* *string

---

##### `MountTypeDetailsInput`<sup>Optional</sup> <a name="MountTypeDetailsInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.mountTypeDetailsInput"></a>

```go
func MountTypeDetailsInput() DatabaseBackupDestinationMountTypeDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails">DatabaseBackupDestinationMountTypeDetails</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VpcUsersInput`<sup>Optional</sup> <a name="VpcUsersInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.vpcUsersInput"></a>

```go
func VpcUsersInput() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.connectionString"></a>

```go
func ConnectionString() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocalMountPointPath`<sup>Required</sup> <a name="LocalMountPointPath" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.localMountPointPath"></a>

```go
func LocalMountPointPath() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VpcUsers`<sup>Required</sup> <a name="VpcUsers" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.vpcUsers"></a>

```go
func VpcUsers() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseBackupDestinationAssociatedDatabases <a name="DatabaseBackupDestinationAssociatedDatabases" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabases.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasebackupdestination"

&databasebackupdestination.DatabaseBackupDestinationAssociatedDatabases {

}
```


### DatabaseBackupDestinationConfig <a name="DatabaseBackupDestinationConfig" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasebackupdestination"

&databasebackupdestination.DatabaseBackupDestinationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	Type: *string,
	ConnectionString: *string,
	DefinedTags: *map[string]*string,
	FreeformTags: *map[string]*string,
	Id: *string,
	LocalMountPointPath: *string,
	MountTypeDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseBackupDestination.DatabaseBackupDestinationTimeouts,
	VpcUsers: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#compartment_id DatabaseBackupDestination#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#display_name DatabaseBackupDestination#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#type DatabaseBackupDestination#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.connectionString">ConnectionString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#connection_string DatabaseBackupDestination#connection_string}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#defined_tags DatabaseBackupDestination#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#freeform_tags DatabaseBackupDestination#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#id DatabaseBackupDestination#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.localMountPointPath">LocalMountPointPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#local_mount_point_path DatabaseBackupDestination#local_mount_point_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.mountTypeDetails">MountTypeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails">DatabaseBackupDestinationMountTypeDetails</a></code> | mount_type_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeouts">DatabaseBackupDestinationTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.vpcUsers">VpcUsers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#vpc_users DatabaseBackupDestination#vpc_users}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#compartment_id DatabaseBackupDestination#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#display_name DatabaseBackupDestination#display_name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#type DatabaseBackupDestination#type}.

---

##### `ConnectionString`<sup>Optional</sup> <a name="ConnectionString" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.connectionString"></a>

```go
ConnectionString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#connection_string DatabaseBackupDestination#connection_string}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#defined_tags DatabaseBackupDestination#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#freeform_tags DatabaseBackupDestination#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#id DatabaseBackupDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocalMountPointPath`<sup>Optional</sup> <a name="LocalMountPointPath" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.localMountPointPath"></a>

```go
LocalMountPointPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#local_mount_point_path DatabaseBackupDestination#local_mount_point_path}.

---

##### `MountTypeDetails`<sup>Optional</sup> <a name="MountTypeDetails" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.mountTypeDetails"></a>

```go
MountTypeDetails DatabaseBackupDestinationMountTypeDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails">DatabaseBackupDestinationMountTypeDetails</a>

mount_type_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#mount_type_details DatabaseBackupDestination#mount_type_details}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.timeouts"></a>

```go
Timeouts DatabaseBackupDestinationTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeouts">DatabaseBackupDestinationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#timeouts DatabaseBackupDestination#timeouts}

---

##### `VpcUsers`<sup>Optional</sup> <a name="VpcUsers" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.vpcUsers"></a>

```go
VpcUsers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#vpc_users DatabaseBackupDestination#vpc_users}.

---

### DatabaseBackupDestinationMountTypeDetails <a name="DatabaseBackupDestinationMountTypeDetails" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasebackupdestination"

&databasebackupdestination.DatabaseBackupDestinationMountTypeDetails {
	MountType: *string,
	LocalMountPointPath: *string,
	NfsServer: *[]*string,
	NfsServerExport: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails.property.mountType">MountType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#mount_type DatabaseBackupDestination#mount_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails.property.localMountPointPath">LocalMountPointPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#local_mount_point_path DatabaseBackupDestination#local_mount_point_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails.property.nfsServer">NfsServer</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#nfs_server DatabaseBackupDestination#nfs_server}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails.property.nfsServerExport">NfsServerExport</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#nfs_server_export DatabaseBackupDestination#nfs_server_export}. |

---

##### `MountType`<sup>Required</sup> <a name="MountType" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails.property.mountType"></a>

```go
MountType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#mount_type DatabaseBackupDestination#mount_type}.

---

##### `LocalMountPointPath`<sup>Optional</sup> <a name="LocalMountPointPath" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails.property.localMountPointPath"></a>

```go
LocalMountPointPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#local_mount_point_path DatabaseBackupDestination#local_mount_point_path}.

---

##### `NfsServer`<sup>Optional</sup> <a name="NfsServer" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails.property.nfsServer"></a>

```go
NfsServer *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#nfs_server DatabaseBackupDestination#nfs_server}.

---

##### `NfsServerExport`<sup>Optional</sup> <a name="NfsServerExport" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails.property.nfsServerExport"></a>

```go
NfsServerExport *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#nfs_server_export DatabaseBackupDestination#nfs_server_export}.

---

### DatabaseBackupDestinationTimeouts <a name="DatabaseBackupDestinationTimeouts" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasebackupdestination"

&databasebackupdestination.DatabaseBackupDestinationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#create DatabaseBackupDestination#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#delete DatabaseBackupDestination#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#update DatabaseBackupDestination#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#create DatabaseBackupDestination#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#delete DatabaseBackupDestination#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#update DatabaseBackupDestination#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseBackupDestinationAssociatedDatabasesList <a name="DatabaseBackupDestinationAssociatedDatabasesList" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasebackupdestination"

databasebackupdestination.NewDatabaseBackupDestinationAssociatedDatabasesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseBackupDestinationAssociatedDatabasesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.get"></a>

```go
func Get(index *f64) DatabaseBackupDestinationAssociatedDatabasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatabaseBackupDestinationAssociatedDatabasesOutputReference <a name="DatabaseBackupDestinationAssociatedDatabasesOutputReference" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasebackupdestination"

databasebackupdestination.NewDatabaseBackupDestinationAssociatedDatabasesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseBackupDestinationAssociatedDatabasesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.property.dbName">DbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabases">DatabaseBackupDestinationAssociatedDatabases</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.property.dbName"></a>

```go
func DbName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseBackupDestinationAssociatedDatabases
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabases">DatabaseBackupDestinationAssociatedDatabases</a>

---


### DatabaseBackupDestinationMountTypeDetailsOutputReference <a name="DatabaseBackupDestinationMountTypeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasebackupdestination"

databasebackupdestination.NewDatabaseBackupDestinationMountTypeDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseBackupDestinationMountTypeDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.resetLocalMountPointPath">ResetLocalMountPointPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.resetNfsServer">ResetNfsServer</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.resetNfsServerExport">ResetNfsServerExport</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLocalMountPointPath` <a name="ResetLocalMountPointPath" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.resetLocalMountPointPath"></a>

```go
func ResetLocalMountPointPath()
```

##### `ResetNfsServer` <a name="ResetNfsServer" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.resetNfsServer"></a>

```go
func ResetNfsServer()
```

##### `ResetNfsServerExport` <a name="ResetNfsServerExport" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.resetNfsServerExport"></a>

```go
func ResetNfsServerExport()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.localMountPointPathInput">LocalMountPointPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.mountTypeInput">MountTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.nfsServerExportInput">NfsServerExportInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.nfsServerInput">NfsServerInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.localMountPointPath">LocalMountPointPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.mountType">MountType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.nfsServer">NfsServer</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.nfsServerExport">NfsServerExport</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails">DatabaseBackupDestinationMountTypeDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocalMountPointPathInput`<sup>Optional</sup> <a name="LocalMountPointPathInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.localMountPointPathInput"></a>

```go
func LocalMountPointPathInput() *string
```

- *Type:* *string

---

##### `MountTypeInput`<sup>Optional</sup> <a name="MountTypeInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.mountTypeInput"></a>

```go
func MountTypeInput() *string
```

- *Type:* *string

---

##### `NfsServerExportInput`<sup>Optional</sup> <a name="NfsServerExportInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.nfsServerExportInput"></a>

```go
func NfsServerExportInput() *string
```

- *Type:* *string

---

##### `NfsServerInput`<sup>Optional</sup> <a name="NfsServerInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.nfsServerInput"></a>

```go
func NfsServerInput() *[]*string
```

- *Type:* *[]*string

---

##### `LocalMountPointPath`<sup>Required</sup> <a name="LocalMountPointPath" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.localMountPointPath"></a>

```go
func LocalMountPointPath() *string
```

- *Type:* *string

---

##### `MountType`<sup>Required</sup> <a name="MountType" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.mountType"></a>

```go
func MountType() *string
```

- *Type:* *string

---

##### `NfsServer`<sup>Required</sup> <a name="NfsServer" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.nfsServer"></a>

```go
func NfsServer() *[]*string
```

- *Type:* *[]*string

---

##### `NfsServerExport`<sup>Required</sup> <a name="NfsServerExport" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.nfsServerExport"></a>

```go
func NfsServerExport() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseBackupDestinationMountTypeDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails">DatabaseBackupDestinationMountTypeDetails</a>

---


### DatabaseBackupDestinationTimeoutsOutputReference <a name="DatabaseBackupDestinationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasebackupdestination"

databasebackupdestination.NewDatabaseBackupDestinationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseBackupDestinationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




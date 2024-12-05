# `databaseDbSystemsUpgrade` Submodule <a name="`databaseDbSystemsUpgrade` Submodule" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseDbSystemsUpgrade <a name="DatabaseDbSystemsUpgrade" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade oci_database_db_systems_upgrade}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystemsupgrade"

databasedbsystemsupgrade.NewDatabaseDbSystemsUpgrade(scope Construct, id *string, config DatabaseDbSystemsUpgradeConfig) DatabaseDbSystemsUpgrade
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig">DatabaseDbSystemsUpgradeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig">DatabaseDbSystemsUpgradeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetIsSnapshotRetentionDaysForceUpdated">ResetIsSnapshotRetentionDaysForceUpdated</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetNewGiVersion">ResetNewGiVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetNewOsVersion">ResetNewOsVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetSnapshotRetentionPeriodInDays">ResetSnapshotRetentionPeriodInDays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.putTimeouts"></a>

```go
func PutTimeouts(value DatabaseDbSystemsUpgradeTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts">DatabaseDbSystemsUpgradeTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetId"></a>

```go
func ResetId()
```

##### `ResetIsSnapshotRetentionDaysForceUpdated` <a name="ResetIsSnapshotRetentionDaysForceUpdated" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetIsSnapshotRetentionDaysForceUpdated"></a>

```go
func ResetIsSnapshotRetentionDaysForceUpdated()
```

##### `ResetNewGiVersion` <a name="ResetNewGiVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetNewGiVersion"></a>

```go
func ResetNewGiVersion()
```

##### `ResetNewOsVersion` <a name="ResetNewOsVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetNewOsVersion"></a>

```go
func ResetNewOsVersion()
```

##### `ResetSnapshotRetentionPeriodInDays` <a name="ResetSnapshotRetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetSnapshotRetentionPeriodInDays"></a>

```go
func ResetSnapshotRetentionPeriodInDays()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseDbSystemsUpgrade resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystemsupgrade"

databasedbsystemsupgrade.DatabaseDbSystemsUpgrade_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystemsupgrade"

databasedbsystemsupgrade.DatabaseDbSystemsUpgrade_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystemsupgrade"

databasedbsystemsupgrade.DatabaseDbSystemsUpgrade_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystemsupgrade"

databasedbsystemsupgrade.DatabaseDbSystemsUpgrade_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseDbSystemsUpgrade resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseDbSystemsUpgrade to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseDbSystemsUpgrade that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseDbSystemsUpgrade to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.backupNetworkNsgIds">BackupNetworkNsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.backupSubnetId">BackupSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.cpuCoreCount">CpuCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.databaseEdition">DatabaseEdition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dataStoragePercentage">DataStoragePercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dataStorageSizeInGb">DataStorageSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dbSystemOptions">DbSystemOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList">DatabaseDbSystemsUpgradeDbSystemOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.diskRedundancy">DiskRedundancy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.faultDomains">FaultDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.iormConfigCache">IormConfigCache</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList">DatabaseDbSystemsUpgradeIormConfigCacheList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lastMaintenanceRunId">LastMaintenanceRunId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lastPatchHistoryEntryId">LastPatchHistoryEntryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.listenerPort">ListenerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList">DatabaseDbSystemsUpgradeMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.nextMaintenanceRunId">NextMaintenanceRunId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.pointInTimeDataDiskCloneTimestamp">PointInTimeDataDiskCloneTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.recoStorageSizeInGb">RecoStorageSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.scanDnsName">ScanDnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.scanDnsRecordId">ScanDnsRecordId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.scanIpIds">ScanIpIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.sourceDbSystemId">SourceDbSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.sparseDiskgroup">SparseDiskgroup</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.sshPublicKeys">SshPublicKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference">DatabaseDbSystemsUpgradeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.vipIds">VipIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dbSystemIdInput">DbSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.isSnapshotRetentionDaysForceUpdatedInput">IsSnapshotRetentionDaysForceUpdatedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newGiVersionInput">NewGiVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newOsVersionInput">NewOsVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.snapshotRetentionPeriodInDaysInput">SnapshotRetentionPeriodInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.isSnapshotRetentionDaysForceUpdated">IsSnapshotRetentionDaysForceUpdated</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newGiVersion">NewGiVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newOsVersion">NewOsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.snapshotRetentionPeriodInDays">SnapshotRetentionPeriodInDays</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `BackupNetworkNsgIds`<sup>Required</sup> <a name="BackupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.backupNetworkNsgIds"></a>

```go
func BackupNetworkNsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `BackupSubnetId`<sup>Required</sup> <a name="BackupSubnetId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.backupSubnetId"></a>

```go
func BackupSubnetId() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.cpuCoreCount"></a>

```go
func CpuCoreCount() *f64
```

- *Type:* *f64

---

##### `DatabaseEdition`<sup>Required</sup> <a name="DatabaseEdition" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.databaseEdition"></a>

```go
func DatabaseEdition() *string
```

- *Type:* *string

---

##### `DataStoragePercentage`<sup>Required</sup> <a name="DataStoragePercentage" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dataStoragePercentage"></a>

```go
func DataStoragePercentage() *f64
```

- *Type:* *f64

---

##### `DataStorageSizeInGb`<sup>Required</sup> <a name="DataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dataStorageSizeInGb"></a>

```go
func DataStorageSizeInGb() *f64
```

- *Type:* *f64

---

##### `DbSystemOptions`<sup>Required</sup> <a name="DbSystemOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dbSystemOptions"></a>

```go
func DbSystemOptions() DatabaseDbSystemsUpgradeDbSystemOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList">DatabaseDbSystemsUpgradeDbSystemOptionsList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DiskRedundancy`<sup>Required</sup> <a name="DiskRedundancy" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.diskRedundancy"></a>

```go
func DiskRedundancy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `FaultDomains`<sup>Required</sup> <a name="FaultDomains" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.faultDomains"></a>

```go
func FaultDomains() *[]*string
```

- *Type:* *[]*string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `IormConfigCache`<sup>Required</sup> <a name="IormConfigCache" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.iormConfigCache"></a>

```go
func IormConfigCache() DatabaseDbSystemsUpgradeIormConfigCacheList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList">DatabaseDbSystemsUpgradeIormConfigCacheList</a>

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `LastMaintenanceRunId`<sup>Required</sup> <a name="LastMaintenanceRunId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lastMaintenanceRunId"></a>

```go
func LastMaintenanceRunId() *string
```

- *Type:* *string

---

##### `LastPatchHistoryEntryId`<sup>Required</sup> <a name="LastPatchHistoryEntryId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lastPatchHistoryEntryId"></a>

```go
func LastPatchHistoryEntryId() *string
```

- *Type:* *string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.licenseModel"></a>

```go
func LicenseModel() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.listenerPort"></a>

```go
func ListenerPort() *f64
```

- *Type:* *f64

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.maintenanceWindow"></a>

```go
func MaintenanceWindow() DatabaseDbSystemsUpgradeMaintenanceWindowList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList">DatabaseDbSystemsUpgradeMaintenanceWindowList</a>

---

##### `NextMaintenanceRunId`<sup>Required</sup> <a name="NextMaintenanceRunId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.nextMaintenanceRunId"></a>

```go
func NextMaintenanceRunId() *string
```

- *Type:* *string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `PointInTimeDataDiskCloneTimestamp`<sup>Required</sup> <a name="PointInTimeDataDiskCloneTimestamp" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.pointInTimeDataDiskCloneTimestamp"></a>

```go
func PointInTimeDataDiskCloneTimestamp() *string
```

- *Type:* *string

---

##### `RecoStorageSizeInGb`<sup>Required</sup> <a name="RecoStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.recoStorageSizeInGb"></a>

```go
func RecoStorageSizeInGb() *f64
```

- *Type:* *f64

---

##### `ScanDnsName`<sup>Required</sup> <a name="ScanDnsName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.scanDnsName"></a>

```go
func ScanDnsName() *string
```

- *Type:* *string

---

##### `ScanDnsRecordId`<sup>Required</sup> <a name="ScanDnsRecordId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.scanDnsRecordId"></a>

```go
func ScanDnsRecordId() *string
```

- *Type:* *string

---

##### `ScanIpIds`<sup>Required</sup> <a name="ScanIpIds" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.scanIpIds"></a>

```go
func ScanIpIds() *[]*string
```

- *Type:* *[]*string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `SourceDbSystemId`<sup>Required</sup> <a name="SourceDbSystemId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.sourceDbSystemId"></a>

```go
func SourceDbSystemId() *string
```

- *Type:* *string

---

##### `SparseDiskgroup`<sup>Required</sup> <a name="SparseDiskgroup" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.sparseDiskgroup"></a>

```go
func SparseDiskgroup() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.sshPublicKeys"></a>

```go
func SshPublicKeys() *[]*string
```

- *Type:* *[]*string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeouts"></a>

```go
func Timeouts() DatabaseDbSystemsUpgradeTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference">DatabaseDbSystemsUpgradeTimeoutsOutputReference</a>

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `VipIds`<sup>Required</sup> <a name="VipIds" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.vipIds"></a>

```go
func VipIds() *[]*string
```

- *Type:* *[]*string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `DbSystemIdInput`<sup>Optional</sup> <a name="DbSystemIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dbSystemIdInput"></a>

```go
func DbSystemIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsSnapshotRetentionDaysForceUpdatedInput`<sup>Optional</sup> <a name="IsSnapshotRetentionDaysForceUpdatedInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.isSnapshotRetentionDaysForceUpdatedInput"></a>

```go
func IsSnapshotRetentionDaysForceUpdatedInput() interface{}
```

- *Type:* interface{}

---

##### `NewGiVersionInput`<sup>Optional</sup> <a name="NewGiVersionInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newGiVersionInput"></a>

```go
func NewGiVersionInput() *string
```

- *Type:* *string

---

##### `NewOsVersionInput`<sup>Optional</sup> <a name="NewOsVersionInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newOsVersionInput"></a>

```go
func NewOsVersionInput() *string
```

- *Type:* *string

---

##### `SnapshotRetentionPeriodInDaysInput`<sup>Optional</sup> <a name="SnapshotRetentionPeriodInDaysInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.snapshotRetentionPeriodInDaysInput"></a>

```go
func SnapshotRetentionPeriodInDaysInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dbSystemId"></a>

```go
func DbSystemId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsSnapshotRetentionDaysForceUpdated`<sup>Required</sup> <a name="IsSnapshotRetentionDaysForceUpdated" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.isSnapshotRetentionDaysForceUpdated"></a>

```go
func IsSnapshotRetentionDaysForceUpdated() interface{}
```

- *Type:* interface{}

---

##### `NewGiVersion`<sup>Required</sup> <a name="NewGiVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newGiVersion"></a>

```go
func NewGiVersion() *string
```

- *Type:* *string

---

##### `NewOsVersion`<sup>Required</sup> <a name="NewOsVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newOsVersion"></a>

```go
func NewOsVersion() *string
```

- *Type:* *string

---

##### `SnapshotRetentionPeriodInDays`<sup>Required</sup> <a name="SnapshotRetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.snapshotRetentionPeriodInDays"></a>

```go
func SnapshotRetentionPeriodInDays() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseDbSystemsUpgradeConfig <a name="DatabaseDbSystemsUpgradeConfig" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystemsupgrade"

&databasedbsystemsupgrade.DatabaseDbSystemsUpgradeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Action: *string,
	DbSystemId: *string,
	Id: *string,
	IsSnapshotRetentionDaysForceUpdated: interface{},
	NewGiVersion: *string,
	NewOsVersion: *string,
	SnapshotRetentionPeriodInDays: *f64,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#action DatabaseDbSystemsUpgrade#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#db_system_id DatabaseDbSystemsUpgrade#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#id DatabaseDbSystemsUpgrade#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.isSnapshotRetentionDaysForceUpdated">IsSnapshotRetentionDaysForceUpdated</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#is_snapshot_retention_days_force_updated DatabaseDbSystemsUpgrade#is_snapshot_retention_days_force_updated}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.newGiVersion">NewGiVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#new_gi_version DatabaseDbSystemsUpgrade#new_gi_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.newOsVersion">NewOsVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#new_os_version DatabaseDbSystemsUpgrade#new_os_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.snapshotRetentionPeriodInDays">SnapshotRetentionPeriodInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#snapshot_retention_period_in_days DatabaseDbSystemsUpgrade#snapshot_retention_period_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts">DatabaseDbSystemsUpgradeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#action DatabaseDbSystemsUpgrade#action}.

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.dbSystemId"></a>

```go
DbSystemId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#db_system_id DatabaseDbSystemsUpgrade#db_system_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#id DatabaseDbSystemsUpgrade#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsSnapshotRetentionDaysForceUpdated`<sup>Optional</sup> <a name="IsSnapshotRetentionDaysForceUpdated" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.isSnapshotRetentionDaysForceUpdated"></a>

```go
IsSnapshotRetentionDaysForceUpdated interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#is_snapshot_retention_days_force_updated DatabaseDbSystemsUpgrade#is_snapshot_retention_days_force_updated}.

---

##### `NewGiVersion`<sup>Optional</sup> <a name="NewGiVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.newGiVersion"></a>

```go
NewGiVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#new_gi_version DatabaseDbSystemsUpgrade#new_gi_version}.

---

##### `NewOsVersion`<sup>Optional</sup> <a name="NewOsVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.newOsVersion"></a>

```go
NewOsVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#new_os_version DatabaseDbSystemsUpgrade#new_os_version}.

---

##### `SnapshotRetentionPeriodInDays`<sup>Optional</sup> <a name="SnapshotRetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.snapshotRetentionPeriodInDays"></a>

```go
SnapshotRetentionPeriodInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#snapshot_retention_period_in_days DatabaseDbSystemsUpgrade#snapshot_retention_period_in_days}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.timeouts"></a>

```go
Timeouts DatabaseDbSystemsUpgradeTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts">DatabaseDbSystemsUpgradeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#timeouts DatabaseDbSystemsUpgrade#timeouts}

---

### DatabaseDbSystemsUpgradeDbSystemOptions <a name="DatabaseDbSystemsUpgradeDbSystemOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystemsupgrade"

&databasedbsystemsupgrade.DatabaseDbSystemsUpgradeDbSystemOptions {

}
```


### DatabaseDbSystemsUpgradeIormConfigCache <a name="DatabaseDbSystemsUpgradeIormConfigCache" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCache"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCache.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystemsupgrade"

&databasedbsystemsupgrade.DatabaseDbSystemsUpgradeIormConfigCache {

}
```


### DatabaseDbSystemsUpgradeIormConfigCacheDbPlans <a name="DatabaseDbSystemsUpgradeIormConfigCacheDbPlans" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlans.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystemsupgrade"

&databasedbsystemsupgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlans {

}
```


### DatabaseDbSystemsUpgradeMaintenanceWindow <a name="DatabaseDbSystemsUpgradeMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindow.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystemsupgrade"

&databasedbsystemsupgrade.DatabaseDbSystemsUpgradeMaintenanceWindow {

}
```


### DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek <a name="DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystemsupgrade"

&databasedbsystemsupgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek {

}
```


### DatabaseDbSystemsUpgradeMaintenanceWindowMonths <a name="DatabaseDbSystemsUpgradeMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonths.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystemsupgrade"

&databasedbsystemsupgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonths {

}
```


### DatabaseDbSystemsUpgradeTimeouts <a name="DatabaseDbSystemsUpgradeTimeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystemsupgrade"

&databasedbsystemsupgrade.DatabaseDbSystemsUpgradeTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#create DatabaseDbSystemsUpgrade#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#delete DatabaseDbSystemsUpgrade#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#update DatabaseDbSystemsUpgrade#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#create DatabaseDbSystemsUpgrade#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#delete DatabaseDbSystemsUpgrade#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#update DatabaseDbSystemsUpgrade#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseDbSystemsUpgradeDbSystemOptionsList <a name="DatabaseDbSystemsUpgradeDbSystemOptionsList" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystemsupgrade"

databasedbsystemsupgrade.NewDatabaseDbSystemsUpgradeDbSystemOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseDbSystemsUpgradeDbSystemOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.get"></a>

```go
func Get(index *f64) DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference <a name="DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystemsupgrade"

databasedbsystemsupgrade.NewDatabaseDbSystemsUpgradeDbSystemOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.storageManagement">StorageManagement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptions">DatabaseDbSystemsUpgradeDbSystemOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StorageManagement`<sup>Required</sup> <a name="StorageManagement" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.storageManagement"></a>

```go
func StorageManagement() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseDbSystemsUpgradeDbSystemOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptions">DatabaseDbSystemsUpgradeDbSystemOptions</a>

---


### DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList <a name="DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystemsupgrade"

databasedbsystemsupgrade.NewDatabaseDbSystemsUpgradeIormConfigCacheDbPlansList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.get"></a>

```go
func Get(index *f64) DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference <a name="DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystemsupgrade"

databasedbsystemsupgrade.NewDatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.dbName">DbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.flashCacheLimit">FlashCacheLimit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.share">Share</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlans">DatabaseDbSystemsUpgradeIormConfigCacheDbPlans</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.dbName"></a>

```go
func DbName() *string
```

- *Type:* *string

---

##### `FlashCacheLimit`<sup>Required</sup> <a name="FlashCacheLimit" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.flashCacheLimit"></a>

```go
func FlashCacheLimit() *string
```

- *Type:* *string

---

##### `Share`<sup>Required</sup> <a name="Share" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.share"></a>

```go
func Share() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseDbSystemsUpgradeIormConfigCacheDbPlans
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlans">DatabaseDbSystemsUpgradeIormConfigCacheDbPlans</a>

---


### DatabaseDbSystemsUpgradeIormConfigCacheList <a name="DatabaseDbSystemsUpgradeIormConfigCacheList" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystemsupgrade"

databasedbsystemsupgrade.NewDatabaseDbSystemsUpgradeIormConfigCacheList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseDbSystemsUpgradeIormConfigCacheList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.get"></a>

```go
func Get(index *f64) DatabaseDbSystemsUpgradeIormConfigCacheOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatabaseDbSystemsUpgradeIormConfigCacheOutputReference <a name="DatabaseDbSystemsUpgradeIormConfigCacheOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystemsupgrade"

databasedbsystemsupgrade.NewDatabaseDbSystemsUpgradeIormConfigCacheOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseDbSystemsUpgradeIormConfigCacheOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.dbPlans">DbPlans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList">DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.objective">Objective</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCache">DatabaseDbSystemsUpgradeIormConfigCache</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DbPlans`<sup>Required</sup> <a name="DbPlans" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.dbPlans"></a>

```go
func DbPlans() DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList">DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Objective`<sup>Required</sup> <a name="Objective" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.objective"></a>

```go
func Objective() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseDbSystemsUpgradeIormConfigCache
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCache">DatabaseDbSystemsUpgradeIormConfigCache</a>

---


### DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList <a name="DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystemsupgrade"

databasedbsystemsupgrade.NewDatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.get"></a>

```go
func Get(index *f64) DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference <a name="DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystemsupgrade"

databasedbsystemsupgrade.NewDatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek">DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek">DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek</a>

---


### DatabaseDbSystemsUpgradeMaintenanceWindowList <a name="DatabaseDbSystemsUpgradeMaintenanceWindowList" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystemsupgrade"

databasedbsystemsupgrade.NewDatabaseDbSystemsUpgradeMaintenanceWindowList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseDbSystemsUpgradeMaintenanceWindowList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.get"></a>

```go
func Get(index *f64) DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList <a name="DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystemsupgrade"

databasedbsystemsupgrade.NewDatabaseDbSystemsUpgradeMaintenanceWindowMonthsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.get"></a>

```go
func Get(index *f64) DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference <a name="DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystemsupgrade"

databasedbsystemsupgrade.NewDatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonths">DatabaseDbSystemsUpgradeMaintenanceWindowMonths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseDbSystemsUpgradeMaintenanceWindowMonths
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonths">DatabaseDbSystemsUpgradeMaintenanceWindowMonths</a>

---


### DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference <a name="DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystemsupgrade"

databasedbsystemsupgrade.NewDatabaseDbSystemsUpgradeMaintenanceWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList">DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.hoursOfDay">HoursOfDay</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.months">Months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList">DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.preference">Preference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindow">DatabaseDbSystemsUpgradeMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```go
func DaysOfWeek() DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList">DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList</a>

---

##### `HoursOfDay`<sup>Required</sup> <a name="HoursOfDay" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```go
func HoursOfDay() *[]*f64
```

- *Type:* *[]*f64

---

##### `LeadTimeInWeeks`<sup>Required</sup> <a name="LeadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```go
func LeadTimeInWeeks() *f64
```

- *Type:* *f64

---

##### `Months`<sup>Required</sup> <a name="Months" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.months"></a>

```go
func Months() DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList">DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList</a>

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.preference"></a>

```go
func Preference() *string
```

- *Type:* *string

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```go
func WeeksOfMonth() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabaseDbSystemsUpgradeMaintenanceWindow
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindow">DatabaseDbSystemsUpgradeMaintenanceWindow</a>

---


### DatabaseDbSystemsUpgradeTimeoutsOutputReference <a name="DatabaseDbSystemsUpgradeTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasedbsystemsupgrade"

databasedbsystemsupgrade.NewDatabaseDbSystemsUpgradeTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseDbSystemsUpgradeTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




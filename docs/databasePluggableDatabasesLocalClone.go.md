# `databasePluggableDatabasesLocalClone` Submodule <a name="`databasePluggableDatabasesLocalClone` Submodule" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabasePluggableDatabasesLocalClone <a name="DatabasePluggableDatabasesLocalClone" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone oci_database_pluggable_databases_local_clone}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabaseslocalclone"

databasepluggabledatabaseslocalclone.NewDatabasePluggableDatabasesLocalClone(scope Construct, id *string, config DatabasePluggableDatabasesLocalCloneConfig) DatabasePluggableDatabasesLocalClone
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig">DatabasePluggableDatabasesLocalCloneConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig">DatabasePluggableDatabasesLocalCloneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetPdbAdminPassword">ResetPdbAdminPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetShouldPdbAdminAccountBeLocked">ResetShouldPdbAdminAccountBeLocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetTargetTdeWalletPassword">ResetTargetTdeWalletPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.putTimeouts"></a>

```go
func PutTimeouts(value DatabasePluggableDatabasesLocalCloneTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts">DatabasePluggableDatabasesLocalCloneTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetId"></a>

```go
func ResetId()
```

##### `ResetPdbAdminPassword` <a name="ResetPdbAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetPdbAdminPassword"></a>

```go
func ResetPdbAdminPassword()
```

##### `ResetShouldPdbAdminAccountBeLocked` <a name="ResetShouldPdbAdminAccountBeLocked" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetShouldPdbAdminAccountBeLocked"></a>

```go
func ResetShouldPdbAdminAccountBeLocked()
```

##### `ResetTargetTdeWalletPassword` <a name="ResetTargetTdeWalletPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetTargetTdeWalletPassword"></a>

```go
func ResetTargetTdeWalletPassword()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabasePluggableDatabasesLocalClone resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabaseslocalclone"

databasepluggabledatabaseslocalclone.DatabasePluggableDatabasesLocalClone_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabaseslocalclone"

databasepluggabledatabaseslocalclone.DatabasePluggableDatabasesLocalClone_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabaseslocalclone"

databasepluggabledatabaseslocalclone.DatabasePluggableDatabasesLocalClone_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabaseslocalclone"

databasepluggabledatabaseslocalclone.DatabasePluggableDatabasesLocalClone_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabasePluggableDatabasesLocalClone resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabasePluggableDatabasesLocalClone to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabasePluggableDatabasesLocalClone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabasePluggableDatabasesLocalClone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.connectionStrings">ConnectionStrings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList">DatabasePluggableDatabasesLocalCloneConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.containerDatabaseId">ContainerDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.isRestricted">IsRestricted</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.openMode">OpenMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pdbName">PdbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pdbNodeLevelDetails">PdbNodeLevelDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList">DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pluggableDatabaseManagementConfig">PluggableDatabaseManagementConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList">DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.refreshableCloneConfig">RefreshableCloneConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList">DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference">DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.clonedPdbNameInput">ClonedPdbNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pdbAdminPasswordInput">PdbAdminPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pluggableDatabaseIdInput">PluggableDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.shouldPdbAdminAccountBeLockedInput">ShouldPdbAdminAccountBeLockedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.targetTdeWalletPasswordInput">TargetTdeWalletPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.clonedPdbName">ClonedPdbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pdbAdminPassword">PdbAdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pluggableDatabaseId">PluggableDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.shouldPdbAdminAccountBeLocked">ShouldPdbAdminAccountBeLocked</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.targetTdeWalletPassword">TargetTdeWalletPassword</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ConnectionStrings`<sup>Required</sup> <a name="ConnectionStrings" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.connectionStrings"></a>

```go
func ConnectionStrings() DatabasePluggableDatabasesLocalCloneConnectionStringsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList">DatabasePluggableDatabasesLocalCloneConnectionStringsList</a>

---

##### `ContainerDatabaseId`<sup>Required</sup> <a name="ContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.containerDatabaseId"></a>

```go
func ContainerDatabaseId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `IsRestricted`<sup>Required</sup> <a name="IsRestricted" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.isRestricted"></a>

```go
func IsRestricted() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `OpenMode`<sup>Required</sup> <a name="OpenMode" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.openMode"></a>

```go
func OpenMode() *string
```

- *Type:* *string

---

##### `PdbName`<sup>Required</sup> <a name="PdbName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pdbName"></a>

```go
func PdbName() *string
```

- *Type:* *string

---

##### `PdbNodeLevelDetails`<sup>Required</sup> <a name="PdbNodeLevelDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pdbNodeLevelDetails"></a>

```go
func PdbNodeLevelDetails() DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList">DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList</a>

---

##### `PluggableDatabaseManagementConfig`<sup>Required</sup> <a name="PluggableDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pluggableDatabaseManagementConfig"></a>

```go
func PluggableDatabaseManagementConfig() DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList">DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList</a>

---

##### `RefreshableCloneConfig`<sup>Required</sup> <a name="RefreshableCloneConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.refreshableCloneConfig"></a>

```go
func RefreshableCloneConfig() DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList">DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.timeouts"></a>

```go
func Timeouts() DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference">DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference</a>

---

##### `ClonedPdbNameInput`<sup>Optional</sup> <a name="ClonedPdbNameInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.clonedPdbNameInput"></a>

```go
func ClonedPdbNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PdbAdminPasswordInput`<sup>Optional</sup> <a name="PdbAdminPasswordInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pdbAdminPasswordInput"></a>

```go
func PdbAdminPasswordInput() *string
```

- *Type:* *string

---

##### `PluggableDatabaseIdInput`<sup>Optional</sup> <a name="PluggableDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pluggableDatabaseIdInput"></a>

```go
func PluggableDatabaseIdInput() *string
```

- *Type:* *string

---

##### `ShouldPdbAdminAccountBeLockedInput`<sup>Optional</sup> <a name="ShouldPdbAdminAccountBeLockedInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.shouldPdbAdminAccountBeLockedInput"></a>

```go
func ShouldPdbAdminAccountBeLockedInput() interface{}
```

- *Type:* interface{}

---

##### `TargetTdeWalletPasswordInput`<sup>Optional</sup> <a name="TargetTdeWalletPasswordInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.targetTdeWalletPasswordInput"></a>

```go
func TargetTdeWalletPasswordInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ClonedPdbName`<sup>Required</sup> <a name="ClonedPdbName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.clonedPdbName"></a>

```go
func ClonedPdbName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PdbAdminPassword`<sup>Required</sup> <a name="PdbAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pdbAdminPassword"></a>

```go
func PdbAdminPassword() *string
```

- *Type:* *string

---

##### `PluggableDatabaseId`<sup>Required</sup> <a name="PluggableDatabaseId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pluggableDatabaseId"></a>

```go
func PluggableDatabaseId() *string
```

- *Type:* *string

---

##### `ShouldPdbAdminAccountBeLocked`<sup>Required</sup> <a name="ShouldPdbAdminAccountBeLocked" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.shouldPdbAdminAccountBeLocked"></a>

```go
func ShouldPdbAdminAccountBeLocked() interface{}
```

- *Type:* interface{}

---

##### `TargetTdeWalletPassword`<sup>Required</sup> <a name="TargetTdeWalletPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.targetTdeWalletPassword"></a>

```go
func TargetTdeWalletPassword() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabasePluggableDatabasesLocalCloneConfig <a name="DatabasePluggableDatabasesLocalCloneConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabaseslocalclone"

&databasepluggabledatabaseslocalclone.DatabasePluggableDatabasesLocalCloneConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClonedPdbName: *string,
	PluggableDatabaseId: *string,
	Id: *string,
	PdbAdminPassword: *string,
	ShouldPdbAdminAccountBeLocked: interface{},
	TargetTdeWalletPassword: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.clonedPdbName">ClonedPdbName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#cloned_pdb_name DatabasePluggableDatabasesLocalClone#cloned_pdb_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.pluggableDatabaseId">PluggableDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#pluggable_database_id DatabasePluggableDatabasesLocalClone#pluggable_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#id DatabasePluggableDatabasesLocalClone#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.pdbAdminPassword">PdbAdminPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#pdb_admin_password DatabasePluggableDatabasesLocalClone#pdb_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.shouldPdbAdminAccountBeLocked">ShouldPdbAdminAccountBeLocked</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#should_pdb_admin_account_be_locked DatabasePluggableDatabasesLocalClone#should_pdb_admin_account_be_locked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.targetTdeWalletPassword">TargetTdeWalletPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#target_tde_wallet_password DatabasePluggableDatabasesLocalClone#target_tde_wallet_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts">DatabasePluggableDatabasesLocalCloneTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClonedPdbName`<sup>Required</sup> <a name="ClonedPdbName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.clonedPdbName"></a>

```go
ClonedPdbName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#cloned_pdb_name DatabasePluggableDatabasesLocalClone#cloned_pdb_name}.

---

##### `PluggableDatabaseId`<sup>Required</sup> <a name="PluggableDatabaseId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.pluggableDatabaseId"></a>

```go
PluggableDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#pluggable_database_id DatabasePluggableDatabasesLocalClone#pluggable_database_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#id DatabasePluggableDatabasesLocalClone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PdbAdminPassword`<sup>Optional</sup> <a name="PdbAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.pdbAdminPassword"></a>

```go
PdbAdminPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#pdb_admin_password DatabasePluggableDatabasesLocalClone#pdb_admin_password}.

---

##### `ShouldPdbAdminAccountBeLocked`<sup>Optional</sup> <a name="ShouldPdbAdminAccountBeLocked" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.shouldPdbAdminAccountBeLocked"></a>

```go
ShouldPdbAdminAccountBeLocked interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#should_pdb_admin_account_be_locked DatabasePluggableDatabasesLocalClone#should_pdb_admin_account_be_locked}.

---

##### `TargetTdeWalletPassword`<sup>Optional</sup> <a name="TargetTdeWalletPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.targetTdeWalletPassword"></a>

```go
TargetTdeWalletPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#target_tde_wallet_password DatabasePluggableDatabasesLocalClone#target_tde_wallet_password}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.timeouts"></a>

```go
Timeouts DatabasePluggableDatabasesLocalCloneTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts">DatabasePluggableDatabasesLocalCloneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#timeouts DatabasePluggableDatabasesLocalClone#timeouts}

---

### DatabasePluggableDatabasesLocalCloneConnectionStrings <a name="DatabasePluggableDatabasesLocalCloneConnectionStrings" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStrings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabaseslocalclone"

&databasepluggabledatabaseslocalclone.DatabasePluggableDatabasesLocalCloneConnectionStrings {

}
```


### DatabasePluggableDatabasesLocalClonePdbNodeLevelDetails <a name="DatabasePluggableDatabasesLocalClonePdbNodeLevelDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabaseslocalclone"

&databasepluggabledatabaseslocalclone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetails {

}
```


### DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfig <a name="DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabaseslocalclone"

&databasepluggabledatabaseslocalclone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfig {

}
```


### DatabasePluggableDatabasesLocalCloneRefreshableCloneConfig <a name="DatabasePluggableDatabasesLocalCloneRefreshableCloneConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabaseslocalclone"

&databasepluggabledatabaseslocalclone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfig {

}
```


### DatabasePluggableDatabasesLocalCloneTimeouts <a name="DatabasePluggableDatabasesLocalCloneTimeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabaseslocalclone"

&databasepluggabledatabaseslocalclone.DatabasePluggableDatabasesLocalCloneTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#create DatabasePluggableDatabasesLocalClone#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#delete DatabasePluggableDatabasesLocalClone#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#update DatabasePluggableDatabasesLocalClone#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#create DatabasePluggableDatabasesLocalClone#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#delete DatabasePluggableDatabasesLocalClone#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#update DatabasePluggableDatabasesLocalClone#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabasePluggableDatabasesLocalCloneConnectionStringsList <a name="DatabasePluggableDatabasesLocalCloneConnectionStringsList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabaseslocalclone"

databasepluggabledatabaseslocalclone.NewDatabasePluggableDatabasesLocalCloneConnectionStringsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabasePluggableDatabasesLocalCloneConnectionStringsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.get"></a>

```go
func Get(index *f64) DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference <a name="DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabaseslocalclone"

databasepluggabledatabaseslocalclone.NewDatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.allConnectionStrings">AllConnectionStrings</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.pdbDefault">PdbDefault</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.pdbIpDefault">PdbIpDefault</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStrings">DatabasePluggableDatabasesLocalCloneConnectionStrings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllConnectionStrings`<sup>Required</sup> <a name="AllConnectionStrings" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.allConnectionStrings"></a>

```go
func AllConnectionStrings() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `PdbDefault`<sup>Required</sup> <a name="PdbDefault" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.pdbDefault"></a>

```go
func PdbDefault() *string
```

- *Type:* *string

---

##### `PdbIpDefault`<sup>Required</sup> <a name="PdbIpDefault" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.pdbIpDefault"></a>

```go
func PdbIpDefault() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabasePluggableDatabasesLocalCloneConnectionStrings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStrings">DatabasePluggableDatabasesLocalCloneConnectionStrings</a>

---


### DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList <a name="DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabaseslocalclone"

databasepluggabledatabaseslocalclone.NewDatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.get"></a>

```go
func Get(index *f64) DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference <a name="DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabaseslocalclone"

databasepluggabledatabaseslocalclone.NewDatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.property.nodeName">NodeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.property.openMode">OpenMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetails">DatabasePluggableDatabasesLocalClonePdbNodeLevelDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NodeName`<sup>Required</sup> <a name="NodeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.property.nodeName"></a>

```go
func NodeName() *string
```

- *Type:* *string

---

##### `OpenMode`<sup>Required</sup> <a name="OpenMode" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.property.openMode"></a>

```go
func OpenMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabasePluggableDatabasesLocalClonePdbNodeLevelDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetails">DatabasePluggableDatabasesLocalClonePdbNodeLevelDetails</a>

---


### DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList <a name="DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabaseslocalclone"

databasepluggabledatabaseslocalclone.NewDatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.get"></a>

```go
func Get(index *f64) DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference <a name="DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabaseslocalclone"

databasepluggabledatabaseslocalclone.NewDatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.property.managementStatus">ManagementStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfig">DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ManagementStatus`<sup>Required</sup> <a name="ManagementStatus" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.property.managementStatus"></a>

```go
func ManagementStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfig">DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfig</a>

---


### DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList <a name="DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabaseslocalclone"

databasepluggabledatabaseslocalclone.NewDatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.get"></a>

```go
func Get(index *f64) DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference <a name="DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabaseslocalclone"

databasepluggabledatabaseslocalclone.NewDatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.property.isRefreshableClone">IsRefreshableClone</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfig">DatabasePluggableDatabasesLocalCloneRefreshableCloneConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsRefreshableClone`<sup>Required</sup> <a name="IsRefreshableClone" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.property.isRefreshableClone"></a>

```go
func IsRefreshableClone() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DatabasePluggableDatabasesLocalCloneRefreshableCloneConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfig">DatabasePluggableDatabasesLocalCloneRefreshableCloneConfig</a>

---


### DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference <a name="DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databasepluggabledatabaseslocalclone"

databasepluggabledatabaseslocalclone.NewDatabasePluggableDatabasesLocalCloneTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




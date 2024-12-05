# `recoveryProtectedDatabase` Submodule <a name="`recoveryProtectedDatabase` Submodule" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RecoveryProtectedDatabase <a name="RecoveryProtectedDatabase" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database oci_recovery_protected_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/recoveryprotecteddatabase"

recoveryprotecteddatabase.NewRecoveryProtectedDatabase(scope Construct, id *string, config RecoveryProtectedDatabaseConfig) RecoveryProtectedDatabase
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig">RecoveryProtectedDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig">RecoveryProtectedDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.putRecoveryServiceSubnets">PutRecoveryServiceSubnets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetDatabaseId">ResetDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetDatabaseSize">ResetDatabaseSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetDeletionSchedule">ResetDeletionSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetIsRedoLogsShipped">ResetIsRedoLogsShipped</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetSubscriptionId">ResetSubscriptionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRecoveryServiceSubnets` <a name="PutRecoveryServiceSubnets" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.putRecoveryServiceSubnets"></a>

```go
func PutRecoveryServiceSubnets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.putRecoveryServiceSubnets.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.putTimeouts"></a>

```go
func PutTimeouts(value RecoveryProtectedDatabaseTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts">RecoveryProtectedDatabaseTimeouts</a>

---

##### `ResetDatabaseId` <a name="ResetDatabaseId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetDatabaseId"></a>

```go
func ResetDatabaseId()
```

##### `ResetDatabaseSize` <a name="ResetDatabaseSize" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetDatabaseSize"></a>

```go
func ResetDatabaseSize()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDeletionSchedule` <a name="ResetDeletionSchedule" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetDeletionSchedule"></a>

```go
func ResetDeletionSchedule()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetId"></a>

```go
func ResetId()
```

##### `ResetIsRedoLogsShipped` <a name="ResetIsRedoLogsShipped" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetIsRedoLogsShipped"></a>

```go
func ResetIsRedoLogsShipped()
```

##### `ResetSubscriptionId` <a name="ResetSubscriptionId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetSubscriptionId"></a>

```go
func ResetSubscriptionId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RecoveryProtectedDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/recoveryprotecteddatabase"

recoveryprotecteddatabase.RecoveryProtectedDatabase_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/recoveryprotecteddatabase"

recoveryprotecteddatabase.RecoveryProtectedDatabase_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/recoveryprotecteddatabase"

recoveryprotecteddatabase.RecoveryProtectedDatabase_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/recoveryprotecteddatabase"

recoveryprotecteddatabase.RecoveryProtectedDatabase_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a RecoveryProtectedDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RecoveryProtectedDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RecoveryProtectedDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the RecoveryProtectedDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.health">Health</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.healthDetails">HealthDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.isReadOnlyResource">IsReadOnlyResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.metrics">Metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList">RecoveryProtectedDatabaseMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.policyLockedDateTime">PolicyLockedDateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.recoveryServiceSubnets">RecoveryServiceSubnets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList">RecoveryProtectedDatabaseRecoveryServiceSubnetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference">RecoveryProtectedDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.vpcUserName">VpcUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.databaseIdInput">DatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.databaseSizeInput">DatabaseSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.dbUniqueNameInput">DbUniqueNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.deletionScheduleInput">DeletionScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.isRedoLogsShippedInput">IsRedoLogsShippedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.protectionPolicyIdInput">ProtectionPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.recoveryServiceSubnetsInput">RecoveryServiceSubnetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.databaseId">DatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.databaseSize">DatabaseSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.dbUniqueName">DbUniqueName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.deletionSchedule">DeletionSchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.isRedoLogsShipped">IsRedoLogsShipped</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.protectionPolicyId">ProtectionPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Health`<sup>Required</sup> <a name="Health" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.health"></a>

```go
func Health() *string
```

- *Type:* *string

---

##### `HealthDetails`<sup>Required</sup> <a name="HealthDetails" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.healthDetails"></a>

```go
func HealthDetails() *string
```

- *Type:* *string

---

##### `IsReadOnlyResource`<sup>Required</sup> <a name="IsReadOnlyResource" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.isReadOnlyResource"></a>

```go
func IsReadOnlyResource() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.metrics"></a>

```go
func Metrics() RecoveryProtectedDatabaseMetricsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList">RecoveryProtectedDatabaseMetricsList</a>

---

##### `PolicyLockedDateTime`<sup>Required</sup> <a name="PolicyLockedDateTime" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.policyLockedDateTime"></a>

```go
func PolicyLockedDateTime() *string
```

- *Type:* *string

---

##### `RecoveryServiceSubnets`<sup>Required</sup> <a name="RecoveryServiceSubnets" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.recoveryServiceSubnets"></a>

```go
func RecoveryServiceSubnets() RecoveryProtectedDatabaseRecoveryServiceSubnetsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList">RecoveryProtectedDatabaseRecoveryServiceSubnetsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.timeouts"></a>

```go
func Timeouts() RecoveryProtectedDatabaseTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference">RecoveryProtectedDatabaseTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `VpcUserName`<sup>Required</sup> <a name="VpcUserName" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.vpcUserName"></a>

```go
func VpcUserName() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DatabaseIdInput`<sup>Optional</sup> <a name="DatabaseIdInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.databaseIdInput"></a>

```go
func DatabaseIdInput() *string
```

- *Type:* *string

---

##### `DatabaseSizeInput`<sup>Optional</sup> <a name="DatabaseSizeInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.databaseSizeInput"></a>

```go
func DatabaseSizeInput() *string
```

- *Type:* *string

---

##### `DbUniqueNameInput`<sup>Optional</sup> <a name="DbUniqueNameInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.dbUniqueNameInput"></a>

```go
func DbUniqueNameInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeletionScheduleInput`<sup>Optional</sup> <a name="DeletionScheduleInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.deletionScheduleInput"></a>

```go
func DeletionScheduleInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsRedoLogsShippedInput`<sup>Optional</sup> <a name="IsRedoLogsShippedInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.isRedoLogsShippedInput"></a>

```go
func IsRedoLogsShippedInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `ProtectionPolicyIdInput`<sup>Optional</sup> <a name="ProtectionPolicyIdInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.protectionPolicyIdInput"></a>

```go
func ProtectionPolicyIdInput() *string
```

- *Type:* *string

---

##### `RecoveryServiceSubnetsInput`<sup>Optional</sup> <a name="RecoveryServiceSubnetsInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.recoveryServiceSubnetsInput"></a>

```go
func RecoveryServiceSubnetsInput() interface{}
```

- *Type:* interface{}

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.databaseId"></a>

```go
func DatabaseId() *string
```

- *Type:* *string

---

##### `DatabaseSize`<sup>Required</sup> <a name="DatabaseSize" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.databaseSize"></a>

```go
func DatabaseSize() *string
```

- *Type:* *string

---

##### `DbUniqueName`<sup>Required</sup> <a name="DbUniqueName" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.dbUniqueName"></a>

```go
func DbUniqueName() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeletionSchedule`<sup>Required</sup> <a name="DeletionSchedule" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.deletionSchedule"></a>

```go
func DeletionSchedule() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsRedoLogsShipped`<sup>Required</sup> <a name="IsRedoLogsShipped" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.isRedoLogsShipped"></a>

```go
func IsRedoLogsShipped() interface{}
```

- *Type:* interface{}

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `ProtectionPolicyId`<sup>Required</sup> <a name="ProtectionPolicyId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.protectionPolicyId"></a>

```go
func ProtectionPolicyId() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RecoveryProtectedDatabaseConfig <a name="RecoveryProtectedDatabaseConfig" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/recoveryprotecteddatabase"

&recoveryprotecteddatabase.RecoveryProtectedDatabaseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DbUniqueName: *string,
	DisplayName: *string,
	Password: *string,
	ProtectionPolicyId: *string,
	RecoveryServiceSubnets: interface{},
	DatabaseId: *string,
	DatabaseSize: *string,
	DefinedTags: *map[string]*string,
	DeletionSchedule: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	IsRedoLogsShipped: interface{},
	SubscriptionId: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#compartment_id RecoveryProtectedDatabase#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.dbUniqueName">DbUniqueName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#db_unique_name RecoveryProtectedDatabase#db_unique_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#display_name RecoveryProtectedDatabase#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#password RecoveryProtectedDatabase#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.protectionPolicyId">ProtectionPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#protection_policy_id RecoveryProtectedDatabase#protection_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.recoveryServiceSubnets">RecoveryServiceSubnets</a></code> | <code>interface{}</code> | recovery_service_subnets block. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.databaseId">DatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#database_id RecoveryProtectedDatabase#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.databaseSize">DatabaseSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#database_size RecoveryProtectedDatabase#database_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#defined_tags RecoveryProtectedDatabase#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.deletionSchedule">DeletionSchedule</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#deletion_schedule RecoveryProtectedDatabase#deletion_schedule}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#freeform_tags RecoveryProtectedDatabase#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#id RecoveryProtectedDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.isRedoLogsShipped">IsRedoLogsShipped</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#is_redo_logs_shipped RecoveryProtectedDatabase#is_redo_logs_shipped}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#subscription_id RecoveryProtectedDatabase#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts">RecoveryProtectedDatabaseTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#compartment_id RecoveryProtectedDatabase#compartment_id}.

---

##### `DbUniqueName`<sup>Required</sup> <a name="DbUniqueName" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.dbUniqueName"></a>

```go
DbUniqueName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#db_unique_name RecoveryProtectedDatabase#db_unique_name}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#display_name RecoveryProtectedDatabase#display_name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#password RecoveryProtectedDatabase#password}.

---

##### `ProtectionPolicyId`<sup>Required</sup> <a name="ProtectionPolicyId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.protectionPolicyId"></a>

```go
ProtectionPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#protection_policy_id RecoveryProtectedDatabase#protection_policy_id}.

---

##### `RecoveryServiceSubnets`<sup>Required</sup> <a name="RecoveryServiceSubnets" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.recoveryServiceSubnets"></a>

```go
RecoveryServiceSubnets interface{}
```

- *Type:* interface{}

recovery_service_subnets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#recovery_service_subnets RecoveryProtectedDatabase#recovery_service_subnets}

---

##### `DatabaseId`<sup>Optional</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.databaseId"></a>

```go
DatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#database_id RecoveryProtectedDatabase#database_id}.

---

##### `DatabaseSize`<sup>Optional</sup> <a name="DatabaseSize" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.databaseSize"></a>

```go
DatabaseSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#database_size RecoveryProtectedDatabase#database_size}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#defined_tags RecoveryProtectedDatabase#defined_tags}.

---

##### `DeletionSchedule`<sup>Optional</sup> <a name="DeletionSchedule" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.deletionSchedule"></a>

```go
DeletionSchedule *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#deletion_schedule RecoveryProtectedDatabase#deletion_schedule}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#freeform_tags RecoveryProtectedDatabase#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#id RecoveryProtectedDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsRedoLogsShipped`<sup>Optional</sup> <a name="IsRedoLogsShipped" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.isRedoLogsShipped"></a>

```go
IsRedoLogsShipped interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#is_redo_logs_shipped RecoveryProtectedDatabase#is_redo_logs_shipped}.

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#subscription_id RecoveryProtectedDatabase#subscription_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.timeouts"></a>

```go
Timeouts RecoveryProtectedDatabaseTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts">RecoveryProtectedDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#timeouts RecoveryProtectedDatabase#timeouts}

---

### RecoveryProtectedDatabaseMetrics <a name="RecoveryProtectedDatabaseMetrics" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetrics.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/recoveryprotecteddatabase"

&recoveryprotecteddatabase.RecoveryProtectedDatabaseMetrics {

}
```


### RecoveryProtectedDatabaseRecoveryServiceSubnets <a name="RecoveryProtectedDatabaseRecoveryServiceSubnets" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/recoveryprotecteddatabase"

&recoveryprotecteddatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets {
	RecoveryServiceSubnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets.property.recoveryServiceSubnetId">RecoveryServiceSubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#recovery_service_subnet_id RecoveryProtectedDatabase#recovery_service_subnet_id}. |

---

##### `RecoveryServiceSubnetId`<sup>Required</sup> <a name="RecoveryServiceSubnetId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets.property.recoveryServiceSubnetId"></a>

```go
RecoveryServiceSubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#recovery_service_subnet_id RecoveryProtectedDatabase#recovery_service_subnet_id}.

---

### RecoveryProtectedDatabaseTimeouts <a name="RecoveryProtectedDatabaseTimeouts" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/recoveryprotecteddatabase"

&recoveryprotecteddatabase.RecoveryProtectedDatabaseTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#create RecoveryProtectedDatabase#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#delete RecoveryProtectedDatabase#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#update RecoveryProtectedDatabase#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#create RecoveryProtectedDatabase#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#delete RecoveryProtectedDatabase#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#update RecoveryProtectedDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RecoveryProtectedDatabaseMetricsList <a name="RecoveryProtectedDatabaseMetricsList" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/recoveryprotecteddatabase"

recoveryprotecteddatabase.NewRecoveryProtectedDatabaseMetricsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RecoveryProtectedDatabaseMetricsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.get"></a>

```go
func Get(index *f64) RecoveryProtectedDatabaseMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### RecoveryProtectedDatabaseMetricsOutputReference <a name="RecoveryProtectedDatabaseMetricsOutputReference" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/recoveryprotecteddatabase"

recoveryprotecteddatabase.NewRecoveryProtectedDatabaseMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RecoveryProtectedDatabaseMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.backupSpaceEstimateInGbs">BackupSpaceEstimateInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.backupSpaceUsedInGbs">BackupSpaceUsedInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.currentRetentionPeriodInSeconds">CurrentRetentionPeriodInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.dbSizeInGbs">DbSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.isRedoLogsEnabled">IsRedoLogsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.minimumRecoveryNeededInDays">MinimumRecoveryNeededInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.retentionPeriodInDays">RetentionPeriodInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.unprotectedWindowInSeconds">UnprotectedWindowInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetrics">RecoveryProtectedDatabaseMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupSpaceEstimateInGbs`<sup>Required</sup> <a name="BackupSpaceEstimateInGbs" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.backupSpaceEstimateInGbs"></a>

```go
func BackupSpaceEstimateInGbs() *f64
```

- *Type:* *f64

---

##### `BackupSpaceUsedInGbs`<sup>Required</sup> <a name="BackupSpaceUsedInGbs" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.backupSpaceUsedInGbs"></a>

```go
func BackupSpaceUsedInGbs() *f64
```

- *Type:* *f64

---

##### `CurrentRetentionPeriodInSeconds`<sup>Required</sup> <a name="CurrentRetentionPeriodInSeconds" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.currentRetentionPeriodInSeconds"></a>

```go
func CurrentRetentionPeriodInSeconds() *f64
```

- *Type:* *f64

---

##### `DbSizeInGbs`<sup>Required</sup> <a name="DbSizeInGbs" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.dbSizeInGbs"></a>

```go
func DbSizeInGbs() *f64
```

- *Type:* *f64

---

##### `IsRedoLogsEnabled`<sup>Required</sup> <a name="IsRedoLogsEnabled" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.isRedoLogsEnabled"></a>

```go
func IsRedoLogsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MinimumRecoveryNeededInDays`<sup>Required</sup> <a name="MinimumRecoveryNeededInDays" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.minimumRecoveryNeededInDays"></a>

```go
func MinimumRecoveryNeededInDays() *f64
```

- *Type:* *f64

---

##### `RetentionPeriodInDays`<sup>Required</sup> <a name="RetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.retentionPeriodInDays"></a>

```go
func RetentionPeriodInDays() *f64
```

- *Type:* *f64

---

##### `UnprotectedWindowInSeconds`<sup>Required</sup> <a name="UnprotectedWindowInSeconds" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.unprotectedWindowInSeconds"></a>

```go
func UnprotectedWindowInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() RecoveryProtectedDatabaseMetrics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetrics">RecoveryProtectedDatabaseMetrics</a>

---


### RecoveryProtectedDatabaseRecoveryServiceSubnetsList <a name="RecoveryProtectedDatabaseRecoveryServiceSubnetsList" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/recoveryprotecteddatabase"

recoveryprotecteddatabase.NewRecoveryProtectedDatabaseRecoveryServiceSubnetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RecoveryProtectedDatabaseRecoveryServiceSubnetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.get"></a>

```go
func Get(index *f64) RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference <a name="RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/recoveryprotecteddatabase"

recoveryprotecteddatabase.NewRecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.recoveryServiceSubnetIdInput">RecoveryServiceSubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.recoveryServiceSubnetId">RecoveryServiceSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `RecoveryServiceSubnetIdInput`<sup>Optional</sup> <a name="RecoveryServiceSubnetIdInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.recoveryServiceSubnetIdInput"></a>

```go
func RecoveryServiceSubnetIdInput() *string
```

- *Type:* *string

---

##### `RecoveryServiceSubnetId`<sup>Required</sup> <a name="RecoveryServiceSubnetId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.recoveryServiceSubnetId"></a>

```go
func RecoveryServiceSubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RecoveryProtectedDatabaseTimeoutsOutputReference <a name="RecoveryProtectedDatabaseTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/recoveryprotecteddatabase"

recoveryprotecteddatabase.NewRecoveryProtectedDatabaseTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RecoveryProtectedDatabaseTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




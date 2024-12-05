# `databaseExternalnoncontainerdatabasesStackMonitoring` Submodule <a name="`databaseExternalnoncontainerdatabasesStackMonitoring` Submodule" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExternalnoncontainerdatabasesStackMonitoring <a name="DatabaseExternalnoncontainerdatabasesStackMonitoring" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring oci_database_externalnoncontainerdatabases_stack_monitoring}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalnoncontainerdatabasesstackmonitoring"

databaseexternalnoncontainerdatabasesstackmonitoring.NewDatabaseExternalnoncontainerdatabasesStackMonitoring(scope Construct, id *string, config DatabaseExternalnoncontainerdatabasesStackMonitoringConfig) DatabaseExternalnoncontainerdatabasesStackMonitoring
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig">DatabaseExternalnoncontainerdatabasesStackMonitoringConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig">DatabaseExternalnoncontainerdatabasesStackMonitoringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.putTimeouts"></a>

```go
func PutTimeouts(value DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts">DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseExternalnoncontainerdatabasesStackMonitoring resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalnoncontainerdatabasesstackmonitoring"

databaseexternalnoncontainerdatabasesstackmonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalnoncontainerdatabasesstackmonitoring"

databaseexternalnoncontainerdatabasesstackmonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalnoncontainerdatabasesstackmonitoring"

databaseexternalnoncontainerdatabasesstackmonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalnoncontainerdatabasesstackmonitoring"

databaseexternalnoncontainerdatabasesstackmonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseExternalnoncontainerdatabasesStackMonitoring resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseExternalnoncontainerdatabasesStackMonitoring to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseExternalnoncontainerdatabasesStackMonitoring that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExternalnoncontainerdatabasesStackMonitoring to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference">DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.enableStackMonitoringInput">EnableStackMonitoringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.externalDatabaseConnectorIdInput">ExternalDatabaseConnectorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.externalNonContainerDatabaseIdInput">ExternalNonContainerDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.enableStackMonitoring">EnableStackMonitoring</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.externalDatabaseConnectorId">ExternalDatabaseConnectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.externalNonContainerDatabaseId">ExternalNonContainerDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.timeouts"></a>

```go
func Timeouts() DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference">DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference</a>

---

##### `EnableStackMonitoringInput`<sup>Optional</sup> <a name="EnableStackMonitoringInput" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.enableStackMonitoringInput"></a>

```go
func EnableStackMonitoringInput() interface{}
```

- *Type:* interface{}

---

##### `ExternalDatabaseConnectorIdInput`<sup>Optional</sup> <a name="ExternalDatabaseConnectorIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.externalDatabaseConnectorIdInput"></a>

```go
func ExternalDatabaseConnectorIdInput() *string
```

- *Type:* *string

---

##### `ExternalNonContainerDatabaseIdInput`<sup>Optional</sup> <a name="ExternalNonContainerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.externalNonContainerDatabaseIdInput"></a>

```go
func ExternalNonContainerDatabaseIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `EnableStackMonitoring`<sup>Required</sup> <a name="EnableStackMonitoring" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.enableStackMonitoring"></a>

```go
func EnableStackMonitoring() interface{}
```

- *Type:* interface{}

---

##### `ExternalDatabaseConnectorId`<sup>Required</sup> <a name="ExternalDatabaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.externalDatabaseConnectorId"></a>

```go
func ExternalDatabaseConnectorId() *string
```

- *Type:* *string

---

##### `ExternalNonContainerDatabaseId`<sup>Required</sup> <a name="ExternalNonContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.externalNonContainerDatabaseId"></a>

```go
func ExternalNonContainerDatabaseId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExternalnoncontainerdatabasesStackMonitoringConfig <a name="DatabaseExternalnoncontainerdatabasesStackMonitoringConfig" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalnoncontainerdatabasesstackmonitoring"

&databaseexternalnoncontainerdatabasesstackmonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EnableStackMonitoring: interface{},
	ExternalDatabaseConnectorId: *string,
	ExternalNonContainerDatabaseId: *string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.enableStackMonitoring">EnableStackMonitoring</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#enable_stack_monitoring DatabaseExternalnoncontainerdatabasesStackMonitoring#enable_stack_monitoring}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.externalDatabaseConnectorId">ExternalDatabaseConnectorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#external_database_connector_id DatabaseExternalnoncontainerdatabasesStackMonitoring#external_database_connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.externalNonContainerDatabaseId">ExternalNonContainerDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#external_non_container_database_id DatabaseExternalnoncontainerdatabasesStackMonitoring#external_non_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#id DatabaseExternalnoncontainerdatabasesStackMonitoring#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts">DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnableStackMonitoring`<sup>Required</sup> <a name="EnableStackMonitoring" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.enableStackMonitoring"></a>

```go
EnableStackMonitoring interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#enable_stack_monitoring DatabaseExternalnoncontainerdatabasesStackMonitoring#enable_stack_monitoring}.

---

##### `ExternalDatabaseConnectorId`<sup>Required</sup> <a name="ExternalDatabaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.externalDatabaseConnectorId"></a>

```go
ExternalDatabaseConnectorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#external_database_connector_id DatabaseExternalnoncontainerdatabasesStackMonitoring#external_database_connector_id}.

---

##### `ExternalNonContainerDatabaseId`<sup>Required</sup> <a name="ExternalNonContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.externalNonContainerDatabaseId"></a>

```go
ExternalNonContainerDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#external_non_container_database_id DatabaseExternalnoncontainerdatabasesStackMonitoring#external_non_container_database_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#id DatabaseExternalnoncontainerdatabasesStackMonitoring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.timeouts"></a>

```go
Timeouts DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts">DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#timeouts DatabaseExternalnoncontainerdatabasesStackMonitoring#timeouts}

---

### DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts <a name="DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalnoncontainerdatabasesstackmonitoring"

&databaseexternalnoncontainerdatabasesstackmonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#create DatabaseExternalnoncontainerdatabasesStackMonitoring#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#delete DatabaseExternalnoncontainerdatabasesStackMonitoring#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#update DatabaseExternalnoncontainerdatabasesStackMonitoring#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#create DatabaseExternalnoncontainerdatabasesStackMonitoring#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#delete DatabaseExternalnoncontainerdatabasesStackMonitoring#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#update DatabaseExternalnoncontainerdatabasesStackMonitoring#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference <a name="DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalnoncontainerdatabasesstackmonitoring"

databaseexternalnoncontainerdatabasesstackmonitoring.NewDatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




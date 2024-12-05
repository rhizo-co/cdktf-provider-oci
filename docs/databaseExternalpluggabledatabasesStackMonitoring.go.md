# `databaseExternalpluggabledatabasesStackMonitoring` Submodule <a name="`databaseExternalpluggabledatabasesStackMonitoring` Submodule" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExternalpluggabledatabasesStackMonitoring <a name="DatabaseExternalpluggabledatabasesStackMonitoring" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalpluggabledatabases_stack_monitoring oci_database_externalpluggabledatabases_stack_monitoring}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalpluggabledatabasesstackmonitoring"

databaseexternalpluggabledatabasesstackmonitoring.NewDatabaseExternalpluggabledatabasesStackMonitoring(scope Construct, id *string, config DatabaseExternalpluggabledatabasesStackMonitoringConfig) DatabaseExternalpluggabledatabasesStackMonitoring
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig">DatabaseExternalpluggabledatabasesStackMonitoringConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig">DatabaseExternalpluggabledatabasesStackMonitoringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.putTimeouts"></a>

```go
func PutTimeouts(value DatabaseExternalpluggabledatabasesStackMonitoringTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeouts">DatabaseExternalpluggabledatabasesStackMonitoringTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseExternalpluggabledatabasesStackMonitoring resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalpluggabledatabasesstackmonitoring"

databaseexternalpluggabledatabasesstackmonitoring.DatabaseExternalpluggabledatabasesStackMonitoring_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalpluggabledatabasesstackmonitoring"

databaseexternalpluggabledatabasesstackmonitoring.DatabaseExternalpluggabledatabasesStackMonitoring_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalpluggabledatabasesstackmonitoring"

databaseexternalpluggabledatabasesstackmonitoring.DatabaseExternalpluggabledatabasesStackMonitoring_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalpluggabledatabasesstackmonitoring"

databaseexternalpluggabledatabasesstackmonitoring.DatabaseExternalpluggabledatabasesStackMonitoring_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabaseExternalpluggabledatabasesStackMonitoring resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseExternalpluggabledatabasesStackMonitoring to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseExternalpluggabledatabasesStackMonitoring that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalpluggabledatabases_stack_monitoring#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExternalpluggabledatabasesStackMonitoring to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference">DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.enableStackMonitoringInput">EnableStackMonitoringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.externalDatabaseConnectorIdInput">ExternalDatabaseConnectorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.externalPluggableDatabaseIdInput">ExternalPluggableDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.enableStackMonitoring">EnableStackMonitoring</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.externalDatabaseConnectorId">ExternalDatabaseConnectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.externalPluggableDatabaseId">ExternalPluggableDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.timeouts"></a>

```go
func Timeouts() DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference">DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference</a>

---

##### `EnableStackMonitoringInput`<sup>Optional</sup> <a name="EnableStackMonitoringInput" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.enableStackMonitoringInput"></a>

```go
func EnableStackMonitoringInput() interface{}
```

- *Type:* interface{}

---

##### `ExternalDatabaseConnectorIdInput`<sup>Optional</sup> <a name="ExternalDatabaseConnectorIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.externalDatabaseConnectorIdInput"></a>

```go
func ExternalDatabaseConnectorIdInput() *string
```

- *Type:* *string

---

##### `ExternalPluggableDatabaseIdInput`<sup>Optional</sup> <a name="ExternalPluggableDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.externalPluggableDatabaseIdInput"></a>

```go
func ExternalPluggableDatabaseIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `EnableStackMonitoring`<sup>Required</sup> <a name="EnableStackMonitoring" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.enableStackMonitoring"></a>

```go
func EnableStackMonitoring() interface{}
```

- *Type:* interface{}

---

##### `ExternalDatabaseConnectorId`<sup>Required</sup> <a name="ExternalDatabaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.externalDatabaseConnectorId"></a>

```go
func ExternalDatabaseConnectorId() *string
```

- *Type:* *string

---

##### `ExternalPluggableDatabaseId`<sup>Required</sup> <a name="ExternalPluggableDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.externalPluggableDatabaseId"></a>

```go
func ExternalPluggableDatabaseId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoring.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExternalpluggabledatabasesStackMonitoringConfig <a name="DatabaseExternalpluggabledatabasesStackMonitoringConfig" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalpluggabledatabasesstackmonitoring"

&databaseexternalpluggabledatabasesstackmonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EnableStackMonitoring: interface{},
	ExternalDatabaseConnectorId: *string,
	ExternalPluggableDatabaseId: *string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.enableStackMonitoring">EnableStackMonitoring</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalpluggabledatabases_stack_monitoring#enable_stack_monitoring DatabaseExternalpluggabledatabasesStackMonitoring#enable_stack_monitoring}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.externalDatabaseConnectorId">ExternalDatabaseConnectorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalpluggabledatabases_stack_monitoring#external_database_connector_id DatabaseExternalpluggabledatabasesStackMonitoring#external_database_connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.externalPluggableDatabaseId">ExternalPluggableDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalpluggabledatabases_stack_monitoring#external_pluggable_database_id DatabaseExternalpluggabledatabasesStackMonitoring#external_pluggable_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalpluggabledatabases_stack_monitoring#id DatabaseExternalpluggabledatabasesStackMonitoring#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeouts">DatabaseExternalpluggabledatabasesStackMonitoringTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnableStackMonitoring`<sup>Required</sup> <a name="EnableStackMonitoring" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.enableStackMonitoring"></a>

```go
EnableStackMonitoring interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalpluggabledatabases_stack_monitoring#enable_stack_monitoring DatabaseExternalpluggabledatabasesStackMonitoring#enable_stack_monitoring}.

---

##### `ExternalDatabaseConnectorId`<sup>Required</sup> <a name="ExternalDatabaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.externalDatabaseConnectorId"></a>

```go
ExternalDatabaseConnectorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalpluggabledatabases_stack_monitoring#external_database_connector_id DatabaseExternalpluggabledatabasesStackMonitoring#external_database_connector_id}.

---

##### `ExternalPluggableDatabaseId`<sup>Required</sup> <a name="ExternalPluggableDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.externalPluggableDatabaseId"></a>

```go
ExternalPluggableDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalpluggabledatabases_stack_monitoring#external_pluggable_database_id DatabaseExternalpluggabledatabasesStackMonitoring#external_pluggable_database_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalpluggabledatabases_stack_monitoring#id DatabaseExternalpluggabledatabasesStackMonitoring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringConfig.property.timeouts"></a>

```go
Timeouts DatabaseExternalpluggabledatabasesStackMonitoringTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeouts">DatabaseExternalpluggabledatabasesStackMonitoringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalpluggabledatabases_stack_monitoring#timeouts DatabaseExternalpluggabledatabasesStackMonitoring#timeouts}

---

### DatabaseExternalpluggabledatabasesStackMonitoringTimeouts <a name="DatabaseExternalpluggabledatabasesStackMonitoringTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalpluggabledatabasesstackmonitoring"

&databaseexternalpluggabledatabasesstackmonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalpluggabledatabases_stack_monitoring#create DatabaseExternalpluggabledatabasesStackMonitoring#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalpluggabledatabases_stack_monitoring#delete DatabaseExternalpluggabledatabasesStackMonitoring#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalpluggabledatabases_stack_monitoring#update DatabaseExternalpluggabledatabasesStackMonitoring#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalpluggabledatabases_stack_monitoring#create DatabaseExternalpluggabledatabasesStackMonitoring#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalpluggabledatabases_stack_monitoring#delete DatabaseExternalpluggabledatabasesStackMonitoring#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalpluggabledatabases_stack_monitoring#update DatabaseExternalpluggabledatabasesStackMonitoring#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference <a name="DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/databaseexternalpluggabledatabasesstackmonitoring"

databaseexternalpluggabledatabasesstackmonitoring.NewDatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExternalpluggabledatabasesStackMonitoring.DatabaseExternalpluggabledatabasesStackMonitoringTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



